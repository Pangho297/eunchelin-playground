import { PropsWithChildren, useEffect } from "react";
import { useMatches, useNavigate } from "react-router-dom";
import PathConstants from "./pathConstants";
import { useReactiveVar } from "@apollo/client";
import { ciVar } from "@/stores/ciAuthStore";

type RouteHandle = { requireAuth?: boolean } | undefined;

export default function AuthGuard({ children }: PropsWithChildren) {
  const matches = useMatches();
  const navigate = useNavigate();

  const ci = useReactiveVar(ciVar);

  useEffect(() => {
    const requireAuth = matches.some(
      ({ handle }) => (handle as RouteHandle)?.requireAuth
    );

    if (requireAuth && !ci) {
      navigate(PathConstants.Login, { replace: true });
    }
  }, [matches]);

  return children;
}
