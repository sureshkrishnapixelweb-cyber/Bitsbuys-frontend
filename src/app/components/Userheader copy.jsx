"use client";
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { Container, Navbar, Nav, Image, NavDropdown, Button, Tab, Table, Form, InputGroup } from 'react-bootstrap';
import { usePathname } from 'next/navigation'
import '../../../public//assets/css/user.css';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckCircle, faEye, faSearch, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import HoverDropdown from './Hoverdropdown';
import { useTheme } from "../context/ThemeContext";

const Userheader = () => {
  const [settings, setSettings] = useState({
  customizeLayout: false,
  showBuysSells: true,
  setOrderBookSize: false,
  animateOrderBook: true,
  disableNotification: false,
  disableSound: false,
  hidePNL: false,
  showWarnings: true,
});

const handleSettingChange = (key) => {
  setSettings((prev) => ({
    ...prev,
    [key]: !prev[key],
  }));
};

  const pathname = usePathname();

  const { isNightMode, toggleNightMode } = useTheme();

  useEffect(() => {
    document.body.classList.add('userpanelpage');
    return () => {
      document.body.classList.remove('userpanelpage');
    };
  })
  const sidebarCollapse = () => {
    const element = document.querySelector('#leftsidemenu');
    const element1 = document.querySelector('#backgroundoverlay');
    const element2 = document.querySelector('#leftsidemenumobile');

    if (window.innerWidth <= 1080) {
      if (element) {
        element.classList.add('active');
      }
      if (element1) {
        element1.classList.add('active');
      }
      if (element2) {
        element2.classList.add('active');
      }
      document.body.classList.add('pagewrapperbox');
    } else {
      if (element) {
        element.classList.remove('active');
      }
      if (element1) {
        element1.classList.remove('active');
      }
      if (element2) {
        element2.classList.add('active');
      }
      document.body.classList.remove('pagewrapperbox');
    }
  };
  const handleRowClick = () => {
    window.location.href = '/trade';
  };

  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const handleDropdownToggle = (isOpen) => {
    setIsSubmenuOpen(isOpen);
  };

  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const isDesktop = () => window.innerWidth >= 991;

  const handleMouseEnter = (key) => {
    if (isDesktop()) {
      setActiveDropdown(key);
    }
  };

  const handleMouseLeave = (e) => {
    if (!isDesktop()) return;

    const submenuWrapper = document.querySelector('.submenu-open-active');

    // Check if mouse is moving into submenu
    if (submenuWrapper && submenuWrapper.contains(e.relatedTarget)) {
      return;
    }

    setActiveDropdown(null);
    setActiveSubmenu(null);
  };

  const handleSubmenuEnter = (submenuKey) => {
    if (isDesktop()) {
      setActiveSubmenu(submenuKey);
    }
  };

  const handleSubmenuLeave = () => {
    if (isDesktop()) {
      setActiveSubmenu(null);
    }
  };

  const handleDropdownClick = (key) => {
    if (!isDesktop()) {
      setActiveDropdown(prev => (prev === key ? null : key));
    }
  };

  const handleSubmenuClick = (e, submenuKey, parentKey) => {
    if (!isDesktop()) {
      e.stopPropagation(); // prevent bubbling to parent
      setActiveDropdown(parentKey); // ⬅️ ensure parent stays open
      setActiveSubmenu(prev => (prev === submenuKey ? null : submenuKey));
    }
  };
  return (

    <header className="headermenu headermenu-user">
      <Navbar expand="lg" className="headbg uheadbg">
        <Container>
          <div className="mobiletoggle">
            <Button type="button" onClick={sidebarCollapse} className="btn sidebtntoggle">
              <Image src="/assets/images/menubar.svg" width={100} height={57} alt="logo" />
            </Button>
          </div>
          <Navbar.Brand>
            <Link href="/">
              {isNightMode ? (
                <Image src="/assets/images/logo-light.svg" width={100} height={57} className="logo " alt="logo" />
              ) : (
                <Image src="/assets/images/logo.png" width={100} height={57} className="logo " alt="logo" />
              )}
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-nav leftheadbg">
              <NavDropdown title="Markets" id="marketslink" className="marketmenudrop" show={activeDropdown === "markets"} onMouseEnter={() => handleMouseEnter("markets")} onMouseLeave={handleMouseLeave} onClick={() => handleDropdownClick("markets")}>
                <div className="dropdown-item">
                  <h6 className="t-gray">Hot</h6>
                  <div className="livepricemenubg">
                    <div className="livepricemenucard">
                      <Link href="#" className="livepricemenubox">
                        <h5 className="t-black"><Image src="/assets/images/color/btc.svg" className="coinlisticon" />BTC</h5>
                        <h6 className="t-green mb-1">+222.3%</h6>
                        <h6 className="t-gray mb-0">0.236589</h6>
                      </Link>
                    </div>
                    <div className="livepricemenucard">
                      <Link href="#" className="livepricemenubox">
                        <h5 className="t-black"><Image src="/assets/images/color/eth.svg" className="coinlisticon" />ETH</h5>
                        <h6 className="t-green mb-1">+222.3%</h6>
                        <h6 className="t-gray mb-0">0.236589</h6>
                      </Link>
                    </div>
                    <div className="livepricemenucard">
                      <Link href="#" className="livepricemenubox">
                        <h5 className="t-black"><Image src="/assets/images/color/bnb.svg" className="coinlisticon" />BNB</h5>
                        <h6 className="t-red mb-1">-222.3%</h6>
                        <h6 className="t-gray mb-0">0.236589</h6>
                      </Link>
                    </div>
                    <div className="livepricemenucard">
                      <Link href="#" className="livepricemenubox">
                        <h5 className="t-black"><Image src="/assets/images/color/trx.svg" className="coinlisticon" />TRX</h5>
                        <h6 className="t-green mb-1">+222.3%</h6>
                        <h6 className="t-gray mb-0">0.236589</h6>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="dropdown-item marketmenutable pt-4">
                  <Tab.Container defaultActiveKey="newlist">
                    <div className="boxtabbsmall mb-2">
                      <Nav variant="pills" className="tabbanner border-0">
                        <Nav.Item><Nav.Link eventKey="newlist" id='newlist'>New</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="gain" id='gain'>Gainers</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="hotfutures" id='hotfutures'>Hot Futures</Nav.Link></Nav.Item>
                      </Nav>
                    </div>
                    <Tab.Content>
                      <Tab.Pane eventKey="newlist">
                        <SimpleBar className="sitescroll">
                          <Table className="sitetable mb-0">
                            <tbody>
                              <tr onClick={handleRowClick} className="clickabletr">
                                <td><Image src="/assets/images/color/btc.svg" className="coinlisticon" />BTC</td>
                                <td className="text-end"><span className="t-green">+222.3%</span><br /><span className="t-gray">0.236589</span></td>
                              </tr>
                              <tr onClick={handleRowClick} className="clickabletr">
                                <td><Image src="/assets/images/color/eth.svg" className="coinlisticon" />ETH</td>
                                <td className="text-end"><span className="t-red">-222.3%</span><br /><span className="t-gray">0.236589</span></td>
                              </tr>
                              <tr onClick={handleRowClick} className="clickabletr">
                                <td><Image src="/assets/images/color/bnb.svg" className="coinlisticon" />BNB</td>
                                <td className="text-end"><span className="t-green">+222.3%</span><br /><span className="t-gray">0.236589</span></td>
                              </tr>
                              <tr onClick={handleRowClick} className="clickabletr">
                                <td><Image src="/assets/images/color/trx.svg" className="coinlisticon" />TRX</td>
                                <td className="text-end"><span className="t-red">-222.3%</span><br /><span className="t-gray">0.236589</span></td>
                              </tr>
                              <tr onClick={handleRowClick} className="clickabletr">
                                <td><Image src="/assets/images/color/SOL.svg" className="coinlisticon" />SOL</td>
                                <td className="text-end"><span className="t-green">+222.3%</span><br /><span className="t-gray">0.236589</span></td>
                              </tr>
                            </tbody>
                          </Table>
                        </SimpleBar>
                      </Tab.Pane>
                      <Tab.Pane eventKey="gain">
                        <SimpleBar className="sitescroll">
                          <Table className="sitetable mb-0">
                            <tbody>
                              <tr onClick={handleRowClick} className="clickabletr">
                                <td><Image src="/assets/images/color/btc.svg" className="coinlisticon" />BTC</td>
                                <td className="text-end"><span className="t-green">+222.3%</span><br /><span className="t-gray">0.236589</span></td>
                              </tr>
                              <tr onClick={handleRowClick} className="clickabletr">
                                <td><Image src="/assets/images/color/eth.svg" className="coinlisticon" />ETH</td>
                                <td className="text-end"><span className="t-red">-222.3%</span><br /><span className="t-gray">0.236589</span></td>
                              </tr>
                              <tr onClick={handleRowClick} className="clickabletr">
                                <td><Image src="/assets/images/color/bnb.svg" className="coinlisticon" />BNB</td>
                                <td className="text-end"><span className="t-green">+222.3%</span><br /><span className="t-gray">0.236589</span></td>
                              </tr>
                              <tr onClick={handleRowClick} className="clickabletr">
                                <td><Image src="/assets/images/color/trx.svg" className="coinlisticon" />TRX</td>
                                <td className="text-end"><span className="t-red">-222.3%</span><br /><span className="t-gray">0.236589</span></td>
                              </tr>
                              <tr onClick={handleRowClick} className="clickabletr">
                                <td><Image src="/assets/images/color/SOL.svg" className="coinlisticon" />SOL</td>
                                <td className="text-end"><span className="t-green">+222.3%</span><br /><span className="t-gray">0.236589</span></td>
                              </tr>
                            </tbody>
                          </Table>
                        </SimpleBar>
                      </Tab.Pane>
                      <Tab.Pane eventKey="hotfutures">
                        <SimpleBar className="sitescroll">
                          <Table className="sitetable mb-0">
                            <tbody>
                              <tr onClick={handleRowClick} className="clickabletr">
                                <td><Image src="/assets/images/color/btc.svg" className="coinlisticon" />BTC</td>
                                <td className="text-end"><span className="t-green">+222.3%</span><br /><span className="t-gray">0.236589</span></td>
                              </tr>
                              <tr onClick={handleRowClick} className="clickabletr">
                                <td><Image src="/assets/images/color/eth.svg" className="coinlisticon" />ETH</td>
                                <td className="text-end"><span className="t-red">-222.3%</span><br /><span className="t-gray">0.236589</span></td>
                              </tr>
                              <tr onClick={handleRowClick} className="clickabletr">
                                <td><Image src="/assets/images/color/sol.svg" className="coinlisticon" />SOL</td>
                                <td className="text-end"><span className="t-green">+222.3%</span><br /><span className="t-gray">0.236589</span></td>
                              </tr>
                              <tr onClick={handleRowClick} className="clickabletr">
                                <td><Image src="/assets/images/color/trx.svg" className="coinlisticon" />TRX</td>
                                <td className="text-end"><span className="t-red">-222.3%</span><br /><span className="t-gray">0.236589</span></td>
                              </tr>
                              <tr onClick={handleRowClick} className="clickabletr">
                                <td><Image src="/assets/images/color/usdt.svg" className="coinlisticon" />USDT</td>
                                <td className="text-end"><span className="t-green">+222.3%</span><br /><span className="t-gray">0.236589</span></td>
                              </tr>
                            </tbody>
                          </Table>
                        </SimpleBar>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </NavDropdown>

              <HoverDropdown title="Trade" id="trade">
                <NavDropdown.Item as={Link} href="/trade" className={`${pathname === '/trade' ? 'active' : ''}`}>
                  <div className="tableicon"><span><span className="iconboxbg"><Image src="/assets/images/spoticon.svg" alt="icon" width={100} height={100} /></span></span> <span>Spot<br /><small className="t-gray">Buy and Sell crypto with ease</small></span></div>
                </NavDropdown.Item>
              </HoverDropdown>
              {/* <HoverDropdown title="Order" id="orderhistory">
                <NavDropdown.Item as={Link} href="/openorderhistory" className={`${pathname === '/openorderhistory' ? 'active' : ''}`}>
                  <span className="iconboxbg"><Image src="/assets/images/openordericon.svg" alt="icon" width={100} height={100} /></span>Open Order History
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/orderhistory" className={`${pathname === '/orderhistory' ? 'active' : ''}`}>
                  <span className="iconboxbg"><Image src="/assets/images/orderhistoryicon.svg" alt="icon" width={100} height={100} /></span>Order History
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/tradehistory" className={`${pathname === '/tradehistory' ? 'active' : ''}`}>
                  <span className="iconboxbg"><Image src="/assets/images/tradehistoryicon.svg" alt="icon" width={100} height={100} /></span>Trade History
                </NavDropdown.Item>
              </HoverDropdown> */}
            </Nav>
            <Nav className="navbar-nav ms-auto rightheadbg">
              <Nav.Item>
                <Link
                  href="/deposit"
                  className={`nav-link btn sitebtn webhide mt-1  ${pathname === '/deposit' ? 'active' : ''}`}
                  id="depositlink"
                >
                  Deposit
                </Link>
              </Nav.Item>
              <HoverDropdown title="assets" id="/assetsdrp" className="webhide">
                <NavDropdown.Item>
                  <div className="balanceshowt totblance pb-2">
                    <span className="tabrightbox pe-2">
                      <Link href='/wallet' className="alink">
                        <FontAwesomeIcon icon={faArrowRight} />
                      </Link>
                    </span>
                    <h5>Total Balance<span className="ps-2"><FontAwesomeIcon icon={faEye} /></span></h5>
                    <h4 className="h4">BTC: 0.00000000 <br /><span className="h5 t-gray me-2">≈ $0.23659</span></h4>
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item as='div'>
                  <div className="d-flex mt-1 mb-1 align-items-center">
                    <Link href="/deposit" id="depositlink" className="btn sitebtn btn-sm me-2 btn-block">Deposit</Link>
                    <Link href="/withdraw" id="withdrawlink" className="btn sitebtn btn-sm btn-block">Withdraw</Link>
                  </div>
                </NavDropdown.Item>
              </HoverDropdown>
              <NavDropdown
                title={
                  <div className="pull-left notifyicon">
                    <Image
                      src="/assets/images/settings.svg"
                      className="menuicon"
                      alt="settings"
                      width={100}
                      height={57}
                    />
                  </div>
                }
                id="settings-dropdown"
                className="langmenu mb-hide settings-menu"
              >
                <SimpleBar className="settings-scroll">

                  <div
                    className="setting-item"
                    onClick={() => handleSettingChange("customizeLayout")}
                  >
                    <span>Customize Layout</span>
                    <input
                      type="checkbox"
                      checked={settings.customizeLayout}
                      readOnly
                    />
                  </div>

                  <div
                    className="setting-item"
                    onClick={() => handleSettingChange("showBuysSells")}
                  >
                    <span>Show Buys and Sells on Chart</span>
                    <input
                      type="checkbox"
                      checked={settings.showBuysSells}
                      readOnly
                    />
                  </div>

                  <div
                    className="setting-item"
                    onClick={() => handleSettingChange("setOrderBookSize")}
                  >
                    <span>Set Order Book Size on Click</span>
                    <input
                      type="checkbox"
                      checked={settings.setOrderBookSize}
                      readOnly
                    />
                  </div>

                  <div
                    className="setting-item"
                    onClick={() => handleSettingChange("animateOrderBook")}
                  >
                    <span>Animate Order Book</span>
                    <input
                      type="checkbox"
                      checked={settings.animateOrderBook}
                      readOnly
                    />
                  </div>

                  <div
                    className="setting-item"
                    onClick={() => handleSettingChange("disableNotification")}
                  >
                    <span>Disable Background Fill Notifications</span>
                    <input
                      type="checkbox"
                      checked={settings.disableNotification}
                      readOnly
                    />
                  </div>

                  <div
                    className="setting-item"
                    onClick={() => handleSettingChange("disableSound")}
                  >
                    <span>Disable Playing Sound for Fills</span>
                    <input
                      type="checkbox"
                      checked={settings.disableSound}
                      readOnly
                    />
                  </div>

                  <div
                    className="setting-item"
                    onClick={() => handleSettingChange("hidePNL")}
                  >
                    <span>Hide PNL</span>
                    <input
                      type="checkbox"
                      checked={settings.hidePNL}
                      readOnly
                    />
                  </div>

                  <div
                    className="setting-item"
                    onClick={() => handleSettingChange("showWarnings")}
                  >
                    <span>Show All Warnings</span>
                    <input
                      type="checkbox"
                      checked={settings.showWarnings}
                      readOnly
                    />
                  </div>

                  <div className="settings-footer">
                    Return to Default Layout
                  </div>

                </SimpleBar>
              </NavDropdown>
              <NavDropdown title={<div className="pull-left notifyicon"><Image src="/assets/images/langicon.svg" className="menuicon" alt="user" width={100} height={57} /></div>} id="basic-nav-dropdown" className="langmenu mb-hide">
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
              <Nav.Item className="mb-hide">
                <Link href="#0" className="nav-link px-1" onClick={toggleNightMode}>
                  {isNightMode ? (
                    <Image src="/assets/images/moon-icon.svg" className="menuicon menuicon-moon" alt="moodicon" />
                  ) : (
                    <Image src="/assets/images/sun-icon.svg" className="menuicon menuicon-moon" alt="moodicon" />
                  )}
                </Link>
              </Nav.Item>
              <HoverDropdown title={<div className="pull-left"><Image src="/assets/images/bell.svg" className="menuicon" alt="user" width={100} height={57} /> <span className="counticon"></span></div>} id="basic-nav-dropdown" className="notifyicon">
                <NavDropdown.Item className="userprofiledrop" as={Link} href="/support"><p>Recent Login Attempt Activity</p>
                </NavDropdown.Item>
                <SimpleBar className="chat-notification">
                  <NavDropdown.Item as={Link} href="/support" className="notification-item">
                    <div className="d-flex justify-content-between align-items-start">
                      {/* Left Content */}
                      <div className="notification-content">
                        <b></b>
                        <p className="mb-0 small">
                          <strong>IP Address:</strong> 103.113.190.46
                        </p>
                        <p className="mb-0 small">
                          <strong>Date & Time:</strong> 04/03/2026 04:23:51 PM
                        </p>
                        <p className="mb-1 small">Test Message</p>
                      </div>

                      {/* Right Icon */}
                      <span className="righticon ms-2">
                        <Image
                          src="/assets/images/righticon.svg"
                          alt="icon"
                          width={16}
                          height={16}
                        />
                      </span>

                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/support" className="notification-item">
                    <div className="d-flex justify-content-between align-items-start">
                      {/* Left Content */}
                      <div className="notification-content">
                        <b></b>
                        <p className="mb-0 small">
                          <strong>IP Address:</strong> 103.113.190.46
                        </p>
                        <p className="mb-0 small">
                          <strong>Date & Time:</strong> 04/03/2026 04:23:51 PM
                        </p>
                        <p className="mb-1 small">Test Message</p>
                      </div>

                      {/* Right Icon */}
                      <span className="righticon ms-2">
                        <Image
                          src="/assets/images/righticon.svg"
                          alt="icon"
                          width={16}
                          height={16}
                        />
                      </span>

                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/support" className="notification-item">
                    <div className="d-flex justify-content-between align-items-start">
                      {/* Left Content */}
                      <div className="notification-content">
                        <b></b>
                        <p className="mb-0 small">
                          <strong>IP Address:</strong> 103.113.190.46
                        </p>
                        <p className="mb-0 small">
                          <strong>Date & Time:</strong> 04/03/2026 04:23:51 PM
                        </p>
                        <p className="mb-1 small">Test Message</p>
                      </div>

                      {/* Right Icon */}
                      <span className="righticon ms-2">
                        <Image
                          src="/assets/images/righticon.svg"
                          alt="icon"
                          width={16}
                          height={16}
                        />
                      </span>

                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/support" className="notification-item">
                    <div className="d-flex justify-content-between align-items-start">
                      {/* Left Content */}
                      <div className="notification-content">
                        <b></b>
                        <p className="mb-0 small">
                          <strong>IP Address:</strong> 103.113.190.46
                        </p>
                        <p className="mb-0 small">
                          <strong>Date & Time:</strong> 04/03/2026 04:23:51 PM
                        </p>
                        <p className="mb-1 small">Test Message</p>
                      </div>

                      {/* Right Icon */}
                      <span className="righticon ms-2">
                        <Image
                          src="/assets/images/righticon.svg"
                          alt="icon"
                          width={16}
                          height={16}
                        />
                      </span>

                    </div>
                  </NavDropdown.Item>
                  <Table className="sitetable mb-0">
                    <tbody>
                      <tr className="nodata">
                        <td>
                          <Image src="assets/images/notifydata.svg" width={50} height={50} alt="nodata" className="ntnodataimg" />No data found

                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </SimpleBar>
              </HoverDropdown>
              <HoverDropdown title={<div className="pull-left"><Image src="/assets/images/support.svg" className="menuicon" alt="user" width={100} height={57} /> <span className="counticon"></span></div>} id="basic-nav-dropdown" className="notifyicon">
                <NavDropdown.Item className="userprofiledrop" as={Link} href="/support"><p>Notifications <span className="countnum">2</span></p></NavDropdown.Item>
                <SimpleBar className="chat-notification">
                  <NavDropdown.Item as={Link} href="/support">Deposit Notification<br /><small>July 30, 2026</small><span className="righticon">
                    <Image src="/assets/images/righticon.svg" alt="icon" width={100} height={100} /></span>
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/support"> Withdrawal Notification<br /><small>July 30, 2026</small><span className="righticon">
                    <Image src="/assets/images/righticon.svg" alt="icon" width={100} height={100} /></span>
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/support">Security Alert<br /><small>July 30, 2026</small><span className="righticon">
                    <Image src="/assets/images/righticon.svg" alt="icon" width={100} height={100} /></span>
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/support"> KYC Notification
                    <br /><small>July 30, 2026</small><span className="righticon">
                      <Image src="/assets/images/righticon.svg" alt="icon" width={100} height={100} /></span>
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/support">System Update
                    <br /><small>July 30, 2026</small><span className="righticon">
                      <Image src="/assets/images/righticon.svg" alt="icon" width={100} height={100} /></span>
                  </NavDropdown.Item>
                </SimpleBar>
              </HoverDropdown>

              <HoverDropdown className="usermenudrop" title={<div className="pull-left"><Image src="/assets/images/profile.svg" className="photopic" alt="user" /></div>} id="profiledrp">
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
    </header >
  )
}

export default Userheader