"use client"
import React, { useEffect } from "react";
import Link from 'next/link';
import { Container, Image, Form } from 'react-bootstrap'
import Homeheader from '../../components/Homeheader';

const page = () => {
   	useEffect(() => {
		document.body.classList.add('loginbanner');
		document.body.classList.remove('userpanelpage');

		return () => {
			document.body.classList.remove("loginbanner");
		};
	});

    return (
        <>
            <section className="formbg">
                <Container>
                    <div className="formboxbg">
                    <div className="leftsideformbox">
                        <div className="bckbtn">
                  <Link href="/" className="alink">
                    <Image
                      src="assets/images/backicon.svg"
                      width={20}
                      height={20}
                      alt="icon"
                    ></Image>{" "}
                    Back
                  </Link>
                </div>
								<h2>Join BitsBuys and Start Trading Cryptocurrencies with Confidence</h2>
							<p>Trade securely on a modern and seamless platform designed for fast deposits, withdrawals, and spot trading.</p>
							<Image src="assets/images/login.png" className="loginiconb" width={50} height={50} alt="icon" />
						</div>
                        <div className="rightsideformbox">
                            <Form className="siteformbg">
                                <div className="login-form">
                                    <div className="loginformbox">
                                        <div className="logcenterbox">
                                            <h3 className="heading-title pb-2">Email Verification</h3>
                                            <p className="content">Please enter the 6-digit verification code that was sent to john@mailinator.com</p>
                                            <div className="formcontentbox">
                                                <Form.Group className="form-group">
                                                    <Form.Control name="code" type="number" id="otpcode" />
                                                </Form.Group>
                                                <Form.Group className="mb-3 text-center">
                                                    <input type="submit" name="" className="btn sitebtn" value="Submit" id="submit"/>
                                                </Form.Group>

                                            </div>
                                        </div>
                                        <div className="logbottomcellbox">
                                            <p className="btngray mb-0">Mail not received click resend link,
                                                <Link href="/signin" className="t-blue" id="resend"> Send Code</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default page

