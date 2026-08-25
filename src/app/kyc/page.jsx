"use client";
import React, { useState } from "react";
import Userheader from "../components/Userheader";
import Userfooter from "../components/Userfooter";
import Leftsidemenu from "../components/Leftsidemenu";
import {
    Container,
    Image,
    Modal,
    Button,
    Form,
    Alert,
    Row,
    Col,
    Nav,
    Table
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEye,
    faAngleLeft,
    faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import FileUpload from "./Fileupload";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AdvanceFileUpload from "./AdvanceFileUpload";
import ResponsiveTable from "../components/ResponsiveTable";
import SimpleBar from "simplebar-react";

const Kyc = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [showModal1, setShowModal1] = useState(false);

    const handleClose1 = () => setShowModal1(false);
    const handleShow2 = () => setShowModal1(true);

    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <article className="gridparentbox gridtabtopbox">
                <Container className="sitecontainer kycpage">
                    <div className="innerpagecontent d-flex justify-content-between align-items-center">
                        <h2 className="h2">
                            <Link href="/security" className="alink">
                                <span className="me-2">
                                    <FontAwesomeIcon icon={faAngleLeft} />
                                </span>
                            </Link>
                            Identification
                        </h2>
                        <button className="btn sitebtn btn-sm" onClick={setShowModal1}>
                            Advance KYC
                        </button>
                    </div>
                     <div className="panelcontentbox mb-3">
                        <div className="table-content kycnotestable">
                            <div>
                                <h2 className="subhead">KYC Verification</h2>
                                <p>KYC (Know Your Customer) verification confirms the identity of users before accessing platform services. It helps prevent fraud and ensures a safe and secure trading environment. </p>
                                <Button className="sitebtn me-2 btn-sm" id="startverify_btn">Start Verification</Button>
                            </div>
                            <div>
                                <Image src='/assets/images/kycimg.png' alt="img" width={100} height={100} className="kyimg"/>
                            </div>
                        </div>
                    </div>
                    <div className="panelcontentbox">
                        <Form method="post" className="siteformbg wizardform pf-box">
                            <Row>
                                <Col md="4">
                                    <Form.Group className="form-group">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" name="firstName" id="firstName" />
                                    </Form.Group>
                                </Col>
                                <Col md="4">
                                    <Form.Group className="form-group" col-lg={6}>
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" name="lastName" id="lastName" />
                                    </Form.Group>
                                </Col>
                                <Col md="4">
                                    <Form.Group className="form-group">
                                        <Form.Label>Country</Form.Label>
                                        <Form.Select className="form-control" id="country">
                                            <option></option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md="4">
                                    <Form.Group className="form-group">
                                        <Form.Label>Document Type</Form.Label>
                                        <Form.Select className="form-control" id="document1">
                                            <option></option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md="4">
                                    <Form.Group className="form-group">
                                        <Form.Label>Document Number</Form.Label>
                                        <Form.Control type="text" name="City" id="docnum" />
                                    </Form.Group>
                                </Col>
                                <Col md="4">
                                    <Form.Group className="form-group dateinput">
                                        <Form.Label>Expire Date</Form.Label>
                                        <DatePicker
                                            selected={startDate}
                                            placeholder="Enter your date of birth"
                                            id="exdate1"
                                            onChange={(date) => setStartDate(date)}
                                            dateFormat="dd/MM/yyyy"
                                            showYearDropdown
                                            showMonthDropdown
                                            dropdownMode="select"
                                            className="form-control"
                                            minDate={new Date}
                                            maxDate={new Date(2040, 0, 1)}
                                            popperPlacement="bottom"
                                        />
                                    </Form.Group>
                                </Col>
                                <FileUpload />
                                <div className="d-flex gap-2 pt-2">
                                    <Button type="button" className="btn sitebtn" id="submit">
                                        Submit
                                    </Button>
                                </div>
                            </Row>
                        </Form>
                    </div>
                    {/* <div className="devicetable mt-3">
                        <div className="panelcontentbox">
                            <h4 className="subhead pb-2">Basic KYC Verification</h4>
                            <SimpleBar className="table-responsive">
                                <Table className="sitetable" id="table1">
                                    <thead>
                                        <tr>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Country</th>
                                            <th>Document Type</th>
                                            <th>Document Number</th>
                                            <th>Expiry Date</th>
                                            <th>Front Proof</th>
                                            <th>Back Proof</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Test</td>
                                            <td>R</td>
                                            <td>India</td>
                                            <td>-</td>
                                            <td>123456789</td>
                                            <td>11-03-2026</td>
                                            <td>
                                                <Link target="_blank" href="#" className="alink">View file</Link>
                                            </td>
                                            <td>
                                                <Link target="_blank" href="#" className="alink">View file</Link>
                                            </td>
                                            <td><span className="t-red">Awaiting approval</span></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </SimpleBar>
                            <ResponsiveTable tableId="table1" />
                        </div>
                    </div> */}
                    <div className="devicetable mt-3">
                        <div className="panelcontentbox">
                            <h4 className="subhead pb-2">Account Benefits</h4>
                            <SimpleBar className="table-responsive">
                                <Table className="sitetable" id="table2">
                                    <thead>
                                        <tr>
                                            <th>Verify Type</th>
                                            <th>Deposit Limit</th>
                                            <th>Withdrawal Limit</th>
                                            <th>Review Time</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Unverified</td>
                                            <td>Unlimited</td>
                                            <td>--</td>
                                            <td>-</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>Basic KYC</td>
                                            <td>Unlimited</td>
                                            <td>$2,000,000 Daily</td>
                                            <td>3 - 5 Business Days</td>
                                            <td>Unverified</td>
                                        </tr>
                                        <tr>
                                            <td>Advanced KYC</td>
                                            <td>Unlimited</td>
                                            <td>$20,000,000 Daily</td>
                                            <td>5 - 10 Business Days</td>
                                            <td>Unverified</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </SimpleBar>
                            <ResponsiveTable tableId="table2" />
                        </div>
                    </div>
                </Container>
            </article>
            <Userfooter />

            <Modal
                show={showModal1}
                onHide={handleClose1}
                className="modalbgt nummodal "
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Advance KYC Verification
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="siteformbg">
                        <Form.Group className="form-group">
                            <Form.Label>Type</Form.Label>
                            <Form.Control name="code" id="addresscode" />
                        </Form.Group>
                        <AdvanceFileUpload />
                        <div className="d-flex gap-2 mt-3">
                            <Button
                                type="button"
                                className="borderbtn"
                                data-bs-dismiss="modal"
                                id="closebtn"
                            >
                                Cancel
                            </Button>
                            <Link href="" className="btn sitebtn" id="confirmbtn">
                                Confirm
                            </Link>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Kyc;
