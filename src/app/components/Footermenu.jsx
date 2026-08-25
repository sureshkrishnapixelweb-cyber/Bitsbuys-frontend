import React from "react";
import Link from "next/link";
import { Container, Row, Col, Form, InputGroup, Image } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
const Homefooter = () => {
  return (
    <footer className="footerbottombg">
      <section>
        <Container>
          <div className="footerbox">
            <Row className="menusec subscribebg">
              <Col lg={4} md={4} sm={12}>
                <div className="footabtcnt">
                  <div className="mb-3 footlogo">
                    <Image src="assets/images/logo.png" width={100} height={57} className="" alt="logo" />
                  </div>
                  <p>
                    BitsBuys is a secure and powerful crypto trading platform where users can buy, sell, and manage digital assets with ease.
                  </p>
                 <div className="my-3">
                    <Link href="/contactus" className="tbn gradient-bg sitebtn">Contact Us <FontAwesomeIcon icon={faArrowRightLong} /></Link>
                  </div>
                  <p className="mb-2">Our Social Handles</p>
                  <div className="footlogo-align">
                    <Image src="./assets/images/linked-icon.svg" className="foot-logos-icon" ></Image>
                    <Image src="./assets/images/x-icon.svg" className="foot-logos-icon" ></Image>
                    <Image src="./assets/images/insta-icon.svg" className="foot-logos-icon" ></Image>

                  </div>
                </div>
              </Col>
              <Col lg={8} md={8} sm={12} className="d-flex flex-column ">
                <div className="footer-flex">
                  <div>
                    <h3 className="h3">Quick Links</h3>
                    <ul>
                      <li>
                        <Link id="homelink" href="/">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link id="aboutuslink" href="/aboutus">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link id="featureslink" href="/#features">
                          Features
                        </Link>
                      </li>
                      <li>
                        <Link id="how-it-worklink" href="/#how-it-work">
                          How It Works
                        </Link>
                      </li>
                      <li>
                        <Link id="marketslink" href="/markets">
                          Markets
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="h3">Services</h3>
                    <ul>
                      <li>
                        <Link id="spottradinglink" href="/trade">
                          Spot Trading
                        </Link>
                      </li>
                      <li>
                        <Link id="googlelink" href="#">
                          Google Play
                        </Link>
                      </li>
                      <li>
                        <Link id="appstorelink" href="#">
                          App Store
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="h3">Company</h3>
                    <ul>
                      <li>
                        <Link id="aboutuslink" href="/aboutus">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link id="termslink" href="/terms">
                          Terms & Conditions
                        </Link>
                      </li>
                      <li>
                        <Link id="privacylink" href="/privacy">
                          Privacy Policy

                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="h3">Support</h3>
                    <ul>
                      <li>
                        <Link id="contactlink" href="/contactus">
                          Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link id="supportlink" href="/support-24">
                          24/7 Support
                        </Link>
                      </li>
                      <li>
                        <Link id="faqlink" href="/#faq">
                          FAQ’s
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <hr />
                <div className="text-end">
                  <span className="footer-span">Copyright © 2026 BitsBuys. All Rights Reserved.</span>
                </div>
              </Col>

            </Row>
          </div>

        </Container>


      </section>
    </footer>
  );
};
export default Homefooter;
