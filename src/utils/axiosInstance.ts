import { useAuthStore } from "@/stores/authStore";
import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";
import qs from "qs";
import { useCallback } from "react";

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: {
    serialize: (params) => qs.stringify(params, { arrayFormat: "brackets" }),
  },
});

// App.tsx 에서 반드시 호출해야 함
export function useAxiosInterceptor() {
  const { accessToken, clear } = useAuthStore(["accessToken", "clear"]);

  const requestInterceptor = useCallback(
    (config: InternalAxiosRequestConfig) => {
      // if (accessToken && tokenType && config.headers) {
      //   config.headers.Authorization = `${tokenType} ${accessToken}`;
      // }
      return config;
    },
    [accessToken]
  );

  const responseErrorInterceptor = useCallback(
    (error: AxiosError<any>) => {
      if (error.response?.status === 500) {
        console.log("err500");
      } else if (
        error.response?.status === 403 &&
        error.response?.data.code === "IS_FORBIDDEN"
      ) {
        console.log("err403");
      }
      return Promise.reject(error);
    },
    [accessToken]
  );
  const register = useCallback(() => {
    instance.interceptors.request.use(requestInterceptor, function (error) {
      return Promise.reject(error);
    });

    instance.interceptors.response.use(function (response) {
      return response;
    }, responseErrorInterceptor);
  }, [accessToken]);

  register();
}

export function paramsDotSerializer(params: Record<string, any>) {
  return Object.keys(params)
    .map((key) => {
      if (typeof params[key] === "object") {
        return Object.keys(params[key])
          .map((subKey) => `${key}.${subKey}=${params[key][subKey]}`)
          .join("&");
      }
      return `${key}=${params[key]}`;
    })
    .join("&");
}

export default instance;
