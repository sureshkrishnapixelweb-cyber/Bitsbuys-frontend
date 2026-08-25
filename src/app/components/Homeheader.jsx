"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Container, Navbar, Nav, Image, NavDropdown, Form } from "react-bootstrap";
import { usePathname } from "next/navigation";
import "../../../public/assets/css/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckCircle, faGlobe } from "@fortawesome/free-solid-svg-icons";
import HoverDropdown from "./Hoverdropdown";
import "simplebar-react/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";
import { useTheme } from "../context/ThemeContext";
import Offersection from "./Offersection";

const Homeheader = () => {
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.remove("userpanelpage");
  });

  const { isNightMode, toggleNightMode } = useTheme();

  return (
    <>
    {/* <Offersection />      */}
    <header className="headermenu">
      <Navbar expand="lg" className="headbg">
        <Container>
          <Navbar.Brand>
            <Link href="/">
              {isNightMode ? (
                <Image src="assets/images/logo-light.svg" width={100} height={57}
                  className="logo" alt="logo" />
              ) : (
                <Image src="assets/images/logo.png"
                  width={100} height={57} className="logo" alt="logo" />
              )}
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-between"
          >
            <Nav className="navbar-nav leftheadbg custom-navbar mx-auto">
              <div className="navbg">
                <HoverDropdown title="Trade" id="trade">
                  <NavDropdown.Item as={Link} href="/trade" className={`${pathname === '/trade' ? 'active' : ''}`}>
                    <div className="tableicon"><span>Spot</span></div>
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/perpetual" className={`${pathname === '/perpetual' ? 'active' : ''}`}>
                    <div className="tableicon"><span>Perpetual</span></div>
                  </NavDropdown.Item>
                </HoverDropdown>
                <Nav.Item>
                  <Link href="/markets" id="marketslink" className={`nav-link ${pathname === "/markets" ? "active" : ""
                    }`} >
                    Markets
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href="/#features" id="featureslink" className="nav-link">
                    Features
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href="/#aboutus" id="aboutuslink" className="nav-link">
                    About us
                  </Link>
                </Nav.Item>
              </div>
              <div className="mbheader">
                <Nav className="navbar-nav">
                  {/* Dark Mode */}
                  <div className="menu-divider d-flex justify-content-between align-items-center py-2">
                    <span>Dark Mode</span>
                    <Form.Check type="switch" id="dark-mode-switch"
                      defaultChecked onChange={(e) => e.target.checked ? nightMode() : dayMode()} />
                  </div>
                  {/* Language */}
                  <NavDropdown
                    title={<div className="pull-left notifyicon"><Image src="/assets/images/eng.svg" className="menuicon" alt="user" width={100} height={57} /><span className="ms-2">English</span></div>}
                    className="langmenu languagetoggle"
                    id="language-dropdown"
                  >
                    <SimpleBar className="chat-notification">
                      <NavDropdown.Item as={Link} href="/" className="active">
                        <span className="langenicon"><Image src="/assets/images/eng.svg" alt="icon" width={100} height={100} /></span>
                        English
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} href="/" >
                        <span className="langenicon"><Image src="/assets/images/laos.svg" alt="icon" width={100} height={100} /></span>
                        Laos
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} href="/">
                        <span className="langenicon"><Image src="/assets/images/china.svg" alt="icon" width={100} height={100} /></span>
                        Chinese
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} href="/">
                        <span className="langenicon"><Image src="/assets/images/russia.svg" alt="icon" width={100} height={100} /></span>
                        Russian
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} href="/">
                        <span className="langenicon"><Image src="/assets/images/south-korea.svg" alt="icon" width={100} height={100} /></span>
                        Korean
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} href="/">
                        <span className="langenicon"><Image src="/assets/images/japan.svg" alt="icon" width={100} height={100} /></span>
                        Japanese
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} href="/">
                        <span className="langenicon"><Image src="/assets/images/vietnam.svg" alt="icon" width={100} height={100} /></span>
                        Vietnamese
                      </NavDropdown.Item>
                    </SimpleBar>
                  </NavDropdown>
                  <Nav.Item className="mt-2">
                    <div className="d-flex">
                      <Link href="/signin" id="login" className="nav-link btn sitebtn" >
                        Sign In
                      </Link>
                      <Link href="/signup" id="register" className="nav-link btn sitebtn" >
                        Sign Up
                      </Link>
                    </div>
                  </Nav.Item>
                  <Nav.Item className="mt-2">
                    <div className="d-flex">
                      <Link href="/#" id="signout" className="nav-link btn sitebtn" >
                        Sign Out
                      </Link>
                      <Link href="/dashboard" id="register" className="nav-link btn sitebtn" >
                        Dashboard
                      </Link>
                    </div>
                  </Nav.Item>
                </Nav>
              </div>
            </Nav>
            <Nav className="navbar-nav rightheadbg">
              <Nav.Item className="gradient-border">
                <div className="gradient-border-content">
                  <button href="/signin" className="signin-btn">Sign In</button>
                </div>
              </Nav.Item>
              <Nav.Item className="mx-3">
                <div className="">
                  <div className="gradient-border-content-x">
                    <button href="/signup" className="signin-btn gradient-bg sitebtn">Sign Up</button>
                  </div>
                </div>
              </Nav.Item>
              <NavDropdown
                title={
                  <div className="pull-left menushapeicon">
                    <Image
                      src="assets/images/langicon.svg"
                      className="menuicon"
                      alt="user"
                      width={100}
                      height={57}
                    />
                  </div>
                }
                id="basic-nav-dropdown"
                className="langmenu"
              // style={{ paddingInline: "10px", paddingBlock: "0px" }}
              >
                <SimpleBar className="chat-notification">
                  <NavDropdown.Item as={Link} href="/" className="active">
                    <span className="langenicon">
                      <Image
                        src="assets/images/eng.svg"
                        alt="icon"
                        width={100}
                        height={100}
                      />
                    </span>
                    English
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/">
                    <span className="langenicon">
                      <Image
                        src="assets/images/ch.svg"
                        alt="icon"
                        width={100}
                        height={100}
                      />
                    </span>
                    Chinese
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/">
                    <span className="langenicon">
                      <Image
                        src="assets/images/ja.svg"
                        alt="icon"
                        width={100}
                        height={100}
                      />
                    </span>
                    Japanese
                  </NavDropdown.Item>
                </SimpleBar>
              </NavDropdown>

              <Nav.Item>
                <Link href="#0" className="nav-link px-1" >
                  {isNightMode ? (
                    <Image
                      src="./assets/images/sun-icon.svg"
                      alt="Light mode"
                      className="menuicon"
                    />
                  ) : (
                    <Image
                      src="./assets/images/moon-icon.svg"
                      alt="Dark mode"
                      className="menuicon"
                    />
                  )}
                </Link>
              </Nav.Item>
              <HoverDropdown className="usermenudrop" title={
                <div className="pull-left">
                  <div className="photopic">
                  
                  <Image src="/assets/images/profile.svg" alt="user" /></div> </div> } id="profiledrp">
                <NavDropdown.Item as={Link} href="/profile" className="profilesubdropbox">
                  <span className="photopic">
                    <Image src="/assets/images/profile.svg" alt="icon" width={100} height={100} id="profile" />
                  </span>
                  <h5>John****@gmail.com<span className="t-gray ms-1"><span className="t-green"> <FontAwesomeIcon icon={faCheckCircle} /></span></span><br /><span className="t-gray">Johnwilliam</span></h5>
                </NavDropdown.Item>
                <hr />
                <NavDropdown.Item as={Link} href="/dashboard" id="dashboardlink"><span className="iconboxbg"><Image src="/assets/images/homeicon.svg" alt="icon" width={100} height={100} /></span>Dashboard</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/security" id="securitylink"><span className="iconboxbg"><Image src="/assets/images/securityicon.svg" alt="icon" width={100} height={100} /></span>Security</NavDropdown.Item>

                <NavDropdown.Item as={Link} href="/kyc" id="kyclink" className={`${pathname === '/kyc' ? 'active' : ''}`}><span className="iconboxbg"><Image src="/assets/images/kycicon-1.svg" alt="icon" width={100} height={100} /></span>Identification</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/support" id="supportlink" className={`${pathname === '/support' ? 'active' : ''}`}><span className="iconboxbg"><Image src="/assets/images/supporticon.svg" alt="icon" width={100} height={100} /></span>Support</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/settings" id="settingslink"><span className="iconboxbg"><Image src="/assets/images/settingsicon.svg" alt="icon" width={100} height={100} /></span>Settings</NavDropdown.Item>
                <hr />
                <NavDropdown.Item as={Link} href="/" id="logoutlink"><span className="iconboxbg"><Image src="/assets/images/logouticon.svg" alt="icon" width={100} height={100} /></span>Logout</NavDropdown.Item>
              </HoverDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
    </>
  );
};

export default Homeheader;
