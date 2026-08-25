"use client"
import React, { useState } from "react";
import { Container, Table, Button, Badge, Form, InputGroup, Image, Modal, Nav, Tab, Row, Col, } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import CountdownTimer from './CountdownTimer';
import ResponsiveTable from '../components/ResponsiveTable';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown, faStar } from "@fortawesome/free-solid-svg-icons";
import Homeheader from '../components/Homeheader';
import Homefooter from '../components/Homefooter';


const page = () => {
  const [showModal1, setShowModal1] = useState(false);
  const handleShowModal1 = () => setShowModal1(true);
  const handleCloseModal1 = () => setShowModal1(false);

  const [showModal2, setShowModal2] = useState(false);
  const handleShowModal2 = () => setShowModal2(true);
  const handleCloseModal2 = () => setShowModal2(false);



  return (
    <div className="convert-page">
      <div className="gridparentbox innerpage innerpage-non-border">
        <div className="backgroundoverlay" id="backgroundoverlay"></div>
        <Homeheader />
        <section className="convertbg">
          <Container>
            <Row className=" align-items-center">
              <Col lg={5} md={5} sm={12}>
                <div className="innerpagecontent">

                  <h2 className="heading-title pt-2">Convert your crypto assets</h2>
                  {/* <p className="">Convert your crypto assets  quickly and easily at competitive rates.</p> */}
                  <p>Convert your digital assets seamlessly with BitsBuys. Get competitive market rates, transparent fees, and secure transactions — all in just a few clicks.</p>

                  {/* <button className="sitebtn mt-2">Sign In</button> */}

                </div>

              </Col>
              <Col lg={7} md={7} sm={12}>

                <div className="d-flex gap-3 mb-3 flex-wrap-x-new before-covert-new">
                  <div className="panelcontentbox convertpage ">
                    <Tab.Container defaultActiveKey="instant">
                      <div className="convert-tabs d-flex justify-content-between align-items-center mb-4">

                        <Nav variant="tabs" className="border-0">
                          <Nav.Item>
                            <Nav.Link eventKey="instant">Instant</Nav.Link>
                          </Nav.Item>

                          <Nav.Item>
                            <Nav.Link eventKey="limit">Limit</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </div>

                      <Tab.Content className="mt-4">

                        {/* Instant Tab */}
                        <Tab.Pane eventKey="instant">
                          <Form>

                            {/* FROM */}
                            <div className="convert-card">
                              <div className="d-flex justify-content-between mb-2">
                                <p className="mb-0">From</p>
                                <p className="mb-0">
                                  Available Balance : BNB
                                </p>
                              </div>

                              <div className="d-flex justify-content-between align-items-start">
                                <div className="d-flex align-items-center coin-select-sm-full" onClick={handleShowModal2}>
                                  <Image
                                    src="/assets/images/color/btc.svg"

                                    width={28}
                                    height={28}
                                    alt=""
                                  />

                                  <div
                                    className="coin-select-wrapper"

                                  >
                                    <div className="coin-select-custom px-1 d-flex align-items-center gap-1 justify-content-between">
                                      <span>BTC</span>
                                      <FontAwesomeIcon
                                        icon={faChevronDown}
                                        className=""
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="text-end">
                                  <div className=" d-flex align-items-center gap-1">
                                    <Form.Control
                                      type="text"
                                      id="instantfrombalance"
                                      className="convert-input text-end"
                                      placeholder="0.000017 - 1,700"
                                    />
                                    <span className="t-gray ">|</span>
                                    <span className="alink ">Max</span>
                                  </div>
                                  <br />
                                  <span className="t-gray">$1</span>
                                </div>
                              </div>
                            </div>

                            {/* Swap Button */}
                            <div className="swap-btn text-center">
                              <button className="btn">
                                <Image
                                  src="/assets/images/swap_vert-pop.svg"
                                  width={18}
                                  height={18}
                                  alt=""
                                />
                              </button>
                            </div>

                            {/* TO */}
                            <div className="convert-card">
                              <div className="d-flex justify-content-between mb-2">
                                <p className="mb-0">To</p>
                                <p className="mb-0">
                                  Available Balance : BTC
                                </p>
                              </div>

                              <div className="d-flex justify-content-between align-items-start">
                                <div className="d-flex align-items-center coin-select-sm-full" onClick={handleShowModal2}>
                                  <Image
                                    src="/assets/images/color/btc.svg"

                                    width={28}
                                    height={28}
                                    alt=""
                                  />

                                  <div
                                    className="coin-select-wrapper"

                                  >
                                    <div className="coin-select-custom px-1 d-flex align-items-center gap-1 justify-content-between">
                                      <span>BTC</span>
                                      <FontAwesomeIcon
                                        icon={faChevronDown}
                                        className=""
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="text-end">
                                  <Form.Control
                                    type="text"
                                    id="instanttobalance"
                                    className="convert-input text-end"
                                    placeholder="0.000017 - 1,700"
                                  />
                                  <span className="t-gray">$1</span>

                                </div>

                              </div>
                            </div>

                            <div className=" d-flex align-items-center justify-content-between my-3">
                              <span title="The final conversion rate is based on current market conditions and may differ from the spot price. You can refresh the quote at any time to receive the latest rate." className="t-gray">Rate</span>
                              <div className="d-flex align-items-center gap-2">
                                <CountdownTimer />
                                <p className="mb-0">

                                  1 BTC ≈ 63,767.1 USDT
                                </p>

                              </div>
                            </div>

                            <Button className="sitebtn w-100  py-3" onClick={handleShowModal1}>
                              enter an amount
                            </Button>

                          </Form>
                        </Tab.Pane>

                        {/* Limit Tab */}
                        <Tab.Pane eventKey="limit">
                          <Form>

                            {/* FROM */}
                            <div className="convert-card">
                              <div className="d-flex justify-content-between mb-2">
                                <p className="mb-0">From</p>
                                <p className="mb-0">
                                  Available Balance : BNB
                                </p>
                              </div>

                              <div className="d-flex justify-content-between align-items-start">
                                <div className="d-flex align-items-center coin-select-sm-full" onClick={handleShowModal2}>
                                  <Image
                                    src="/assets/images/color/btc.svg"
                                    width={28}
                                    height={28}
                                    alt=""
                                  />
                                  <div className="coin-select-wrapper">
                                    <div className="coin-select-custom px-1 d-flex align-items-center gap-1 justify-content-between">
                                      <span>BTC</span>
                                      <FontAwesomeIcon
                                        icon={faChevronDown}
                                        className=""
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="text-end">
                                  <div className=" d-flex align-items-center gap-1">
                                    <Form.Control
                                      type="text"
                                      id="limitfrombalance"
                                      className="convert-input text-end"
                                      placeholder="0.000017 - 1,700"
                                    />
                                    <span className="t-gray ">|</span>
                                    <span className="alink ">Max</span>
                                  </div> <br />
                                  <span className="t-gray">$1</span>
                                </div>
                              </div>
                            </div>

                            {/* Swap Button */}
                            <div className="swap-btn text-center">
                              <button className="btn">
                                <Image
                                  src="/assets/images/swap_vert-pop.svg"
                                  width={18}
                                  height={18}
                                  alt=""
                                />
                              </button>
                            </div>

                            {/* TO */}
                            <div className="convert-card">
                              <div className="d-flex justify-content-between mb-2">
                                <p className="mb-0">To</p>
                                <p className="mb-0">
                                  Available Balance : BTC
                                </p>
                              </div>

                              <div className="d-flex justify-content-between align-items-start">
                                <div className="d-flex align-items-center coin-select-sm-full" onClick={handleShowModal2}>
                                  <Image
                                    src="/assets/images/color/btc.svg"

                                    width={28}
                                    height={28}
                                    alt=""
                                  />

                                  <div
                                    className="coin-select-wrapper"

                                  >
                                    <div className="coin-select-custom px-1 d-flex align-items-center gap-1 justify-content-between">
                                      <span>BTC</span>
                                      <FontAwesomeIcon
                                        icon={faChevronDown}
                                        className=""
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="text-end">
                                  <Form.Control
                                    type="text"
                                    id="limittobalance"
                                    className="convert-input text-end"
                                    placeholder="0.000017 - 1,700"
                                  />
                                  <span className="t-gray">$1</span>

                                </div>

                              </div>
                            </div>
                            <div className="convert-card mt-2">
                              <div className="d-flex justify-content-between mb-2 coin-select-smx-full">
                                <p className="mb-0">When 1 BNB is worth</p>
                                <div className=" d-flex align-items-center gap-1 siteformbg ">
                                  <span >Expires in</span>
                                  <Form.Select className="form-control w-auto" id="limitexpire">
                                    <option>1 Hour</option>
                                    <option>1 Day</option>
                                    <option>3 Days</option>
                                    <option>5 Days</option>
                                  </Form.Select>
                                </div>
                              </div>

                              <div className="d-flex justify-content-between align-items-start coin-select-smx-full">
                                <div className="d-flex align-items-center coin-select-sm-full" >
                                  <Image
                                    src="/assets/images/color/btc.svg"
                                    width={28}
                                    height={28}
                                    alt=""
                                  />

                                  <div className="coin-select-wrapper"    >
                                    <div className="coin-select-custom px-1 d-flex align-items-center gap-1 justify-content-between">
                                      <span>BTC</span>

                                    </div>
                                  </div>
                                </div>

                                <div className="text-end">
                                  <Form.Control
                                    type="text"
                                    className="convert-input text-end"
                                    placeholder="0.000017 - 1,700"
                                    id="limitworthbalance"
                                  />
                                  <span className="t-gray">$1</span>
                                  <div className=" d-flex  justify-content-end gap-1 mt-1">
                                    <button className="btn-sm borderbtn"> +1%</button>
                                    <button className="btn-sm borderbtn"> +5%</button>
                                    <button className="btn-sm borderbtn"> +10%</button>
                                  </div>

                                </div>

                              </div>
                            </div>
                            <div className=" d-flex align-items-center justify-content-between my-3">
                              <span title="The final conversion rate is based on current market conditions and may differ from the spot price. You can refresh the quote at any time to receive the latest rate." className="t-gray">Rate</span>
                              <p className="mb-0">1 BTC ≈ 63,767.1 USDT</p>
                            </div>

                            <Button className="sitebtn w-100 py-3">
                              enter an amount
                            </Button>

                          </Form>
                        </Tab.Pane>

                      </Tab.Content>
                    </Tab.Container>
                  </div>
                  {/* <div className="d-flex flex-column panelcontentbox  align-items-center  justify-content-start">
                <p className="mb-0">Convert your digital assets quickly and securely with real-time market prices.
                  Select your currencies, enter the amount, and complete your conversion in just a few clicks.</p>
                <Image src="assets/images/swap.png" width="{50}"
                  height="{50}" alt="coin" className="convert-main-x" />

              </div> */}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="cnvt-tablebg">
          <Container>
            <div className="cvnt-head">
              <h2 className="heading-title pb-2">Convert History</h2>
              <p className="content">Track your crypto conversions, exchange rates, and transaction status in one place.</p>
              
              <div className="tabrightbox">
                <Link href="#" className="btn sitebtn btn-sm">View All  <FontAwesomeIcon icon={faArrowRight} /></Link>
              </div>
            </div>
            <div className="panelcontentbox devicetable ">

              <SimpleBar className="table-responsive sitescroll">
                <Table className="sitetable" id="table1">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Date & Time</th>
                      <th>Pair</th>
                      <th>Convert Amount</th>
                      <th>Receive Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>11-12-2024 05:00:05</td>
                      <td>
                        <Image src="assets/images/color/btc.svg" width="{50}"
                          height="{50}" alt="coin" className="coinicon" />
                        BTC/ETH
                      </td>
                      <td>10,0000256</td>
                      <td>58.26</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>11-12-2024 05:00:05</td>
                      <td>
                        <Image src="assets/images/color/eth.svg" width="{50}"
                          height="{50}" alt="coin" className="coinicon" />
                        ETH/BTC
                      </td>
                      <td>10,0000256</td>
                      <td>58.26</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>11-12-2024 05:00:05</td>
                      <td>
                        <Image src="assets/images/color/bnb.svg" width="{50}"
                          height="{50}" alt="coin" className="coinicon" />
                        BNB/ETH
                      </td>
                      <td>10,0000256</td>
                      <td>58.26</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>11-12-2024 05:00:05</td>
                      <td>
                        <Image src="assets/images/color/trx.svg" width="{50}"
                          height="{50}" alt="coin" className="coinicon" />
                        TRX/BTC
                      </td>
                      <td>10,0000256</td>
                      <td>58.26</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>11-12-2024 05:00:05</td>
                      <td>
                        <Image src="assets/images/color/sol.svg" width="{50}"
                          height="{50}" alt="coin" className="coinicon" />
                        SOL/ETH
                      </td>
                      <td>10,0000256</td>
                      <td>58.26</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>11-12-2024 05:00:05</td>
                      <td>
                        <Image src="assets/images/color/xrp.svg" width="{50}"
                          height="{50}" alt="coin" className="coinicon" />
                        XRP/ETH
                      </td>
                      <td>10,0000256</td>
                      <td>58.26</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>11-12-2024 05:00:05</td>
                      <td>
                        <Image src="assets/images/color/ada.svg" width="{50}"
                          height="{50}" alt="coin" className="coinicon" />
                        ADA/ETH
                      </td>
                      <td>10,0000256</td>
                      <td>58.26</td>
                    </tr>
                  </tbody>
                </Table>
              </SimpleBar>
              <ResponsiveTable tableId="table1" />

            </div>
          </Container>
        </section>
        <Homefooter />
        <Modal className="connectmdlwlletbox modalbgt siteformbox-swap" show={showModal1} onHide={handleCloseModal1} backdrop="static" keyboard={false} aria-labelledby="contained-modal-title-vcenter2" centered>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter2">Confirm Swap</Modal.Title>
          </Modal.Header>
          <Modal.Body className=''>
            <div className="paneldarkbox">
              <div className="confirmbox">
                <Form className="siteformbox ">
                  <Form.Group className="form-group">
                    <div className="balancetable swapbalance d-flex align-items-center justify-content-between gap-2">
                      <div className='d-flex flex-column align-items-center box-sawp w-100'>
                        <div className='d-flex flex-column align-items-center'>
                          <span className="swapbalance-tt my-0  t-gray mb-0">From</span>
                          <Image src="assets/images/color/bnb.svg" width={100} height={100} alt="money" className="coinicon-pop " />
                          <p className=" swapbalance-tt mb-0">0.1</p>
                        </div>
                      </div>
                      <Image className='arrow-doted' src="assets/images/arrow-doted.svg" alt="money" />
                      <div className='d-flex flex-column align-items-center box-sawp w-100'>
                        <div className='d-flex flex-column align-items-center'>
                          <span className="swapbalance-tt my-0 t-gray">To</span>
                          <Image src="assets/images/color/eth.svg" width={100} height={100} alt="money" className="coinicon-pop " />
                          <p className=" swapbalance-tt mb-0">0.1</p>
                        </div>
                      </div>
                    </div>
                  </Form.Group>
                  <Form.Group className="form-group convert-values-x">
                    <div className='d-flex align-items-start justify-content-between flex-column gap-2'>

                      <div className='d-flex  justify-content-between align-items-center w-100'>
                        <p className='tt-main-swap mb-0'>Price Impact :</p>
                        <span className='tt-submain-swap mb-0'>0.00%</span>
                      </div>
                      <div className='d-flex  justify-content-between align-items-center w-100'>
                        <p className='tt-main-swap mb-0'>Slippage Tolerance :</p>
                        <span className='tt-submain-swap mb-0'>0.00%</span>
                      </div>
                      <div className='d-flex  justify-content-between align-items-center w-100'>
                        <p className='tt-main-swap mb-0'>iquidity Provider Fee :</p>
                        <span className='tt-submain-swap mb-0'>0.00%</span>
                      </div>

                    </div>

                  </Form.Group>
                  <Form.Group className="form-group text-center btncenterbox d-flex gap-2">
                    <Button type="Button" className="btn borderbtn rounded-5 w-100">Cancel</Button>
                    <Button type="Button" className="btn sitebtn w-100" id="confirmwallet">Confirm</Button>
                  </Form.Group>
                </Form>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        <Modal className="connectmdlwlletbox modalbgt siteformbox-swap" show={showModal2} onHide={handleCloseModal2} backdrop="static" keyboard={false} aria-labelledby="contained-modal-title-vcenter2" centered>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter2">Confirm Swap</Modal.Title>
          </Modal.Header>
          <Modal.Body className='convert-tabs-main'>
            <Tab.Container defaultActiveKey="all">
              <div className="convert-tabs d-flex justify-content-between align-items-center mb-2">
                <Nav variant="tabs" >
                  <Nav.Item>
                    <Nav.Link eventKey="all">All</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="new">New</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="bstocks">bStocks</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
              <Tab.Content className="">
                <Tab.Pane eventKey="all">
                  <SimpleBar className="table-responsive sitescroll">
                    <Table className="sitetable mb-0" id="table1">

                      <tbody>
                        <tr>
                          <td className=" d-flex">
                            <Image src="assets/images/color/btc.svg" width="{50}"
                              height="{50}" alt="coin" className="coinicon" />
                            <div>
                              <span> BTC</span> <br />
                              <span className="t-gray">Bitcoin</span>
                            </div>
                          </td>
                          <td className=" text-end"><FontAwesomeIcon className="fa-star-x"
                            icon={faStar}
                          /></td>
                        </tr>
                        <tr>
                          <td className=" d-flex">
                            <Image src="assets/images/color/eth.svg" width="{50}"
                              height="{50}" alt="coin" className="coinicon" />
                            <div>
                              <span>ETH</span> <br />
                              <span className="t-gray">Ethereum</span>
                            </div>
                          </td>
                          <td className=" text-end"><FontAwesomeIcon className="fa-star-x"
                            icon={faStar}
                          /></td>
                        </tr>
                        <tr>
                          <td className=" d-flex">
                            <Image src="assets/images/color/bnb.svg" width="{50}"
                              height="{50}" alt="coin" className="coinicon" />
                            <div>
                              <span>BNB</span> <br />
                              <span className="t-gray">BNB</span>
                            </div>
                          </td>
                          <td className=" text-end"><FontAwesomeIcon className="fa-star-x"
                            icon={faStar}
                          /></td>
                        </tr>
                        <tr>
                          <td className=" d-flex">
                            <Image src="assets/images/color/sol.svg" width="{50}"
                              height="{50}" alt="coin" className="coinicon" />
                            <div>
                              <span>SOL</span> <br />
                              <span className="t-gray">solana</span>
                            </div>
                          </td>
                          <td className=" text-end"><FontAwesomeIcon className="fa-star-x"
                            icon={faStar}
                          /></td>
                        </tr>

                      </tbody>
                    </Table>
                  </SimpleBar>
                </Tab.Pane>
                {/* <Tab.Pane eventKey="new">
                  <SimpleBar className="table-responsive sitescroll">
                    <Table className="sitetable mb-0" id="table1">

                      <tbody>
                        <tr>
                          <td className=" d-flex">
                            <Image src="assets/images/color/btc.svg" width="{50}"
                              height="{50}" alt="coin" className="coinicon" />
                            <div>
                              <span> BTC <span className="badge-new">New</span></span> <br />
                              <span className="t-gray">Bitcoin</span>
                            </div>
                          </td>
                          <td className=" text-end"><FontAwesomeIcon className="fa-star-x"
                            icon={faStar}
                          /></td>
                        </tr>
                        <tr>
                          <td className=" d-flex">
                            <Image src="assets/images/color/eth.svg" width="{50}"
                              height="{50}" alt="coin" className="coinicon" />
                            <div>
                              <span>ETH <span className="badge-new">New</span></span> <br />
                              <span className="t-gray">Ethereum</span>
                            </div>
                          </td>
                          <td className=" text-end"><FontAwesomeIcon className="fa-star-x"
                            icon={faStar}
                          /></td>
                        </tr>
                        <tr>
                          <td className=" d-flex">
                            <Image src="assets/images/color/bnb.svg" width="{50}"
                              height="{50}" alt="coin" className="coinicon" />
                            <div>
                              <span>BNB <span className="badge-new">New</span></span> <br />
                              <span className="t-gray">BNB</span>
                            </div>
                          </td>
                          <td className=" text-end"><FontAwesomeIcon className="fa-star-x"
                            icon={faStar}
                          /></td>
                        </tr>
                        <tr>
                          <td className=" d-flex">
                            <Image src="assets/images/color/sol.svg" width="{50}"
                              height="{50}" alt="coin" className="coinicon" />
                            <div>
                              <span>SOL <span className="badge-new">New</span></span> <br />
                              <span className="t-gray">solana</span>
                            </div>
                          </td>
                          <td className=" text-end"><FontAwesomeIcon className="fa-star-x"
                            icon={faStar}
                          /></td>
                        </tr>

                      </tbody>
                    </Table>
                  </SimpleBar>
                </Tab.Pane>
                <Tab.Pane eventKey="bstocks">
                  <SimpleBar className="table-responsive sitescroll">
                    <Table className="sitetable mb-0" id="table1">

                      <tbody>
                        <tr>
                          <td className=" d-flex">
                            <Image src="assets/images/color/btc.svg" width="{50}"
                              height="{50}" alt="coin" className="coinicon" />
                            <div>
                              <span> BTC <span className="badge-new">New</span> <span className="badge-new">bstocks</span></span> <br />
                              <span className="t-gray">Bitcoin</span>
                            </div>
                          </td>
                          <td className=" text-end"><FontAwesomeIcon className="fa-star-x"
                            icon={faStar}
                          /></td>
                        </tr>
                        <tr>
                          <td className=" d-flex">
                            <Image src="assets/images/color/eth.svg" width="{50}"
                              height="{50}" alt="coin" className="coinicon" />
                            <div>
                              <span>ETH <span className="badge-new">New</span> <span className="badge-new">bstocks</span></span> <br />
                              <span className="t-gray">Ethereum</span>
                            </div>
                          </td>
                          <td className=" text-end"><FontAwesomeIcon className="fa-star-x"
                            icon={faStar}
                          /></td>
                        </tr>
                        <tr>
                          <td className=" d-flex">
                            <Image src="assets/images/color/bnb.svg" width="{50}"
                              height="{50}" alt="coin" className="coinicon" />
                            <div>
                              <span>BNB <span className="badge-new">New</span> <span className="badge-new">bstocks</span></span> <br />
                              <span className="t-gray">BNB</span>
                            </div>
                          </td>
                          <td className=" text-end"><FontAwesomeIcon className="fa-star-x"
                            icon={faStar}
                          /></td>
                        </tr>
                        <tr>
                          <td className=" d-flex">
                            <Image src="assets/images/color/sol.svg" width="{50}"
                              height="{50}" alt="coin" className="coinicon" />
                            <div>
                              <span>SOL <span className="badge-new">New</span> <span className="badge-new">bstocks</span></span> <br />
                              <span className="t-gray">solana</span>
                            </div>
                          </td>
                          <td className=" text-end"><FontAwesomeIcon className="fa-star-x"
                            icon={faStar}
                          /></td>
                        </tr>

                      </tbody>
                    </Table>
                  </SimpleBar>
                </Tab.Pane> */}
              </Tab.Content>
            </Tab.Container>
          </Modal.Body>
        </Modal>
      </div>
    </div >
  );
};

export default page;