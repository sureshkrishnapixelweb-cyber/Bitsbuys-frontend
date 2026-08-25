"use client"
import React, { useState } from "react";
import Simplebar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { Image, Table, Nav, Tab, NavDropdown, Form, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const Livepricelist = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    return (
        <div className="livepricelist">
            <div className="livepricemobile">
                <ul className="livepricenavbg align-items-center">
                    <li>
                        <div className="d-flex align-items-center gap-2">
                            <div>
                                <span className="markettabdropbox">
                                    <NavDropdown show={showDropdown} onToggle={(isOpen) => setShowDropdown(isOpen)} title={

                                        <div className="pull-left">
                                            <span className="favicon">
                                                <FontAwesomeIcon icon={faStar} />
                                            </span>
                                            <Image src="assets/images/color/btc.svg" className="coinlisticon" alt="coin" />
                                            <div>
                                                <span   >BTC/USDC </span> <br />
                                                <span className="bit-coin-pri">Bitcoin Price     <FontAwesomeIcon icon={faArrowRight} className="me-2" /></span>
                                            </div>
                                        </div>}  >
                                        {/* Use div instead of <a> to prevent auto-close */}
                                        <div className="dropdown-body">
                                            <div id="closemarketicon" className="closeiconlist" // only close on click here
                                            > <FontAwesomeIcon icon={faClose} />
                                            </div>

                                            <Tab.Container defaultActiveKey="all">
                                                <div className="innerpagetab historytab">
                                                    <Nav variant="pills" className="tabbanner d-flex justify-content-between">
                                                        <div className="d-flex">
                                                            <Nav.Item><Nav.Link eventKey="all">All</Nav.Link></Nav.Item>
                                                            <Nav.Item><Nav.Link eventKey="fav">Favourite</Nav.Link></Nav.Item>
                                                        </div>
                                                        <button className="btn-close-new" onClick={() => setShowDropdown(false)}><FontAwesomeIcon icon={faClose} /></button>

                                                    </Nav>

                                                </div>


                                                <div className="filtersearch">
                                                    <Form className="siteformbg">
                                                        <Form.Group className="form-group mb-0">
                                                            <Form.Control placeholder="Search Market" id='search' />
                                                        </Form.Group >
                                                    </Form>
                                                </div>
                                                <Tab.Content>
                                                    <Tab.Pane eventKey="all">
                                                        <Simplebar className="table-responsive">
                                                            <Table className="sitetable" id='markettable'>
                                                                <thead>
                                                                    <tr>
                                                                        <th></th>
                                                                        <th>Market</th>
                                                                        <th>Last Price</th>
                                                                        <th>24h%</th>
                                                                        <th>24h Vol</th>
                                                                        <th>Open Interest</th>
                                                                        <th>Avaliable Liq</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className="activerow">
                                                                        <td className="staricon selected"><FontAwesomeIcon icon={faStar} /></td>
                                                                        <td><Image src="../assets/images/color/btc.svg" width={25} height={25} alt="coin" className="coinlisticon" />BTC/USD <Badge className="smbadegbox">10x</Badge></td>
                                                                        <td>2562.365289</td>
                                                                        <td><span className="t-green">+2.20% </span></td>
                                                                        <td>$2.53m</td>
                                                                        <td><span className=""><FontAwesomeIcon icon={faArrowUp} />$62.3m</span><span className="ms-2"><FontAwesomeIcon icon={faArrowDown} />$62.3m</span></td>
                                                                        <td><span className=""><FontAwesomeIcon icon={faArrowUp} />$62.3m</span><span className="ms-2"><FontAwesomeIcon icon={faArrowDown} />$62.3m</span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="staricon"><FontAwesomeIcon icon={faStar} /></td>
                                                                        <td><Image src="../assets/images/color/sol.svg" width={25} height={25} alt="coin" className="coinlisticon" />SOL/USD <Badge className="smbadegbox">10x</Badge></td>
                                                                        <td>2562.365289</td>
                                                                        <td><span className="t-green">+2.20% </span></td>
                                                                        <td>$2.53m</td>
                                                                        <td><span className=""><FontAwesomeIcon icon={faArrowUp} />$62.3m</span><span className="ms-2"><FontAwesomeIcon icon={faArrowDown} />$62.3m</span></td>
                                                                        <td><span className=""><FontAwesomeIcon icon={faArrowUp} />$62.3m</span><span className="ms-2"><FontAwesomeIcon icon={faArrowDown} />$62.3m</span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="staricon"><FontAwesomeIcon icon={faStar} /></td>
                                                                        <td><Image src="../assets/images/color/eth.svg" width={25} height={25} alt="coin" className="coinlisticon" />ETH/USD <Badge className="smbadegbox">10x</Badge></td>
                                                                        <td>2562.365289</td>
                                                                        <td><span className="t-green">+2.20% </span></td>
                                                                        <td>$2.53m</td>
                                                                        <td><span className=""><FontAwesomeIcon icon={faArrowUp} />$62.3m</span><span className="ms-2"><FontAwesomeIcon icon={faArrowDown} />$62.3m</span></td>
                                                                        <td><span className=""><FontAwesomeIcon icon={faArrowUp} />$62.3m</span><span className="ms-2"><FontAwesomeIcon icon={faArrowDown} />$62.3m</span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="staricon"><FontAwesomeIcon icon={faStar} /></td>
                                                                        <td><Image src="../assets/images/color/link.svg" width={25} height={25} alt="coin" className="coinlisticon" />LINK/USD <Badge className="smbadegbox">10x</Badge></td>
                                                                        <td>2562.365289</td>
                                                                        <td><span className="t-green">+2.20% </span></td>
                                                                        <td>$2.53m</td>
                                                                        <td><span className=""><FontAwesomeIcon icon={faArrowUp} />$62.3m</span><span className="ms-2"><FontAwesomeIcon icon={faArrowDown} />$62.3m</span></td>
                                                                        <td><span className=""><FontAwesomeIcon icon={faArrowUp} />$62.3m</span><span className="ms-2"><FontAwesomeIcon icon={faArrowDown} />$62.3m</span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="staricon"><FontAwesomeIcon icon={faStar} /></td>
                                                                        <td><Image src="../assets/images/color/doge.svg" width={25} height={25} alt="coin" className="coinlisticon" />DOGE/USD <Badge className="smbadegbox">10x</Badge></td>
                                                                        <td>2562.365289</td>
                                                                        <td><span className="t-green">+2.20% </span></td>
                                                                        <td>$2.53m</td>
                                                                        <td><span className=""><FontAwesomeIcon icon={faArrowUp} />$62.3m</span><span className="ms-2"><FontAwesomeIcon icon={faArrowDown} />$62.3m</span></td>
                                                                        <td><span className=""><FontAwesomeIcon icon={faArrowUp} />$62.3m</span><span className="ms-2"><FontAwesomeIcon icon={faArrowDown} />$62.3m</span></td>
                                                                    </tr>
                                                                </tbody>
                                                            </Table>
                                                        </Simplebar>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="fav">
                                                        <Simplebar className="table-responsive">
                                                            <Table className="sitetable" id='markettable2'>
                                                                <thead>
                                                                    <tr>
                                                                        <th></th>
                                                                        <th>Market</th>
                                                                        <th>Last Price</th>
                                                                        <th>24h%</th>
                                                                        <th>24h Vol</th>
                                                                        <th>Open Interest</th>
                                                                        <th>Avaliable Liq</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className="activerow">
                                                                        <td className="staricon selected"><FontAwesomeIcon icon={faStar} /></td>
                                                                        <td><Image src="../assets/images/color/btc.svg" width={25} height={25} alt="coin" className="coinlisticon" />BTC/USD <Badge className="smbadegbox">10x</Badge></td>
                                                                        <td>2562.365289</td>
                                                                        <td><span className="t-green">+2.20% </span></td>
                                                                        <td>$2.53m</td>
                                                                        <td><span className=""><FontAwesomeIcon icon={faArrowUp} />$62.3m</span><span className="ms-2"><FontAwesomeIcon icon={faArrowDown} />$62.3m</span></td>
                                                                        <td><span className=""><FontAwesomeIcon icon={faArrowUp} />$62.3m</span><span className="ms-2"><FontAwesomeIcon icon={faArrowDown} />$62.3m</span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="staricon selected"><FontAwesomeIcon icon={faStar} /></td>
                                                                        <td><Image src="../assets/images/color/sol.svg" width={25} height={25} alt="coin" className="coinlisticon" />SOL/USD <Badge className="smbadegbox">10x</Badge></td>
                                                                        <td>2562.365289</td>
                                                                        <td><span className="t-green">+2.20% </span></td>
                                                                        <td>$2.53m</td>
                                                                        <td><span className=""><FontAwesomeIcon icon={faArrowUp} />$62.3m</span><span className="ms-2"><FontAwesomeIcon icon={faArrowDown} />$62.3m</span></td>
                                                                        <td><span className=""><FontAwesomeIcon icon={faArrowUp} />$62.3m</span><span className="ms-2"><FontAwesomeIcon icon={faArrowDown} />$62.3m</span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="staricon selected"><FontAwesomeIcon icon={faStar} /></td>
                                                                        <td><Image src="../assets/images/color/eth.svg" width={25} height={25} alt="coin" className="coinlisticon" />ETH/USD <Badge className="smbadegbox">10x</Badge></td>
                                                                        <td>2562.365289</td>
                                                                        <td><span className="t-green">+2.20% </span></td>
                                                                        <td>$2.53m</td>
                                                                        <td><span className=""><FontAwesomeIcon icon={faArrowUp} />$62.3m</span><span className="ms-2"><FontAwesomeIcon icon={faArrowDown} />$62.3m</span></td>
                                                                        <td><span className=""><FontAwesomeIcon icon={faArrowUp} />$62.3m</span><span className="ms-2"><FontAwesomeIcon icon={faArrowDown} />$62.3m</span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="staricon selected"><FontAwesomeIcon icon={faStar} /></td>
                                                                        <td><Image src="../assets/images/color/link.svg" width={25} height={25} alt="coin" className="coinlisticon" />LINK/USD <Badge className="smbadegbox">10x</Badge></td>
                                                                        <td>2562.365289</td>
                                                                        <td><span className="t-green">+2.20% </span></td>
                                                                        <td>$2.53m</td>
                                                                        <td><span className=""><FontAwesomeIcon icon={faArrowUp} />$62.3m</span><span className="ms-2"><FontAwesomeIcon icon={faArrowDown} />$62.3m</span></td>
                                                                        <td><span className=""><FontAwesomeIcon icon={faArrowUp} />$62.3m</span><span className="ms-2"><FontAwesomeIcon icon={faArrowDown} />$62.3m</span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="staricon selected"><FontAwesomeIcon icon={faStar} /></td>
                                                                        <td><Image src="../assets/images/color/doge.svg" width={25} height={25} alt="coin" className="coinlisticon" />DOGE/USD <Badge className="smbadegbox">10x</Badge></td>
                                                                        <td>2562.365289</td>
                                                                        <td><span className="t-green">+2.20% </span></td>
                                                                        <td>$2.53m</td>
                                                                        <td><span className=""><FontAwesomeIcon icon={faArrowUp} />$62.3m</span><span className="ms-2"><FontAwesomeIcon icon={faArrowDown} />$62.3m</span></td>
                                                                        <td><span className=""><FontAwesomeIcon icon={faArrowUp} />$62.3m</span><span className="ms-2"><FontAwesomeIcon icon={faArrowDown} />$62.3m</span></td>
                                                                    </tr>
                                                                </tbody>
                                                            </Table>
                                                        </Simplebar>
                                                    </Tab.Pane>
                                                </Tab.Content>
                                            </Tab.Container>
                                        </div>
                                    </NavDropdown>
                                </span>
                            </div>
                            <div>
                                <span className="badge bg-success">20X</span>
                            </div>
                        </div>
                    </li>
                    <li><a className="livepricet"><span className="t-green price-ff-size">53,186</span><br />$53,186</a></li>
                    <li><a className="livepricet">Mark<br /><span className="t-green">53,186</span></a></li>
                    <li><a className="livepricet">Oracle Price<br /><span className="tt-gary-tt">$104,472</span></a></li>
                    <li><a className="livepricet">24h Change<br /><span className="t-green"><FontAwesomeIcon icon={faArrowUp} /> $138.6m</span></a></li>
                    <li><a className="livepricet">24h Volume<br /><span className="tt-gary-tt">$104,472</span></a></li>
                    <li><a className="livepricet">Open Interest<br /><span className="tt-gary-tt">284.64 <span className="batch-li">BTC</span> </span></a></li>
                    <li><a className="livepricet">Funding / Countdown<br /><span className="t-green">0.00034% 00:35:20</span></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Livepricelist;