import DefaultLayout from "@/layout/DefaultLayout";
import { RouteObject } from "react-router-dom";
import PathConstants from "./pathConstants";
import Home from "@/pages/home";

export const routes: RouteObject[] = [
  {
    element: <DefaultLayout />,

    children: [{ path: PathConstants.Home, element: <Home /> }],
  },
];
