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

const page = () => {
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
                            <h2 className="h2">Withdraw History</h2>
                            <div className="tabrightbox">
                                <div className="innerpagetab boxtabb">
                                    <Nav variant="pills" className="tabbanner">
                                        <Nav.Item>
                                            <Nav.Link as={Link} href="/deposithistory"  id="deposithistory">
                                                Deposit History
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link as={Link} href="/withdrawhistory" className="active" id="withdrawhistory">
                                                Withdraw History
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link as={Link} href="/transferhistory" id="transferhistory">
                                                Transfer History
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
                                            <Form.Group className="mb-3">
                                                <Form.Select className="form-control" id="coin">
                                                    <option>All</option>
                                                    <option>ETH</option>
                                                    <option>BNB</option>
                                                    <option>XRP</option>
                                                    <option>TRX</option>
                                                    <option>USD</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <div className="clearbtn">
                                                <Form.Group className="form-group">
                                                    <Button className="btn sitebtn btn-sm me-1" id="clearbtn">Clear</Button>
                                                    <Link href="/" className="btn sitebtn btn-sm red-btn" id="resetbtn">Reset</Link>
                                                </Form.Group>
                                            </div>
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
                                            <th>Network</th>
                                            <th>Txn ID</th>
                                            <th>Address</th>
                                            <th>Requested Amount </th>
                                            <th>Withdraw Fee </th>
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

                                            <td>17-01-2026 10:00:20 AM</td>
                                            <td>
                                                <Image src="assets/images/color/eth.svg" className="coinicon" alt="coin" width={50} height={50} />
                                                MULTIBTC
                                            </td>
                                            <td>ERC20</td>
                                            <td>0x2260fac5e5542a773a</td>
                                            <td>0x2260fac5e5542a773aa44fbcfedf7c193bc2c599</td>
                                            <td>0.001 MULTIBTC</td>
                                            <td>0.001 MULTIBTC</td>
                                            <td>
                                                <span className="badge bg-info">Awaiting</span>
                                            </td>
                                        </tr> */}
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

export default page;