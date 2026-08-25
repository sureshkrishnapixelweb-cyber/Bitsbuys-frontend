"use client"
import React, { useState } from 'react';
import Simplebar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { Image, Table, Nav, Tab, NavDropdown, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faArrowUp, faStar } from '@fortawesome/free-solid-svg-icons';

export const page = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = (isOpen) => {
        setShowDropdown(isOpen);
    };

    const handleItemClick = (e) => {
        e.stopPropagation(); // Prevents dropdown from closing on inside clicks
    };

    const closeTab = () => {
        setShowDropdown(false); // Explicitly close the dropdown
        console.log('Dropdown closed');
    };


    return (
        <div className="livepricelist">
            <div className="livepricemobile">
                <ul className="livepricenavbg">
                    <li>
                        <span className="markettabdropbox">
                            <NavDropdown title={<div className="float-start"><Image src="assets/images/color/btc.svg" className="coinlisticon" alt="coin" />BTC/USDT</div>} id="basic-nav-dropdown" className="marketlist markeselect" show={showDropdown} onToggle={toggleDropdown} >
                                <div className="dropdown-item">
                                    <div id="closemarketicon" className="closeiconlist" onClick={closeTab}><FontAwesomeIcon icon={faTimes} /></div>
                                    <h2 className="heading-box bg-none">Markets List</h2>
                                    <Tab.Container defaultActiveKey="btc">
                                        <div className="innerpagetab historytab">
                                            <Nav variant="pills" className="tabbanner" id="marketpair_tab1">
                                                {/* <Nav.Item><Nav.Link eventKey="btc">BTC</Nav.Link></Nav.Item> */}
                                                {/* <Nav.Item><Nav.Link eventKey="eth">ETH</Nav.Link></Nav.Item> */}
                                            </Nav>
                                        </div>

                                        <div className="filtersearch">
                                            <Form className="siteformbg">
                                                <Form.Group className="form-group mb-2">
                                                    <Form.Control placeholder="Seacrh" id='searchtextbox' />
                                                </Form.Group >
                                            </Form>
                                        </div>
                                        <Tab.Content id="market_dropdown_table1">
                                            <Tab.Pane eventKey="btc">
                                                <Simplebar className="table-responsive">
                                                    <Table className="sitetable" id='table1'>
                                                        <thead>
                                                            <tr>
                                                                <th>Coin</th>
                                                                <th>Last Price</th>
                                                                <th>24h Change</th>
                                                                <th>24h Volume</th>
                                                                <th></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className="activerow">
                                                                <td><Image src="../assets/images/color/btc.svg" width={25} height={25} alt="coin" className="coinlisticon" />BTC/USDT</td>
                                                                <td>2562.365289</td>
                                                                <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                                                <td>2562.365289</td>
                                                                <td>
                                                                    <span className='fav-star-icon'>
                                                                        <FontAwesomeIcon icon={faStar} />
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><Image src="../assets/images/color/eth.svg" width={25} height={25} alt="coin" className="coinlisticon" />ETH/USDT</td>
                                                                <td>2562.365289</td>
                                                                <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                                                <td>2562.365289</td>
                                                                <td>
                                                                    <span className='fav-star-icon'>
                                                                        <FontAwesomeIcon icon={faStar} />
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><Image src="../assets/images/color/bnb.svg" width={25} height={25} alt="coin" className="coinlisticon" />BNB/USDT</td>
                                                                <td>2562.365289</td>
                                                                <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                                                <td>2562.365289</td>
                                                                <td>
                                                                    <span className='fav-star-icon'>
                                                                        <FontAwesomeIcon icon={faStar} />
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><Image src="../assets/images/color/trx.svg" width={25} height={25} alt="coin" className="coinlisticon" />TRX/USDT</td>
                                                                <td>2562.365289</td>
                                                                <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                                                <td>2562.365289</td>
                                                                <td>
                                                                    <span className='fav-star-icon'>
                                                                        <FontAwesomeIcon icon={faStar} />
                                                                    </span>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td><Image src="../assets/images/color/sol.svg" width={25} height={25} alt="coin" className="coinlisticon" />SOL/USDT</td>
                                                                <td>2562.365289</td>
                                                                <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                                                <td>2562.365289</td>
                                                                <td>
                                                                    <span className='fav-star-icon'>
                                                                        <FontAwesomeIcon icon={faStar} />
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><Image src="../assets/images/color/bch.svg" width={25} height={25} alt="coin" className="coinlisticon" />BCH/USDT</td>
                                                                <td>2562.365289</td>
                                                                <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                                                <td>2562.365289</td>
                                                                <td>
                                                                    <span className='fav-star-icon'>
                                                                        <FontAwesomeIcon icon={faStar} />
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><Image src="../assets/images/color/xrp.svg" width={25} height={25} alt="coin" className="coinlisticon" />XRP/USDT</td>
                                                                <td>2562.365289</td>
                                                                <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                                                <td>2562.365289</td>
                                                                <td>
                                                                    <span className='fav-star-icon'>
                                                                        <FontAwesomeIcon icon={faStar} />
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </Simplebar>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="eth">
                                                <Simplebar className="table-responsive">
                                                    <Table className="sitetable" id='table2'>
                                                        <thead>
                                                            <tr>
                                                                <th>Coin</th>
                                                                <th>Last Price</th>
                                                                <th>24h Change</th>
                                                                <th>24h Volume</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className="activerow">
                                                                <td><Image src="../assets/images/color/btc.svg" width={25} height={25} alt="coin" className="coinlisticon" />BTC/ETH</td>
                                                                <td>2562.365289</td>
                                                                <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                                                <td>2562.365289</td>
                                                            </tr>
                                                            <tr>
                                                                <td><Image src="../assets/images/color/eth.svg" width={25} height={25} alt="coin" className="coinlisticon" />ETH/BTC</td>
                                                                <td>2562.365289</td>
                                                                <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                                                <td>2562.365289</td>
                                                            </tr>
                                                            <tr>
                                                                <td><Image src="../assets/images/color/bnb.svg" width={25} height={25} alt="coin" className="coinlisticon" />BNB/ETH</td>
                                                                <td>2562.365289</td>
                                                                <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                                                <td>2562.365289</td>
                                                            </tr>
                                                            <tr>
                                                                <td><Image src="../assets/images/color/trx.svg" width={25} height={25} alt="coin" className="coinlisticon" />TRX/ETH</td>
                                                                <td>2562.365289</td>
                                                                <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                                                <td>2562.365289</td>
                                                            </tr>

                                                            <tr>
                                                                <td><Image src="../assets/images/color/sol.svg" width={25} height={25} alt="coin" className="coinlisticon" />sol/ETH</td>
                                                                <td>2562.365289</td>
                                                                <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                                                <td>2562.365289</td>
                                                            </tr>
                                                            <tr>
                                                                <td><Image src="../assets/images/color/xrp.svg" width={25} height={25} alt="coin" className="coinlisticon" />xrp/ETH</td>
                                                                <td>2562.365289</td>
                                                                <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                                                <td>2562.365289</td>
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
                    </li>
                    <li><a className="livepricet">Last price<span className="t-red">0.236589 USDT</span></a></li>
                    <li><a className="livepricet">24H change<span className="t-green">0.236589</span></a></li>
                    <li><a className="livepricet">24H volume<span>0.236589 USDT</span></a></li>
                    <li><a className="livepricet">24H Low<span>0.236589 USDT</span></a></li>
                </ul>
            </div>
        </div>
    )
}

export default page;