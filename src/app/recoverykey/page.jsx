"use client"
import React from "react"
import Link from "next/link"
import Userheader from '../components/Userheader'
import Userfooter from '../components/Userfooter'
import Leftsidemenu from '../components/Leftsidemenu'
import { Container, Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
const recoverykey = () => {
    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <article className="gridparentbox">
                <Container className="sitecontainer">
                    <div className="innerpagecontent">
                        <h2 className="h2 text-start"><Link href="/security" className="alink"><span className="me-2"><FontAwesomeIcon icon={faAngleLeft} /></span></Link>Recovery Key</h2>
                    </div>
                    <div className="panelcontentbox mt-2">
                        <Form className="siteformbg">
                            <div className="securitycontentbox">
                                <div className="recoveryboxt">
                                    <div className="anticodebox">
                                        <div className="recoverlist lightgraybg">
                                            <div className="tabrightbox">
                                                <a href="#" className="btn sitebtn btn-sm" id="copybtn"><i className="fa fa-copy me-1"></i>Copy</a>
                                            </div>
                                            <ul>
                                                <li>1. Semantic</li>
                                                <li>2. Professed</li>
                                                <li>3. Mortified</li>
                                                <li>4. Corrode</li>
                                                <li>5. Evacuee</li>
                                                <li>6. Alone</li>
                                                <li>7. Eagle</li>
                                                <li>8. Fiscally</li>
                                                <li>9. Drippy</li>
                                                <li>10. Legwarmer</li>
                                                <li>11. Elude</li>
                                                <li>12. Ensure</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <p className="t-gray mb-0">Use only when you want to recover your account when you loose your device.</p>
                                </div>

                                <div className="form-group">
                                    <div className="form-check">
                                        <Form.Check type="checkbox" id="dealcheck" label="I Accept the deal" />
                                    </div>
                                </div>

                                <div className="form-group text-center">
                                    <Button type="submit" className="btn sitebtn btn-block" id="submitbtn">Submit</Button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </Container>
            </article>
            <Userfooter />
        </div>
    )
}
export default recoverykey


