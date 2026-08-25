
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
    const [selected, setSelected] = useState("option1");
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
                <Container className="sitecontainer walletpagebg depositbg">
                    <div className="innerpagecontent">
                        <h2 className="h2 text-start"><Link href="/wallet" className='alink'><span className="pe-2"><FontAwesomeIcon icon={faAngleLeft} /></span></Link>Withdraw Crypto</h2>
                    </div>
                    <div className="flexboxtable leftsidetabbg">
                        <div className="mt-0 panelcontentbox">
                            <Form className="siteformbg">
                                <div className="innerpagetab historytab mb-4 wallettab">
                                    <Nav variant="pills" className="tabbanner">
                                        <Nav.Item><Link href="/withdraw" className="active nav-link" id='cryptotab'>Crypto</Link></Nav.Item>
                                        <Nav.Item><Link href="/fiatwithdraw" className="nav-link" id='fiattab'>Fiat</Link></Nav.Item>
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
                                                <Form.Label>Select Network</Form.Label>
                                                <Form.Select className="form-control" id='network'>
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
                                                <div className="tabrightbox">
                                                    <div className="d-flex gap-3">

                                                        {/* Option 1 */}
                                                        <Form.Check
                                                            type="radio"
                                                            id="option1"
                                                            name="customRadio"
                                                            label="Address"
                                                            value="Address"
                                                            checked={selected === "Address"}
                                                            onChange={(e) => setSelected(e.target.value)}
                                                            className="custom-radio"
                                                        />

                                                        {/* Option 2 */}
                                                        <Form.Check
                                                            type="radio"
                                                            id="option2"
                                                            name="customRadio"
                                                            label="User"
                                                            value="User"
                                                            checked={selected === "User"}
                                                            onChange={(e) => setSelected(e.target.value)}
                                                            className="custom-radio"
                                                        />

                                                    </div>
                                                </div>
                                                <Form.Label>Wallet Addres</Form.Label>
                                                <InputGroup>
                                                    <Form.Control defaultValue="SDAFYTEUWYR645854" className='form-control withdraw-addr' id='walletaddres' readOnly />
                                                    <InputGroup.Text id="copyaddress" className="cpybtn">
                                                        <Link href="#" className=""><Image src="assets/images/copy.svg" alt='icon' width={100} height={100} /></Link>
                                                    </InputGroup.Text>
                                                </InputGroup>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="d-flex stpsfexbox">
                                        <div><span className="stpiconb">4</span></div>
                                        <div>
                                            <Form.Group className="form-group">
                                                <Form.Label>Withdraw Amount</Form.Label>
                                                <Form.Control id='amount' />
                                            </Form.Group>
                                            <Form.Group className="form-group">
                                                <div className="stoplimtboxt">
                                                    <div className="link-div">
                                                        <div className="activelimit" id='25'>25%</div>
                                                        <div id='50'>50%</div>
                                                        <div id='75'>75%</div>
                                                        <div id='100'>100%</div>
                                                    </div>
                                                </div>
                                            </Form.Group>
                                            <div className="lightgraybg">
                                                <div className="notestitle notesgray d-flex align-items-center">
                                                    <p className="pb-0">
                                                        <span className="t-gray">Min Withdraw</span><span className="t-black">0.00060000
                                                            BTC</span></p>
                                                    <p className="pb-0"><span className="t-gray">Max Withdraw</span><span className="t-black">0.00060000
                                                        BTC</span></p>
                                                </div>
                                                <div className="notestitle notesgray d-flex align-items-center">
                                                    <p className="pb-0"><span className="t-gray">Total Withdraw</span><span className="t-black">0.00060000
                                                        BTC</span></p>
                                                    <p className="pb-0"><span className="t-gray">Withdraw Fee</span><span className="t-black">0.00060000
                                                        BTC</span></p>
                                                </div>
                                            </div>
                                            <Form.Group className="form-group m-0 mt-3">
                                                <Button type="submit" className="sitebtn" id="withdrawsubmit">Withdraw</Button>
                                            </Form.Group>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </div>
                        <div className="trendcoinbox mt-0 panelcontentbox">
                            <h4 className="subhead">How to Withdraw</h4>
                            <div className="hwtbg">
                                <h4 className="h4">1. Select your crypto</h4>
                                <p>Choose the cryptocurrency you want to withdraw.</p>
                                <h4 className="h4">2. Select the Network</h4>
                                <p>Choose the correct blockchain network and ensure it matches the recipient wallet’s network.</p>
                                <h4 className="h4">3. Enter the Wallet Address</h4>
                                <p>Provide the recipient’s external wallet address.</p>
                                <h4 className="h4">4. Enter the Withdrawal Amount</h4>
                                <p>Enter the amount you wish to withdraw or use the quick selection options (25%, 50%, 75%, 100%).</p>
                                <h4 className="h4">5. Review and Confirm</h4>
                                <p>Verify the withdrawal fee, minimum and maximum limits, and the final amount. Then click Withdraw to complete the transaction.</p>
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
                                            <th>Network</th>
                                            <th>Address</th>
                                            <th>Requested Amount</th>
                                            <th>Withdraw Fee</th>
                                            <th>Withdraw Amount</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="nodata">
                                            <td colSpan={8}>
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