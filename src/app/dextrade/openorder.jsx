import React from 'react'
import Simplebar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { Table, Nav, Tab } from 'react-bootstrap';
import Link from 'next/link';
import ResponsiveTable from '../components/ResponsiveTable';


const openorder = () => {
    return (
        <div className="openorder griddragoption">
            <Tab.Container defaultActiveKey="openorder">
                <div className="innerpagetab historytab">
                    <Nav variant="pills" className="tabbanner">
                        <Nav.Item><Nav.Link eventKey="openorder" id='openorder'>Open Orders</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="orderhistory" id='orderhistory'>My Order History</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="tradehistory" id='tradehistory'>My Trade History</Nav.Link></Nav.Item>
                    </Nav>
                </div>
                <Tab.Content>
                    <Tab.Pane eventKey="openorder">
                        <h2 className="heading-box">Open Orders</h2>
                        <Simplebar className="table-responsive sitescroll">
                            <Table className="sitetable" id='table4'>
                                <thead>
                                    <tr>
                                        <th>Order type</th>
                                        <th>Date & Time</th>
                                        <th>Order</th>
                                        <th>Pair</th>
                                        <th>Amount</th>
                                        <th>Price</th>
                                        <th>Remaining</th>
                                        <th>Trade Fee</th>
                                        <th>Total</th>
                                        <th>Status</th>
                                        <th>Cancel</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* <tr>
                                        <td>Limit</td>
                                        <td>11/03/2026,07:16:16</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>BTC/ETH</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>Completed</td>
                                        <td><Link href="/" className="btn sitebtn sitebtn" id="cancel_trade">Cancel</Link></td>
                                    </tr>
                                    <tr>
                                        <td>Limit</td>
                                        <td>11/03/2026,07:16:16</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>BTC/ETH</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>Completed</td>
                                        <td><Link href="/" className="btn sitebtn sitebtn" id="cancel_trade">Cancel</Link></td>
                                    </tr>
                                    <tr>
                                        <td>Limit</td>
                                        <td>11/03/2026,07:16:16</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>BTC/ETH</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>Completed</td>
                                        <td><Link href="/" className="btn sitebtn sitebtn" id="cancel_trade">Cancel</Link></td>
                                    </tr>
                                    <tr>
                                        <td>Limit</td>
                                        <td>11/03/2026,07:16:16</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>BTC/ETH</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>Completed</td>
                                        <td><Link href="/" className="btn sitebtn sitebtn" id="cancel_trade">Cancel</Link></td>
                                    </tr>
                                    <tr>
                                        <td>Limit</td>
                                        <td>11/03/2026,07:16:16</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>BTC/ETH</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>Completed</td>
                                        <td><Link href="/" className="btn sitebtn sitebtn" id="cancel_trade">Cancel</Link></td>
                                    </tr>
                                    <tr>
                                        <td>Limit</td>
                                        <td>11/03/2026,07:16:16</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>BTC/ETH</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>Completed</td>
                                        <td><Link href="/" className="btn sitebtn sitebtn" id="cancel_trade">Cancel</Link></td>
                                    </tr> */}

                                    <tr className="nodata tr-nodata-h">
                                        <td colSpan={11}>
                                            <Link href="/signin" className='sitebtn'>Sign In</Link> or{" "}
                                            <Link href="/signup" className='sitebtn'>Sign Up</Link> to trade
                                        </td>
                                    </tr>

                                </tbody>
                            </Table>
                        </Simplebar>
                        <ResponsiveTable tableId="table4" />
                    </Tab.Pane>
                    <Tab.Pane eventKey="orderhistory">
                        <h2 className="heading-box">My Order History</h2>
                        <Simplebar className="table-responsive sitescroll">
                            <Table className="sitetable" id='table5'>
                                <thead>
                                    <tr>
                                        <th>Order type</th>
                                        <th>Date & Time</th>
                                        <th>Order</th>
                                        <th>Pair</th>
                                        <th>Amount</th>
                                        <th>Price</th>
                                        <th>Remaining</th>
                                        <th>Trade Fee</th>
                                        <th>Total</th>
                                        <th>Status</th>
                                        <th>Cancel</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Limit</td>
                                        <td>11/03/2026,07:16:16</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>BTC/ETH</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>Completed</td>
                                        <td><Link href="/" className="btn sitebtn sitebtn">Cancel</Link></td>
                                    </tr>
                                    <tr>
                                        <td>Limit</td>
                                        <td>11/03/2026,07:16:16</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>BTC/ETH</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>Completed</td>
                                        <td><Link href="/" className="btn sitebtn sitebtn">Cancel</Link></td>
                                    </tr>
                                    <tr>
                                        <td>Limit</td>
                                        <td>11/03/2026,07:16:16</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>BTC/ETH</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>Completed</td>
                                        <td><Link href="/" className="btn sitebtn sitebtn">Cancel</Link></td>
                                    </tr>
                                    <tr>
                                        <td>Limit</td>
                                        <td>11/03/2026,07:16:16</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>BTC/ETH</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>Completed</td>
                                        <td><Link href="/" className="btn sitebtn sitebtn">Cancel</Link></td>
                                    </tr>
                                    <tr>
                                        <td>Limit</td>
                                        <td>11/03/2026,07:16:16</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>BTC/ETH</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>Completed</td>
                                        <td><Link href="/" className="btn sitebtn sitebtn">Cancel</Link></td>
                                    </tr>
                                    <tr>
                                        <td>Limit</td>
                                        <td>11/03/2026,07:16:16</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>BTC/ETH</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>Completed</td>
                                        <td><Link href="/" className="btn sitebtn sitebtn">Cancel</Link></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Simplebar>
                        <ResponsiveTable tableId="table5" />
                    </Tab.Pane>
                    <Tab.Pane eventKey="tradehistory">
                        <h2 className="heading-box">Trade History</h2>
                        <Simplebar className="table-responsive sitescroll">
                            <Table className="sitetable" id='table6'>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Pair</th>
                                        <th>Type</th>
                                        <th>Amount</th>
                                        <th>Staus</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>11/03/2026, 05:05:00</td>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>0052067489771</td>
                                        <td>Confirm</td>
                                    </tr>
                                    <tr>
                                        <td>11/03/2026, 05:05:00</td>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-red">Sell</span></td>
                                        <td>0052067489771</td>
                                        <td>Wating</td>
                                    </tr>
                                    <tr>
                                        <td>11/03/2026, 05:05:00</td>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>0052067489771</td>
                                        <td>Wating</td>
                                    </tr>
                                    <tr>
                                        <td>11/03/2026, 05:05:00</td>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>0052067489771</td>
                                        <td>Confirm</td>
                                    </tr>
                                    <tr>
                                        <td>11/03/2026, 05:05:00</td>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-red">Sell</span></td>
                                        <td>0052067489771</td>
                                        <td>Wating</td>
                                    </tr>
                                    <tr>
                                        <td>11/03/2026, 05:05:00</td>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>0052067489771</td>
                                        <td>Confirm</td>
                                    </tr>
                                    <tr>
                                        <td>11/03/2026, 05:05:00</td>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-red">Sell</span></td>
                                        <td>0052067489771</td>
                                        <td>Wating</td>
                                    </tr>
                                    <tr>
                                        <td>11/03/2026, 05:05:00</td>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>0052067489771</td>
                                        <td>Confirm</td>
                                    </tr>
                                    <tr>
                                        <td>11/03/2026, 05:05:00</td>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-red">Sell</span></td>
                                        <td>0052067489771</td>
                                        <td>Wating</td>
                                    </tr>
                                    <tr>
                                        <td>11/03/2026, 05:05:00</td>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>0052067489771</td>
                                        <td>Confirm</td>
                                    </tr>
                                    <tr>
                                        <td>11/03/2026, 05:05:00</td>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-red">Sell</span></td>
                                        <td>0052067489771</td>
                                        <td>Wating</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Simplebar>
                        <ResponsiveTable tableId="table6" />
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </div>
    )
}

export default openorder