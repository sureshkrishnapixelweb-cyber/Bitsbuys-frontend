import React, { useState } from 'react'
import { Table, Form, InputGroup, Nav, Tab, Button, Modal, Tooltip, FormCheck, Row, Col, Dropdown, FormGroup, Image, Alert, Badge, OverlayTrigger } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faInfoCircle, faPlus, faMinus, faCog, faClose, faAngleDown, faArrowLeft, faStar, faRightLeft, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Slider from './RangeSlider';
import Simplebar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import LeverageSlider from './RangeSlider';

const Orderform = () => {
    const [unit, setUnit] = useState("$");

    const [activeKey, setActiveKey] = useState(null);

    const toggleKey = (key) => {
        setActiveKey(activeKey === key ? null : key);
    };

    const [enabled, setEnabled] = useState(false);
    const [tpPrice, setTpPrice] = useState('$0');
    const [gain, setGain] = useState('0.00');
    const [gainType, setGainType] = useState('%');
    const [slPrice, setSlPrice] = useState('$0');
    const [loss, setLoss] = useState('0.00');
    const [lossType, setLossType] = useState('%');

    const [timeInForce, setTimeInForce] = useState('Good Til Time');
    const [timeValue, setTimeValue] = useState('28');
    const [timeUnit, setTimeUnit] = useState('Days');
    const [reduceOnly, setReduceOnly] = useState(false);
    const [postOnly, setPostOnly] = useState(false);
    const [activeTab, setActiveTab] = useState('Cross');

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

    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const handleClose2 = () => setShowModal2(false);
    const handleShow2 = () => setShowModal2(true);
    // leverage modal
    const handleClose3 = () => setShowModal3(false);
    const handleShow3 = () => setShowModal3(true);

    // leveragescript 

    const [leverage, setLeverage] = useState(14);

    const handleMinusClick = () => {
        setLeverage(leverage - 1);
    };

    const handlePlusClick = () => {
        setLeverage(leverage + 1);
    };

    const [showTransfer, setShowTransfer] = useState(false);
    const [showDeposit, setShowDeposit] = useState(false);
    const [showWithdraw, setShowWithdraw] = useState(false);

    const [tradeData, tradeShowData] = useState(false);
    return (
        <div className="orderform griddragoption" id="orderformtabshow">
            <div className="orderformbox">
                <div className="futuretab">
                    <ul className="nav nav-tabs orderfrmtab border-0" role="tablist">
                        <Nav.Item><Nav.Link onClick={handleShow2}>Margin</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link onClick={handleShow3}>20x</Nav.Link></Nav.Item>
                    </ul>
                </div>
                <div className="orderformbg">
                    <div className="buyselltabbg">
                        <Nav variant="pills" className="orderfrmtab buyselltab w-100 border-0">
                            <Nav.Item className='w-100'><Nav.Link id="buyTab" onClick={buyTab} >Buy / Long</Nav.Link></Nav.Item>
                            <Nav.Item className='w-100'><Nav.Link id="sellTab" onClick={sellTab} className="active">Sell / Short</Nav.Link></Nav.Item>
                        </Nav>
                    </div>
                </div>
                <div className="clostbuytab" onClick={closeTab}>
                    <a><FontAwesomeIcon icon={faTimes} /></a>
                </div>
                <Tab.Container defaultActiveKey="limit">
                    <Nav variant="pills" className="orderfrmtab limitabbg">
                        <Nav.Item><Nav.Link eventKey="limit">Limit</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="market">Market</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="twap">TWAP</Nav.Link></Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="limit">
                            <div className="orderformbg1">
                                <div className="buyorderform">
                                    <div className="clpbox pb-0">
                                        <Table className="sitetable mb-0 my-1">
                                            <tbody>
                                                <tr>
                                                    <td>Available to Trade</td>
                                                    <td className='text-end'>0.00 USDC</td>
                                                </tr>
                                                <tr>
                                                    <td>Current Position</td>
                                                    <td className='text-end'>0.00 USDC</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <Form className="siteformbg pb-0">
                                        <div>
                                            <Form.Label>Limit Price <span className="batch-li ms-1">USDC</span></Form.Label>
                                            <Form.Group className="form-group ">
                                                <InputGroup>
                                                    <Form.Control className='form-control' placeholder="$0.0000" id='buymarket_futuressize' />
                                                    <InputGroup.Text>Mid</InputGroup.Text>
                                                    <InputGroup.Text>USDC</InputGroup.Text>
                                                </InputGroup>
                                            </Form.Group>
                                        </div>
                                        {/* <div>
                                            <Form.Label>Amount <span className="batch-li ms-1">USD</span></Form.Label>
                                            <Form.Group className="form-group ">
                                                <InputGroup>
                                                    <Form.Control className='form-control' placeholder="$0.0000" id='buymarket_futuressize' />
                                                    <InputGroup.Text><FontAwesomeIcon icon={faRightLeft} /></InputGroup.Text>
                                                </InputGroup>
                                            </Form.Group>
                                        </div> */}

                                        <Form.Group>
                                            <Slider />
                                        </Form.Group>
                                        <FormGroup className="checkboxlabelbg">
                                            <InputGroup>
                                                <FormCheck type="checkbox" label="TP/SL" id='tpsl' />
                                                <FormCheck type="checkbox" label="Reduce-Only" id='reduceonly' />
                                            </InputGroup>
                                        </FormGroup>
                                        <Row className="g-2 mt-2">
                                            <Col md={6}>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="TP Price"
                                                    className="trade-input"
                                                />
                                            </Col>

                                            <Col md={6}>
                                                <InputGroup>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Gain"
                                                        className="trade-input"
                                                    />

                                                    <Form.Select
                                                        className="unit-select"
                                                        value={unit}
                                                        onChange={(e) => setUnit(e.target.value)}
                                                    >
                                                        <option value="$">$</option>
                                                        <option value="%">%</option>
                                                    </Form.Select>
                                                </InputGroup>
                                            </Col>

                                            <Col md={6}>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="SL Price"
                                                    className="trade-input"
                                                />
                                            </Col>

                                            <Col md={6}>
                                                <InputGroup>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Loss"
                                                        className="trade-input"
                                                    />

                                                    <Form.Select
                                                        className="unit-select"
                                                        value={unit}
                                                        onChange={(e) => setUnit(e.target.value)}
                                                    >
                                                        <option value="$">$</option>
                                                        <option value="%">%</option>
                                                    </Form.Select>
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        <Button className="btn sitebtn w-100 mt-3 btn-sm" id='buysubmit' onClick={() => tradeShowData(true)}>
                                            Buy
                                        </Button>
                                    </Form>
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="market">
                            <div className="orderformbg1">
                                <div className="buyorderform">
                                    <div className="clpbox pb-0">
                                        <Table className="sitetable mb-0 my-1">
                                            <tbody>
                                                <tr>
                                                    <td>Available to Trade</td>
                                                    <td className='text-end'>0.00 USDC</td>
                                                </tr>
                                                <tr>
                                                    <td>Current Position</td>
                                                    <td className='text-end'>0.00 USDC</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <Form className="siteformbg">
                                        <div>
                                            <Form.Label>Amount <span className="batch-li ms-1">USD</span></Form.Label>
                                            <Form.Group className="form-group ">
                                                <InputGroup>
                                                    <Form.Control className='form-control' placeholder="$0.0000" id='buymarket_futuressize' />
                                                    <InputGroup.Text><FontAwesomeIcon icon={faRightLeft} /></InputGroup.Text>
                                                </InputGroup>
                                            </Form.Group>
                                        </div>


                                        <Form.Group>
                                            {/* <Form.Label>Leverage <span className="batch-li ms-1">None</span>
                                            </Form.Label> */}
                                            <Slider />
                                        </Form.Group>
                                        <FormGroup className="checkboxlabelbg">
                                            <InputGroup>
                                                <FormCheck type="checkbox" label="TP/SL" id='tpsl' />
                                                <FormCheck type="checkbox" label="Reduce-Only" id='reduceonly' />
                                            </InputGroup>
                                        </FormGroup>
                                        <Row className="g-2 mt-2">
                                            <Col md={6}>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="TP Price"
                                                    className="trade-input"
                                                />
                                            </Col>

                                            <Col md={6}>
                                                <InputGroup>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Gain"
                                                        className="trade-input"
                                                    />

                                                    <Form.Select
                                                        className="unit-select"
                                                        value={unit}
                                                        onChange={(e) => setUnit(e.target.value)}
                                                    >
                                                        <option value="$">$</option>
                                                        <option value="%">%</option>
                                                    </Form.Select>
                                                </InputGroup>
                                            </Col>

                                            <Col md={6}>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="SL Price"
                                                    className="trade-input"
                                                />
                                            </Col>

                                            <Col md={6}>
                                                <InputGroup>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Loss"
                                                        className="trade-input"
                                                    />

                                                    <Form.Select
                                                        className="unit-select"
                                                        value={unit}
                                                        onChange={(e) => setUnit(e.target.value)}
                                                    >
                                                        <option value="$">$</option>
                                                        <option value="%">%</option>
                                                    </Form.Select>
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        {/* <div className="clpbox">
                                            <Accordion defaultActiveKey="">
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>Advanced</Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className='mb-2' >
                                                            <Form.Check type="checkbox" id="takeProfitStopLoss"
                                                                label="Take Profit / Stop Loss" checked={enabled} onChange={(e) => setEnabled(e.target.checked)} className="" />
                                                        </div>
                                                        <Row className="align-items-center mb-0">
                                                            <Col xs={6}>
                                                                <div className="form-group mb-1">
                                                                    <Form.Label className="mb-1">TP Price</Form.Label>
                                                                    <Form.Control type="text" value={tpPrice} onChange={(e) => setTpPrice(e.target.value)} />
                                                                </div>
                                                            </Col>
                                                            <Col xs={6}>
                                                                <div className="form-group mb-1">
                                                                    <Form.Label className="mb-1">Gain</Form.Label>
                                                                    <InputGroup className=' align-items-center DropdownButton-pre'>
                                                                        <Form.Control className='ps-2' type="text" value={gain}
                                                                            onChange={(e) => setGain(e.target.value)} />
                                                                        <DropdownButton title={gainType} align="end">
                                                                            <Dropdown.Item onClick={() => setGainType('%')}>%</Dropdown.Item>
                                                                            <Dropdown.Item onClick={() => setGainType('$')}>$</Dropdown.Item>
                                                                        </DropdownButton>
                                                                    </InputGroup>
                                                                </div>
                                                            </Col>
                                                            <Col xs={6}>
                                                                <div className="form-group mb-0">
                                                                    <Form.Label className="mb-1">SL Price</Form.Label>
                                                                    <Form.Control type="text" value={slPrice}
                                                                        onChange={(e) => setSlPrice(e.target.value)} />
                                                                </div>
                                                            </Col>
                                                            <Col xs={6}>
                                                                <div className="form-group mb-0">
                                                                    <Form.Label className="mb-1">Loss</Form.Label>
                                                                    <InputGroup className=' align-items-center DropdownButton-pre'>
                                                                        <Form.Control className='ps-2' type="text" value={loss} onChange={(e) => setLoss(e.target.value)} />
                                                                        <DropdownButton
                                                                            className='DropdownButton-pre'
                                                                            title={lossType}
                                                                            align="end"
                                                                        >
                                                                            <Dropdown.Item onClick={() => setLossType('%')}>%</Dropdown.Item>
                                                                            <Dropdown.Item onClick={() => setLossType('$')}>$</Dropdown.Item>
                                                                        </DropdownButton>
                                                                    </InputGroup>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div> */}

                                    </Form>
                                </div>


                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="twap">
                            <div className="orderformbg1">
                                <div className="buyorderform">
                                    <Form className="siteformbg">
                                        <div>
                                            <Form.Label>Limit Price <span className="batch-li ms-1">USDC</span></Form.Label>
                                            <Form.Group className="form-group ">
                                                <InputGroup>
                                                    <Form.Control className='form-control' placeholder="$0.0000" id='buymarket_futuressize' />
                                                    <InputGroup.Text>Mid</InputGroup.Text>
                                                    <InputGroup.Text>USDC</InputGroup.Text>
                                                </InputGroup>
                                            </Form.Group>
                                        </div>


                                        <Form.Group>
                                            {/* <Form.Label>Target Leverage
                                            </Form.Label> */}
                                            <Slider />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Limit Price <span className="batch-li ms-1">USDC</span></Form.Label>

                                            <Row className="g-2 mb-2">
                                                <Col md={6}>
                                                    <Form.Control
                                                        type="number"
                                                        placeholder="Hour(s)"
                                                        className="trade-input"
                                                    />
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Control
                                                        type="number"
                                                        placeholder="Minute(s)"
                                                        className="trade-input"

                                                    />
                                                </Col>


                                            </Row>
                                        </Form.Group>

                                        <FormGroup className="checkboxlabelbg">
                                            <InputGroup>
                                                <FormCheck type="checkbox" label="TP/SL" id='tpsl' />
                                                <FormCheck type="checkbox" label="Reduce-Only" id='reduceonly' />
                                            </InputGroup>
                                        </FormGroup>
                                        <Row className="g-2 mt-2">
                                            <Col md={6}>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="TP Price"
                                                    className="trade-input"
                                                />
                                            </Col>

                                            <Col md={6}>
                                                <InputGroup>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Gain"
                                                        className="trade-input"
                                                    />

                                                    <Form.Select
                                                        className="unit-select"
                                                        value={unit}
                                                        onChange={(e) => setUnit(e.target.value)}
                                                    >
                                                        <option value="$">$</option>
                                                        <option value="%">%</option>
                                                    </Form.Select>
                                                </InputGroup>
                                            </Col>

                                            <Col md={6}>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="SL Price"
                                                    className="trade-input"
                                                />
                                            </Col>

                                            <Col md={6}>
                                                <InputGroup>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Loss"
                                                        className="trade-input"
                                                    />

                                                    <Form.Select
                                                        className="unit-select"
                                                        value={unit}
                                                        onChange={(e) => setUnit(e.target.value)}
                                                    >
                                                        <option value="$">$</option>
                                                        <option value="%">%</option>
                                                    </Form.Select>
                                                </InputGroup>
                                            </Col>
                                        </Row>

                                    </Form>

                                </div>


                            </div>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
                <hr />
                <div className="orderexcutionbox p-2">
                    <Table className="sitetable mb-2 my-1">
                        <tbody>
                            <tr>
                                <td>
                                    <OverlayTrigger placement="top" overlay={
                                        <Tooltip id="cross-margin-tooltip">
                                            ....
                                        </Tooltip>} >
                                        <span className="tooltip-label">
                                            Liquidation Price
                                        </span>
                                    </OverlayTrigger>
                                </td>
                                <td>N/A</td>
                            </tr>
                            <tr>
                                <td>Order Value</td>
                                <td>N/A</td>
                            </tr>
                            <tr>
                                <td>Margin Required</td>
                                <td>N/A</td>
                            </tr>
                            <tr>
                                <td>
                                    <OverlayTrigger placement="top" overlay={
                                        <Tooltip id="cross-margin-tooltip">
                                            ....
                                        </Tooltip>} >
                                        <span className="tooltip-label">
                                            Slippage
                                        </span>
                                    </OverlayTrigger>
                                </td>
                                <td className='t-green'>Est: 0% / Max: 8.00%</td>
                            </tr>
                            <tr>
                                <td>
                                    <OverlayTrigger placement="top" overlay={
                                        <Tooltip id="cross-margin-tooltip">
                                            ....
                                        </Tooltip>} >
                                        <span className="tooltip-label">
                                            Fees
                                        </span>
                                    </OverlayTrigger>
                                </td>
                                <td className='t-green'>0.0450% / 0.0150%</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className="d-flex odrbtns p-2">
                    <Button className="btn-sm sitebtn me-2" onClick={() => setShowTransfer(true)} >
                        Transfer
                    </Button>

                    <Button className="btn-sm sitebtn green-btn me-2" onClick={() => setShowDeposit(true)} >
                        Deposit
                    </Button>

                    <Button className="btn-sm sitebtn red-btn" onClick={() => setShowWithdraw(true)} >
                        Withdraw
                    </Button>
                </div>

            </div>
            <Modal show={showModal2} onHide={handleClose2} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        BTC/USDC Perpetual Margin Mode
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h6 className='mb-0 d-flex align-items-center gap-1'>BTCUSDT <span className='badge-box-x'>Perp</span></h6>
                    <div className=' d-flex gap-2 mt-3' >
                        <Button type="button" className=" sitebtn borderbtn-new w-100" id='crosssubmit'>Cross</Button>
                        <Button type="button" className="sitebtn borderbtn-new w-100" id='crosssubmit'>Isolated</Button>

                    </div>
                </Modal.Body>
            </Modal>
            {/* <Modal show={showModal2} onHide={handleClose2} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        BTC/USDC Perpetual Margin Mode
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <div className="margincheck">
                            <FormGroup className="mcbox mb-3 active">
                                <FormCheck type="checkbox" id="crossMargin" className="custom-checkbox-wrap p-0" name="flexRadioDefault" defaultChecked>
                                    <FormCheck.Label className="custom-control overflow-checkbox">
                                        <FormCheck.Input
                                            type="checkbox"
                                            className="overflow-control-input"
                                            defaultChecked
                                        />
                                        <span className="custom-checkbox"></span>
                                        <span className="ck-text">Cross Margin Mode</span>
                                    </FormCheck.Label>
                                    <p className="content pt-2">
                                        Share margin across all positions under the same asset, helping maximize capital efficiency and reduce the chance of liquidation.
                                    </p>
                                </FormCheck>
                            </FormGroup>
                            <FormGroup className="mcbox">
                                <FormCheck type="radio" id="IsolatedMargin" className="custom-checkbox-wrap p-0" name="flexRadioDefault">
                                    <FormCheck.Label className="custom-control overflow-checkbox">
                                        <FormCheck.Input
                                            type="checkbox"
                                            className="overflow-control-input"
                                            defaultChecked
                                        />
                                        <span className="custom-checkbox"></span>
                                        <span className="ck-text">Isolated Margin Mode</span>
                                    </FormCheck.Label>
                                    <p className="content pt-2">
                                        Assign margin to each position separately, giving better risk control and limiting losses to the selected position only.
                                    </p>
                                </FormCheck>
                            </FormGroup>
                            <div className="text-center mt-3">
                                <Button type="button" className="sitebtn w-100" id='crosssubmit'>Submit</Button>
                            </div>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal> */}
            <Modal show={showModal3} onHide={handleClose3} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Adjust Leverage
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <FormGroup>
                            <Form.Label>Leverage</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>
                                    <span className='adjusticon' onClick={handleMinusClick}>
                                        <FontAwesomeIcon icon={faMinus} />
                                    </span>
                                </InputGroup.Text>
                                <Form.Control className="text-center" value={`${leverage}x`} />
                                <InputGroup.Text>
                                    <span className='adjusticon' onClick={handlePlusClick}>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </span>
                                </InputGroup.Text>
                            </InputGroup>
                        </FormGroup>
                        <p className="text-center">Maximum position at current leverage: 5,000,000 USDC</p>
                        <Form.Group>
                            <Slider />
                        </Form.Group>
                        <div className="text-center">
                            <Button type="button" className="sitebtn w-100" id='leveragesubmit'>Submit</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
            <Modal show={showDeposit} onHide={() => setShowDeposit(false)} centered dialogClassName="wallet-modal modalbgt authmodal" >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Deposit USDC from Ethereum
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="wallet-modal-body">

                    <div className="wallet-icon">
                        <i className="fas fa-dollar-sign"></i>
                    </div>

                    <p className="wallet-desc">
                        A 0.2 USDC fee will be deducted from the USDC deposited.
                    </p>
                    <form className="siteformbg">
                        <Form.Group className="mb-3">
                            <Form.Label>Asset</Form.Label>
                            <Form.Select className="form-control">
                                <option>USDC</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Network</Form.Label>
                            <Form.Select className="form-control">
                                <option>Ethereum</option>
                                <option>Solana</option>
                                <option>BNB</option>
                                <option>Arbitrum</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control
                                placeholder="Amount"
                                className="wallet-input"
                            />
                        </Form.Group>

                        <Button className="sitebtn w-100" onClick={() => setShowDeposit(false)}>
                            Deposit
                        </Button>
                    </form>
                </Modal.Body>
            </Modal>
            <Modal show={showWithdraw} onHide={() => setShowWithdraw(false)}
                centered dialogClassName="wallet-modal modalbgt authmodal" >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Withdraw USDC to Arbitrum
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="wallet-modal-body">
                    <form className="siteformbg">
                        <div className="wallet-icon">
                            <i className="fas fa-dollar-sign"></i>
                        </div>
                        <p className="wallet-desc">
                            USDC will be sent over the Arbitrum network.
                        </p>

                        <Form.Group className="mb-3">
                            <Form.Label>Asset</Form.Label>
                            <Form.Select className="form-control">
                                <option>USDC</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Network</Form.Label>
                            <Form.Select className="form-control">
                                <option>Arbitrum</option>
                                <option>Ethereum</option>
                                <option>Solana</option>
                                <option>BNB</option>

                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control
                                placeholder="Amount"
                                className="form-control"
                            />
                        </Form.Group>

                        <Button className="sitebtn w-100" onClick={() => setShowWithdraw(false)}>
                            Withdraw to Arbitrum
                        </Button>
                    </form>
                    <p className="t-gray mt-3 mb-0">
                        If you have USDC in Spot Balances, transfer to Perps first.
                    </p>
                </Modal.Body>
            </Modal>
            <Modal
                show={showTransfer}
                onHide={() => setShowTransfer(false)}
                centered dialogClassName="wallet-modal transfer-modal modalbgt authmodal" >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Transfer USDC
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="wallet-modal-body">
                    <p className="wallet-desc">
                        Transfer USDC between your Perps and Spot balances.
                    </p>
                    <form action="" className="siteformbg">
                        <Form.Group className="my-4">
                            <Form.Control
                                placeholder="Amount"
                                className="form-control"
                            />
                        </Form.Group>

                        <Button className="sitebtn w-100" onClick={() => setShowTransfer(false)}>
                            Confirm
                        </Button>
                    </form>
                </Modal.Body>
            </Modal>
            <Modal show={tradeData}
                onHide={() => tradeShowData(false)} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="trade-share-body">

                    {/* Pair & Status */}
                    <div className="trade-info">
                        <Image src="../assets/images/logo.png" width={25} height={25} alt="coin" className="statuslogo" />
                        <div className="trade-header">
                            <div>
                                <h4><Image src="../assets/images/color/btc.svg" width={25} height={25} alt="coin" className="coinlisticon" />BTC/USDT <span className='ms-2'><Badge bg="success">Buy 10X</Badge></span></h4>

                                <h2 className="trade-pnl">+0.2530%</h2>
                                <h5 className="trade-profit">+$0.00 USDT</h5>
                            </div>

                            {/* Right Side Image */}
                            <div className="trade-image">
                                <Image src="../assets/images/statustrade.png" width={25} height={25} alt="coin" className="statusimg" />
                            </div>
                        </div>

                        {/* Details */}

                        <div className="trade-details">

                            <div className="trade-row">
                                <span>Entry Price</span>
                                <strong>55069.01</strong>
                            </div>

                            <div className="trade-row">
                                <span>Last Price</span>
                                <strong>55069.09</strong>
                            </div>

                            <div className="trade-row">
                                <span>Mark Price</span>
                                <strong>55069.09</strong>
                            </div>

                            <div className="trade-row">
                                <span>Position ID</span>
                                <strong>55069.00099998</strong>
                            </div>

                        </div>

                    </div>

                    {/* Share Option */}
                    <Form className="siteformbg">
                        <div className="share-option">

                            <h5>Optional: Share your trade</h5>

                            <div className="share-list">

                                <Form.Check
                                    type="checkbox"
                                    label="Leverage"
                                    defaultChecked
                                />

                                <Form.Check
                                    type="checkbox"
                                    label="Amount"
                                    defaultChecked
                                />

                                <Form.Check
                                    type="checkbox"
                                    label="PNL"
                                    defaultChecked
                                />

                            </div>

                        </div>

                        {/* Buttons */}

                        <div className="trade-footer">

                            <Button className="sitebtn" >
                                Cancel
                            </Button>

                            <Button className="sitebtn" >
                                Download
                            </Button>

                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>


    )
}

export default Orderform