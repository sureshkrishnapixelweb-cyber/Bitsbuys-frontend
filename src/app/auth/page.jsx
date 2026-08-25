"use client"
import React from "react"
import Link from "next/link"
import Userheader from '../components/Userheader'
import Userfooter from '../components/Userfooter'
import Leftsidemenu from '../components/Leftsidemenu'
import { Container, Image, Form, Button,Row,Col  } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft ,faAngleDown,faAngleUp} from '@fortawesome/free-solid-svg-icons';
const auth = () => {
    function firststepclick() {
        var element = document.getElementById("authstepbox");
        element?.classList.add("secondstepshow", "showfirstheadingstep");
        var element2 = document.getElementById("authstepbox");
        element2?.classList.remove("thridstepshow");
    }
    function secondstepclick() {
        var element = document.getElementById("authstepbox");
        element?.classList.add("thridstepshow", "showsecondheadingstep");
        var element2 = document.getElementById("authstepbox");
        element2?.classList.remove("secondstepshow");
    }
    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <article className="gridparentbox">
                <Container className="sitecontainer">
                    <div className="innerpagecontent">
                        <h2 className="h2 text-start"><Link href="/security" className="alink"><span className="me-2"><FontAwesomeIcon icon={faAngleLeft} /></span></Link>Google Authenticator</h2>
                    </div>

                    <div className="panelcontentbox">
                        <p>Google Authenticator provides time-based verification codes that refresh every 30 seconds. After binding, these codes help protect your account during login, withdrawals, and all sensitive actions.</p>

                        <div className="securitycontentbox authbg mt-4">
                            <Form className='siteformbg'>
                                <div className="securityauthbox" id="authstepbox">
                                    <div className="secttable table-content stepcompleted">
                                        <div><span className="numiconb">1</span> </div>
                                        <div>
                                            <h3>Download Google Authenticator <span className="collapsedatatxt"><a className="alink collapsed" data-bs-toggle="collapse" href="#firstdatashow"><span className="showtitleb">Show More   <FontAwesomeIcon icon={faAngleDown} /></span><span className="hidetitleb">Hide More   <FontAwesomeIcon icon={faAngleUp} /></span></a></span></h3>
                                            <div className="collapse stpcnthide" id="firstdatashow">
                                                <p>Search for "Google Authenticator" in the App Store or Google Play and download it.</p>
                                            </div>
                                            <div className="stpcnthide">
                                                <Button className="sitebtn btn-sm mt-3" id="step1" onClick={firststepclick}>Next</Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="secttable table-content stepcompleted">
                                        <div><span className="numiconb">2</span> </div>
                                        <div>
                                            <h3>Add Key & Create Backup in the Authenticator App <span className="collapsedatatxt"><a className="alink collapsed" data-bs-toggle="collapse" href="#seconddatashow"><span className="showtitleb">Show More   <FontAwesomeIcon icon={faAngleDown} /></span><span className="hidetitleb">Hide More   <FontAwesomeIcon icon={faAngleUp} /></span></a></span></h3>

                                            <div className="collapse stpcnthide" id="seconddatashow">
                                                <p className="content">Open Google Authenticator, scan the QR code below, or manually enter the key provided to add the authentication token. This key is used to recover Google Authenticator if you lose or replace your mobile phone. Be sure to back up this key before linking Google Authenticator.</p>

                                                <div className="google_code d-flex gap-2 lightgraybg align-items-center p-3 rounded-3">
                                                    <div className="qrimg">
                                                        <Image src="assets/images/qrcode.png" width={20} height={20} alt="img" className="g-qr" />
                                                    </div>
                                                    <div>
                                                        <p className="mb-0">Key :</p>
                                                        <h5 className="h5 t-black d-flex align-items-center">1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa <Image src="assets/images/copy.svg" width={24} height={24} alt="icon" className="ms-1" /></h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="stpcnthide">
                                                <Button className="sitebtn mt-3" id="step2" onClick={secondstepclick}>Next</Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="secttable table-content">
                                        <div> <span className="numiconb">3</span> </div>
                                        <div>
                                            <h3>Security Verification</h3>
                                            <div className="stpcnthide">
                                                <p>Please enter the verification code you received in the field below and complete the verification</p>
                                                <Row>
                                                    <Col lg={10}>
                                                        <Form.Group className="form-group">
                                                            <Form.Label>Authentication Code</Form.Label>
                                                            <Form.Control name="code" placeholder="Authenticator Code" id="authotpverify" />
                                                        </Form.Group>
                                                        <Form.Group className="form-group">
                                                            <Link href="#" className="alink" id="resetverify">Reset Security Verification?</Link>
                                                        </Form.Group>
                                                        <div className="mt-3">
                                                            <Button className="sitebtn" id="otpsubmit">Submit</Button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </Form>
                        </div>
                    </div>
                </Container>
            </article>
            <Userfooter />
        </div>
    )
}


export default auth


