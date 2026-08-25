"use client"
import React, { useState } from "react"
import Link from "next/link"
import Userheader from '../components/Userheader'
import Userfooter from '../components/Userfooter'
import Leftsidemenu from '../components/Leftsidemenu'
import { Container, Table, Pagination } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import ResponsiveTable from '../components/ResponsiveTable';


const accountactivity = () => {
	const [activePage, setActivePage] = useState(null);

	return (
		<div className="pagecontent gridpagecontent innerpagegrid">
			<div className="backgroundoverlay" id="backgroundoverlay"></div>
			<Userheader />
			<Leftsidemenu />
			<article className="gridparentbox">
				<Container className="sitecontainer">
					<div className="innerpagecontent">
						<h2 className="h2 text-start"><Link href="/security" className="alink"><span className="me-2"><FontAwesomeIcon icon={faAngleLeft} /></span></Link>Account activity</h2>
					</div>
					<div className="panelcontentbox">
						<SimpleBar className="table-responsive">
							<Table className="sitetable" id='table1'>
								<thead>
									<tr>
										<th>Date & Time</th>
										<th>Device</th>
										<th>Source</th>
										<th>Location</th>
										<th>IP</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>11/03/2026 13:20:17</td>
										<td>Web</td>
										<td>Chrome (Linux)</td>
										<td>Malappuram India</td>
										<td>42.109.143.229</td>
									</tr>
									<tr>
										<td>11/03/2026 13:20:17</td>
										<td>Mobile</td>
										<td>Chrome (Android)</td>
										<td>Kozhikode, India</td>
										<td>117.221.54.188</td>
									</tr>
									<tr>
										<td>11/03/2026 13:20:17</td>
										<td>Web</td>
										<td>Firefox (Windows)</td>
										<td>Kochi India</td>
										<td>103.21.89.56</td>
									</tr>

									<tr>
										<td>11/03/2026 13:20:17</td>
										<td>Web</td>
										<td>Safari (MacOS)</td>
										<td>Bengaluru India</td>
										<td>152.58.33.101</td>
									</tr>
									<tr>
										<td>11/03/2026 13:20:17</td>
										<td>Web</td>
										<td>Edge (Windows)</td>
										<td>Mumbai India</td>
										<td>27.60.182.14</td>
									</tr>
									<tr>
										<td>11/03/2026 13:20:17</td>
										<td>Web</td>
										<td>Chrome (Windows)</td>
										<td>Delhi India</td>
										<td>12.109.143.229</td>
									</tr>
								</tbody>
							</Table>
						</SimpleBar>
						<ResponsiveTable tableId="table1" />
						<Pagination>
							<Pagination.Prev />
							<Pagination.Ellipsis />
							<Pagination.Item
								active={activePage === 1}
								onClick={() => handlePageClick(1)}
							>
								{1}
							</Pagination.Item>
							<Pagination.Item
								active={activePage === 2}
								onClick={() => handlePageClick(2)}
							>
								{2}
							</Pagination.Item>
							<Pagination.Item
								active={activePage === 3}
								onClick={() => handlePageClick(3)}
							>
								{3}
							</Pagination.Item>
							<Pagination.Ellipsis />
							<Pagination.Next />
						</Pagination>
					</div>
				</Container>
			</article>
			<Userfooter />
		</div>
	)
}
export default accountactivity


