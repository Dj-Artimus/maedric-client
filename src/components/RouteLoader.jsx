"use client";

import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect, useRef } from "react";

export default function RouteLoaderClient() {
  const pathname = usePathname();
  const previousPath = useRef(pathname);

  useEffect(() => {
    if (previousPath.current !== pathname) {
      NProgress.start();

      const timer = setTimeout(() => {
        NProgress.done();
        previousPath.current = pathname;
      }, 500); // 👈 adjust time as you like

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return null;
}
