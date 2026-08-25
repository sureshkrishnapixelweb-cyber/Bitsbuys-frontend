"use client";

import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import { usePageTitle } from "@/app/hooks/usePageTitle";

export const View = ({ mobileView, children, title }) => {
  usePageTitle(title);
  const isMobile = useMediaQuery("(max-width: 767px)");
  if (isMobile === null) return null;
  return isMobile ? mobileView : children;
};
