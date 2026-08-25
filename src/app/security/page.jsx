"use client"
import React, { useState, useEffect } from "react"
import Userheader from '../components/Userheader'
import Userfooter from '../components/Userfooter'
import Leftsidemenu from '../components/Leftsidemenu'
import { Container, InputGroup, Image, Modal, Button, Form, Alert, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link"

const page = () => {
    useEffect(() => {
        // Show the modal when the page loads
        setShowModal10(true);
    }, []);

    const [password, setPassword] = useState("");
    const [value, setValue] = useState("");


    const rules = {
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[!@#$%^&*]/.test(password),
        length: password.length >= 8
    };

    const handleSelectChange = (e) => {
        const value = e.target.value;

        if (value !== "Choose...") {
            setShowModal12(true); // open modal
        }
    };

    const handleInputChange = (e) => {
        const input = e.target.value;
        setValue(input);

        if (/^[0-9]*$/.test(input) && input.length > 0) {
            setIsPhone(true);
        } else {
            setIsPhone(false);
        }
    };

    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [showModal4, setShowModal4] = useState(false);
    const [showModal5, setShowModal5] = useState(false);
    const [showModal6, setShowModal6] = useState(false);
    const [showModal7, setShowModal7] = useState(false);
    const [showModal8, setShowModal8] = useState(false);
    const [showModal9, setShowModal9] = useState(false);
    const [showModal10, setShowModal10] = useState(false);
    const [showModal11, setShowModal11] = useState(false);
    const [showModal12, setShowModal12] = useState(false);


    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);

    const handleClose2 = () => setShowModal2(false);
    const handleShow2 = () => setShowModal2(true);

    const handleClose3 = () => setShowModal3(false);
    const handleShow3 = () => setShowModal3(true);

    const handleClose4 = () => setShowModal4(false);
    const handleShow4 = () => setShowModal4(true);

    const handleClose5 = () => setShowModal5(false);
    const handleShow5 = () => setShowModal5(true);

    const handleClose6 = () => setShowModal6(false);
    const handleShow6 = () => setShowModal6(true);

    const handleClose7 = () => setShowModal7(false);
    const handleShow7 = () => setShowModal7(true);

    const handleClose8 = () => setShowModal8(false);
    const handleShow8 = () => setShowModal8(true);

    const handleClose9 = () => setShowModal9(false);
    const handleShow9 = () => setShowModal9(true);

    const handleClose10 = () => setShowModal10(false);
    const handleShow10 = () => setShowModal10(true);

    const handleClose11 = () => setShowModal11(false);
    const handleShow11 = () => setShowModal11(true);

    const handleClose12 = () => setShowModal12(false);
    const handleShow12 = () => setShowModal12(true);
    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <article className="gridparentbox gridtabtopbox">
                <Container className="sitecontainer">
                    <div className="innerpagecontent">
                        <h2 className="h2">Security Settings</h2>
                    </div>
                    <div className='innerpagetab boxtabb'>
                        {/* <Alert variant="warning">
                            <b>Note :</b> For your security, withdrawals will be temporarily unavaliable for 24 hours after changing security settings
                        </Alert> */}
                        <div className="securitypage">
                            <div className="securityinnerbox panelcontentbox mt-0">
                                <div className="">
                                    <div>
                                        <h2 className="subhead pb-2 mb-2 pt-0">Two-Factor Authentication (2FA)</h2>
                                        <p className="mb-2">Strengthen your account protection by enabling at least one 2FA method.</p>
                                        <div className="securityalert">
                                            <div className="d-flex gap-0">
                                                <div>
                                                    <p className="mb-0">Security Level :
                                                        {/* <span className="t-green">Strong</span> */}
                                                        <span className="levelbox lowlevel me-1"></span>
                                                        <span className="levelbox mediumlevel"></span>
                                                        <span className="levelbox stronglevel"></span></p>
                                                </div>
                                                {/* <div className="ps-2">
                                                    <span className="levelbox lowlevel"></span>
                                                    <span className="levelbox mediumlevel"></span>
                                                    <span className="levelbox stronglevel"></span>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="faverifybox pt-2">
                                        <div className="profiletablebox contentbox">
                                            <div>
                                                <Image src="assets/images/auth.png" width={50} height={50} alt="icon" className="securityiconbox" />
                                            </div>
                                            <div>
                                                <h4>Google Authenticator</h4>
                                                <h5 className="t-gray">Add an extra bitsbuys of security using Google Authenticator for withdrawals and security actions.</h5>
                                            </div>
                                            <div className="text-center statusdivbox">
                                                <p className="align-items-center"><FontAwesomeIcon icon={faTimesCircle} className="me-1" />Off</p>
                                            </div>
                                            <div>
                                                <Link href="/auth" id="authbtn" className="sitebtn btn-sm graybtn">Set Up</Link>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="profiletablebox contentbox">
                                            <div> <Image src="assets/images/email.png" width={50} height={50} alt="icon" className="securityiconbox" /> </div>
                                            <div>
                                                <h4 className=" d-flex align-items-center gap-3">Email Verification <span>
                                                    <p className="t-white align-items-center"><FontAwesomeIcon icon={faCheckCircle} className="me-1 t-green" />Jo***m@gmail.com</p></span> </h4>
                                                <h5 className="t-gray">Verify your email to secure login, password recovery, and withdrawal confirmations.</h5>
                                            </div>
                                            <div className="text-center statusdivbox">
                                                {/* <p className="t-white align-items-center"><FontAwesomeIcon icon={faCheckCircle} className="me-1 t-green" />Jo***m@gmail.com</p> */}
                                                <p className="align-items-center"><FontAwesomeIcon icon={faTimesCircle} className="me-1" />Off</p>

                                            </div>
                                            <div><Button id="emailbtn" className="sitebtn btn-sm graybtn" onClick={handleShow1}>Change</Button> </div>
                                        </div>
                                        <hr />
                                        <div className="profiletablebox contentbox">
                                            <div> <Image src="assets/images/mobile-3d.png" width={50} height={50} alt="icon" className="securityiconbox" /> </div>
                                            <div>
                                                <h4 className=" d-flex align-items-center gap-3">Mobile Number Verification <span>
                                                    <p className="t-white align-items-center"></p></span> </h4>
                                                <h5 className="t-gray">Verify your mobile number to receive login verification codes, withdrawal confirmations, and important account security alerts.</h5>
                                            </div>
                                            <div className="text-center statusdivbox">
                                                {/* <p className="t-white align-items-center"><FontAwesomeIcon icon={faCheckCircle} className="me-1 t-green" />Jo***m@gmail.com</p> */}
                                                <p className="align-items-center"><FontAwesomeIcon icon={faTimesCircle} className="me-1" />Off</p>

                                            </div>
                                            <div><Button id="emailbtn" className="sitebtn btn-sm graybtn" onClick={handleShow11}>Set Up</Button> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="securityinnerbox mt-3 panelcontentbox">
                                <h2 className="subhead mb-2">Advanced Security Settings</h2>
                                <div className="faverifybox">
                                    <div className="profiletablebox contentbox">
                                        <div> <Image src="assets/images/anticode.png" width={50} height={50} alt="icon" className="securityiconbox" /> </div>
                                        <div>
                                            <h4>Anti-Phishing Code</h4>
                                            <h5 className="t-gray">Create a personalized code that will appear in all bitsbuys emails to protect you from phishing attempts.</h5>
                                        </div>
                                        <div className="text-center statusdivbox">
                                            <p><FontAwesomeIcon icon={faTimesCircle} className="me-1" />Off</p>
                                        </div>
                                        <div><Link id="antipshbtn" className="sitebtn btn-sm graybtn" href="/anticode">Set Up</Link> </div>
                                    </div>
                                    <hr />
                                    <div className="profiletablebox contentbox">
                                        <div> <Image src="assets/images/login-password.png" width={50} height={50} alt="icon" className="securityiconbox" /> </div>
                                        <div>
                                            <h4>Login Password</h4>
                                            <h5 className="t-gray">Improve your account safety by updating to a stronger password.</h5>
                                        </div>
                                        <div><Button id="changepassword_btn" className="sitebtn btn-sm" onClick={handleShow9}>Change</Button> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="securityinnerbox mt-3 panelcontentbox">
                                <h2 className="subhead mb-2">Devices & Account Activities</h2>
                                <div className="faverifybox">
                                    <div className="profiletablebox contentbox">
                                        <div> <Image src="assets/images/account-activities.png" width={50} height={50} alt="icon" className="securityiconbox" /> </div>
                                        <div>
                                            <h4>Account Activity</h4>
                                            <h5 className="t-gray">View recent login attempts, device information, and security events for better account monitoring.</h5>
                                        </div>
                                        <div> <Link id="activityauth" className="sitebtn btn-sm graybtn" href="/accountactivity">View</Link> </div>
                                    </div>
                                    <hr />
                                    <div className="profiletablebox contentbox">
                                        <div> <Image src="assets/images/delete.png" width={50} height={50} alt="icon" className="securityiconbox" /> </div>
                                        <div>
                                            <h4>Delete Account</h4>
                                            <h5 className="t-gray">Permanently delete your bitsbuys account. Once deleted, it cannot be recovered, and all services will become inaccessible.</h5>
                                        </div>
                                        <div>
                                            <Link id="deleteauth" className="sitebtn red-btn btn-sm" href="/deleteaccount">Delete</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </article>
            <Userfooter />


            {/* Google Authenticator  */}
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

            {/* Email */}
            <Modal show={showModal2} onHide={handleClose2} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Are you sure you want to change your email address?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul className="notslist">
                        <li> Withdrawals will be disabled for 24 hours after changing email to protect your account. </li>
                        <li> Unlinking your email may expose you to a greater risk of unauthorized access. We strongly
                            recommend you to turn on your multi-factor authentication. </li>
                        <li> You will need to log in to your account after changing your email. </li>
                    </ul>
                    <div className="d-flex gap-2 mt-3">
                        <Button type="button" className="" data-bs-dismiss="modal">Cancel</Button>
                        <Button className="btn sitebtn" onClick={() => { handleClose2(); handleShow3(); }}>Confirm</Button>
                    </div>
                </Modal.Body>
            </Modal>
            {/* Change Email */}
            {/* Email verification */}
            <Modal show={showModal3} onHide={handleClose3} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
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
            {/* Phone Number  */}
            <Modal show={showModal4} onHide={handleClose4} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Security Verification
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Form.Group className="form-group" >
                            <Form.Label>Enter the 6-digit code will be sent to test****@gmail.com</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control name="code" id="code" type="text" />

                                <InputGroup.Text id="getcode">Get Code</InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                        <div className="d-flex gap-2 mt-3">
                            <Button type="button" className="sitebtn" data-bs-dismiss="modal">Cancel</Button>
                            <Link href="" className="btn sitebtn" onClick={() => { handleClose4(); handleShow5(); }}>Confirm</Link>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
            <Modal show={showModal5} onHide={handleClose5} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add Phone Number
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Alert variant="warning">
                            <b>Note :</b>For your security, withdrawals will be temporarily unavaliable for 24 hours after changing security settings
                        </Alert>
                        <Form.Group className="form-group" >
                            <Form.Label>Enter Mobile Number</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon2">+91</InputGroup.Text>
                                <Form.Control name="code" id="verificode" />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="form-group" >
                            <Form.Label>Enter SMS Verification Code</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control name="code" id="smscode" type="text" />
                                <InputGroup.Text id="basic-addon2">Get Code</InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                        <div className="d-flex gap-2 mt-3">
                            <Button type="button" className="sitebtn" data-bs-dismiss="modal">Cancel</Button>
                            <Link href="" className="btn sitebtn" id="confirm">Confirm</Link>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* Login Password */}
            <Modal show={showModal6} onHide={handleClose6} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Account Restrictions</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>For your security, withdrawals will be temporarily unavailable for 24 hours after changing security settings.</p>
                    <div className="d-flex gap-2 mt-3">
                        <Button type="button" className="sitebtn">Cancel</Button>
                        <Button className="btn sitebtn" onClick={() => { handleClose6(); handleShow7(); }}>Confirm</Button>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal show={showModal7} onHide={handleClose7} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Account Restrictions</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>For your security, withdrawals will be temporarily unavailable for 24 hours after changing security settings.</p>
                    <div className="d-flex gap-2 mt-3">
                        <Button type="button" className="sitebtn">Cancel</Button>
                        <Button className="btn sitebtn" onClick={() => { handleClose7(); handleShow8(); }}>Confirm</Button>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal show={showModal8} onHide={handleClose8} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Security Verification
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Form.Group className="form-group" >
                            <Form.Label>Enter the 6-digit code will be sent to test****@gmail.com</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control name="code" id="verificode" />
                                <InputGroup.Text id="basic-addon2">Get Code</InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                        <div className="d-flex gap-2 mt-3">
                            <Button type="button" className="sitebtn" data-bs-dismiss="modal">Cancel</Button>
                            <Link href="" className="btn sitebtn" onClick={() => { handleClose8(); handleShow9(); }}>Confirm</Link>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
            <Modal show={showModal9} onHide={handleClose9} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Change Login Password
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Alert variant="warning">
                            <b>Note :</b>For your security, withdrawals will be temporarily unavaliable for 24 hours after changing security settings
                        </Alert>
                        <Form.Group className="form-group">
                            <Form.Label>Current Password</Form.Label>
                            <InputGroup>
                                <Form.Control type="password" id="currentPassword" />
                                <div className="input-group-append">
                                    <InputGroup.Text> <FontAwesomeIcon icon={faEye} id="eye1" /> </InputGroup.Text>
                                </div>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="form-group">
                            <Form.Label>New Password</Form.Label>
                            <InputGroup>
                                <Form.Control type="password" id="newPassword" />
                                <div className="input-group-append">
                                    <InputGroup.Text> <FontAwesomeIcon icon={faEye} id="eye1" /> </InputGroup.Text>
                                </div>
                            </InputGroup>
                        </Form.Group>
                        <div className="password-rules mb-3">
                            <div className={`rule ${rules.uppercase ? "valid" : ""}`}>
                                <span className="circle"></span>
                                At least one uppercase letter
                            </div>

                            <div className={`rule ${rules.number ? "valid" : ""}`}>
                                <span className="circle"></span>
                                At least one numeric digit
                            </div>

                            <div className={`rule ${rules.special ? "valid" : ""}`}>
                                <span className="circle"></span>
                                One special character
                            </div>

                            <div className={`rule ${rules.length ? "valid" : ""}`}>
                                <span className="circle"></span>
                                At least 8 to 128 characters
                            </div>
                        </div>
                        <Form.Group className="form-group">
                            <Form.Label>Confirm Password</Form.Label>
                            <InputGroup>
                                <Form.Control type="password" id="confirmPassword" />
                                <div className="input-group-append">
                                    <InputGroup.Text> <FontAwesomeIcon icon={faEyeSlash} id="eye3" /> </InputGroup.Text>
                                </div>
                            </InputGroup>
                        </Form.Group>

                        <div className="d-flex gap-2 mt-3">
                            <Button type="button" className="sitebtn" data-bs-dismiss="modal">Cancel</Button>
                            <button
                                onClick={() => {
                                    handleClose9();
                                    handleShow1();
                                }}
                                className="btn sitebtn"
                                id="confirm"
                            >
                                Confirm
                            </button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
            {/* protect */}
            <Modal show={showModal10} onHide={handleClose10} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Security Reminder</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Your account security level is low. Please enable at least one more verification mode.</p>
                    <div className="fundboxb text-center">
                        <Link href="/auth" className="table-content lightgraybg">
                            <Image src="assets/images/auth.svg" width={20} height={20} alt="icon" />
                            <h5>Link Google Authenticator</h5>
                        </Link>
                    </div>
                    <div className="text-center mt-4">
                        <p className="mb-0"><Link href="#" onClick={() => { handleClose1(); }} className="btn sitebtn btn-sm w-100">Enable Later</Link></p>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal show={showModal11} onHide={handleClose11} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Security Verification
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Form.Group className="form-group">
                            <Form.Label>Enter Email / Mobile</Form.Label>


                            <div className="d-flex gap-2 align-items-center">

                                <div className="country-input" onClick={handleSelectChange}>
                                    <Image
                                        className="flag-icon"
                                        src="/assets/images/eng.svg"
                                        alt="icon"
                                        width={20}
                                        height={20}
                                    />


                                    <Form.Control
                                        placeholder="+91"
                                        value={value}
                                        readOnly
                                        className="country-control"
                                    />
                                </div>
                                <Form.Control
                                    placeholder="Enter your mobile"
                                    value={value}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </Form.Group>
                        <div className="d-flex gap-2 mt-3">
                            <Button type="button" className="sitebtn" id="cancel">Cancel</Button>
                            <Link href="/auth" className="btn sitebtn" id="confirm">Confirm</Link>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>

            <Modal
                show={showModal12}
                onHide={handleClose12}
                className="modalbgt authmodal"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Select Your code</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div>
                        <Form.Group className="form-group">
                            <Form.Control

                                placeholder="Search...."
                                className="form-control-phone"
                            />
                        </Form.Group>
                        <div className="otp-main">
                            <div>
                                <Image className="me-2" src="/assets/images/eng.svg" alt="icon" width={20} height={20} />
                                <span className="langenicon">
                                    Eng
                                </span>
                            </div>
                            <span>+03</span>
                        </div>
                        <div className="otp-main">
                            <div>
                                <Image className="me-2" src="/assets/images/eng.svg" alt="icon" width={20} height={20} />
                                <span className="langenicon">
                                    Eng
                                </span>
                            </div>
                            <span>+03</span>
                        </div>
                        <div className="otp-main">
                            <div>
                                <Image className="me-2" src="/assets/images/eng.svg" alt="icon" width={20} height={20} />
                                <span className="langenicon">
                                    Eng
                                </span>
                            </div>
                            <span>+03</span>
                        </div>
                        <div className="otp-main">
                            <div>
                                <Image className="me-2" src="/assets/images/eng.svg" alt="icon" width={20} height={20} />
                                <span className="langenicon">
                                    Eng
                                </span>
                            </div>
                            <span>+03</span>
                        </div>

                    </div>
                </Modal.Body>
            </Modal>

        </div>

    )
}

export default page