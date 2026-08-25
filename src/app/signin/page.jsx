"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Container, Form, Image, Modal } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import "../../../public/assets/css/home.css";
import "../../../public/assets/css/user.css";
import { useTheme } from "@/app/context/ThemeContext";

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
		<section className="formbg">
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
										<h3 className="heading-title pb-2">Sign Up</h3>
										<div className="formcontentbox mt-3">
											<Form.Group className="form-group">
												<Form.Label>Enter Email / Mobile</Form.Label>


												<div className="d-flex gap-2 align-items-center">

													<div className="country-input" onClick={handleSelectChange}>
														<Image
															className="flag-icon"
															src="/assets/images/eng.svg"
															alt="icon"
															width={20}
															height={20}
														/>


														<Form.Control
															placeholder="+91"
															value={value}
															readOnly
															className="country-control"
														/>
													</div>
													<Form.Control
														placeholder="Enter your mobile"
														value={value}
														onChange={handleInputChange}
													/>
												</div>
											</Form.Group>
										</div>

										<div className="formcontentbox mt-3">
											{!isPhone ? (
												<Form.Group className="form-group">
													<Form.Label>Enter Email / Mobile</Form.Label>
													<Form.Control
														placeholder="Enter your email or mobile"
														value={value}
														onChange={handleInputChange}
													/>
												</Form.Group>
											) : (
												<div className="phone-wrapper form-group">
													<div className="phone-input">
														<PhoneInput
															country={"in"}
															value={phone}
															onChange={(phone) => {
																setPhone(phone);
																setValue(phone);
															}}
															enableSearch={true}
															dropdownClass="dropdown"
															inputStyle={{
																width: "100%",
																height: "48px",
																background: "transparent",
																border: "none",
																boxShadow: "none",
																paddingLeft: "60px"
															}}
														/>
													</div>
												</div>
											)}
										</div>

										<div className="text-center mt-2">
											<Link
												href="signup/emailverify"
												className="btn sitebtn w-100"
												id="submit"
											>
												Continue
											</Link>
										</div>

										<div className="or-divider">
											<span>or</span>
										</div>

										<div className="social-login mb-3">
											<button className="social-btn" type="button">
												<Image
													src="/assets/images/google.svg"
													width={20}
													height={20}
													alt="google"
												/>
												<span>Continue with Google</span>
											</button>

											<button className="social-btn" type="button">
												<Image
													src="/assets/images/apple.svg"
													width={20}
													height={20}
													alt="apple"
												/>
												<span>Continue with Apple</span>
											</button>
										</div>
									</div>

									<div className="logbottomcellbox mt-1 text-center">
										<p className="btngray m-0">
											Already have an account?
											<Link href="/signup" className="ms-1 t-blue">
												Sign In for BitsBuys
											</Link>
										</p>
									</div>
								</div>
							</div>
						</Form>
					</div>
				</div>
			</Container>
			<Modal
				show={showModal1}
				onHide={handleClose1}
				className="modalbgt authmodal"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title>Select Your code</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<div>
						<Form.Group className="form-group">
							<Form.Control

								placeholder="Search...."
								className="form-control-phone"
							/>
						</Form.Group>
						<div className="otp-main">
							<div>
								<Image className="me-2" src="/assets/images/eng.svg" alt="icon" width={20} height={20} />
							<span className="langenicon">
								Eng 
							</span>
							</div>
							<span>+03</span>
						</div>
						<div className="otp-main">
							<div>
								<Image className="me-2" src="/assets/images/eng.svg" alt="icon" width={20} height={20} />
							<span className="langenicon">
								Eng 
							</span>
							</div>
							<span>+03</span>
						</div>
						<div className="otp-main">
							<div>
								<Image className="me-2" src="/assets/images/eng.svg" alt="icon" width={20} height={20} />
							<span className="langenicon">
								Eng 
							</span>
							</div>
							<span>+03</span>
						</div>
						<div className="otp-main">
							<div>
								<Image className="me-2" src="/assets/images/eng.svg" alt="icon" width={20} height={20} />
							<span className="langenicon">
								Eng 
							</span>
							</div>
							<span>+03</span>
						</div>

					</div>
				</Modal.Body>
			</Modal>
		</section>
	);
};

export default Page;