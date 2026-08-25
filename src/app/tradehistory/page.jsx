"use client"
import React, { useState } from "react";
import Userheader from "../components/Userheader";
import Userfooter from "../components/Userfooter";
import Leftsidemenu from "../components/Leftsidemenu";
import { Container, Image, Nav, Table, Form, Button, Badge } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Link from 'next/link';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ResponsiveTable from "../components/ResponsiveTable";

const tradehistory = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    return (
        <div>
            <div className="pagecontent gridpagecontent innerpagegrid">
                <div className="backgroundoverlay" id="backgroundoverlay"></div>
                <Userheader />
                <Leftsidemenu />
                <article className="gridparentbox">
                    <Container className="container sitecontainer historypage">
                        <div className="innerpagecontent">
                            <h2 className="h2">Trade History</h2>
                            <div className="tabrightbox">
                                <div className="innerpagetab boxtabb">
                                    <Nav variant="pills" className="tabbanner">
                                        <Nav.Item>
                                            <Nav.Link as={Link} href="/openorderhistory" id="openorderhistory">
                                                Open Order History
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link as={Link} href="/orderhistory" id="orderhistory">
                                                Order History
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link as={Link} className="active" href="/tradehistory" id="tradehistory">
                                                Trade History
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </div>
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
                                            <div className="clearbtn">
                                                <Form.Group className="form-group">
                                                    <Button className="btn sitebtn btn-sm me-1" id="clearbtn">Clear</Button>
                                                    <Link href="/" className="btn sitebtn btn-sm red-btn" id="resetbtn">Reset</Link>
                                                </Form.Group>
                                            </div>
                                            <Form.Group className="mb-3">
                                                <Form.Select className="form-control" id="coin">
                                                    <option>All Market</option>
                                                    <option>ETH</option>
                                                    <option>BNB</option>
                                                    <option>XRP</option>
                                                    <option>TRX</option>
                                                    <option>USD</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Select className="form-control" id="coin">
                                                    <option>All Side</option>
                                                    <option>Limit</option>
                                                    <option>Market</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                            <SimpleBar className="table-responsive sitescroll">
                                <Table className="table sitetable" id="table1">
                                    <thead>
                                        <tr>
                                            <th>Date & Time</th>
                                            <th>Crypto / Token</th>
                                            <th>Order ID</th>
                                            <th>Side</th>
                                            <th>Price</th>
                                            <th>Filied</th>
                                            <th>Trade Fee</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* <tr className="nodata">
                                            <td colSpan={8}>
                                                <Image src="assets/images/nodata.png" width={50} height={50} alt="nodata" />
                                                No record found
                                            </td>
                                        </tr> */}
                                                <tr>
                                                    <td>10/03/2026 06:35:01 PM</td>
                                                    <td>ETH/USDT</td>
                                                    <td>623387420</td>
                                                    <td className="t-green">Buy</td>
                                                    <td>2,047.76 USDT</td>
                                                    <td>0.01 ETH</td>
                                                    <td>0.00010000 ETH</td>
                                                    <td>20.4776 USDT</td>
                                                </tr>
                                                <tr>
                                                    <td>07/03/2026 04:57:39 PM</td>
                                                    <td>BTC/USDT</td>
                                                    <td>402570353</td>
                                                    <td className="t-green">Buy</td>
                                                    <td>50,424.32 USDT</td>
                                                    <td>0.0001 BTC</td>
                                                    <td>0.00000005 BTC</td>
                                                    <td>5.042432 USDT</td>
                                                </tr>
                                                <tr>
                                                    <td>07/03/2026 02:47:07 PM</td>
                                                    <td>ETH/USDT</td>
                                                    <td>788454250</td>
                                                    <td className="t-green">Buy</td>
                                                    <td>1,970.49 USDT</td>
                                                    <td>0.0001 ETH</td>
                                                    <td>0.00000100 ETH</td>
                                                    <td>0.19705 USDT</td>
                                                </tr>
                                                <tr>
                                                    <td>07/03/2026 12:07:13 PM</td>
                                                    <td>ETH/USDT</td>
                                                    <td>965192442</td>
                                                    <td className="t-green">Buy</td>
                                                    <td>1,970.49 USDT</td>
                                                    <td>0.001 ETH</td>
                                                    <td>0.00001000 ETH</td>
                                                    <td>1.97049 USDT</td>
                                                </tr>
                                                <tr>
                                                    <td>07/03/2026 11:38:15 AM</td>
                                                    <td>ETH/USDT</td>
                                                    <td>852879738</td>
                                                    <td className="t-green">Buy</td>
                                                    <td>1,969.8 USDT</td>
                                                    <td>0.0001 ETH</td>
                                                    <td>0.00000100 ETH</td>
                                                    <td>0.19698 USDT</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </SimpleBar>
                                    <ResponsiveTable tableId="table1" />
                                </div>
                            </Container>
                        </article>
                        <Userfooter />
                    </div>
            </div>
            );
};

            export default tradehistory;
