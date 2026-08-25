import React, { useState } from 'react'
import Simplebar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { Table, Nav, Tab, Form, FormGroup, Button, Modal, FormCheck } from 'react-bootstrap';
import Link from 'next/link';
import ResponsiveTable from '../components/ResponsiveTable';


const Openorder = () => {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    // market modal
    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);
    // limit modal
    const handleClose2 = () => setShowModal2(false);
    const handleShow2 = () => setShowModal2(true);
    // Open order modal
    const handleClose3 = () => setShowModal3(false);
    const handleShow3 = () => setShowModal3(true);
    return (
        <div className="openorder griddragoption">
            <Tab.Container defaultActiveKey="position" >
                <div className="innerpagetab historytab mb-3">
                    <Nav variant="pills" className="tabbanner">
                        <Nav.Item><Nav.Link eventKey="balances" id='balances'>Balances</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="position" id='position'>Positions</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="outcomes" id='outcomes'>Outcomes</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="twap" id='twap'>TWAP</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="OpenOrders" id='OpenOrders'>Open Orders</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="Fills" id='Fills'>Fills</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="Fills" id='Fills'>Trade History</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="OrderHistory" id='OrderHistory'>Order History</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="FundingPayments" id='FundingPayments'>Funding Payments</Nav.Link></Nav.Item>
                    </Nav>
                </div>

                <Tab.Content>
                    <Tab.Pane eventKey="position">
                         <h2 className="heading-box">Positions</h2>
                        <Simplebar className="table-responsive sitescroll">
                            <Table className="sitetable" id='table3'>
                                <thead>
                                    <tr>
                                        <th>Positions</th>
                                        <th>Size</th>
                                        <th>Net Value</th>
                                        <th>Collateral</th>
                                        <th>Entry Price</th>
                                        <th>Mark Price</th>
                                        <th>Liq Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>BTC/USDC</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>12,845.65 USDC</td>
                                        <td>2,500.00 USDC</td>
                                        <td>108,452.25</td>
                                        <td>108,610.80</td>
                                        <td>98,245.30</td>
                                    </tr>
                                    <tr>
                                        <td>ETH/USDC</td>
                                        <td><span className="t-red">Sell</span></td>
                                        <td>6,425.80 USDC</td>
                                        <td>1,250.00 USDC</td>
                                        <td>2,645.50</td>
                                        <td>2,631.80</td>
                                        <td>2,945.60</td>
                                    </tr>
                                    <tr>
                                        <td>SOL/USDC</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>3,845.20 USDC</td>
                                        <td>750.00 USDC</td>
                                        <td>152.85</td>
                                        <td>154.20</td>
                                        <td>132.45</td>
                                    </tr>
                                    <tr>
                                        <td>BNB/USDC</td>
                                        <td><span className="t-red">Sell</span></td>
                                        <td>4,562.40 USDC</td>
                                        <td>900.00 USDC</td>
                                        <td>685.40</td>
                                        <td>679.80</td>
                                        <td>758.50</td>
                                    </tr>
                                    <tr>
                                        <td>XRP/USDC</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>2,145.80 USDC</td>
                                        <td>450.00 USDC</td>
                                        <td>2.1845</td>
                                        <td>2.1968</td>
                                        <td>1.8654</td>
                                    </tr>
                                    <tr>
                                        <td>DOGE/USDC</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>1,865.30 USDC</td>
                                        <td>350.00 USDC</td>
                                        <td>0.2245</td>
                                        <td>0.2291</td>
                                        <td>0.1842</td>
                                    </tr>
                                    <tr>
                                        <td>ADA/USDC</td>
                                        <td><span className="t-red">Sell</span></td>
                                        <td>1,425.60 USDC</td>
                                        <td>300.00 USDC</td>
                                        <td>0.8742</td>
                                        <td>0.8625</td>
                                        <td>0.9821</td>
                                    </tr>
                                    <tr>
                                        <td>AVAX/USDC</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>2,845.20 USDC</td>
                                        <td>600.00 USDC</td>
                                        <td>36.18</td>
                                        <td>36.95</td>
                                        <td>30.45</td>
                                    </tr>
                                    <tr>
                                        <td>LINK/USDC</td>
                                        <td><span className="t-red">Sell</span></td>
                                        <td>1,954.80 USDC</td>
                                        <td>400.00 USDC</td>
                                        <td>18.42</td>
                                        <td>18.08</td>
                                        <td>21.85</td>
                                    </tr>
                                    <tr>
                                        <td>ARB/USDC</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>1,245.40 USDC</td>
                                        <td>250.00 USDC</td>
                                        <td>0.7425</td>
                                        <td>0.7562</td>
                                        <td>0.6214</td>
                                    </tr>
                                    <tr>
                                        <td>JUP/USDC</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>1,625.30 USDC</td>
                                        <td>325.00 USDC</td>
                                        <td>1.2854</td>
                                        <td>1.3125</td>
                                        <td>1.0245</td>
                                    </tr>
                                    <tr>
                                        <td>WIF/USDC</td>
                                        <td><span className="t-red">Sell</span></td>
                                        <td>1,458.20 USDC</td>
                                        <td>280.00 USDC</td>
                                        <td>2.1548</td>
                                        <td>2.1254</td>
                                        <td>2.4850</td>
                                    </tr>
                                    <tr>
                                        <td>BONK/USDC</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>985.40 USDC</td>
                                        <td>200.00 USDC</td>
                                        <td>0.00003425</td>
                                        <td>0.00003512</td>
                                        <td>0.00002840</td>
                                    </tr>
                                    <tr>
                                        <td>AERO/USDC</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>1,354.60 USDC</td>
                                        <td>275.00 USDC</td>
                                        <td>1.4258</td>
                                        <td>1.4632</td>
                                        <td>1.1245</td>
                                    </tr>
                                    <tr>
                                        <td>PEPE/USDC</td>
                                        <td><span className="t-red">Sell</span></td>
                                        <td>2,125.40 USDC</td>
                                        <td>425.00 USDC</td>
                                        <td>0.00001845</td>
                                        <td>0.00001792</td>
                                        <td>0.00002180</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Simplebar>
                         <ResponsiveTable tableId="table4" />
                    </Tab.Pane>
                    <Tab.Pane eventKey="OpenOrders">
                         <h2 className="heading-box">Open Orders</h2>
                        <Simplebar className="table-responsive sitescroll">
                            <Table className="sitetable" id='table3'>
                                <thead>
                                    <tr>

                                        <th>Market</th>
                                        <th>Type</th>
                                        <th>Size</th>
                                        <th>Trigger Price</th>
                                        <th>Mark Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>0.23645</td>
                                        <td>Limit</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                    </tr>
                                    <tr>
                                        <td>0.23645</td>
                                        <td>Limit</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                    </tr>
                                    <tr>
                                        <td>0.23645</td>
                                        <td>Limit</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                    </tr>
                                    <tr>
                                        <td>0.23645</td>
                                        <td>Limit</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                    </tr>
                                    <tr>
                                        <td>0.23645</td>
                                        <td>Limit</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Simplebar>
                         <ResponsiveTable tableId="table4" />
                    </Tab.Pane>
                    <Tab.Pane eventKey="Fills">
                         <h2 className="heading-box">Fills History</h2>
                        <Simplebar className="table-responsive sitescroll">
                            <Table className="sitetable" id='table3'>
                                <thead>
                                    <tr>
                                        <th>Market</th>
                                        <th>Size</th>
                                        <th>Price</th>
                                        <th>RPNL</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td><Button className="btn sitebtn border-btn btn-sm">Cancel</Button></td>
                                    </tr>
                                    <tr>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td><Button className="btn sitebtn border-btn btn-sm">Cancel</Button></td>
                                    </tr>
                                    <tr>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td><Button className="btn sitebtn border-btn btn-sm">Cancel</Button></td>
                                    </tr>
                                    <tr>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td><Button className="btn sitebtn border-btn btn-sm">Cancel</Button></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Simplebar>
                         <ResponsiveTable tableId="table4" />
                    </Tab.Pane>
                    <Tab.Pane eventKey="OrderHistory">
                         <h2 className="heading-box">Order History</h2>
                        <Simplebar className="table-responsive sitescroll">
                            <Table className="sitetable" id='table4'>
                                <thead>
                                    <tr>
                                        <th>Market</th>
                                        <th>Size</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td><Button className="btn sitebtn border-btn btn-sm">Cancel</Button></td>
                                    </tr>
                                    <tr>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td><Button className="btn sitebtn border-btn btn-sm">Cancel</Button></td>
                                    </tr>
                                    <tr>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td><Button className="btn sitebtn border-btn btn-sm">Cancel</Button></td>
                                    </tr>
                                    <tr>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td><Button className="btn sitebtn border-btn btn-sm">Cancel</Button></td>
                                    </tr>
                                    <tr>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td><Button className="btn sitebtn border-btn btn-sm">Cancel</Button></td>
                                    </tr>
                                    <tr>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td><Button className="btn sitebtn border-btn btn-sm">Cancel</Button></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Simplebar>
                    </Tab.Pane>
                    <Tab.Pane eventKey="FundingPayments">
                         <h2 className="heading-box">Funding Payments</h2>
                        <Simplebar className="table-responsive sitescroll">
                            <Table className="sitetable" id='table4'>
                                <thead>
                                    <tr>
                                        <th>Market</th>
                                        <th>Size</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td><Button className="btn sitebtn border-btn btn-sm">Cancel</Button></td>
                                    </tr>
                                    <tr>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td><Button className="btn sitebtn border-btn btn-sm">Cancel</Button></td>
                                    </tr>
                                    <tr>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td><Button className="btn sitebtn border-btn btn-sm">Cancel</Button></td>
                                    </tr>
                                    <tr>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td><Button className="btn sitebtn border-btn btn-sm">Cancel</Button></td>
                                    </tr>
                                    <tr>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td><Button className="btn sitebtn border-btn btn-sm">Cancel</Button></td>
                                    </tr>
                                    <tr>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td><Button className="btn sitebtn border-btn btn-sm">Cancel</Button></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Simplebar>
                         <ResponsiveTable tableId="table4" />
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>

        </div>
    )
}

export default Openorder