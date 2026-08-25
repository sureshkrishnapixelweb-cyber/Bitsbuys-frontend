"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container, Image, Form, Modal, Table, Badge, InputGroup, Row, Col, Button, Card, Tab, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import Leftsidemenu from '../components/Leftsidemenu';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCircleInfo, faLongArrowRight, faEyeSlash, faAngleRight, faCheckCircle, faCopy, faEdit, faRightLong, faArrowRight, faAnglesRight, faArrowsUpDown, faRotateRight } from '@fortawesome/free-solid-svg-icons';
import 'react-loading-skeleton/dist/skeleton.css'
import ResponsiveTable from '../components/ResponsiveTable';
import StatChart from './statChart';
import Offersection from '../components/Offersection';


const Page = () => {
	const [showModal1, setShowModal1] = useState(false);

	const handleClose1 = () => setShowModal1(false);
	const handleShow1 = () => setShowModal1(true);

	const [activeStep, setActiveStep] = useState(1);

	const getColSize = (step) => (activeStep === step ? 4 : 4);
	return (
		<div className="pagecontent gridpagecontent innerpagegrid">

			<div className="backgroundoverlay" id="backgroundoverlay"></div>
			{/* <Offersection /> */}
			<Userheader />
			<Leftsidemenu />
			<article className="gridparentbox gridtabtopbox">
				<Container className="sitecontainer dashboardpage">
					<div className="innerpagecontent">
						<h2 className="h2">Welcome Johnwilliam
							<span className='wave mx-1'>
								<Image src="/assets/images/hand-icon.svg" alt="handicon" />
							</span>
						</h2>
					</div>
					<div className="introbox panelcontentbox gradientdarkbg mb-3">
						<div className="cryptobox">
							<div className="table-content">
								<div>
									<div className="profileiconpic"><Image src="assets/images/profile.svg" className='photopic dashpic' /></div>
								</div>
								<div>
									<h4 className="h4 mb-2">Johnwilliam<Link href="#" id="editprofile" className="t-gray ms-2" onClick={handleShow1}><span className="t-green ms-1"><FontAwesomeIcon icon={faEdit} /></span></Link>
									</h4>
									<div className="table-content cryptdetbox">
										<div>
											<h4 className="t-gray h4">Email </h4>
											<h5 className="h5">john***@gmail.com</h5> </div>
										<div>
											<h4 className="t-gray h4">UID</h4>
											<h5 className="h5">551356848 <span className="ms-2"><FontAwesomeIcon icon={faCopy} /></span></h5>
										</div>
										<div>
											<h4 className="t-gray h4">Security Level </h4>
											<h5 className="t-red h5">Low <FontAwesomeIcon icon={faAngleRight} /></h5> </div>
										<div>
											<h4 className="t-gray h4">Last Sign In</h4>
											<h5 className="h5">13-11-2026, 09:45:25 (IP: 106.51.22.60)</h5> </div>
									</div>
								</div>
							</div>

						</div>
					</div>
					<div className="stepdashbg panelcontentbox mb-3">
						<h2 className="subhead pb-2">Get started — activate your account in 3 quick steps</h2>
						<p>Complete the steps below to unlock trading, deposits, and withdrawals on your account.</p>
						<div className="steps-line mb-4">
							{[1, 2, 3].map((step) => (
								<div
									key={step}
									className={`step 
              ${activeStep === step ? "active" : ""} 
              ${activeStep > step ? "completed" : ""}`}
									onClick={() => setActiveStep(step)}
								>
									{activeStep > step ? "✔" : step}
								</div>
							))}
						</div>


						<Row className=''>
							{/* Step 1 */}
							<Col md={getColSize(1)}>
								<Card
									className={`step-card ${activeStep === 1 ? "active" : ""}`}
									onClick={() => setActiveStep(1)}
								>
									<Card.Body className="d-flex justify-content-between align-items-center">
										<div>
											<h5 className='subhead'>Verify Your Identity</h5>
											{activeStep === 1 && (
												<div>
													<p>Complete KYC verification to secure your account and unlock full features.</p>
													<Link href="/kyc" className="btn sitebtn btn-sm">Continue kyc</Link>
												</div>
											)}
										</div>
										<div className="icon-box"><Image src="assets/images/verifyicon.png" className='icon-box-img' alt='profile' id='profile' width={100} height={100} /></div>
									</Card.Body>
								</Card>
							</Col>

							{/* Step 2 */}
							<Col md={getColSize(2)}>
								<Card
									className={`step-card ${activeStep === 2 ? "active" : ""}`}
									onClick={() => setActiveStep(2)}
								>
									<Card.Body className="d-flex justify-content-between align-items-center">
										<div>
											<h5 className='subhead'>Deposit Crypto</h5>
											{activeStep === 2 && (
												<div>
													<p className="pending">Deposit cryptocurrency to your wallet and start trading instantly.</p>
													<Link href="#" className="btn sitebtn btn-sm">Deposit</Link>
												</div>
											)}
										</div>
										<div className="icon-box"><Image src="assets/images/dpsiticon.png" className='icon-box-img' alt='profile' id='profile' width={100} height={100} /></div>
									</Card.Body>
								</Card>
							</Col>

							{/* Step 3 */}
							<Col md={getColSize(3)}>
								<Card
									className={`step-card ${activeStep === 3 ? "active" : ""}`}
									onClick={() => setActiveStep(3)}
								>
									<Card.Body className="d-flex justify-content-between align-items-center">
										<div>
											<h5 className='subhead'>Start Trading</h5>
											{activeStep === 3 && (
												<div>
													<p className="pending">Buy and sell cryptocurrencies on the market with real-time prices.</p>
													<Link href="#" className="btn sitebtn btn-sm">Trade</Link>
												</div>
											)}
										</div>
										<div className="icon-box"><Image src="assets/images/starttradeicon.png" className='icon-box-img' alt='profile' id='profile' width={100} height={100} /></div>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</div>
					<div className="flexbox dashboardflexbox">
						<div className="">
							<div className=" panelcontentbox mb-3 tablebg">
								<h4 className="subhead pb-2">Balance Overview</h4>
								<div className='dash-blance'>
									<div className=" dash-blance-new  ">
										<div className='bg-div overviewbalancebox'>
											<h4 className="subhead pb-2">Spot Details</h4>
											<div className="d-flex cry-content">
												{/* <h3 className="h3">$ 15,2569 <span>BTC</span></h3> */}
												<h3 className="h3">$ 15,2569 <span>BTC</span> <FontAwesomeIcon icon={faEyeSlash} /></h3>

											</div>
											{/* <p>$1234 USD</p> */}
											<p className="mt-1 me-2">Today's PnL
												<OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Today's PnL</Tooltip>}>
													<FontAwesomeIcon icon={faCircleInfo} className="ms-1" /></OverlayTrigger>
												<span> $ 0.000</span>
											</p>
										</div>
										<div className='bg-div overviewbalancebox'>
											<h4 className="subhead pb-2">Web3 Balance</h4>
											<div className="d-flex cry-content">
												<h3 className="h3">$ 15,2569 <span>USDC</span> <FontAwesomeIcon icon={faEyeSlash} /></h3>
											</div>
											<p>$1234 USD</p>
											{/* <p className="mt-1 me-2">Today's PnL
												<OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Today's PnL</Tooltip>}>
													<FontAwesomeIcon icon={faCircleInfo} className="ms-1" /></OverlayTrigger>
												<span> $ 0.000</span>
											</p> */}
										</div>
										<div className="bg-div pb-0">
											<div className='width-x-y'>
												<h4 className="subhead pb-0">PNL chart</h4>
											<StatChart />
											</div>
										</div>
									</div>

									{/* <div className="securpanelbox mb-3">
									<div className="overviewbalancebox ">
										<div className="table-content">

											<div className="text-end dwt-btn">
											
												<div className="wallet-high dashbaord-chart">
													<StatChart />
												</div>
											</div>
										</div>
									</div>
								</div> */}
								</div>
							</div>


							<div className="panelcontentbox tablebg">
								<div className='d-flex align-items-center justify-content-between pb-2'>
									<h2 className="subhead p-0">Recent Transactions</h2>
									<div className='d-flex gap-2'>
										<button className='sitebtn btn-sm'>Trade</button>
										<button className='sitebtn btn-sm'>View</button>
									</div>
								</div>
								<SimpleBar className="table-responsive sitescroll">
									<Table className="sitetable table-responsive-stack" id="table1">
										<thead>
											<tr>
												<th>Order type</th>
												<th>Date & Time</th>
												<th>Type</th>
												<th>Pair</th>
												<th>Amount</th>
												<th>Total</th>
												<th>Status</th>
												<th>Cancel</th>
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
										<td>Limit</td>
										<td>11-12-2026,07:16:16</td>
										<td><span className="t-green">Buy</span></td>
										<td>BTC/ETH</td>
										<td>0.00520674897</td>
										<td>0.00520674897</td>
										<td>Completed</td>
										<td><Link href="/" className="btn sitebtn viewbtn" id="cancel_trade">Cancel</Link></td>
									</tr>
									<tr>
										<td>Limit</td>
										<td>11-12-2026,07:16:16</td>
										<td><span className="t-red">Sell</span></td>
										<td>BTC/ETH</td>
										<td>0.00520674897</td>
										<td>0.00520674897</td>
										<td>Completed</td>
										<td><Link href="/" className="btn sitebtn viewbtn" id="cancel_trade">Cancel</Link></td>
									</tr>
									<tr>
										<td>Limit</td>
										<td>11-12-2026,07:16:16</td>
										<td><span className="t-red">Sell</span></td>
										<td>BTC/ETH</td>
										<td>0.00520674897</td>
										<td>0.00520674897</td>
										<td>Completed</td>
										<td><Link href="/" className="btn sitebtn viewbtn" id="cancel_trade">Cancel</Link></td>
									</tr>
									<tr>
										<td>Limit</td>
										<td>11-12-2026,07:16:16</td>
										<td><span className="t-green">Buy</span></td>
										<td>BTC/ETH</td>
										<td>0.00520674897</td>
										<td>0.00520674897</td>
										<td>Completed</td>
										<td><Link href="/" className="btn sitebtn viewbtn" id="cancel_trade">Cancel</Link></td>
									</tr>
									<tr>
										<td>Limit</td>
										<td>11-12-2026,07:16:16</td>
										<td><span className="t-green">Buy</span></td>
										<td>BTC/ETH</td>
										<td>0.00520674897</td>
										<td>0.00520674897</td>
										<td>Completed</td>
										<td><Link href="/" className="btn sitebtn viewbtn" id="cancel_trade">Cancel</Link></td>
									</tr> */}
										</tbody>
									</Table>
								</SimpleBar>
								<ResponsiveTable tableId="table1" />
							</div>
						</div>
						<div>
							<div className="panelcontentbox devicetable ">
								<h2 className="subhead">Login & Device Activity</h2>
								<div className="tabrightbox"> <Link href="/accountactivity" className="alink"><FontAwesomeIcon icon={faLongArrowRight} /></Link> </div>
								<SimpleBar className="table-responsive">
									<Table className="sitetable" id="mergedTable">
										<tbody>
											<tr>
												<td>2026-11-12 13:20:17
													<br />
													<span className="t-gray">Chrome (Linux)</span>
												</td>
												<td>Malappuram India
													<br />
													<span className="t-gray">42.109.143.229</span>
												</td>
											</tr>
											<tr>
												<td>2026-11-12 13:20:17
													<br />
													<span className="t-gray">Chrome (Linux)</span>
												</td>
												<td>Malappuram India
													<br />
													<span className="t-gray">42.109.143.229</span>
												</td>
											</tr>
											<tr>
												<td>2026-11-12 13:20:17
													<br />
													<span className="t-gray">Mac os</span>
												</td>
												<td>Malappuram India
													<br />
													<span className="t-gray">42.109.143.229</span>
												</td>
											</tr>
											<tr>
												<td>2026-11-12 13:20:17
													<br />
													<span className="t-gray">Mac os</span>
												</td>
												<td>Malappuram India
													<br />
													<span className="t-gray">42.109.143.229</span>
												</td>
											</tr>
											<tr>
												<td>2026-11-12 13:20:17
													<br />
													<span className="t-gray">Mac os</span>
												</td>
												<td>Malappuram India
													<br />
													<span className="t-gray">42.109.143.229</span>
												</td>
											</tr>

										</tbody>
									</Table>
								</SimpleBar>
							</div>
						</div>
					</div>
				</Container>
			</article>
			<Userfooter />

			<Modal show={showModal1} onHide={handleClose1} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
				centered>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">Set Nickname</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form className="siteformbg">
						<Form.Group className="form-group">
							<Form.Label>My Nickname</Form.Label>
							<Form.Control type="text" name="" id="nickname" placeholder="Enter Nickname" />
						</Form.Group>
						<Form.Group className="form-group noteslist">
							<p><b>Notes :</b></p>
							<p>1. You can only change your nickname once in 30 days, please edit it carefully.</p>
							<p>2. Upon submission, your nickname will be reviewed. If any insulting or politically sensitive language is detected, your nickname will be rejected.</p>
							<p>3. Your nickname in use will be reviewed by the platform from time to time. If any rule violation is detected, your nickname will become invalid, and you will have to submit another nickname for review.</p>
						</Form.Group>
						<Form.Group className="form-group text-center d-flex flxbtn m-0">
							<Button className="borderbtn me-2 w-100">Cancel</Button>
							<Button className="sitebtn w-100">Confirm</Button>
						</Form.Group>
					</Form>
				</Modal.Body>
			</Modal>
		</div>
	);
}

export default Page;