"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Container, Form, Image, Table, Modal, NavDropdown } from 'react-bootstrap';
import "flatpickr/dist/themes/material_orange.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCaretDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../../../public/assets/css/mobileview.css';
import { usePathname } from 'next/navigation'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import '../../../public/assets/css/mobileview.css'
import { useTheme } from '../context/ThemeContext';


const Mobilesidemenu = ({ onClose }) => {

    const pathname = usePathname()
    const [showModal1, setShowModal1] = useState(false);
    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);

    const { isNightMode, toggleNightMode } = useTheme();

    return (
        <>
            <div className="mobilegridparentbox mbsecuritybg profile-side-y  mobilesidemenu">
                <Container className="sitecontainer">
                    <div className='leftsidemenu' id="leftsidemenu">
                        <div className="d-flex justify-content-end py-1">
                            <button className='mobile-left-close' onClick={onClose}>
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                        <hr />
                        <div className="leftmenuprofilebg">
                            <div className='d-flex  align-items-center gap-2 '>
                                <Image src="assets/images/profile.svg" className='profile-img-main' />
                                <div>
                                    <h5>John</h5>
                                    <p className="h4 mb-0">Johnwilliam@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="leftsidescroll">
                            <ul>
                                <li>
                                    <Link href="#0" className="titlemenu d-flex justify-content-between align-items-center">
                                        <div className='d-flex align-items-center gap-1'>
                                            <i><Image src="assets/images/theme-icon.svg" alt="icon" width={100} height={100} /></i>
                                            <div>Switch Theme</div>
                                        </div>
                                        <div
                                            className={`ms-auto theme-toggle ${isNightMode ? "night" : ""}`}
                                            onClick={toggleNightMode}
                                            role="button"
                                            aria-label="Toggle theme"
                                        >
                                            <div className="icon sun">
                                                <Image src="./assets/images/cloud-sun.svg" alt='theme-icon'></Image>
                                            </div>
                                            <div className="icon moon">
                                                <Image src="./assets/images/moon-icon.svg" alt='theme-icon'></Image>
                                            </div>
                                            <span className="toggle-thumb" />
                                        </div>
                                    </Link>
                                </li>
                                <li className="dropdown webhide langlink">
                                    <a href="#" id='langlink' className="nav-link dropdown-bs-toggle titlemenu" data-bs-toggle="dropdown"><i><Image src="assets/images/langicon2.svg" alt="icon" width={100} height={100} /></i>Change Language<span className="careticondown"><FontAwesomeIcon icon={faCaretDown} /></span></a>
                                    <div className="dropdown-menu">
                                        <NavDropdown.Item onClick={onClose} id="english" className="titlemenu"><i><Image src="assets/images/en.svg" alt="icon" width={100} height={100} /></i><div>English</div></NavDropdown.Item>
                                        <NavDropdown.Item onClick={onClose} id="chinese" className="titlemenu"><i><Image src="assets/images/ch.svg" alt="icon" width={100} height={100} /></i><div>Chinese</div></NavDropdown.Item>
                                        <NavDropdown.Item onClick={onClose} id="japanese" className="titlemenu"><i><Image src="assets/images/jap.svg" alt="icon" width={100} height={100} /></i><div>Japanese</div></NavDropdown.Item>
                                    </div>
                                </li>
                                <li><Link id="dashboardlink" href="/dashboard" onClick={onClose} className={`titlemenu ${pathname === '/dashboard' ? 'active' : ''}`}><i><Image src="assets/images/homeicon.svg" alt="icon" width={100} height={100} /></i><div>Dashboard</div></Link></li>
                                <li className="webhide"><Link id="tradelink" onClick={onClose} className={`titlemenu ${pathname === '/trade' ? 'active' : ''}`} href="/trade"><i><Image src="assets/images/spoticon.svg" alt="icon" width={100} height={100} /></i><div>Spot</div></Link></li>
                                <li className="webhide"><Link id="marketlink" onClick={onClose} className={`titlemenu ${pathname === '/markets' ? 'active' : ''}`} href="/markets"><i><Image src="assets/images/marketicon.svg" alt="icon" width={100} height={100} /></i><div>Markets</div></Link></li>
                                <li className="dropdown webhide">
                                    <a href="#" className="nav-link dropdown-bs-toggle titlemenu" data-bs-toggle="dropdown"><i><Image src="assets/images/savings.svg" alt="icon" width={100} height={100} /></i>Earn<span className="careticondown"><FontAwesomeIcon icon={faCaretDown} /></span></a>
                                    <div className="dropdown-menu">
                                        <NavDropdown.Item as={Link} onClick={onClose} id="savinglink" className={`titlemenu ${pathname === '/saving' ? 'active' : ''}`} href="/saving"><i><Image src="assets/images/earnview.svg" alt="icon" width={100} height={100} /></i><div>Overview</div></NavDropdown.Item>
                                        <NavDropdown.Item as={Link} onClick={onClose} id="earnhistorylink" className={`titlemenu ${pathname === '/earn' ? 'active' : ''}`} href="/earn"><i><Image src="assets/images/earnhistory.svg" alt="icon" width={100} height={100} /></i><div>History</div></NavDropdown.Item>
                                    </div>
                                </li>
                                <li className="dropdown">
                                    <a href="#" id="walletlink" className={`titlemenu dropdown-bs-toggle`} data-bs-toggle="dropdown"><i><Image src="assets/images/walleticon.svg" alt="icon" width={100} height={100} /></i>Wallet<span className="careticondown"><FontAwesomeIcon icon={faCaretDown} /></span></a>
                                    <div className="walletlink-menu-dd dropdown-menu">
                                        <NavDropdown.Item as={Link} onClick={onClose} className={`titlemenu ${pathname === '/wallet' ? 'active' : ''}`} href="/wallet">Wallet Overview</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} onClick={onClose} className={`titlemenu ${pathname === '/fundingwallet' ? 'active' : ''}`} href="/fundingwallet">Funding Wallet</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} onClick={onClose} className={`titlemenu ${pathname === '/spot-wallet' ? 'active' : ''}`} href="/spot-wallet">Spot Wallet</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} onClick={onClose} className={`titlemenu ${pathname === '#' ? 'active' : ''}`} href="#">Earn Wallet</NavDropdown.Item>
                                    </div>
                                </li>
                                <li><Link id="securitylink" onClick={onClose} className={`titlemenu ${pathname === '/security' ? 'active' : ''}`} href="/security"><i><Image src="assets/images/securityicon.svg" alt="icon" width={100} height={100} /></i><div>Security</div></Link> </li>

                                <li><Link id="kyclink" onClick={onClose} className={`titlemenu ${pathname === '/kyc' ? 'active' : ''}`} href="/kyc"><i><Image src="assets/images/kycicon-1.svg" alt="icon" width={100} height={100} /></i><div>Identification</div></Link></li>
                                <li><Link id="reflink" onClick={onClose} className={`titlemenu ${pathname === '/referral' ? 'active' : ''}`} href="/referral"><i><Image src="assets/images/reficon1.svg" alt="icon" width={100} height={100} /></i><div>Referral</div></Link></li>

                                <li>
                                    <Link
                                        id="earnlink"
                                        className={`titlemenu ${pathname === "/saving" ? "active" : ""
                                            }`}
                                        href="/saving"
                                    >
                                        <i>
                                            <Image
                                                src="assets/images/overview.svg"
                                                alt="icon"
                                                width={100}
                                                height={100}
                                            />
                                        </i>
                                        <div>Earn Overview</div>
                                    </Link>{" "}
                                </li>

                                <li className="webhide"><Link id="convertlink" onClick={onClose} className={`titlemenu ${pathname === '/convert' ? 'active' : ''}`} href="/convert"><i><Image src="assets/images/converticon.svg" alt="icon" width={100} height={100} /></i><div>Convert</div></Link></li>
                                <li className="dropdown">
                                    <a href="#" id="historylink" className={`titlemenu dropdown-bs-toggle`} data-bs-toggle="dropdown"><i><Image src="assets/images/historyicon.svg" alt="icon" width={100} height={100} /></i>History<span className="careticondown"><FontAwesomeIcon icon={faCaretDown} /></span></a>
                                    <div className="historylink-menu-dd dropdown-menu">
                                        <NavDropdown.Item as={Link} onClick={onClose} className={`titlemenu ${pathname === '/deposithistory' ? 'active' : ''}`} href="/deposithistory">Deposit History</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} onClick={onClose} className={`titlemenu ${pathname === '/withdrawhistory' ? 'active' : ''}`} href="/withdrawhistory">Withdraw History</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} onClick={onClose} className={`titlemenu ${pathname === '/openorderhistory' ? 'active' : ''}`} href="/openorderhistory">Open Order History</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} onClick={onClose} className={`titlemenu ${pathname === '/orderhistory' ? 'active' : ''}`} href="/orderhistory">My Order History</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} onClick={onClose} className={`titlemenu ${pathname === '/tradehistory' ? 'active' : ''}`} href="/tradehistory">Trade History</NavDropdown.Item>
                                    </div>
                                </li>
                                <li className="barhide"><Link id="supportlink" onClick={onClose} className={`titlemenu`} href="/support"><i><Image src="assets/images/supporticon.svg" alt="icon" width={100} height={100} /></i><div>Support</div></Link></li>
                                <li><a href="#" className="titlemenu logout" id="logoutlink"><i><Image src="assets/images/logouticon.svg" alt="icon" width={100} height={100} /></i><div>Sign Out</div></a></li>


                            </ul>
                        </div>
                    </div>
                </Container>
            </div>

        </>
    )
}

export default Mobilesidemenu;