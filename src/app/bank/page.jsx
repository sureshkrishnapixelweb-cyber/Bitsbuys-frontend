"use client"
import React, { useState } from 'react'
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import Leftsidemenu from '../components/Leftsidemenu';
import { Container, Form, Image, Table, Button, Badge, Modal, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ResponsiveTable from "../components/ResponsiveTable";

const Bank = () => {

    const [showModal1, setShowModal1] = useState(false);
    const handleShowModal1 = () => setShowModal1(true);
    const handleCloseModal1 = () => setShowModal1(false);

    const [showModal2, setShowModal2] = useState(false);
    const handleShowModal2 = () => setShowModal2(true);
    const handleCloseModal2 = () => setShowModal2(false);

    const [showModal3, setShowModal3] = useState(false);
    const handleShowModal3 = () => setShowModal3(true);
    const handleCloseModal3 = () => setShowModal3(false);


    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());


    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <article className="gridparentbox">
                <Container className="container sitecontainer historypage">
                    <div className="innerpagecontent">
                        <h2 className="h2">Bank Details</h2>
                        <div className="tabrightbox">
                            <Button onClick={handleShowModal1} id="addbank" className="btn sitebtn btn-sm"><span className="backtxt ms-2">Add Bank</span></Button>
                        </div>
                    </div>
                    <div className="panelcontentbox">
                        <div className="historsysrch">
                            <div className="searchfrmbox">
                                <Form className="siteformbg">
                                    <div className="searchfrm">
                                        <Form.Group className="form-group dateinput">
                                            <DatePicker selected={startDate} placeholder="From Date" id='startdate' onChange={(date) => setStartDate(date)} dateFormat="dd/MM/yyyy" showYearDropdown showMonthDropdown dropdownMode="select" className="form-control" />
                                        </Form.Group>
                                        <Form.Group className="form-group dateinput">
                                            <DatePicker selected={endDate} placeholder="To Date" id='enddate' onChange={(date) => setEndDate(date)} dateFormat="dd/MM/yyyy" showYearDropdown showMonthDropdown dropdownMode="select" className="form-control" />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Select className="form-control" id="coin">
                                                <option>All</option>
                                                <option>BTC</option>
                                                <option>BNB</option>
                                                <option>ETH</option>
                                                <option>TRX</option>
                                                <option>SOL</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <div className="clearbtn">
                                            <Form.Group className="form-group">
                                                <Button className="btn sitebtn btn-sm me-1" id="clear">
                                                    Clear
                                                </Button>
                                                <Link href="/" className="btn sitebtn btn-sm red-btn" id="reset">
                                                    Reset
                                                </Link>
                                            </Form.Group>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </div>
                        <SimpleBar className="table-responsive sitescroll">
                            <Table className="sitetable table-responsive-stack" id="table1">
                                <thead>
                                    <tr>
                                        <th>Date & Time</th>
                                        <th>Crypto / Token</th>
                                        <th>Bank Name</th>
                                        <th>Account Type</th>
                                        <th>Account Name</th>
                                        <th>Account No</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>11/03/2026, 05:05:00</td>
                                        <td>
                                            USD
                                        </td>
                                        <td>Test</td>
                                        <td>
                                            <span className="t-green">Test Bank</span>
                                        </td>
                                        <td>Testname</td>
                                        <td>2563971</td>
                                        <td>
                                            <Button className='sitebtn btn-sm me-2' onClick={handleShowModal2}>Update</Button>
                                            <Button className='sitebtn btn-sm red-btn' onClick={handleShowModal3}>Delete</Button>
                                        </td>
                                    </tr>

                                </tbody>
                            </Table>
                        </SimpleBar>
                        <ResponsiveTable tableId="table1" />
                    </div>
                </Container>
            </article>
            <Userfooter />
            <Modal show={showModal1} onHide={handleCloseModal1}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='modalbgt'>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add Bank Details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="siteformbg">
                        <Row>
                            <Col md={6}>
                                <Form.Group className="form-group">
                                    <Form.Label className="">Currency <span className="text-danger">*</span></Form.Label>
                                    <Form.Select className="form-control" id="currency">
                                        <option>USD</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group className="form-group">
                                    <Form.Label className="">Account Type <span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" id="accounttype" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group className="form-group">
                                    <Form.Label className="">Account Name <span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" id="accountname" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="form-group">
                                    <Form.Label className="">Account No <span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" id="account_no" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group className="form-group">
                                    <Form.Label className="">Bank Code <span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" id="bank_code" />
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group className="form-group">
                                    <Form.Label className="">Bank Branch<span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" id="bank_branch" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group className="form-group">
                                    <Form.Label className="">Bank Branch Code<span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" id="bank_branchcode" />
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group className="form-group">
                                    <Form.Label className="">Bank Name<span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" id="bank_name" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={12}>
                                <Form.Group className="form-group">
                                    <Form.Label className="">Bank Address<span className="text-danger">*</span></Form.Label>
                                    <Form.Control as="textarea" rows={3} name="Message" id="address_add" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="text-center">
                            <Button className="btn sitebtn btn-sm" id="submit">Submit</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>


            <Modal show={showModal2} onHide={handleCloseModal2}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='modalbgt'>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update Bank Details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="siteformbg">
                        <Row>
                            <Col md={6}>
                                <Form.Group className="form-group">
                                    <Form.Label className="">Currency <span className="text-danger">*</span></Form.Label>
                                    <Form.Select className="form-control" id="updatecurrency">
                                        <option>USD</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group className="form-group">
                                    <Form.Label className="">Account Type <span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" id="updateaccounttype" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group className="form-group">
                                    <Form.Label className="">Account Name <span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" id="updateaccountname" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="form-group">
                                    <Form.Label className="">Account No <span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" id="updateaccount_no" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group className="form-group">
                                    <Form.Label className="">Bank Code <span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" id="updatebank_code" />
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group className="form-group">
                                    <Form.Label className="">Bank Branch<span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" id="updatebank_branch" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group className="form-group">
                                    <Form.Label className="">Bank Branch Code<span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" id="updatebank_branchcode" />
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group className="form-group">
                                    <Form.Label className="">Bank Name<span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" id="updatebank_name" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={12}>
                                <Form.Group className="form-group">
                                    <Form.Label className="">Bank Address<span className="text-danger">*</span></Form.Label>
                                    <Form.Control as="textarea" rows={3} name="Message" id="update-address" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="text-center">
                            <Button className="btn sitebtn btn-sm" id="submit">Submit</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>

            <Modal show={showModal3} onHide={handleCloseModal3}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='modalbgt'>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Delete Bank Detail
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="siteformbg">
                        <div className="text-center">
                            <h6 className="mb-4">Are you want to remove this bank account?</h6>
                            <Button className="btn sitebtn btn-sm me-1" id="yes_btn">Yes</Button>
                            <Button className="btn sitebtn btn-sm red-btn" id="no_btn">No</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Bank;