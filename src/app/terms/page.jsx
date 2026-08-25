"use client"
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Homeheader from '../components/Homeheader';
import Homefooter from '../components/Homefooter';

const page = () => {
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
                    <h2 className="heading-title pb-3 text-center">Terms of Service </h2>
                    <p className=" text-center"> Welcome to BitsBuys. By accessing or using our platform, you agree to comply
                        with and be bound by the following terms and conditions.</p>
                </div>
                <div className="innerpages">
                    <Container>
                        <div className="panelcontentbox">
                            <p>
                                By using BitsBuys, you agree to comply with and be bound by the following terms and
                                conditions. These terms are designed to ensure a secure, transparent, and fair trading
                                environment for all users. By accessing or using our platform, you acknowledge and accept
                                the responsibilities, risks, and obligations associated with cryptocurrency trading and
                                related services.
                            </p>
                            <p>BitsBuys is committed to maintaining the highest standards of security, compliance with
                                applicable laws and regulations, and protection of user information. Users must provide
                                accurate information, adhere to all trading rules, and refrain from any fraudulent,
                                manipulative, or illegal activities.  </p>
                            <p>Please read these terms carefully before using our services. Continued use of BitsBuys
                                constitutes your acceptance of any updates or changes to these terms. </p>
                        </div>
                    </Container>
                </div>
            </article>
            <Homefooter />
        </>
    )
}

export default page