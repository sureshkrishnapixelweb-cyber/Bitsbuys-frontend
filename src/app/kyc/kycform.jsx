import { useState, useRef } from 'react';
import { Col, Form, Container, Image, Row, Button } from 'react-bootstrap';
import FileUpload from './Fileupload';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const kycform = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    return (
        <Container>
            <Form method="post" className='siteformbg wizardform  pf-box'>
                <Row>
                    <Col md="6">
                        <Form.Group className="form-group">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" name="firstName" id='firstName'/>
                        </Form.Group>
                    </Col>
                    <Col md="6">
                        <Form.Group className="form-group" col-lg={6}>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" name="lastName" id='lastName'/>
                        </Form.Group>
                        </Col>
                        <Col md="6">
                        <Form.Group className="form-group">
                            <Form.Label>Country</Form.Label>
                            <Form.Select className="form-control" id='country'>
                                <option></option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Form.Group>
                        </Col>
                        <Col md="6">
                    <Form.Group className="form-group">
                            <Form.Label>Document Type</Form.Label>
                            <Form.Select className="form-control" id='document1'>
                                <option></option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Form.Group>
                        </Col>
                        <Col md="6">
                    <Form.Group  className="form-group">
                        <Form.Label>Document Number</Form.Label>
                        <Form.Control type="text" name="City" id='docnum'/>
                    </Form.Group>
                    </Col>
                    <Col md="6">
                      <Form.Group className="form-group dateinput">
                        <Form.Label>Expire Date</Form.Label>
                         <DatePicker selected={startDate} placeholder="Enter your date of birth"  id='exdate1' onChange={(date) => setStartDate(date)} dateFormat="dd/MM/yyyy" showYearDropdown showMonthDropdown dropdownMode="select" className="form-control" />
                    </Form.Group>
                    </Col>
                    <FileUpload />
                    <div className="d-flex gap-2 pt-2 text-center justify-content-center">
								<Button type="button" className="btn borderbtn" data-bs-dismiss="modal">Close</Button>
								<Button type="button" className="btn sitebtn">Verify Now</Button>
							</div>
                </Row>
            </Form>
        </Container >
    );
};

export default kycform;
