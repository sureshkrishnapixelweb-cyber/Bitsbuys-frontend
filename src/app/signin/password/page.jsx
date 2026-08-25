"use client"
import React, { useEffect } from "react";
import Link from 'next/link';
import { Container, Nav, Tab, InputGroup, Form, Button, Image, NavDropdown } from "react-bootstrap";
import Homeheader from '../../components/Homeheader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from "@/app/context/ThemeContext";
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
                                            <h3 className="heading-title pb-2">Enter your passowrd</h3>
                                            <div className="formcontentbox mt-3">
                                                <Form.Group className="form-group">
                                                    <p className="t-gray">John********@gmail.com <span className="t-red">*</span></p>
                                                </Form.Group>
                                                <Form.Group className="form-group">
                                                    <Form.Label>Password <span className="t-red">*</span></Form.Label>
                                                    <InputGroup>
                                                        <Form.Control type="email" id="password" />
                                                        <div className="input-group-append">
                                                            <InputGroup.Text> <FontAwesomeIcon icon={faEye} /> </InputGroup.Text>
                                                        </div>
                                                    </InputGroup>
                                                </Form.Group>
                                                <div className="text-center mb-3">
                                                    <Button href="/dashboard" className="sitebtn" id="submit"> Continue</Button>
                                                </div>
                                                <div className="logbottomcellbox mt-3 text-center">
                                                    <Link href="/forgot" className="alink t-blue" id="reset">Forgot your password? </Link>

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


