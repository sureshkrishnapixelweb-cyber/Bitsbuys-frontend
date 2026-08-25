"use client";

import { useEffect } from "react";

//import header tag
export function usePageTitle(title_name = "") {
  useEffect(() => {
    const appname = process.env.NEXT_PUBLIC_APP_NAME;
    document.title = title_name != "" ? `${title_name} | ${appname}` : appname;
  }, [title_name]);
}
