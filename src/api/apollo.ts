import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  fromPromise,
  InMemoryCache,
  makeVar,
  split,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

const token = localStorage.getItem("token");

export const isLoginVar = makeVar(Boolean(token));

/** 웹소켓 설정 */
const wsLink = new WebSocketLink({
  uri: `${import.meta.env.VITE_WS_ENDPOINT}`,
  options: {
    reconnect: Boolean(token) ? true : false,
    connectionParams: () => ({
      Authorization: `Bearer ${token}`,
    }),
  },
});

/** api ENDPOINT, origin 설정 */
const httpLink = createHttpLink({
  uri: `${import.meta.env.VITE_API_BASE_URL}`,
  credentials: "same-origin",
});

// 헤더 토큰 설정
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

/** 에러 처리 설정
 *
 * 토큰 갱신도 함깨 처리함
 */
const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      if (graphQLErrors[0].message === "IS_FORBIDDEN") {
        return fromPromise(
          new Promise((resolve) => {
            // TODO: 토큰갱신 api 추가
            // -------------------------
            setTimeout(() => {
              resolve({
                data: {
                  token: "token",
                },
              });
            }, 1000);
            // -------------------------
          })
            .then((res) => res)
            .catch((error) => {
              // TODO: 로그아웃 로직 추가
              // -------------------------
              console.log(error);
              // -------------------------
            })
        ).flatMap((data: any) => {
          // 신규 갱신 토큰 로컬 저장
          localStorage.setItem("token", data.token);

          // 요청 헤더 다시 작성
          const oldHeader = operation.getContext().headers;
          operation.setContext({
            headers: {
              ...oldHeader,
              Authorization: `Bearer ${data.token}`,
            },
          });
          return forward(operation);
        });
      }
    }

    if (networkError) {
      console.log(networkError);
    }
  }
);

/** 요청 분기처리
 *
 * 웹소켓 요청일 경우 wsLInk
 *
 * 일반 요청일 경우 authLink, httpLink
 */
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  authLink.concat(httpLink)
);

/** 캐시 설정
 *
 * 전역으로 로그인 여부 캐시 저장소(상태 저장서)에 저장
 */
export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isLogin: {
          read() {
            isLoginVar();
          },
        },
      },
    },
  },
});

/** Apollo Client 설정 */
export const client = new ApolloClient({
  link: ApolloLink.from([errorLink, splitLink]),
  cache,
  defaultOptions: {
    watchQuery: {
      errorPolicy: "none",
    },
  },
});

export default client;
