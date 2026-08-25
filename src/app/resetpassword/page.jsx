"use client"
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { Container, InputGroup, Form, Button, Image, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from "@/app/context/ThemeContext";
import "../../../public/assets/css/home.css"
import "../../../public/assets/css/user.css"

const Page = () => {

	const [showModal1, setShowModal1] = useState(false);
	const [showModal2, setShowModal2] = useState(false);


	const handleClose1 = () => setShowModal1(false);
	const handleShow1 = () => setShowModal1(true);

	const handleClose2 = () => setShowModal2(false);
	const handleShow2 = () => setShowModal2(true);

	const { isNightMode } = useTheme();

	const [password, setPassword] = useState("");

	const rules = {
		uppercase: /[A-Z]/.test(password),
		lowercase: /[a-z]/.test(password),
		number: /[0-9]/.test(password),
		special: /[!@#$%^&*]/.test(password),
		length: password.length >= 8
	};

	useEffect(() => {
		document.body.classList.add('loginbanner');
		return () => {
			document.body.classList.remove("loginbanner");
		};
	}, []);

	return (
		<>
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
													"/assets/images/logo-light.svg" :
													"/assets/images/logo.png"
											} className="logo" width={50} height={50} alt="icon" />
										</Link>
										<div className="logcenterbox">
											<h3 className="heading-title pb-2">Reset Password</h3>
											<div className="formcontentbox mt-3">
												<Form.Group className="form-group">
													<Form.Label>Password <span className="t-red">*</span></Form.Label>
													<InputGroup>
														<Form.Control
															type="password"
															value={password}
															onChange={(e) => setPassword(e.target.value)}
														/>
														<div className="input-group-append">
															<InputGroup.Text> <FontAwesomeIcon icon={faEye} /> </InputGroup.Text>
														</div>
													</InputGroup>
												</Form.Group>
												<div className="password-rules mb-3">
													<div className={`rule ${rules.uppercase ? "valid" : ""}`}>
														<span className="circle"></span>
														At least one uppercase letter
													</div>

													<div className={`rule ${rules.number ? "valid" : ""}`}>
														<span className="circle"></span>
														At least one numeric digit
													</div>

													<div className={`rule ${rules.special ? "valid" : ""}`}>
														<span className="circle"></span>
														One special character
													</div>

													<div className={`rule ${rules.length ? "valid" : ""}`}>
														<span className="circle"></span>
														At least 8 to 128 characters
													</div>
												</div>
												<Form.Group className="form-group">
													<Form.Label>Confirm Password <span className="t-red">*</span></Form.Label>
													<InputGroup>
														<Form.Control type="password" id="confirmpassword" />
														<div className="input-group-append">
															<InputGroup.Text> <FontAwesomeIcon icon={faEye} /> </InputGroup.Text>
														</div>
													</InputGroup>
												</Form.Group>
												<div className="text-center">
													<Button className="sitebtn" id="submit" onClick={handleShow1}>Update Password</Button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</Form>
						</div>
					</div>
				</Container>

				<Modal show={showModal1} onHide={handleClose1} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
					centered>
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div className="logbg text-center">
							<div className="resetimg mb-3">
								<Image src="/assets/images/password-changed.svg" className="reimg" width={50} height={50} alt="icon" />
							</div>
							<h4 className="subhead pb-2">Password Changed</h4>
							<p>Your password has been successfully changed. <br />
							Please Signin with the new password.</p>
							<Link href="/signin" className="btn sitebtn w-100">Sign In</Link>
						</div>
					</Modal.Body>
				</Modal>
			</section>
		</>
	);
}

export default Page;










