"use client";

import { useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export default function VerifyBanner() {

  useEffect(() => {
    document.body.classList.add("bb-verify-banner");

    return () => {
      document.body.classList.remove("bb-verify-banner");
    };
  }, []);

  return (
    <div className="verify-banner">
      <div className="container d-flex justify-content-between align-items-center">
        
        <div className="banner-text">
          <FontAwesomeIcon icon={faInfoCircle} className="me-2 t-red"/>
           Complete verification to access trading features.
          <Link href="/kyc" className="ms-2 learn-more">
            Learn more
          </Link>
        </div>

        <Link href="/kyc" className="btn sitebtn btn-sm">
          Verify
        </Link>

      </div>
    </div>
  );
}