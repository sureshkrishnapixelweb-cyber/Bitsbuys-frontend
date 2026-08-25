"use client"
import React, { useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Homeheader from '../components/Homeheader';
import Homefooter from '../components/Homefooter';

const contactus = () => {

    useEffect(() => {
        document.body.classList.add('innerpagebg');
        return () => {
            document.body.classList.remove('innerpagebg');
            document.body.classList.remove('loginbanner');
        };
    }, []);

    return (
        <>

            <article className="gridparentbox innerpage innerpage-non-border privacy-page">
                <Homeheader />
                <div className="inner-bg-x">

                    <h2 className="heading-title pb-3 text-center">Contact & Support</h2>
                    <p className=" text-center"> Need help? We're here for you. Reach out to the BitsBuys support team anytime..</p>
                </div>
                <div className="innerpages">
                    <Container>

                        <div className="panelcontentbox contactusform">
                            <Form className="siteformbg">
                                <div className="formcontentbox mt-3">
                                    <Form.Group className="form-group">
                                        <Form.Label>Name </Form.Label>
                                        <Form.Control type="text" name="" id="name" />
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label>Email Address </Form.Label>
                                        <Form.Control type="text" name="" id="email" />
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label>Subject </Form.Label>
                                        <Form.Select className="form-control" id="subject">
                                            <option>General Enquiry</option>
                                            <option>Technical Support</option>
                                            <option>Other</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control id="message" as="textarea" name="message" rows={3} placeholder="Write your message" />
                                    </Form.Group>
                                    <div className="text-center">
                                        <Button type="submit" className=" sitebtn ashbtn" id="submit">Submit</Button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </Container>
                </div>
            </article>
            <Homefooter />

        </>
    )
}

export default contactus