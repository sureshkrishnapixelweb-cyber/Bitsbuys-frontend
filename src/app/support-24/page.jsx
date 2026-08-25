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
                    <h2 className="heading-title pb-3 text-center">Support </h2>
                    <p className=" text-center"> We're here to help you with any issues or questions you may have while using BitsBuys.</p>
                </div>
                <div className="innerpages">
                    <Container>
                        <div className="panelcontentbox">
                            <h4>Your Support Team is Here 24/7 </h4>
                            <p>Find quick answers in our comprehensive Help Center or reach out to our dedicated
                                support staff via live chat, email, or phone. We’re committed to helping you at every step. </p>
                            <h4>Join the BitsBuys Community </h4>
                            <p>Connect with fellow traders and stay updated by following us on social media.  </p>

                        </div>
                    </Container>
                </div>
            </article>
            <Homefooter />
        </>
    )
}

export default page