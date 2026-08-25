"use client"
import React, { useState, useEffect } from "react"
import Userheader from '../components/Userheader'
import Userfooter from '../components/Userfooter'
import Leftsidemenu from '../components/Leftsidemenu'
import { Container, InputGroup, Image, Modal, Button, Form, Alert, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link"
import UploadForm from './UploadForm';

const page = () => {

    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);


    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);

    const handleClose2 = () => setShowModal2(false);
    const handleShow2 = () => setShowModal2(true);

    const handleClose3 = () => setShowModal3(false);
    const handleShow3 = () => setShowModal3(true);

    const [value, setValue] = useState("500");

    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <article className="gridparentbox gridtabtopbox">
                <Container className="sitecontainer">
                    <div className="innerpagecontent">
                        <h2 className="h2">Settings</h2>
                    </div>
                    <div className='innerpagetab boxtabb'>
                        <div className="securitypage">
                            <div className="securityinnerbox panelcontentbox mt-0">
                                <h2 className="subhead pb-2 mb-2 pt-0">Edit Profile Details</h2>
                                <p className="mb-2"></p>
                                <div className="securityalert">
                                    <div className="faverifybox pt-2">
                                        <div className="profiletablebox contentbox">
                                            <div>
                                                <Image src="assets/images/profile.svg" width={50} height={50} alt="icon" className="securityiconbox" />
                                            </div>
                                            <div>
                                                <h4>Johnwilliam</h4>
                                                <h5 className="t-gray">Update your nickname and manage your account.</h5>
                                                <small className="t-red">Upload your profile image (JPG, JPEG, PNG – Max 1MB).</small>
                                            </div>
                                            <div className="text-center statusdivbox">
                                                <p className="align-items-center">Nick name</p>
                                            </div>
                                            <div>
                                                <Button href="#" id="profileedit" className="sitebtn btn-sm" onClick={handleShow1}>Edit</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="securityinnerbox mt-3 panelcontentbox">
                                <h2 className="subhead mb-2">Advanced Withdrawal Settings</h2>
                                <div className="faverifybox">
                                    <div className="profiletablebox contentbox">
                                        <div> <Image src="assets/images/withdraw-whitelist.png" width={50} height={50} alt="icon" className="securityiconbox" /> </div>
                                        <div>
                                            <h4>Withdrawal Whitelist</h4>
                                            <h5 className="t-gray pb-2"> Once enabled, your account will only be able to withdraw funds to addresses added to your whitelist.</h5>
                                            <Link href="/settings/whitelist" className="alink">Address Magements</Link>
                                        </div>
                                        <div className="text-center statusdivbox">
                                            <p><FontAwesomeIcon icon={faTimesCircle} className="me-1" />Off</p>
                                        </div>
                                        <div><Button id="whitelistbtn" className="sitebtn btn-sm" onClick={handleShow2}>Set Up</Button> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </article>
            <Userfooter />

            <Modal show={showModal1} onHide={handleClose1} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="siteformbg">
                        <div className="profilebox">
                            <div className="profilimg">
                                <div className="profilepic" style={{ backgroundImage: 'url(../assets/images/profile.svg)' }} id='profilepic'>
                                </div>
                                <UploadForm />
                            </div>
                            <div className="profiledatainfo mt-3">
                                <h4><span className="desc t-gray"><small className='t-red'>(Upload your image like jpg,jpeg,png (MAX: 1MB))</small></span></h4>

                            </div>
                        </div>
                        <Form.Group className="form-group">
                            <Form.Label>My Nickname</Form.Label>
                            <Form.Control type="text" name="" id="nickname" placeholder="Enter Nickname" />
                        </Form.Group>
                        <Form.Group className="form-group noteslist">
                            <p><b>Notes :</b></p>
                            <p>1. Avoid offensive or misleading names.</p>
                            <p>2. Your nickname may be visible to other users.</p>
                            <p>3. Profile images must follow platform guidelines.</p>
                        </Form.Group>
                        <Form.Group className="form-group text-center d-flex flxbtn m-0">
                            <Button className="borderbtn me-2 w-100">Cancel</Button>
                            <Button className="sitebtn w-100">Confirm</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
            <Modal show={showModal2} onHide={handleClose2} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Emaill Verification
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