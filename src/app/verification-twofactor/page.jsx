"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Container, Form, Image, Modal } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import "../../../public/assets/css/home.css";
import "../../../public/assets/css/user.css";
import { useTheme } from "@/app/context/ThemeContext";
import "flag-icons/css/flag-icons.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCircleCheck, faShieldHalved,faEnvelope,faAngleRight,faMobileScreenButton} from "@fortawesome/free-solid-svg-icons";


const Page = () => {
  const { isNightMode } = useTheme();

  const [value, setValue] = useState("");
  const [phone, setPhone] = useState("");
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    document.body.classList.add("loginbanner");
    document.body.classList.remove("userpanelpage");

    return () => {
      document.body.classList.remove("loginbanner");
    };
  }, []);
  const [showModal1, setShowModal1] = useState(false);

  const handleClose1 = () => setShowModal1(false);

  const handleSelectChange = (e) => {
    const value = e.target.value;

    if (value !== "Choose...") {
      setShowModal1(true); // open modal
    }
  };

  const handleInputChange = (e) => {
    const input = e.target.value;
    setValue(input);

    if (/^[0-9]*$/.test(input) && input.length > 0) {
      setIsPhone(true);
    } else {
      setIsPhone(false);
    }
  };

  return (
    <section className="formbg verification-twofactor-page">
      <Container className="sign">
        <div className="formboxbg">
          <div className="rightsideformbox">
            <Form className="siteformbg">
              <div className="login-form">
                <div className="loginformbox">
                  <Link href="/" className="lgimg">
                    <Image
                      src={
                        isNightMode
                          ? "/images/logo-light.svg"
                          : "/assets/images/logo.png"
                      }
                      width={50}
                      height={50}
                      alt="icon"
                      className="logo"
                    />
                  </Link>

                  <div className="logcenterbox">
                    <h3 className="heading-title pb-2">Security Verification Requirements</h3>
                    <p className="my-2">You need to complete all of the following verifications to continue.</p>
                    <h3 className="heading-title pb-2 green-hh">0/2</h3>

                    <div className="social-login mt-3 flex-column">
                      <div className="social-btn" >
                        <div>
                          <FontAwesomeIcon icon={faShieldHalved} />

                          <span className="mx-2">Authenticator App</span>
                        </div>
                        <FontAwesomeIcon className="faCircleCheck-tick" icon={faCircleCheck} />
                      </div>
                      <div className="social-btn" >
                        <div>
                          <FontAwesomeIcon icon={faEnvelope} />

                          <span className="mx-2">Email</span>
                        </div>
                        <FontAwesomeIcon className="faAngleRight-point" icon={faAngleRight } />
                      </div>
                      <div className="social-btn" >
                        <div>
                          <FontAwesomeIcon icon={faMobileScreenButton} />

                          <span className="mx-2">Mobile</span>
                        </div>
                        <FontAwesomeIcon className="faAngleRight-point" icon={faAngleRight } />
                      </div>

                      
                    </div>
                  </div>

                  <div className="logbottomcellbox mt-3 text-center">
                    <p className="btngray m-0">
                      
                      <Link href="#" className="ms-1 t-blue">
                        Security verification unavailable
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </Container>

    </section>
  );
};

export default Page;