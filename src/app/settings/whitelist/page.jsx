"use client"
import React, { useState } from "react";
import Userheader from "../../components/Userheader";
import Userfooter from "../../components/Userfooter";
import Leftsidemenu from "../../components/Leftsidemenu";
import { Container, Image, Modal, Table, Form, Button, Badge, InputGroup } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Link from 'next/link';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ResponsiveTable from "../../components/ResponsiveTable";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const WhiteListPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);


  const handleClose1 = () => setShowModal1(false);
  const handleShow1 = () => setShowModal1(true);

  const handleClose2 = () => setShowModal2(false);
  const handleShow2 = () => setShowModal2(true);
  return (
    <div>
      <div className="pagecontent gridpagecontent innerpagegrid">
        <div className="backgroundoverlay" id="backgroundoverlay"></div>
        <Userheader />
        <Leftsidemenu />
        <article className="gridparentbox">
          <Container className="container sitecontainer historypage">

            <div className="innerpagecontent">
              <h2 className="h2 text-start"><Link href="/settings" className="alink"><span className="me-2"><FontAwesomeIcon icon={faAngleLeft} /></span></Link>Address Management</h2>
              <div className="tabrightbox">
                <Button className="sitebtn btn-sm" onClick={handleShow1}>Add New</Button>
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
                      <div className="clearbtn">
                        <Form.Group className="form-group">
                          <Button className="btn sitebtn btn-sm me-1" id="clearbtn">Clear</Button>
                          <Link href="/" className="btn sitebtn btn-sm red-btn" id="resetbtn">Reset</Link>
                        </Form.Group>
                      </div>
                      <Form.Group className="mb-3">
                        <Form.Select className="form-control" id="coin">
                          <option>Coin</option>
                          <option>ETH</option>
                          <option>BNB</option>
                          <option>XRP</option>
                          <option>TRX</option>
                          <option>USD</option>
                        </Form.Select>
                      </Form.Group>
                      {/* <Form.Group className="mb-3">
                                                <Form.Select className="form-control" id="coin">
                                                    <option>All Side</option>
                                                    <option>Limit</option>
                                                    <option>Market</option>
                                                </Form.Select>
                                            </Form.Group> */}
                    </div>
                  </Form>
                </div>
              </div>
              <SimpleBar className="table-responsive sitescroll">
                <Table className="table sitetable" id="table1">
                  <thead>
                    <tr>
                      <th>S No</th>
                      <th>Crypto / Token</th>
                      <th>Address</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="nodata">
                      <td colSpan={5}>
                        <Image src="/assets/images/nodata.png" width={50} height={50} alt="nodata" />
                        No record found
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
      {/* Google Authenticator  */}
      <Modal show={showModal1} onHide={handleClose1} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Eamil 2FA Verification
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='siteformbg'>
            <Form.Group className="form-group">
              <Form.Label>Enter the 6-digit code will be sent to John****@gmail.com</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control name="code" id="code" type="text" />
                <InputGroup.Text id="getcode">Get Code</InputGroup.Text>
              </InputGroup>
            </Form.Group>
            <div className="d-flex gap-2 mt-3">
              <Button type="button" className="sitebtn" id="cancel">Cancel</Button>
              <Button className="btn sitebtn" id="confirm" onClick={() => { handleClose1(); handleShow2(); }}>Confirm</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      <Modal show={showModal2} onHide={handleClose2} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Receiver Address
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='siteformbg'>
            <Form.Group className="form-group">
              <Form.Label>Select Coin / Currency </Form.Label>
              <Form.Select className="form-control" id="selectcoin">
                <option>Select Coin</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label>Enter Address</Form.Label>
              <Form.Control name="code" id="addresscode" type="text" />
            </Form.Group>
            <div className="d-flex gap-2 mt-3">
              <Button type="button" className="sitebtn" id="cancelbtn">Cancel</Button>
              <Button type="sumit" className="btn sitebtn" id="savebtn">Save</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default WhiteListPage;
