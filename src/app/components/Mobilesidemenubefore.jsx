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


const Mobilesidemenu = ({ onClose }) => {

    const pathname = usePathname()
    const [showModal1, setShowModal1] = useState(false);
    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);

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
                        <div className="leftsidescroll">
                            <ul>
                                <li className="webhide"><Link id="marketlink" onClick={onClose} className={`titlemenu ${pathname === '/markets' ? 'active' : ''}`} href="/markets"><i><Image src="assets/images/marketicon.svg" alt="icon" width={100} height={100} /></i><div>Markets</div></Link></li>
                                <li className="webhide"><Link id="marketlink" onClick={onClose} className={`titlemenu ${pathname === '/saving' ? 'active' : ''}`} href="/saving"><i><Image src="assets/images/savings.svg" alt="icon" width={100} height={100} /></i><div>Earn</div></Link></li>
                                <li className="webhide"><Link id="tradelink" onClick={onClose} className={`titlemenu ${pathname === '/trade' ? 'active' : ''}`} href="/trade"><i><Image src="assets/images/spoticon.svg" alt="icon" width={100} height={100} /></i><div>Trade</div></Link></li>
                                <li className="webhide"><Link id="convertlink" onClick={onClose} className={`titlemenu ${pathname === '/convert' ? 'active' : ''}`} href="/convert"><i><Image src="assets/images/converticon.svg" alt="icon" width={100} height={100} /></i><div>Convert</div></Link></li>
                                <li className="dropdown webhide langlink">
                                    <a href="#" id='langlink' className="nav-link dropdown-bs-toggle titlemenu" data-bs-toggle="dropdown"><i><Image src="assets/images/langicon2.svg" alt="icon" width={100} height={100} /></i>Change Language<span className="careticondown"><FontAwesomeIcon icon={faCaretDown} /></span></a>
                                    <div className="dropdown-menu">
                                        <NavDropdown.Item onClick={onClose} id="english" className="titlemenu"><i><Image src="assets/images/en.svg" alt="icon" width={100} height={100} /></i><div>English</div></NavDropdown.Item>
                                        <NavDropdown.Item onClick={onClose} id="chinese" className="titlemenu"><i><Image src="assets/images/ch.svg" alt="icon" width={100} height={100} /></i><div>Chinese</div></NavDropdown.Item>
                                        <NavDropdown.Item onClick={onClose} id="japanese" className="titlemenu"><i><Image src="assets/images/jap.svg" alt="icon" width={100} height={100} /></i><div>Japanese</div></NavDropdown.Item>
                                    </div>
                                </li>

                                <div className="d-flex p-2">
                                    <div className='w-50 me-2'>
                                        <Link
                                            href="/signin"
                                            id="login"
                                            className="btn sitebtn btn-sm"
                                        >
                                            Sign In
                                        </Link>
                                    </div>
                                    <div className="w-50">
                                        <Link
                                            href="/signup"
                                            id="register"
                                            className="btn sitebtn btn-sm"
                                        >
                                            Sign Up
                                        </Link>
                                    </div>
                                </div>

                            </ul>
                        </div>
                    </div>
                </Container>
            </div>

        </>
    )
}

export default Mobilesidemenu;