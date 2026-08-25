import React from 'react'
import { Table, Form, Tooltip, OverlayTrigger } from 'react-bootstrap';
import 'simplebar-react/dist/simplebar.min.css';
import GaugeIcon from "./GaugeIcon";

const Account = () => {

    return (
        <div className='account'>
            <div className="orderexcutionbox p-2">
                <Form.Label>Account Equity</Form.Label>
                <Table className="sitetable mb-2 my-1">
                    <tbody>
                        <tr>
                            <td>Spot</td>
                            <td>$ 0.00</td>
                        </tr>
                        <tr>
                            <td>
                                <OverlayTrigger placement="top" overlay={
                                    <Tooltip id="cross-margin-tooltip">
                                        Maintenance Margin / Portfolio Value. Your cross positions
                                        will be liquidated if Margin Ratio reaches 100%.
                                    </Tooltip>} >
                                    <span className="tooltip-label">
                                        Perps
                                    </span>
                                </OverlayTrigger>
                            </td>
                            <td>$ 0.00</td>
                        </tr>
                    </tbody>
                </Table>
                <Form.Label>Perps Overview</Form.Label>
                <Table className="sitetable mb-0 my-1">
                    <tbody>
                        <tr>
                            <td>
                                <OverlayTrigger placement="top" overlay={
                                    <Tooltip id="cross-margin-tooltip">
                                        Maintenance Margin / Portfolio Value. Your cross positions
                                        will be liquidated if Margin Ratio reaches 100%.
                                    </Tooltip>} >
                                    <span className="tooltip-label">
                                        Balance
                                    </span>
                                </OverlayTrigger>
                            </td>
                            <td>$ 0.00</td>
                        </tr>
                        <tr>
                            <td>Unrealized PNL</td>
                            <td>***</td>
                        </tr>
                        <tr>
                            <td>Margin Ratio</td>
                            <td><GaugeIcon /> <span className="t-green">0.00%</span></td>
                        </tr>
                        <tr>
                            <td>
                                <OverlayTrigger placement="top" overlay={
                                    <Tooltip id="cross-margin-tooltip">
                                        Maintenance Margin / Portfolio Value. Your cross positions
                                        will be liquidated if Margin Ratio reaches 100%.
                                    </Tooltip>} >
                                    <span className="tooltip-label">
                                        Cross Margin Ratio
                                    </span>
                                </OverlayTrigger>
                            </td>
                            <td className="t-green">0.00%</td>
                        </tr>
                        <tr>
                            <td>
                                <OverlayTrigger placement="top" overlay={
                                    <Tooltip id="cross-margin-tooltip">
                                        Maintenance Margin / Portfolio Value. Your cross positions
                                        will be liquidated if Margin Ratio reaches 100%.
                                    </Tooltip>} >
                                    <span className="tooltip-label">
                                        Maintenance Margin
                                    </span>
                                </OverlayTrigger>
                            </td>
                            <td>$ 0.00</td>
                        </tr>
                        <tr>
                            <td>
                                <OverlayTrigger placement="top" overlay={
                                    <Tooltip id="cross-margin-tooltip">
                                        Maintenance Margin / Portfolio Value. Your cross positions
                                        will be liquidated if Margin Ratio reaches 100%.
                                    </Tooltip>} >
                                    <span className="tooltip-label">
                                        Cross Account Leverage
                                    </span>
                                </OverlayTrigger>
                            </td>
                            <td>0.00x</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>

    )
}

export default Account