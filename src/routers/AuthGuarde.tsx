import { PropsWithChildren, useEffect } from "react";
import { useMatches, useNavigate } from "react-router-dom";

type RouteHandle = { requireAuth?: boolean } | undefined;

export default function AuthGuard({ children }: PropsWithChildren) {
  const matches = useMatches();
  const navigate = useNavigate();

  useEffect(() => {
    const requireAuth = matches.some(
      ({ handle }) => (handle as RouteHandle)?.requireAuth
    );
  }, [matches]);

  return children;
}
