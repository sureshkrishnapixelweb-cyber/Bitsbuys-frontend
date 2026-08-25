import React, { useState } from 'react'
import { Table, Form, InputGroup, Nav, Tab, Button, Dropdown, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Slider from './RangeSlider';
import CountdownTimer from './CountdownTimer';

const orderform = () => {
    const [showModal1, setShowModal1] = useState(true);
    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);
    function buyTab(event) {

        const element1 = document.getElementById("tradepage");
        element1?.classList.add("buyorderformactive1");
        element1?.classList.remove("sellorderformactive1");
        event.target.classList.add("active");

        const tabFirst = document.getElementById("sellTab");
        tabFirst?.classList.remove("active");
    }

    function sellTab(event) {
        const element2 = document.getElementById("tradepage");
        element2?.classList.add("sellorderformactive1");
        element2?.classList.remove("buyorderformactive1");
        event.target.classList.add("active");

        const tabSecond = document.getElementById("buyTab");
        tabSecond?.classList.remove("active");
    }

    function closeTab(event) {
        const element3 = document.getElementById("tradepage");
        element3?.classList.remove("sellorderformactive1");
        element3?.classList.remove("buyorderformactive1");

        const buyclose = document.getElementById("buyclose");
        buyclose?.classList.remove("active");

        const sellclose = document.getElementById("sellclose");
        sellclose?.classList.remove("active");
    }
    return (
        <div className="orderform griddragoption" id="orderformtabshow">
            <div className="orderformbox">
                <div className="orderformbg">
                    <div className="buyselltabbg">
                        <Nav variant="pills" className="orderfrmtab buyselltab">
                            <Nav.Item><Nav.Link id="buyTab" onClick={buyTab} className="active">Buy</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link id="sellTab" onClick={sellTab}>Sell</Nav.Link></Nav.Item>
                        </Nav>
                    </div>
                </div>
                <div className="clostbuytab" onClick={closeTab}>
                    <a><FontAwesomeIcon icon={faTimes} /></a>
                </div>
                <ul className="ruleslist">
                    <li><a><FontAwesomeIcon icon={faInfoCircle} /> <span className="thide">Trading Rules</span>
                        <div className="none rulesnotes">
                            <Table className="sitetable" id="table7">
                                <tbody>
                                    <tr>
                                        <td>Minimum Trade Amount : </td>
                                        <td>0.000001 USDT</td>
                                    </tr>
                                    <tr>
                                        <td>Min Price Movement : </td>
                                        <td>0.000001 USDT</td>
                                    </tr>
                                    <tr>
                                        <td>Minimum Order Size : </td>
                                        <td>0.000001 USDT</td>
                                    </tr>
                                    <tr>
                                        <td>Maximum Market Order Amount : </td>
                                        <td>0.000001 USDT</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </a>
                    </li>
                </ul>
                <Tab.Container defaultActiveKey="limit">
                    <Nav variant="pills" className="orderfrmtab limitabbg">
                        <Nav.Item><Nav.Link eventKey="limit">Limit</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="market">Market</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="oco">OCO</Nav.Link></Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="limit">
                            <div className="orderformbg1">
                                <div className="buyorderform">
                                    <Form className="siteformbg">
                                        <Form.Group className="form-group">
                                            <Form.Label>Price</Form.Label>
                                            <InputGroup>
                                                <Form.Control placeholder="" id='buyprice' />
                                                <InputGroup.Text>USDT</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className="form-group">
                                            <Form.Label>Amount</Form.Label>
                                            <InputGroup>
                                                <Form.Control placeholder="" id='buyvolume' />
                                                <InputGroup.Text>BTC</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className="form-group">
                                            <Form.Label>Total</Form.Label>
                                            <InputGroup>
                                                <Form.Control placeholder="" id='buytotal' />
                                                <InputGroup.Text>USDT</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        <Slider id='buylimit_slider' />

                                        <Form.Group className="form-group fee-formbox bg-none">
                                            <InputGroup>
                                                <InputGroup.Text>Fee</InputGroup.Text>
                                                <InputGroup.Text className="feeamt">0.25 USDT</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        <div className="text-center">
                                            <Button onClick={handleShow1} className="btn btn-block sitebtn green-btn" id='buylimit_order'>Buy BTC</Button>
                                        </div>
                                    </Form>
                                </div>
                                <div className="sellorderform">
                                    <Form className="siteformbg">
                                        <Form.Group className="form-group">
                                            <Form.Label>Price</Form.Label>
                                            <InputGroup>
                                                <Form.Control placeholder="" id='sellprice' />
                                                <InputGroup.Text>BTC</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className="form-group">
                                            <Form.Label>Amount</Form.Label>
                                            <InputGroup>
                                                <Form.Control placeholder="" id='sellvolume' />
                                                <InputGroup.Text>ETH</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className="form-group">
                                            <Form.Label>Total</Form.Label>
                                            <InputGroup>
                                                <Form.Control placeholder="" id='selltotal' />
                                                <InputGroup.Text>BTC</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        <Slider id='selllimit_slider' />

                                        <Form.Group className="form-group fee-formbox bg-none">
                                            <InputGroup>
                                                <InputGroup.Text>Fee</InputGroup.Text>
                                                <InputGroup.Text className="feeamt">0.25 BTC</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        <div className="text-center">
                                            <Button className="btn btn-block sitebtn red-btn" id='selllimit_order'>Sell BTC</Button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="market">
                            <div className="orderformbg1">
                                <div className="buyorderform">
                                    <Form className="siteformbg">
                                        <Form.Group className="form-group">
                                            <Form.Label>Price</Form.Label>
                                            <InputGroup>
                                                <Form.Control placeholder="" id='buy_marketprice' />
                                                <InputGroup.Text>BTC</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className="form-group">
                                            <Form.Label>Amount</Form.Label>
                                            <InputGroup>
                                                <Form.Control placeholder="" id='buymarketvolume' />
                                                <InputGroup.Text className='p-0'>
                                                    <Form.Select className='form-text-sel'>
                                                        <option value="">BTC</option>
                                                        <option value="">ETH</option>
                                                    </Form.Select>
                                                </InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>

                                        <Slider id='buymarket_slider' />

                                        <div className="text-center">
                                            <Button className="btn btn-block sitebtn green-btn" id='buymarket_order'>Buy BTC</Button>
                                        </div>
                                    </Form>
                                </div>
                                <div className="sellorderform">
                                    <Form className="siteformbg">
                                        <Form.Group className="form-group">
                                            <Form.Label>Price</Form.Label>
                                            <InputGroup>
                                                <Form.Control placeholder="" id='sell_marketprice' />
                                                <InputGroup.Text>BTC</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className="form-group">
                                            <Form.Label>Amount</Form.Label>
                                            <InputGroup>
                                                <Form.Control placeholder="" id='sellmarketvolume' />
                                                <InputGroup.Text>ETH</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        <Slider id='sellmarket_slider' />
                                        <div className="text-center">
                                            <Button className="btn btn-block sitebtn red-btn" id='sellmarket_order'>Sell BTC</Button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>

            </div>
            <Modal show={showModal1} onHide={handleClose1} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton className='flex-column align-items-start gap-3'>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Order Confirmation
                    </Modal.Title>
                    <div className="convert-timer d-flex align-items-center gap-2">
                        <div>
                            <CountdownTimer minutes={1} id="countdowntimer" />
                        </div>
                        <div>
                            <p className="content mb-0">Exchange Rate: 1 ETH = 1,842.834552 USDT</p>
                            <p className="content m-0">Refreshing in 30 seconds</p>
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body className='bg-modal'>
                    <h6>Spot Market Buy</h6>
                    <div className='d-flex justify-content-between align-items-center' >
                        <span className='tt-lite'>Price</span>
                        < span>0.00000000 USDT</span>
                    </div>
                    <div className='d-flex justify-content-between align-items-center' >
                        <span className='mb-0 tt-lite'>Amout</span>
                        < span className='mb-0'>15 USDT</span>
                    </div>
                    < div className='d-flex justify-content-between align-items-center mt-2' >
                        <button className="btn btn-sm sitebtn">Confirm</button>
                        <button className="btn btn-sm borderbtn" onClick={handleClose1}>Cancel</button>
                    </div>


                </Modal.Body>
            </Modal>
        </div>
    )
}

export default orderform