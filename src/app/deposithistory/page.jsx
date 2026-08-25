"use client";
import React, { useState } from "react";
import Userheader from "../components/Userheader";
import Userfooter from "../components/Userfooter";
import Leftsidemenu from "../components/Leftsidemenu";
import { Container, Image, Nav, Table, Form, Button, Badge, } from "react-bootstrap";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ResponsiveTable from "../components/ResponsiveTable";

const deposithistory = () => {

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
                            <h2 className="h2">Deposit History</h2>
                            <div className="tabrightbox">
                                <div className="innerpagetab boxtabb">
                                    <Nav variant="pills" className="tabbanner">
                                        <Nav.Item>
                                            <Nav.Link as={Link} href="/deposithistory" className="active" id="deposithistory">
                                                Deposit History
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link as={Link} href="/withdrawhistory" id="withdrawhistory">
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
                            <SimpleBar className="table-responsive-stake sitescroll">
                                <Table className="sitetable" id="table1">
                                    <thead>
                                        <tr>
                                            <th>Date & Time</th>
                                            <th>Crypto / Token</th>
                                            <th>TX Hash</th>
                                            <th>Sender</th>
                                            <th>Receiver</th>
                                            <th>Deposit</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>11/03/2026, 05:05:00</td>
                                            <td>
                                                <Image src="assets/images/color/btc.svg" width="{50}"
                                                    height="{50}" alt="coin" className="coinicon" />
                                                BTC
                                            </td>
                                            <td>FDATRWYTUNDJF8455674</td>
                                            <td>
                                                <span className="t-green">FDATRWYTUNDJF8455674</span>
                                            </td>
                                            <td>FDATRWYTUNDJF8455674</td>
                                            <td>2563971</td>
                                            <td>
                                                <Badge bg="success">Confirm</Badge>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>11/03/2026, 05:05:00</td>
                                            <td>
                                                <Image
                                                    src="assets/images/color/eth.svg"
                                                    width="{50}"
                                                    height="{50}"
                                                    alt="coin"
                                                    className="coinicon"
                                                />
                                                ETH
                                            </td>
                                            <td>FDATRWYTUNDJF8455674</td>
                                            <td>
                                                <span className="t-green">FDATRWYTUNDJF8455674</span>
                                            </td>
                                            <td>FDATRWYTUNDJF8455674</td>
                                            <td>2563971</td>
                                            <td>
                                                <Badge bg="success">Confirm</Badge>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>11/03/2026, 05:05:00</td>
                                            <td>
                                                <Image
                                                    src="assets/images/color/bnb.svg"
                                                    width="{50}"
                                                    height="{50}"
                                                    alt="coin"
                                                    className="coinicon"
                                                />
                                                BNB
                                            </td>
                                            <td>FDATRWYTUNDJF8455674</td>
                                            <td>
                                                <span className="t-green">FDATRWYTUNDJF8455674</span>
                                            </td>
                                            <td>FDATRWYTUNDJF8455674</td>
                                            <td>2563971</td>
                                            <td>
                                                <Badge bg="success">Confirm</Badge>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>11/03/2026, 05:05:00</td>
                                            <td>
                                                <Image
                                                    src="assets/images/color/trx.svg"
                                                    width="{50}"
                                                    height="{50}"
                                                    alt="coin"
                                                    className="coinicon"
                                                />
                                                TRX
                                            </td>
                                            <td>FDATRWYTUNDJF8455674</td>
                                            <td>
                                                <span className="t-green">FDATRWYTUNDJF8455674</span>
                                            </td>
                                            <td>FDATRWYTUNDJF8455674</td>
                                            <td>2563971</td>
                                            <td>
                                                <Badge bg="success">Confirm</Badge>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>11/03/2026, 05:05:00</td>
                                            <td>
                                                <Image
                                                    src="assets/images/color/sol.svg"
                                                    width="{50}"
                                                    height="{50}"
                                                    alt="coin"
                                                    className="coinicon"
                                                />
                                                SOL
                                            </td>
                                            <td>FDATRWYTUNDJF8455674</td>
                                            <td>
                                                <span className="t-green">FDATRWYTUNDJF8455674</span>
                                            </td>
                                            <td>FDATRWYTUNDJF8455674</td>
                                            <td>2563971</td>
                                            <td>
                                                <Badge bg="success">Confirm</Badge>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>11/03/2026, 05:05:00</td>
                                            <td>
                                                <Image
                                                    src="assets/images/color/bch.svg"
                                                    width="{50}"
                                                    height="{50}"
                                                    alt="coin"
                                                    className="coinicon"
                                                />
                                                BCH
                                            </td>
                                            <td>FDATRWYTUNDJF8455674</td>
                                            <td>
                                                <span className="t-green">FDATRWYTUNDJF8455674</span>
                                            </td>
                                            <td>FDATRWYTUNDJF8455674</td>
                                            <td>2563971</td>
                                            <td>
                                                <Badge bg="success">Confirm</Badge>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>11/03/2026, 05:05:00</td>
                                            <td>
                                                <Image
                                                    src="assets/images/color/xrp.svg"
                                                    width="{50}"
                                                    height="{50}"
                                                    alt="coin"
                                                    className="coinicon"
                                                />
                                                XRP
                                            </td>
                                            <td>FDATRWYTUNDJF8455674</td>
                                            <td>
                                                <span className="t-green">FDATRWYTUNDJF8455674</span>
                                            </td>
                                            <td>FDATRWYTUNDJF8455674</td>
                                            <td>2563971</td>
                                            <td>
                                                <Badge bg="success">Confirm</Badge>
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
            </div>
        </div>
    );
};

export default deposithistory;
