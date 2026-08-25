"use client"
import React, { useEffect } from "react";
import Link from 'next/link';
import { Container, Nav, Tab, InputGroup, Form, Button, Image } from "react-bootstrap";
import "../../../public/assets/css/home.css"
import "../../../public/assets/css/user.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from "@/app/context/ThemeContext";

const Page = () => {
	useEffect(() => {
		document.body.classList.add('loginbanner');
		document.body.classList.remove('userpanelpage');

		return () => {
			document.body.classList.remove("loginbanner");
		};
	});

	const { isNightMode } = useTheme();

	return (
		<div>
			<section className="formbg">
				<Container className="sign">
					<div className="formboxbg">
						<div className="rightsideformbox">
							<Form className="siteformbg">
								<div className="login-form">
									<div className="loginformbox">
										<Link href="/" className="lgimg">
											<Image src={
												isNightMode ?
													"/images/logo-light.svg" :
													"assets/images/logo.png"
											} className="logo" width={50} height={50} alt="icon" />
										</Link>
										<div className="logcenterbox">
											<h3 className="heading-title pb-2">Forgot Password</h3>
											<div className="formcontentbox mt-3">
												<Form.Group className="form-group">
													<Form.Label>Email Address <span className="t-red">*</span></Form.Label>
													<Form.Control type="text" name="" id="email" />
												</Form.Group>
												<div className="text-center mb-2">
													<Link href="forgot/emailverify" className="btn sitebtn w-100" id="submit"> Continue</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</Form>
						</div>
					</div>
				</Container>
			</section>
		</div>
	);
}

export default Page;


