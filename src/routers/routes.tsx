import DefaultLayout from "@/layout/DefaultLayout";
import { RouteObject } from "react-router-dom";
import PathConstants from "./pathConstants";
import Home from "@/pages/home";
import ResetPassword from "@/pages/reset-password";
import AuthGuard from "./AuthGuarde";
import Playground from "@/pages/playground";

export const routes: RouteObject[] = [
  {
    element: (
      <AuthGuard>
        <DefaultLayout />
      </AuthGuard>
    ),

    children: [
      // 플레이그라운드
      { path: PathConstants.Playground, element: <Playground /> },
      // 지도
      { path: PathConstants.Home, element: <Home /> },
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
