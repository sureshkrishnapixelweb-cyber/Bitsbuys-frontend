"use client"
import React, { useEffect, useState } from 'react'
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import Leftsidemenu from '../components/Leftsidemenu';
import { Container, Form, Image, Table, InputGroup, Button, Modal, Nav } from 'react-bootstrap';
import Link from 'next/link';
import Simplebar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import ResponsiveTable from '../components/ResponsiveTable';
import FileUpload from './Fileupload';

const deposit = () => {

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
                        <h2 className="h2 text-start"><Link className='alink' href="/wallet"><span className="pe-2"><FontAwesomeIcon icon={faAngleLeft} /></span></Link> Deposit Fiat</h2>
                    </div>
                    <div className="flexboxtable leftsidetabbg">
                        <div className="mt-0 panelcontentbox">
                            <Form className="siteformbg">
                                <div className="innerpagetab historytab mb-4 wallettab">
                                    <Nav variant="pills" className="tabbanner">
                                        <Nav.Item><Link href="/deposit" className="nav-link" id='cryptotab'>Crypto</Link></Nav.Item>
                                        <Nav.Item><Link href="/fiatdeposit" className="active nav-link" id='fiattab'>Fiat</Link></Nav.Item>
                                    </Nav>
                                </div>
                                <div className="stpsflowbox">
                                    <div className="d-flex stpsfexbox currentstep">
                                        <div><span className="stpiconb">1</span></div>
                                        <div>
                                            <Form.Group className="form-group">
                                                <Form.Label>Select Crypto </Form.Label>
                                                <Form.Select className="form-control" id='currency'>
                                                    <option>USDT</option>
                                                    <option>ETH</option>
                                                    <option>BNB</option>
                                                    <option>TRX</option>
                                                    <option>SOL</option>
                                                    <option>XRP</option>
                                                    <option>ADA</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="d-flex stpsfexbox currentstep">
                                        <div><span className="stpiconb">2</span></div>
                                        <div>
                                            <Form.Group className="form-group">
                                                <Form.Label>Deposit Amount</Form.Label>
                                                <Form.Control type="text" id="dpstamount" />
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="d-flex stpsfexbox currentstep">
                                        <div><span className="stpiconb">3</span></div>
                                        <div>
                                            <FileUpload />
                                        </div>
                                    </div>
                                    <div className="d-flex stpsfexbox currentstep">
                                        <div><span className="stpiconb">4</span></div>
                                        <div>
                                            <Form.Group className="form-group">
                                                <Form.Label>Account Details</Form.Label>
                                                <Form.Control type="text" id="dpstamount" />
                                            </Form.Group>
                                            <div className="notestitle notesgray lightgraybg">
                                                <p className="pb-0 d-flex">
                                                    <span className="t-gray">Minimum Deposit Limit</span>
                                                    <span className="t-black text-end">50.00 EUR</span>
                                                </p>
                                                <p className="pb-0 d-flex">
                                                    <span className="t-gray">Deposit Fee</span>
                                                    <span className="t-black text-end">10% EUR</span>
                                                </p>
                                                <p className="pb-0 d-flex">
                                                    <span className="t-gray">Final Deposit Amount</span>
                                                    <span className="t-black text-end">45.00 EUR</span>
                                                </p>

                                            </div>
                                            <Form.Group className="form-group m-0 mt-3">
                                                <Button type="submit" className="sitebtn" id="depositsubmit">Deposit</Button>
                                            </Form.Group>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </div>
                        <div>
                            <div className="trendcoinbox mb-3 panelcontentbox">
                                <h4 className="subhead">Bank Details:</h4>
                                <div className="hwtbg">
                                    <p className="pb-0 d-flex">
                                        <span className="t-gray">Account Name : </span>
                                        <span className="t-black text-end ms-1">John Doe</span>
                                    </p>
                                    <p className="pb-0 d-flex">
                                        <span className="t-gray">Account Number : </span>
                                        <span className="t-black text-end ms-1">1234567890</span>
                                    </p>
                                    <p className="pb-0 d-flex">
                                        <span className="t-gray">Bank Name : </span>
                                        <span className="t-black text-end ms-1">test bank</span>
                                    </p>
                                    <p className="pb-0 d-flex mb-0">
                                        <span className="t-gray">Account Type : </span>
                                        <span className="t-black text-end ms-1">Test Saving</span>
                                    </p>
                                </div>
                            </div>
                            <div className="trendcoinbox mt-0 panelcontentbox">
                                <h4 className="subhead">How to Deposit</h4>
                                <div className="hwtbg">
                                    <h4 className="h4">1. Select Your Fiat Currency</h4>
                                    <p>Choose the fiat currency you wish to deposit.</p>
                                    <h4 className="h4">2. Select Payment Method</h4>
                                    <p>Choose your preferred payment method (e.g.,  wire payment/other).</p>
                                    <h4 className="h4">3. Upload Payment Proof</h4>
                                    <p>Carefully verify the bank account details shown above and complete the deposit. Then upload a clear image of your deposit receipt or transaction proof.</p>
                                    <h4 className="h4">4. Enter Deposited Amount</h4>
                                    <p>Enter the exact amount you have deposited, ensuring it matches the amount shown in the uploaded receipt.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wlltdpstbox">
                        <h2 className="subhead ps-2 pt-2">Latest Deposit Fiat History</h2>
                        <div className="panelcontentbox">
                            <Simplebar className="table-responsive sitescroll">
                                <Table className="sitetable" id='table1'>
                                    <thead>
                                        <tr>
                                            <th>Date & Time</th>
                                            <th>Crypto / Token</th>
                                            <th>TX Hash</th>
                                            <th>Deposit (EUR)</th>
                                            <th>Fees (EUR)</th>
                                            <th>Total Amount (EUR)</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="nodata">
                                            <td colSpan={7} className='text-center'>
                                                <Image src="assets/images/nodata.png" width={50} height={50} alt="nodata" />
                                                No record found
                                            </td>
                                        </tr>
                                        {/* <!-- <tr>
                        <td>11/03/2026, 05:05:00</td>
                        <td><Image src="assets/images/color/btc.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />BTC</td>
                        <td>FDATRWYTUNDJF8455674</td>
                        <td><span className="t-green">FDATRWYTUNDJF8455674</span></td>
                        <td>FDATRWYTUNDJF8455674</td>
                        <td>2563971</td>
                        <td><Badge bg="success">Confirm</Badge></td> 
                         </tr>
                        <tr>
                          <td>11/03/2026, 05:05:00</td>
                          <td><Image src="assets/images/color/eth.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />ETH</td>
                          <td>FDATRWYTUNDJF8455674</td>
                          <td><span className="t-green">FDATRWYTUNDJF8455674</span></td>
                          <td>FDATRWYTUNDJF8455674</td>
                          <td>2563971</td>
                          <td><Badge bg="success">Confirm</Badge></td>
                        </tr>
                        <tr>
                          <td>11/03/2026, 05:05:00</td>
                          <td><Image src="assets/images/color/xrp.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />XRP</td>
                          <td>FDATRWYTUNDJF8455674</td>
                          <td><span className="t-green">FDATRWYTUNDJF8455674</span></td>
                          <td>FDATRWYTUNDJF8455674</td>
                          <td>2563971</td>
                          <td><Badge bg="success">Confirm</Badge></td>
                        </tr>
                        <tr>
                          <td>11/03/2026, 05:05:00</td>
                          <td><Image src="assets/images/color/bnb.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />BNB</td>
                          <td>FDATRWYTUNDJF8455674</td>
                          <td><span className="t-green">FDATRWYTUNDJF8455674</span></td>
                          <td>FDATRWYTUNDJF8455674</td>
                          <td>2563971</td>
                          <td><Badge bg="success">Confirm</Badge></td>
                        </tr>
                        <tr>
                          <td>11/03/2026, 05:05:00</td>
                          <td><Image src="assets/images/color/usd.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />USD</td>
                          <td>FDATRWYTUNDJF8455674</td>
                          <td><span className="t-green">FDATRWYTUNDJF8455674</span></td>
                          <td>FDATRWYTUNDJF8455674</td>
                          <td>2563971</td>
                          <td><Badge bg="success">Confirm</Badge></td>
                        </tr>--> */}
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
                        Deposit Crypto via QR Code
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="qrcode text-center">
                        <p>Use your wallet to scan the QR code and transfer crypto to your account.</p>
                        <Image src="assets/images/qrcode.png" width={50} height={50} alt="coin" id='qrcode' />
                        <Button type="button" className="sitebtn" id="download">Download</Button>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal show={showModal2} onHide={handleClose2} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className='text-center'>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="text-center">
                        <h4 className="subhead">Verify Your Identity to Continue</h4>
                        <p>Complete KYC verification to enable deposits and withdrawals on your account.</p>
                        <Image src="assets/images/kycpopimg.png" width={50} height={50} alt="coin" id='kyc' className='kycverfyimg' />
                        <Button type="button" className="sitebtn btn-block" id="verify">Verify Now</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default deposit
