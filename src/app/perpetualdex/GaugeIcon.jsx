import React from "react";

const GaugeIcon = () => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 21.5 A11 11 0 0 1 13 6.8"
        stroke="#36D97C"
        strokeWidth="3.8"
        strokeLinecap="round"
      />
      <path
        d="M13 6.8 A11 11 0 0 1 20 6.8"
        stroke="#F5D33F"
        strokeWidth="3.8"
        strokeLinecap="round"
      />
      <path
        d="M20 6.8 A11 11 0 0 1 25.5 21.5"
        stroke="#FF5A7A"
        strokeWidth="3.8"
        strokeLinecap="round"
      />
      <circle cx="16" cy="18" r="4" fill="#3E4653" />
      <line
        x1="16"
        y1="18"
        x2="10.8"
        y2="14"
        stroke="#C8CDD5"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
      <circle cx="16" cy="18" r="1.4" fill="#E5E7EB" />
    </svg>
  );
};

export default GaugeIcon;