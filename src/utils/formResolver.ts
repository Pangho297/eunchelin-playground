import { yupResolver } from "@hookform/resolvers/yup";
import { Resolver } from "react-hook-form";
import * as Yup from "yup";

export type FormShape = "loginForm" | "signupForm" | "findPasswordForm";

const formShape: { [schema in FormShape]: any } = {
  loginForm: {
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        "이메일 형식으로 입력해 주세요"
      )
      .required("아이디를 입력해 주세요"),
    password: Yup.string().required("비밀번호를 입력해 주세요"),
  },
  signupForm: {
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        "이메일 형식으로 입력해 주세요"
      )
      .required("아이디를 입력해 주세요"),
    emailVerify: Yup.string().required("이메일 인증을 진행해 주세요"),
    password: Yup.string()
      .matches(
        /^(?=(?:.*[a-z])(?=.*\d)(?=.*[@$!%*?&])|(?:.*[a-z])(?=.*\d)|(?:.*\d)(?=.*[@$!%*?&])).{8,20}$/i,
        "비밀번호는 영문 대소문자, 숫자, 특수문자 중 2가지가 포함된 8자리 ~ 20자리 사이로 설정해야 합니다"
      )
      .required("비밀번호를 입력해 주세요"),
    passwordVerify: Yup.string()
      .oneOf([Yup.ref("password")], "비밀번호가 일치하지 않습니다")
      .required("비밀번호를 확인해 주세요"),
    nickname: Yup.string().required("닉네임을 입력해 주세요"),
    authToken: Yup.string().required("이메일 인증번호를 입력해 주세요"),
  },
  findPasswordForm: {
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        "이메일 형식으로 입력해 주세요"
      )
      .required("이메일 주소를 입력해 주세요"),
  },
};

export default function getResolverBySchemaName(
  schemaName: FormShape
): Resolver<any, any> | undefined {
  if (!Yup) return;

  if (!formShape[schemaName]) return;

  return yupResolver(Yup.object().shape(formShape[schemaName]));
}
