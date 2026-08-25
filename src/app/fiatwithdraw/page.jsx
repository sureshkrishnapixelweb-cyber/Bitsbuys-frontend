
"use client"
import React, { useState, useEffect } from 'react'
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import Leftsidemenu from '../components/Leftsidemenu';
import { Container, Form, Image, Table, InputGroup, Button, Badge, Modal, Accordion, Nav } from 'react-bootstrap';
import Link from 'next/link';
import Simplebar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import ResponsiveTable from '../components/ResponsiveTable';

const page = () => {

    useEffect(() => {
        // Show the modal when the page loads
        setShowModal2(true);
    }, []);

    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);

    const handleClose2 = () => setShowModal2(false);
    const handleShow2 = () => setShowModal2(true);

    const [activeKey, setActiveKey] = useState('1');
    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <article className="gridparentbox">
                <Container className="sitecontainer walletpagebg depositbg fiatdpst">
                    <div className="innerpagecontent">
                        <h2 className="h2 text-start"><Link href="/wallet" className='alink'><span className="pe-2"><FontAwesomeIcon icon={faAngleLeft} /></span></Link>Withdraw Fiat</h2>
                    </div>
                    <div className="flexboxtable leftsidetabbg">
                        <div className="mt-0 panelcontentbox">
                            <Form className="siteformbg">
                                <div className="innerpagetab historytab mb-4 wallettab">
                                    <Nav variant="pills" className="tabbanner">
                                        <Nav.Item><Link href="/withdraw" className="nav-link" id='cryptotab'>Crypto</Link></Nav.Item>
                                        <Nav.Item><Link href="/fiatwithdraw" className="active  nav-link" id='fiattab'>Fiat</Link></Nav.Item>
                                    </Nav>
                                </div>
                                <div className="stpsflowbox">
                                    <div className="d-flex stpsfexbox currentstep">
                                        <div><span className="stpiconb">1</span></div>
                                        <div>
                                            <Form.Group className="form-group">
                                                <Form.Label>Select Crypto </Form.Label>
                                                <Form.Select className="form-control" id='currency'>
                                                    <option>BTC</option>
                                                    <option>ETH</option>
                                                    <option>SOL</option>
                                                    <option>TRX</option>
                                                    <option>LTC</option>
                                                    <option>AVAX</option>
                                                    <option>DOGE</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="d-flex stpsfexbox currentstep">
                                        <div><span className="stpiconb">2</span></div>
                                        <div>
                                            <Form.Group className="form-group">
                                                <Form.Label>Select Payment Method</Form.Label>
                                                <Form.Select className="form-control" id='paymentmethod'>
                                                    <option></option>
                                                    <option>BTC</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="d-flex stpsfexbox currentstep">
                                        <div><span className="stpiconb">3</span></div>
                                        <div>
                                            <Form.Group className="form-group">
                                                <div className="tabrightbox bnkaddbox">
                                                    <Link href="/bank" className='alink'>Add Bank</Link>
                                                </div>
                                                <Form.Label>Select Bank Name</Form.Label>
                                                <Form.Select className="form-control" id='bankname'>
                                                    <option></option>
                                                    <option>BTC</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="d-flex stpsfexbox currentstep">
                                        <div><span className="stpiconb">4</span></div>
                                        <div>
                                            <Form.Group className="form-group">
                                                <Form.Label>Account Number</Form.Label>
                                                <Form.Control id='accountnumber' />
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="d-flex stpsfexbox">
                                        <div><span className="stpiconb">5</span></div>
                                        <div>
                                            <Form.Group className="form-group">
                                                <Form.Label>Withdraw Amount</Form.Label>
                                                <Form.Control id='amount' />
                                            </Form.Group>

                                            <div className="notestitle notesgray lightgraybg">
                                                <p className="pb-0 d-flex">
                                                    <span className="t-gray">EUR Wallet Balance
                                                    </span>
                                                    <span className="t-black text-end">50.00 EUR</span>
                                                </p>
                                                <p className="pb-0 d-flex">
                                                    <span className="t-gray">Withdraw Fee</span>
                                                    <span className="t-black text-end">10% EUR</span>
                                                </p>
                                                <p className="pb-0 d-flex">
                                                    <span className="t-gray">Total Withdraw</span>
                                                    <span className="t-black text-end">45.00 EUR</span>
                                                </p>

                                            </div>
                                            <Form.Group className="form-group m-0 mt-3">
                                                <Button type="submit" className="sitebtn" id="withdrawsubmit">Withdraw</Button>
                                            </Form.Group>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </div>
                        <div>
                            <div className="trendcoinbox mt-0 panelcontentbox">
                                <h4 className="subhead">How to Withdraw</h4>
                                <div className="hwtbg">
                                    <h4 className="h4">1. Select your Fiat Currency</h4>
                                    <p>Choose the fiat currency you wish to withdraw.</p>
                                    <h4 className="h4">2. Select Payment Method</h4>
                                    <p>Choose your preferred payment method (e.g.,  wire payment/other).</p>
                                    <h4 className="h4">3. Select Bank Name</h4>
                                    <p>Select the bank account you have previously added.</p>
                                    <h4 className="h4">4. Verify Account Number</h4>
                                    <p>Confirm that the account number is correct before proceeding.</p>
                                    <h4 className="h4">5. Enter Withdrawal Amount</h4>
                                    <p>Enter the amount you wish to withdraw.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wlltdpstbox">
                        <h2 className="subhead ps-2 pt-2">Latest Withdraw History</h2>
                        <div className="panelcontentbox">
                            <Simplebar className="table-responsive sitescroll">
                                <Table className="sitetable" id='table1'>
                                    <thead>
                                        <tr>
                                            <th>Date & Time</th>
                                            <th>Crypto / Token</th>
                                            <th>TX Hash</th>
                                            <th>Account Name</th>
                                            <th>Account No</th>
                                            <th>Withdraw (EUR)</th>
                                            <th>Fee</th>
                                            <th>Total Amount</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="nodata">
                                            <td colSpan={9}>
                                                <Image src="assets/images/nodata.png" width={50} height={50} alt="nodata" />
                                                No record found
                                            </td>
                                        </tr>
                                        {/* <tr>
                                            <td>11/03/2026, 05:05:00</td>
                                            <td><Image src="assets/images/color/doge.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />DOGE</td>
                                            <td>FDATRWYTUNDJF8455674</td>
                                            <td><span className="t-green">256.39874</span></td>
                                            <td>0.5</td>
                                             <td>0.5</td>
                                            <td>2563971</td>
                                            <td><Badge bg="success">Confirm</Badge></td>
                                        </tr> */}
                                    </tbody>
                                </Table>
                            </Simplebar>
                            <ResponsiveTable tableId="table1" />
                        </div>
                    </div>
                </Container>
            </article>
            <Userfooter />
            {/* QRimg */}
            <Modal show={showModal1} onHide={handleClose1} className='modalbgt authmodal qrmodal' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className='text-center'>
                        QR Code
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="qrcode text-center">
                        <Image src="assets/images/qrcode.png" width={50} height={50} alt="coin" id='qrcode' />
                        <Button type="button" className="sitebtn" id="download">Download</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default page