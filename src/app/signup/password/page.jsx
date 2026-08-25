"use client"
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { Container, Nav, Tab, InputGroup, Form, Button, Image, NavDropdown } from "react-bootstrap";
import Homeheader from '../../components/Homeheader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from "@/app/context/ThemeContext";
import Select from "react-select";

import SimpleBar from "simplebar-react";

const Page = () => {
    useEffect(() => {
        document.body.classList.add('loginbanner');
        document.body.classList.remove('userpanelpage');
        return () => {
            document.body.classList.remove("loginbanner");
        };
    });

    const { isNightMode } = useTheme();


    const [password, setPassword] = useState("");
    const options = [
        { value: "btc", label: "Bitcoin" },
        { value: "eth", label: "Ethereum" },
        { value: "bnb", label: "BNB" },
        { value: "sol", label: "Solana" }
    ];

    const rules = {
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[!@#$%^&*]/.test(password),
        length: password.length >= 8
    };

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
                                            <h3 className="heading-title pb-2">Create a passowrd</h3>
                                            <div className="formcontentbox mt-3">
                                                <Form.Group className="form-group">
                                                    <p className="t-gray">John********@gmail.com <span className="t-red">*</span></p>
                                                </Form.Group>
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

                                                <div className="select-box  my-3">
                                                    <Select
                                                        options={options}
                                                        placeholder="Select Coin"
                                                        classNamePrefix="custom-select"
                                                    />
                                                </div>
                                                <div className="text-center mb-3">
                                                    <Button type="submit" className="sitebtn" id="submit"> Continue</Button>
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
        </>
    );
}

export default Page;


