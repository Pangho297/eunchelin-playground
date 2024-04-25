import DefaultLayout from "@/layout/DefaultLayout";
import { RouteObject } from "react-router-dom";
import PathConstants from "./pathConstants";
import Home from "@/pages/home";
import Auth from "@/pages/auth";
import Login from "@/pages/login";
import Signup from "@/pages/signup";
import ResetPassword from "@/pages/reset-password";
import AuthGuard from "./AuthGuarde";

export const routes: RouteObject[] = [
  {
    element: (
      <AuthGuard>
        <DefaultLayout />
      </AuthGuard>
    ),

    children: [
      // 지도
      { path: PathConstants.Home, element: <Home /> },
      // 본인인증
      { path: PathConstants.Auth, element: <Auth /> },
      // 로그인
      { path: PathConstants.Login, element: <Login /> },
      // 회원가입
      {
        path: PathConstants.Signup,
        element: <Signup />,
        handle: {
          requireAuth: true,
        },
      },
      // 비밀번호 재설정
      {
        path: PathConstants.ResetPassword,
        element: <ResetPassword />,
        handle: {
          requireAuth: true,
        },
      },
    ],
  },
];
