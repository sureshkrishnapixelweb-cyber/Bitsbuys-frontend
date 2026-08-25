import React from 'react'
import { Image, Table, Nav, Tab, Form } from 'react-bootstrap'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignal } from '@fortawesome/free-solid-svg-icons';

const Orderbook = () => {
    function buyShow() {
        const element = document.getElementById("suborderbook");
        element.classList.add("buyshow");
        element.classList.remove("sellshow");
        element.classList.remove("buysellshow");
        console.log('clickbuy');

    }

    function sellShow() {
        const element2 = document.getElementById("suborderbook");
        element2.classList.add("sellshow");
        element2.classList.remove("buyshow");
        element2.classList.remove("buysellshow");
        console.log('clicksell');
    }

    function buysellShow() {
        const element1 = document.getElementById("suborderbook");
        element1.classList.add("buysellshow");
        element1.classList.remove("buyshow");
        element1.classList.remove("sellshow");
        console.log('clickbuysell');
    }

    return (
        <div className="orderbook griddragoption">
            <div className="suborderbook buysellshow" id="suborderbook">
                <h2 className="heading-box">Order Book</h2>
                <div className="tabrightbox d-flex">
                    {/* <div className="trddrop">
                        <Form className="siteformbg">
                            <Form.Group className="form-group">
                                <Form.Select className="form-control">
                                    <option>10</option>
                                    <option>1</option>
                                    <option>0.5</option>
                                    <option>100</option>
                                </Form.Select>
                            </Form.Group>
                        </Form>
                    </div> */}
                    <Nav variant="pills" className="tabbanner charttabbg orderchangebg">
                        <Nav.Item><Nav.Link className="buysellshow" onClick={buysellShow}><Image src="assets/images/buysellicon.svg" alt="icon" width={20} height={20} /></Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link className="buyshow" onClick={buyShow}><Image src="assets/images/buyicon.svg" alt="icon" width={20} height={20} /></Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link className="sellshow" onClick={sellShow}><Image src="assets/images/sellicon.svg" alt="icon" width={20} height={20} /></Nav.Link></Nav.Item>
                    </Nav>
                </div>
                <div className="orderbookscroll">
                    <SimpleBar className="table-responsive">
                        <Table className="sitetable">
                            <thead>
                                <tr>
                                    <th>Price(USDT)</th>
                                    <th className="text-end">Amount(BTC)</th>
                                    <th className="text-end">Total(USDT)</th>
                                </tr>
                            </thead>
                        </Table>
                    </SimpleBar>
                    <div className="sellboxorder" id="sellorderbox"
                        style={{
                            background: 'linear-gradient(to left, rgb(120 8 0 / 80%) 0%, rgb(194 13 0 / 28%) 100%, transparent 100%, transparent 100%)'
                            ,
                        }}>
                        <div className="table-responsive sitescroll">
                            <div className="sellboxtablebg">
                                <Table className="sitetable" id='table5'>
                                    <thead>
                                        <tr>
                                            <th>Price(USDT)</th>
                                            <th className="text-end">Amount(BTC)</th>
                                            <th className="text-end">Total(USDT)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><span className="t-red">0.005198759560</span></td>
                                            <td className="text-end">0.005198759560</td>
                                            <td className="text-end">0.005198759560</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.005198759560</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.005198759560</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.005198759560</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.005198759560</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.005198759560</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.005198759560</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.005198759560</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.005198759560</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.005198759560</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.005198759560</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.005198759560</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.005198759560</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.005198759560</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.005198759560</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.005198759560</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.005198759560</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.005198759560</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.005198759560</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.005198759560</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.005198759560</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.005198759560</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.005198759560</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.005198759560</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                    <div className="livepricebox" id="livepricebox">
                        <Table className="sitetable">
                            <thead>
                                <tr>
                                    <th><span className="t-green">0.256</span></th>
                                    <th className="text-end">0.001%<FontAwesomeIcon icon={faSignal} /></th>
                                </tr>
                            </thead>
                        </Table>
                    </div>
                    <div className="buyboxorder" id="buyorderbox"
                        style={{
                            background: `linear-gradient(
          to left,
          rgba(14,203,129,.18) 0%,
          rgba(14, 203, 131, 0.06) 100%,
          transparent 100%,
          transparent 100%
)`,
                        }}>
                        <SimpleBar className="table-responsive sitescroll">
                            <div className="sellboxtablebg">
                                <Table className="sitetable" id='table6'>
                                    <thead>
                                        <tr>
                                            <th>Price(ETH)</th>
                                            <th className="text-end">Amount(BTC)</th>
                                            <th className="text-end">Total(ETH)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.00520674897</span></td>
                                            <td className="text-end">0.00520674897</td>
                                            <td className="text-end">0.00520674897</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </SimpleBar>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orderbook