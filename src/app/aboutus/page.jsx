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
                    <h2 className="heading-title pb-3 text-center">About</h2>
                    <p className=" text-center"> Learn more about BitsBuys and our mission to simplify crypto trading.</p>
                </div>
                <div className="innerpages">
                    <Container>
                        <div className="panelcontentbox">
                            <p>
                                Bitsbuys is a licensed and trusted crypto exchange platform designed with a strong focus on
                                security and user-friendly experience. We ensure the safety of your assets through advanced
                                encryption and robust security protocols, giving you peace of mind with every transaction.
                                Bitsbuys offers an intuitive interface that makes buying, selling, and managing cryptocurrencies
                                simple and accessible for both beginners and experienced traders. With Bitsbuys, you can
                                confidently navigate the crypto market with ease and reliability.
                            </p>
                            <p>Founded on the principles of transparency and innovation, BitsBuys is dedicated to providing a
                                reliable platform for cryptocurrency trading worldwide. Our mission is to empower users with
                                easy access to digital assets through cutting-edge technology and robust security.  </p>
                        </div>
                    </Container>
                </div>
            </article>
            <Homefooter />
        </>
    )
}

export default page