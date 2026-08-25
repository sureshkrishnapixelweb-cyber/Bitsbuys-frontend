"use client"
import React, { useState } from "react"
import Link from "next/link"
import Userheader from '../components/Userheader'
import Userfooter from '../components/Userfooter'
import Leftsidemenu from '../components/Leftsidemenu'
import { Container, Form, Alert, Button, Modal, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const page = () => {
    const [showModal1, setShowModal1] = useState(false);

    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);
    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <article className="gridparentbox">
                <Container className="sitecontainer">
                    <div className="innerpagecontent">
                        <h2 className="h2 text-start"><Link href="/security" className="alink"><span className="me-2"><FontAwesomeIcon icon={faAngleLeft} /></span></Link>Delete Account</h2>
                    </div>
                    <div className="panelcontentbox mt-2">
                        <Form className="siteformbg">
                            <div className="secttable p-0">
                                <h3>By continuing, you confirm that you have read and agree to the following. After deleting your account,</h3>
                                {/* <ul className="notslist lightgraybg mt-3">
                                    <li>All trading capacities and login for your account will be disabled.</li>
                                    <li>All API keys for your account will be deleted.</li>
                                    <li>All devices for your account will be deleted.</li>
                                    <li>All pending withdrawals will be canceled.</li>
                                    <li>All open orders will be canceled.</li>
                                </ul> */}
                                <Alert variant="warning">
                                    <div className="alertpara">
                                        <p>1. Once an account is deleted, it cannot be reactivated.</p>
                                        <p>2. Please ensure that you withdraw all your assets before proceeding with account deletion. You are responsible for transferring any remaining funds.</p>
                                        <p>3. Please also make sure that all pending trades are completed before deleting your account.</p>
                                    </div>
                                </Alert>
                            </div>
                            <div className="secttable p-0">
                                <h3>Account has been disabled due to :</h3>
                                <ul className="notslist mt-3 checkradiobox">
                                    <li>
                                        <div className="">
                                            <Form.Check type="radio" id="switch1" label="I don't understand cryptocurrency and don't want to trade anymore" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="">
                                            <Form.Check type="radio" id="switch2" label="There is suspicious account activity, I would like to disable login for the account" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="">
                                            <Form.Check type="radio" id="switch3" label="I have another account already, so I want to delete this one." />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="">
                                            <Form.Check type="radio" id="switch4" label="I don't want to use BitsBuys anymore." />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="">
                                            <Form.Check type="radio" id="switch5" label="Others" />
                                        </div>
                                    </li>

                                </ul>
                            </div>

                            <Form.Group className="form-group mt-4">
                                <div className="">
                                    <Form.Check type="radio" id="understand" label="I fully understand and agree to the above." />
                                </div>
                            </Form.Group>
                            <Form.Group className="form-group">
                                <Button onClick={() => {

                                    handleShow1();
                                }} type="button" className="btn sitebtn btn-sm" id="deleteaccount">Delete Account</Button>
                            </Form.Group>

                            {/* <Alert variant="danger">
                                Please DO NOT deposit any assets to a deleted account. If you do, your funds will be lost, and we will not be able to retrieve them.
                            </Alert> */}
                        </Form>

                    </div>

                </Container>
            </article>
            <Userfooter />
            <Modal show={showModal1} onHide={handleClose1} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Security Verification
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Form.Group className="form-group">
                            <Form.Label>Enter the 6-digit code will be sent to test****@gmail.com</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control name="code" id="code" type="text" />
                                <InputGroup.Text id="getcode">Get Code</InputGroup.Text>
                            </InputGroup>
                            <p>Security Verification? <Link href="#" className="alink" id="resetverify">Reset code</Link></p>
                        </Form.Group>
                        <div className="d-flex gap-2 mt-3">
                            <Button type="button" className="sitebtn" id="cancel">Cancel</Button>
                            <Link href="/auth" className="btn sitebtn" id="confirm">Confirm</Link>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}
export default page


