"use client"
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Homeheader from '../components/Homeheader';
import Homefooter from '../components/Homefooter';

const privacy = () => {
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
                    <h2 className="heading-title pb-3 text-center">Privacy Policy</h2>
                    <p className=" text-center">Your privacy is important to us. This Privacy Policy explains how BitsBuys collects, uses, and protects your information.</p>
                </div>
                <div className="innerpages">
                    <Container>
                        <div className="panelcontentbox">
                            <p>
                                At BitsBuys, we value your privacy and are committed to protecting your personal and f
                                inancial data in full compliance with applicable data protection laws and regulations. As a
                                cryptocurrency exchange, we handle sensitive information including identity verification
                                data, transaction histories, and wallet details. We implement robust security measures to
                                safeguard your information against unauthorized access, loss, or misuse.
                            </p>
                            <p>We collect, process, and store your data solely for purposes related to providing our
                                services, ensuring regulatory compliance such as Anti-Money Laundering (AML) and Know
                                Your Customer (KYC) requirements, enhancing user experience, and preventing fraudulent
                                activities. Your data will never be shared with third parties without your explicit consent,
                                except where required by law or regulatory authorities. </p>
                        </div>
                    </Container>
                </div>
            </article>
            <Homefooter />
        </>
    )
}

export default privacy