import Link from 'next/link';
import React, { useState } from 'react'
import { Accordion, Image } from "react-bootstrap";

const Mobilehomefooter = () => {

    const [activeKey, setActiveKey] = useState("1");

    return (
        <div className='mbhome-footerbg'>
            <Accordion
                flush
                activeKey={activeKey}
                onSelect={(k) => setActiveKey(k)}
            >
                <Accordion.Item
                    eventKey="1"
                    className={activeKey === "1" ? "active" : ""}
                >
                    <Accordion.Header>
                        Menu
                        <img
                            src={activeKey === "1" ? "/assets/images/acc-minus.svg" : "/assets/images/acc-plus.svg"}
                            className="faq-arrow ms-auto"
                            alt="toggle icon"
                        />
                    </Accordion.Header>

                    <Accordion.Body>
                        <div className='d-flex flex-column row-gap-2'>
                            <Link href="#0">Markets</Link>
                            <Link href="#0">Trade</Link>
                            <Link href="#0">Earn</Link>
                            <Link href="#0">Features</Link>
                            <Link href="#0">Convert</Link>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                    eventKey="2"
                    className={activeKey === "2" ? "active" : ""}
                >
                    <Accordion.Header>
                        Quick Links
                        <img
                            src={activeKey === "2" ? "/assets/images/acc-minus.svg" : "/assets/images/acc-plus.svg"}
                            className="faq-arrow ms-auto"
                            alt="toggle icon"
                        />
                    </Accordion.Header>

                    <Accordion.Body>
                        <div className='d-flex flex-column row-gap-2'>
                            <Link href="#0">Spot Trading</Link>
                            <Link href="#0">Staking</Link>
                            <Link href="#0">Referral Program</Link>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                    eventKey="3"
                    className={activeKey === "3" ? "active" : ""}
                >
                    <Accordion.Header>
                        Legal
                        <img
                            src={activeKey === "3" ? "/assets/images/acc-minus.svg" : "/assets/images/acc-plus.svg"}
                            className="faq-arrow ms-auto"
                            alt="toggle icon"
                        />
                    </Accordion.Header>

                    <Accordion.Body>
                        <div className='d-flex flex-column row-gap-2'>
                            <Link href="#0">About Us</Link>
                            <Link href="#0">Privacy Policy</Link>
                            <Link href="#0">Contact Us</Link>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <h5 className='sub-head'>Community</h5>
            <div className='mob-social-icons'>
                <Image src="./assets/images/telegram-icon.svg" className="foot-logos-icon" ></Image>
                <Image src="./assets/images/instagram-icon.svg" className="foot-logos-icon" ></Image>
                <Image src="./assets/images/x-icon.svg" className="foot-logos-icon" ></Image>
                <Image src="./assets/images/youtube-icon.svg" className="foot-logos-icon" ></Image>
                <Image src="./assets/images/medium-icon.svg" className="foot-logos-icon" ></Image>
            </div>
            <span>Copyright © 2026. BitsBuys  All Rights Reserved.</span>
        </div>
    )
}

export default Mobilehomefooter