"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loader from "../../animations/loaderimg.json";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="page-loader">
      <Lottie animationData={loader} loop />
    </div>
  );
}