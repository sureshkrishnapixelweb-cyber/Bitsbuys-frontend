"use client"
import Homeheader from "./components/Homeheader";
import { useEffect, useState, useRef } from "react";

import {
  Image,
  Container,
  Accordion,
  AccordionItem,
  AccordionHeader,
  Modal,
  Row,
  Col,
  Table,
  Form, Tab, Nav, Button, InputGroup, Dropdown
} from "react-bootstrap";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import ResponsiveTable from "./components/ResponsiveTable";
import Link from "next/link";
import Homefooter from "./components/Footermenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import Loader from "./components/Loader";
import Offersection from "./components/Offersection";



export default function Home() {
  const [activeKey, setActiveKey] = useState("1");

  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const handleClose1 = () => {
    setShowModal1(false);
  };

  useEffect(() => {
    setShowModal1(true);
  }, []);
  return (
    <>

      {/* <Offersection /> */}
      <div className="home-page">
        <Loader />
        <Homeheader />
        <section className="banner-section">
          <Container>
            <div className="banner-content">
              <div className="left-coinbg">
                <Link href="/trade">
                  <Image src="assets/images/btccoin.png" width={500} height={100} alt="coin" className="leftcoinimg btcimg" />
                </Link>
                <Link href="/trade">
                  <Image src="assets/images/udsccoin.png" width={500} height={100} alt="coin" className="leftcoinimg usdccoin" />
                </Link>
                <Link href="/trade">
                  <Image src="assets/images/bnbcoin.png" width={500} height={100} alt="coin" className="leftcoinimg bnbcoin" />
                </Link>
                <Link href="/trade">
                  <Image src="assets/images/solcoin.png" width={500} height={100} alt="coin" className="leftcoinimg solcoin" />
                </Link>
              </div>
              <div className="right-coinbg">
                <Link href="/trade">
                  <Image src="assets/images/ethcoin.png" width={500} height={100} alt="coin" className="rightcoinimg ethcoin" />
                </Link>
                <Link href="/trade">
                  <Image src="assets/images/trxcoin.png" width={500} height={100} alt="coin" className="rightcoinimg trxcion" />
                </Link>
                <Link href="/trade">
                  <Image src="assets/images/avaxcoin.png" width={500} height={100} alt="coin" className="rightcoinimg avaxcoin" />
                </Link>
                <Link href="/trade">
                  <Image src="assets/images/polygoncoin.png" width={500} height={100} alt="coin" className="rightcoinimg polygoncoin" />
                </Link>
              </div>
              <h1>Trade Crypto & Fiat Seamlessly — All in <br />
                One Secure Platform</h1>
              <Image src="assets/images/hero-bg.png" alt="eth" className="hero-img" />
            </div>
          </Container>
        </section>
        <section className="card-box-section">
          <Container>
            <div className="card-box-main">
              <div className=" bor-box-main">
                <div className="bor-box-out">
                  <div className="bor-box-in">
                    <h2>$500M+</h2>
                    <p>Monthly Trading Volume</p>
                  </div>
                </div>
              </div>
              <div className=" bor-box-main">
                <div className="bor-box-out">
                  <div className="bor-box-in">
                    <h2>150,000+</h2>
                    <p>Registered Users</p>
                  </div>
                </div>
              </div>
              <div className=" bor-box-main">
                <div className="bor-box-out">
                  <div className="bor-box-in">
                    <h2>7+ Coins</h2>
                    <p>Multi-Chain Wallet Support</p>
                  </div>
                </div>
              </div>
              <div className=" bor-box-main">
                <div className="bor-box-out">
                  <div className="bor-box-in">
                    <h2>6 Languages</h2>
                    <p>Languages Supported</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section className="markettablebg markettable-custombg" id="marketslist">
          <Container data-aos="fade-up" data-aos-duration="1000">
            <h2 className="subheading-title text-start">
              Market Trends
            </h2>

            <Row className="row-gap-3">
              <Col lg={12} md={12} sm={12}>
                <div >
                  <div >
                    <Tab.Container
                      id="left-tabs-example"
                      defaultActiveKey="hotspot"
                      className="d-flex "
                    >
                      <div className="innerpagetab marketstab d-flex align-items-center justify-content-between mb-4 w-100">
                        <Nav variant="pills" className=" w-100 gap-2 market-taps">
                          <Nav.Item >
                            <Nav.Link className="tab-nav" eventKey="hotspot">Hot Spot</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link className="tab-nav" eventKey="derivative">Hot Derivative</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link className="tab-nav" eventKey="toplooser">Top Looser</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link className="tab-nav" eventKey="newspot">New Spot</Nav.Link>
                          </Nav.Item>
                        </Nav>
                        {/* <Button className="view-btn d-flex align-items-center w-100 gap-2 justify-content-end">View More <Image
                          src="assets/images/view-bnt.svg"
                          width={35}
                          height={35}
                          alt="eth"
                          className="view-bnt"
                        /></Button> */}
                      </div>
                      <div className="marketstab-tabs-x">
                        <div className="marketstab-tabs-bg ">
                          <div className="market-trends-main market-trends-main-table">
                            <Tab.Content className="market-trends-table off-width">
                              <Tab.Pane eventKey="hotspot">
                                <SimpleBar className="table-responsive sitescroll">
                                  <Table className="table sitetable m-0 table-responsive-stack" id="table1">
                                    <thead>
                                      <tr>
                                        <th>Name</th>
                                        <th>Last Price</th>
                                        <th>24h Change</th>
                                        <th>24h Volume</th>
                                        <th>Trade</th>
                                      </tr>
                                    </thead>
                                    <tbody className="border-0">
                                      <tr>
                                        <td>
                                          <Image
                                            src="assets/images/color/btc.svg"
                                            width={35}
                                            height={35}
                                            alt="btc"
                                            className="coinicon"
                                          />{" "}
                                          <span className="t-gray"> <span className="tt-white">BTC/</span> USDT</span>

                                        </td>
                                        <td>
                                          <span className="">$102,599.9</span>
                                        </td>
                                        <td>
                                          <span className="t-green">+2.29%</span>
                                        </td>
                                        <td>
                                          <span className="">$102,599.9</span>
                                        </td>
                                        <td>
                                          <Link href="/trade" className="btn-sm site-fill-btn">
                                            Trade
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Image
                                            src="assets/images/color/eth.svg"
                                            width={35}
                                            height={35}
                                            alt="eth"
                                            className="coinicon"
                                          />{" "}
                                          <span className="t-gray"> <span className="tt-white">ETH/</span> USDT</span>


                                        </td>
                                        <td>
                                          <span className="">$3,192.17</span>
                                        </td>
                                        <td>
                                          <span className="t-green">+2.29%</span>
                                        </td>
                                        <td>
                                          <span className="">$102,599.9</span>
                                        </td>
                                        <td>
                                          <Link href="/trade" className="btn-sm site-fill-btn">
                                            Trade
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Image
                                            src="assets/images/color/xrp.svg"
                                            width={35}
                                            height={35}
                                            alt="bnb"
                                            className="coinicon"
                                          />

                                          <span className="t-gray"> <span className="tt-white">XRP/</span> USDT</span>

                                        </td>
                                        <td>
                                          <span className="">$29.14</span>
                                        </td>
                                        <td>
                                          <span className="t-red">-2.29%</span>
                                        </td>
                                        <td>
                                          <span className="">$102,599.9</span>
                                        </td>
                                        <td>
                                          <Link href="/trade" className="btn-sm site-fill-btn">
                                            Trade
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Image
                                            src="assets/images/color/trx.svg"
                                            width={35}
                                            height={35}
                                            alt="xrp"
                                            className="coinicon"
                                          />
                                          <span className="t-gray"> <span className="tt-white">TRX/</span> USDT</span>

                                        </td>
                                        <td>
                                          <span className="">$238.49</span>
                                        </td>
                                        <td>
                                          <span className="t-green">+5.29%</span>
                                        </td>
                                        <td>
                                          <span className="">$102,599.9</span>
                                        </td>
                                        <td>
                                          <Link href="/trade" className="btn-sm site-fill-btn">
                                            Trade
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Image
                                            src="assets/images/color/sol.svg"
                                            width={35}
                                            height={35}
                                            alt="xrp"
                                            className="coinicon"
                                          />
                                          <span className="t-gray"> <span className="tt-white">SOL/</span> USDT</span>

                                        </td>
                                        <td>
                                          <span className="">$89756</span>
                                        </td>
                                        <td>
                                          <span className="t-green">+2.29%</span>
                                        </td>
                                        <td>
                                          <span className="">$102,599.9</span>
                                        </td>
                                        <td>
                                          <Link href="/trade" className="btn-sm site-fill-btn">
                                            Trade
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Image
                                            src="assets/images/color/ton.svg"
                                            width={35}
                                            height={35}
                                            alt="xrp"
                                            className="coinicon"
                                          />
                                          <span className="t-gray"> <span className="tt-white">TON/</span> USDT</span>

                                        </td>
                                        <td>
                                          <span className="">$756</span>
                                        </td>
                                        <td>
                                          <span className="t-green">+2.29%</span>
                                        </td>
                                        <td>
                                          <span className="">$102,599.9</span>
                                        </td>
                                        <td>
                                          <Link href="/trade" className="btn-sm site-fill-btn">
                                            Trade
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Image
                                            src="assets/images/color/ada.svg"
                                            width={35}
                                            height={35}
                                            alt="xrp"
                                            className="coinicon"
                                          />
                                          <span className="t-gray"> <span className="tt-white">ADA/</span> USDT</span>

                                        </td>
                                        <td>
                                          <span className="">$6</span>
                                        </td>
                                        <td>
                                          <span className="t-green">+2.29%</span>
                                        </td>
                                        <td>
                                          <span className="">$102,599.9</span>
                                        </td>
                                        <td>
                                          <Link href="/trade" className="btn-sm site-fill-btn">
                                            Trade
                                          </Link>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </SimpleBar>
                                <ResponsiveTable tableId="table1" />
                              </Tab.Pane>
                              <Tab.Pane eventKey="derivative">
                                <SimpleBar className="table-responsive sitescroll">
                                  <Table className="table sitetable m-0 table-responsive-stack" id="table2">
                                    <thead>
                                      <tr>
                                        <th>Name</th>
                                        <th>Last Price</th>
                                        <th>24h Change</th>
                                        <th>24h Volume</th>
                                        <th>Trade</th>
                                      </tr>
                                    </thead>
                                    <tbody className="border-0">
                                      <tr>
                                        <td>
                                          <Image
                                            src="assets/images/color/btc.svg"
                                            width={35}
                                            height={35}
                                            alt="btc"
                                            className="coinicon"
                                          />{" "}
                                          <span className="t-gray"> <span className="tt-white">BTC/</span> USDT</span>

                                        </td>
                                        <td>
                                          <span className="">$102,599.9</span>
                                        </td>
                                        <td>
                                          <span className="t-green">+2.29%</span>
                                        </td>
                                        <td>
                                          <span className="">$102,599.9</span>
                                        </td>
                                        <td>
                                          <Link href="/trade" className="btn-sm site-fill-btn">
                                            Trade
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Image
                                            src="assets/images/color/eth.svg"
                                            width={35}
                                            height={35}
                                            alt="eth"
                                            className="coinicon"
                                          />{" "}
                                          <span className="t-gray"> <span className="tt-white">ETH/</span> USDT</span>


                                        </td>
                                        <td>
                                          <span className="">$3,192.17</span>
                                        </td>
                                        <td>
                                          <span className="t-green">+2.29%</span>
                                        </td>
                                        <td>
                                          <span className="">$102,599.9</span>
                                        </td>
                                        <td>
                                          <Link href="/trade" className="btn-sm site-fill-btn">
                                            Trade
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Image
                                            src="assets/images/color/xrp.svg"
                                            width={35}
                                            height={35}
                                            alt="bnb"
                                            className="coinicon"
                                          />

                                          <span className="t-gray"> <span className="tt-white">XRP/</span> USDT</span>

                                        </td>
                                        <td>
                                          <span className="">$29.14</span>
                                        </td>
                                        <td>
                                          <span className="t-red">-2.29%</span>
                                        </td>
                                        <td>
                                          <span className="">$102,599.9</span>
                                        </td>
                                        <td>
                                          <Link href="/trade" className="btn-sm site-fill-btn">
                                            Trade
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Image
                                            src="assets/images/color/trx.svg"
                                            width={35}
                                            height={35}
                                            alt="xrp"
                                            className="coinicon"
                                          />
                                          <span className="t-gray"> <span className="tt-white">TRX/</span> USDT</span>

                                        </td>
                                        <td>
                                          <span className="">$238.49</span>
                                        </td>
                                        <td>
                                          <span className="t-green">+5.29%</span>
                                        </td>
                                        <td>
                                          <span className="">$102,599.9</span>
                                        </td>
                                        <td>
                                          <Link href="/trade" className="btn-sm site-fill-btn">
                                            Trade
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Image
                                            src="assets/images/color/sol.svg"
                                            width={35}
                                            height={35}
                                            alt="xrp"
                                            className="coinicon"
                                          />
                                          <span className="t-gray"> <span className="tt-white">SOL/</span> USDT</span>

                                        </td>
                                        <td>
                                          <span className="">$89756</span>
                                        </td>
                                        <td>
                                          <span className="t-green">+2.29%</span>
                                        </td>
                                        <td>
                                          <span className="">$102,599.9</span>
                                        </td>
                                        <td>
                                          <Link href="/trade" className="btn-sm site-fill-btn">
                                            Trade
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Image
                                            src="assets/images/color/ton.svg"
                                            width={35}
                                            height={35}
                                            alt="xrp"
                                            className="coinicon"
                                          />
                                          <span className="t-gray"> <span className="tt-white">TON/</span> USDT</span>

                                        </td>
                                        <td>
                                          <span className="">$756</span>
                                        </td>
                                        <td>
                                          <span className="t-green">+2.29%</span>
                                        </td>
                                        <td>
                                          <span className="">$102,599.9</span>
                                        </td>
                                        <td>
                                          <Link href="/trade" className="btn-sm site-fill-btn">
                                            Trade
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Image
                                            src="assets/images/color/ada.svg"
                                            width={35}
                                            height={35}
                                            alt="xrp"
                                            className="coinicon"
                                          />
                                          <span className="t-gray"> <span className="tt-white">ADA/</span> USDT</span>

                                        </td>
                                        <td>
                                          <span className="">$6</span>
                                        </td>
                                        <td>
                                          <span className="t-green">+2.29%</span>
                                        </td>
                                        <td>
                                          <span className="">$102,599.9</span>
                                        </td>
                                        <td>
                                          <Link href="/trade" className="btn-sm site-fill-btn">
                                            Trade
                                          </Link>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </SimpleBar>
                                <ResponsiveTable tableId="table2" />
                              </Tab.Pane>
                              <Tab.Pane eventKey="toplooser">
                                <SimpleBar className="table-responsive sitescroll">
                                  <Table className="table sitetable m-0 table-responsive-stack" id="table3">
                                    <thead>
                                      <tr>
                                        <th>Name</th>
                                        <th>Last Price</th>
                                        <th>24h Change</th>
                                        <th>24h Volume</th>
                                        <th>Trade</th>
                                      </tr>
                                    </thead>
                                    <tbody className="border-0">
                                      <tr>
                                        <td>
                                          <Image
                                            src="assets/images/color/btc.svg"
                                            width={35}
                                            height={35}
                                            alt="btc"
                                            className="coinicon"
                                          />{" "}
                                          <span className="t-gray"> <span className="tt-white">BTC/</span> USDT</span>

                                        </td>
                                        <td>
                                          <span className="">$102,599.9</span>
                                        </td>
                                        <td>
                                          <span className="t-green">+2.29%</span>
                                        </td>
                                        <td>
                                          <span className="">$102,599.9</span>
                                        </td>
                                        <td>
                                          <Link href="/trade" className="btn-sm site-fill-btn">
                                            Trade
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Image
                                            src="assets/images/color/eth.svg"
                                            width={35}
                                            height={35}
                                            alt="eth"
                                            className="coinicon"
                                          />{" "}
                                          <span className="t-gray"> <span className="tt-white">ETH/</span> USDT</span>


                                        </td>
                                        <td>
                                          <span className="">$3,192.17</span>
                                        </td>
                                        <td>
                                          <span className="t-green">+2.29%</span>
                                        </td>
                                        <td>
                                          <span className="">$102,599.9</span>
                                        </td>
                                        <td>
                                          <Link href="/trade" className="btn-sm site-fill-btn">
                                            Trade
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Image
                                            src="assets/images/color/xrp.svg"
                                            width={35}
                                            height={35}
                                            alt="bnb"
                                            className="coinicon"
                                          />

                                          <span className="t-gray"> <span className="tt-white">XRP/</span> USDT</span>

                                        </td>
                                        <td>
                                          <span className="">$29.14</span>
                                        </td>
                                        <td>
                                          <span className="t-red">-2.29%</span>
                                        </td>
                                        <td>
                                          <span className="">$102,599.9</span>
                                        </td>
                                        <td>
                                          <Link href="/trade" className="btn-sm site-fill-btn">
                                            Trade
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Image
                                            src="assets/images/color/trx.svg"
                                            width={35}
                                            height={35}
                                            alt="xrp"
                                            className="coinicon"
                                          />
                                          <span className="t-gray"> <span className="tt-white">TRX/</span> USDT</span>

                                        </td>
                                        <td>
                                          <span className="">$238.49</span>
                                        </td>
                                        <td>
                                          <span className="t-green">+5.29%</span>
                                        </td>
                                        <td>
                                          <span className="">$102,599.9</span>
                                        </td>
                                        <td>
                                          <Link href="/trade" className="btn-sm site-fill-btn">
                                            Trade
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Image
                                            src="assets/images/color/sol.svg"
                                            width={35}
                                            height={35}
                                            alt="xrp"
                                            className="coinicon"
                                          />
                                          <span className="t-gray"> <span className="tt-white">SOL/</span> USDT</span>

                                        </td>
                                        <td>
                                          <span className="">$89756</span>
                                        </td>
                                        <td>
                                          <span className="t-green">+2.29%</span>
                                        </td>
                                        <td>
                                          <span className="">$102,599.9</span>
                                        </td>
                                        <td>
                                          <Link href="/trade" className="btn-sm site-fill-btn">
                                            Trade
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Image
                                            src="assets/images/color/ton.svg"
                                            width={35}
                                            height={35}
                                            alt="xrp"
                                            className="coinicon"
                                          />
                                          <span className="t-gray"> <span className="tt-white">TON/</span> USDT</span>

                                        </td>
                                        <td>
                                          <span className="">$756</span>
                                        </td>
                                        <td>
                                          <span className="t-green">+2.29%</span>
                                        </td>
                                        <td>
                                          <span className="">$102,599.9</span>
                                        </td>
                                        <td>
                                          <Link href="/trade" className="btn-sm site-fill-btn">
                                            Trade
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Image
                                            src="assets/images/color/ada.svg"
                                            width={35}
                                            height={35}
                                            alt="xrp"
                                            className="coinicon"
                                          />
                                          <span className="t-gray"> <span className="tt-white">ADA/</span> USDT</span>

                                        </td>
                                        <td>
                                          <span className="">$6</span>
                                        </td>
                                        <td>
                                          <span className="t-green">+2.29%</span>
                                        </td>
                                        <td>
                                          <span className="">$102,599.9</span>
                                        </td>
                                        <td>
                                          <Link href="/trade" className="btn-sm site-fill-btn">
                                            Trade
                                          </Link>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </SimpleBar>
                                <ResponsiveTable tableId="table3" />
                              </Tab.Pane>
                              <Tab.Pane eventKey="newspot">
                                <SimpleBar className="table-responsive sitescroll">
                                  <Table className="table sitetable m-0 table-responsive-stack" id="table4">
                                    <thead>
                                      <tr>
                                        <th>Name</th>
                                        <th>Last Price</th>
                                        <th>24h Change</th>
                                        <th>24h Volume</th>
                                        <th>Trade</th>
                                      </tr>
                                    </thead>
                                    <tbody className="border-0">
                                      <tr>
                                        <td>
                                          <Image
                                            src="assets/images/color/btc.svg"
                                            width={35}
                                            height={35}
                                            alt="btc"
                                            className="coinicon"
                                          />{" "}
                                          <span className="t-gray"> <span className="tt-white">BTC/</span> USDT</span>

                                        </td>
                                        <td>
                                          <span className="">$102,599.9</span>
                                        </td>
                                        <td>
                                          <span className="t-green">+2.29%</span>
                                        </td>
                                        <td>
                                          <span className="">$102,599.9</span>
                                        </td>
                                        <td>
                                          <Link href="/trade" className="btn-sm site-fill-btn">
                                            Trade
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Image
                                            src="assets/images/color/eth.svg"
                                            width={35}
                                            height={35}
                                            alt="eth"
                                            className="coinicon"
                                          />{" "}
                                          <span className="t-gray"> <span className="tt-white">ETH/</span> USDT</span>


                                        </td>
                                        <td>
                                          <span className="">$3,192.17</span>
                                        </td>
                                        <td>
                                          <span className="t-green">+2.29%</span>
                                        </td>
                                        <td>
                                          <span className="">$102,599.9</span>
                                        </td>
                                        <td>
                                          <Link href="/trade" className="btn-sm site-fill-btn">
                                            Trade
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Image
                                            src="assets/images/color/xrp.svg"
                                            width={35}
                                            height={35}
                                            alt="bnb"
                                            className="coinicon"
                                          />

                                          <span className="t-gray"> <span className="tt-white">XRP/</span> USDT</span>

                                        </td>
                                        <td>
                                          <span className="">$29.14</span>
                                        </td>
                                        <td>
                                          <span className="t-red">-2.29%</span>
                                        </td>
                                        <td>
                                          <span className="">$102,599.9</span>
                                        </td>
                                        <td>
                                          <Link href="/trade" className="btn-sm site-fill-btn">
                                            Trade
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Image
                                            src="assets/images/color/trx.svg"
                                            width={35}
                                            height={35}
                                            alt="xrp"
                                            className="coinicon"
                                          />
                                          <span className="t-gray"> <span className="tt-white">TRX/</span> USDT</span>

                                        </td>
                                        <td>
                                          <span className="">$238.49</span>
                                        </td>
                                        <td>
                                          <span className="t-green">+5.29%</span>
                                        </td>
                                        <td>
                                          <span className="">$102,599.9</span>
                                        </td>
                                        <td>
                                          <Link href="/trade" className="btn-sm site-fill-btn">
                                            Trade
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Image
                                            src="assets/images/color/sol.svg"
                                            width={35}
                                            height={35}
                                            alt="xrp"
                                            className="coinicon"
                                          />
                                          <span className="t-gray"> <span className="tt-white">SOL/</span> USDT</span>

                                        </td>
                                        <td>
                                          <span className="">$89756</span>
                                        </td>
                                        <td>
                                          <span className="t-green">+2.29%</span>
                                        </td>
                                        <td>
                                          <span className="">$102,599.9</span>
                                        </td>
                                        <td>
                                          <Link href="/trade" className="btn-sm site-fill-btn">
                                            Trade
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Image
                                            src="assets/images/color/ton.svg"
                                            width={35}
                                            height={35}
                                            alt="xrp"
                                            className="coinicon"
                                          />
                                          <span className="t-gray"> <span className="tt-white">TON/</span> USDT</span>

                                        </td>
                                        <td>
                                          <span className="">$756</span>
                                        </td>
                                        <td>
                                          <span className="t-green">+2.29%</span>
                                        </td>
                                        <td>
                                          <span className="">$102,599.9</span>
                                        </td>
                                        <td>
                                          <Link href="/trade" className="btn-sm site-fill-btn">
                                            Trade
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Image
                                            src="assets/images/color/ada.svg"
                                            width={35}
                                            height={35}
                                            alt="xrp"
                                            className="coinicon"
                                          />
                                          <span className="t-gray"> <span className="tt-white">ADA/</span> USDT</span>

                                        </td>
                                        <td>
                                          <span className="">$6</span>
                                        </td>
                                        <td>
                                          <span className="t-green">+2.29%</span>
                                        </td>
                                        <td>
                                          <span className="">$102,599.9</span>
                                        </td>
                                        <td>
                                          <Link href="/trade" className="btn-sm site-fill-btn">
                                            Trade
                                          </Link>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </SimpleBar>
                                <ResponsiveTable tableId="table4" />
                              </Tab.Pane>
                            </Tab.Content>

                          </div>
                        </div>
                      </div>
                    </Tab.Container>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="perpetual-trading-sec">
          <Container>
            <Row className=" align-items-center  ">
              <Col lg={6} md={12} sm={12}>
                <h2 className="subheading-title text-start">
                  Advanced Perpetual Trading
                  Across Every Chain
                </h2>
                <p>
                  Trade perpetual futures with powerful execution tools,
                  real-time market data, and flexible margin options. Whether you re
                  opening short-term positions or managing long-term strategies, BitsBuys delivers a seamless multi-chain
                  trading experience with the speed, transparency, and control that professional traders demand.Trade perpetual futures with
                  powerful execution tools, real-time market data, and flexible margin options. Whether you re opening
                  short-term positions or managing long-term strategies, BitsBuys delivers a seamless multi-chain
                  trading experience with the speed, transparency, and control that professional traders demand.
                </p>
                <button className="signin-btn gradient-bg sitebtn">Start Perpetual Trading</button>

              </Col>
              <Col lg={6} md={12} sm={12}>
                <Image src="assets/images/Feature-Box.svg" alt="eth" className="perpetual-trading perpetual-trading-day" />
                <Image src="assets/images/Feature-Box-dark.svg" alt="eth" className="perpetual-trading perpetual-trading-dark" />

              </Col>
            </Row>

          </Container>
        </section>
        <section className="how-it-sec">
          <Container>
            <h2 className="subheading-title text-center">
              How it Works
            </h2>
            <div className="how-it-content-main">
              <div className="how-it-content right-line position-relative">
                <span className="big-text">1</span>
                <div>
                  <h4>Create & Verify Account</h4>
                  <p>Register with your email <br /> and create a secure <br /> password.</p>
                </div>
              </div>
              <div className="how-it-content right-line position-relative">
                <span className="big-text">2</span>
                <div>
                  <h4>Verify Your Identity</h4>
                  <p>Complete our quick and <br /> secure KYC verification for <br /> full access.</p>
                </div>
              </div>
              <div className="how-it-content right-line position-relative">
                <span className="big-text">3</span>
                <div>
                  <h4>Fund Your Wallet</h4>
                  <p>Deposit fiat or <br /> cryptocurrencies using <br /> multiple payment options.</p>
                </div>
              </div>
              <div className="how-it-content">
                <span className="big-text">4</span>
                <div>
                  <h4>Trade Crypto</h4>
                  <p>Choose your preferred coins <br /> and trading pairs, then place <br /> your orders  with ease.</p>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section className="features-sec" id="features">
          <Container>
            <h2 className="subheading-title text-center">
              Powerful Features for Seamless Crypto Trading
            </h2>
            <div className="feature-main">
              <div className="feature-submain feature-submain-first">
                <div>
                  <Image
                    src="assets/images/fe-1.svg"
                    alt="eth"
                    className="feature-img"
                  />
                  <h4>Easy Fiat Deposits & Withdrawals</h4>
                  <p className="mb-0">Deposit and withdraw USD, EUR, and GBP via <br /> secure  bank-wire API integration.</p>
                </div>
                <div>
                  <Image
                    src="assets/images/fe-2.svg"
                    alt="eth"
                    className="feature-img"
                  />
                  <h4>Automatic KYC Verification</h4>
                  <p className="mb-0">Integrated third-party API ensures fast, compliant <br /> onboarding.</p>
                </div>
                <div>
                  <Image
                    src="assets/images/fe-3.svg"
                    alt="eth"
                    className="feature-img"
                  />
                  <h4>Dynamic ERC20 Token Module</h4>
                  <p className="mb-0">Admin can instantly add and pair unlimited <br /> Ethereum tokens directly from the control panel.</p>
                </div>
                <div className="feature-last-join-ff">
                  <h4 className="mt-0">Advanced Spot Trading Engine</h4>
                  <Image
                    src="assets/images/fe-4.svg"
                    alt="eth"
                    className="feature-img"
                  />
                </div>
              </div>
              <div className="feature-submain feature-submain-last">
                <div className="feature-last-join">
                  <h4 className="mt-0">Advanced Spot Trading Engine</h4>
                  <Image
                    src="assets/images/fe-4.svg"
                    alt="eth"
                    className="feature-img"
                  />
                </div>
                <div className="last-feature">
                  <div >
                    <h4>Multi-Chain Wallet Infrastructure</h4>
                    <p className="mb-0">Support for 7 major blockchains: BTC, ETH, BNB, <br /> SOL, TRX, MATIC & AVAX (C-Chain).  Each user gets <br /> a unique wallet address per network.</p>
                    <div className="gradient-border-content-x text-start">
                      <button href="/signup" className="signin-btn gradient-bg sitebtn">Start Trading</button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </Container>
        </section>
        <section className="ios-section-main">
          <Container data-aos="fade-up" data-aos-duration="1000" className="ios-section">
            <h2 className="subheading-title text-center">
              Trade Anytime, Anywhere <br />
              with the BitsBuys App
            </h2>
            <div className=" d-flex align-items-center gap-2 justify-content-center ios-section-main-flex">
              <div className="gradient-border-content-x ">
                <button href="/signup" className="signin-btn gradient-bg sitebtn d-flex align-items-center gap-2">
                  <Image
                    src="assets/images/app-st.svg"
                    alt="eth"
                    className="ios-img"
                  />
                  App Store</button>
              </div>
              <div className="gradient-border-content-x ">
                <button href="/signup" className="signin-btn gradient-bg sitebtn d-flex align-items-center gap-2">
                  <Image
                    src="assets/images/g-crome.svg"
                    alt="eth"
                    className="ios-img"
                  />
                  Google Play</button>
              </div>
            </div>
            <div className="appimg">
              <Image src="assets/images/appimgbg.png" alt="img" className="appbgimg" />
            </div>
          </Container>
        </section>
        <section
          className="faqquetbanner"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Container>
            <h2 className="subheading-title text-center">
              FAQ
            </h2>
            <div className="faqsecbox mx-auto mt-4">
              <div className="faqcntbox">
                <Accordion
                  defaultActiveKey="1"
                  activeKey={activeKey}

                  onSelect={(k) => setActiveKey(k)}
                  flush
                >
                  <Accordion.Item
                    eventKey="1"
                    className={activeKey === "1" ? "active marketstab-tabs-x" : " marketstab-tabs-x"}
                  >
                    <div className="marketstab-tabs-bg ">
                      <Accordion.Header>
                        What is a cryptocurrency spot exchange?
                        <FontAwesomeIcon
                          icon={activeKey === "1" ? faMinus : faPlus}
                          className="faq-icon"
                        />
                      </Accordion.Header>
                      <Accordion.Body>
                        A spot exchange lets you buy or sell cryptocurrencies at
                        real-time market prices.
                      </Accordion.Body>
                    </div>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey="2"
                    className={activeKey === "2" ? "active marketstab-tabs-x" : " marketstab-tabs-x"}

                  >
                    <div className="marketstab-tabs-bg ">
                      <Accordion.Header>
                        Is KYC verification mandatory?
                        <FontAwesomeIcon
                          icon={activeKey === "2" ? faMinus : faPlus}
                          className="faq-icon"
                        />
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae nobis consectetur pariatur quidem sit quo fugit
                        et cumque itaque, eius ipsam dolore iure dolor error,
                        blanditiis quaerat, quos autem! Nihil.
                      </Accordion.Body>
                    </div>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey="3"
                    className={activeKey === "3" ? "active marketstab-tabs-x" : " marketstab-tabs-x"}

                  >
                    <div className="marketstab-tabs-bg ">
                      <Accordion.Header>How do I deposit funds? <FontAwesomeIcon
                        icon={activeKey === "3" ? faMinus : faPlus}
                        className="faq-icon"
                      /></Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae nobis consectetur pariatur quidem sit quo fugit
                        et cumque itaque, eius ipsam dolore iure dolor error,
                        blanditiis quaerat, quos autem! Nihil.
                      </Accordion.Body>
                    </div>

                  </Accordion.Item>
                  <Accordion.Item
                    eventKey="4"
                    className={activeKey === "4" ? "active marketstab-tabs-x" : " marketstab-tabs-x"}

                  >
                    <div className="marketstab-tabs-bg ">
                      <Accordion.Header>
                        How do I start spot trading?
                        <FontAwesomeIcon
                          icon={activeKey === "4" ? faMinus : faPlus}
                          className="faq-icon"
                        />
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                      </Accordion.Body>
                    </div>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey="5"
                    className={activeKey === "5" ? "active marketstab-tabs-x" : " marketstab-tabs-x"}

                  >
                    <div className="marketstab-tabs-bg ">
                      <Accordion.Header>
                        What fees do I need to pay?
                        <FontAwesomeIcon
                          icon={activeKey === "5" ? faMinus : faPlus}
                          className="faq-icon"
                        />
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae nobis consectetur pariatur quidem sit quo fugit
                        et cumque itaque, eius ipsam dolore iure dolor error,
                        blanditiis quaerat, quos autem! Nihil.
                      </Accordion.Body>
                    </div>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </Container>
        </section>
        <Homefooter />
        <Modal show={showModal1} onHide={handleClose1} className="modalbgt authmodal bitsbuys-coming-modal" aria-labelledby="contained-modal-title-vcenter" centered >
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="coming-soon-content text-center">

              {/* Vector Illustration */}
              <div className="coming-soon-vector">
                <div className="vector-glow"></div>
                <div className="vector-circle">
                  <span className="vector-icon">🚀</span>
                </div>
                <span className="vector-dot dot-one"></span>
                <span className="vector-dot dot-two"></span>
                <span className="vector-dot dot-three"></span>
              </div>

              {/* Content */}
              <div className="coming-soon-text">

                <span className="coming-badge mb-3">
                  <span className="badge-dot"></span>
                  COMING SOON
                </span>

                <h2>
                  BitsBuys Is Almost <span>Live!</span>
                </h2>

                <p className="coming-subtitle">
                  Be the first to know when BitsBuys Exchange officially launches.
                </p>
                <Form className="siteformbg">
                  <Form.Group className="form-group mb-3 text-start">
                    <Form.Label> Get launch updates</Form.Label>
                    <Form.Control type="text" name="" id="launch-email" className="mb-2" />
                    <small className="t-gray"> We’ll only use your email for BitsBuys launch
                      updates. No spam.</small>
                  </Form.Group>
                  <button type="button" className="sitebtn btn-sm w-100" onClick={handleClose1}                >
                    Notify Me
                  </button>
                </Form>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}
