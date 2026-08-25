"use client";

import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useSideMenu } from "@/app/SideMenuProvider";
import Link from "next/link";
import "../../../public/assets/css/mobileview.css"

export default function MobileHeader({
  title,
  redirectLink = "/",
  showBack = true,
  showMenu = true,
}) {
  const { openMenu } = useSideMenu();

  return (
    <div className="mbheadingbox">
      {showBack && (
        <div className="humberbutton">
          <Link href={redirectLink} className="backbtn">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
        </div>
      )}

      {showMenu && (
        <>
          <div className="flex-one-cls flex-grow-1 text-center w-100">
            <h2 className="heading-title text-center mb-0 pb-0 flex-1">
              {title}
            </h2>
          </div>
          <div className="humberbutton">
            <button
              type="button"
              className="menubtn border-0 p-0"
              id="menubtn"
              onClick={openMenu}
            >
              <Image src="assets/images/menu-bar.svg" className="menu-bar" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
