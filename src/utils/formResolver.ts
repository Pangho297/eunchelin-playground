import { yupResolver } from "@hookform/resolvers/yup";
import { Resolver } from "react-hook-form";
import * as Yup from "yup";

export type FormShape = "loginForm";

const formShape: { [schema in FormShape]: any } = {
  loginForm: {
    email: Yup.string()
      .email("이메일 형식으로 입력해 주세요")
      .required("아이디를 입력해 주세요"),
    password: Yup.string().required("비밀번호를 입력해 주세요"),
  },
};

export default function getResolverBySchemaName(
  schemaName: FormShape
): Resolver<any, any> | undefined {
  if (!Yup) return;

  if (!formShape[schemaName]) return;

  return yupResolver(Yup.object().shape(formShape[schemaName]));
}
