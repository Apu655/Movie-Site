"use client";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import Loading from "@/components/Loading";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { user: auth } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!auth) {
      if (pathname !== "/login") {
        router.push("/login");
      }
    }
  }, [pathname]);
  if (!auth) {
    return <Loading/>;
  } else {
    return <>{children}</>;
  }
};
