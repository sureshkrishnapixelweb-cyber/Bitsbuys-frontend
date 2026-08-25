import React, { useState } from 'react'
import { Image, Table, Nav, Tab, Form, Dropdown } from 'react-bootstrap'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignal, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

const Orderbook = () => {
    const [obView, setObView] = useState('tab'); // 'tab' | 'stacked' | 'large'

const changeOrderBookView = (view, e) => {
    e.preventDefault();
    e.stopPropagation();
    setObView(view);

    // Find the grid-box-futures element
    const gridBox = document.querySelector('.grid-box-futures');
    
    if (gridBox) {
        // Remove all three classes first
        gridBox.classList.remove('ob-tab-view', 'ob-stacked-view', 'ob-large-view');
        
        // Add the relevant class based on selected view
        if (view === 'tab') {
            gridBox.classList.add('ob-tab-view');
        } else if (view === 'stacked') {
            gridBox.classList.add('ob-stacked-view');
        } else if (view === 'large') {
            gridBox.classList.add('ob-large-view');
        }
    }
};
    // ── Reusable content blocks ──────────────────────────
    const OrderBookContent = () => (
        <div className="ob-section">
            <div className="futureordertab d-flex align-items-center justify-content-between">
                <div className="digitformbox">
                    <Form className="siteformbg">
                        <div className="d-flex gap-2">
                            <div className="form-group mb-0">
                                <Form.Select className="form-control">
                                    <option>0.01</option>
                                    <option>0.1</option>
                                    <option>1</option>
                                    <option>10</option>
                                </Form.Select>
                            </div>
                            <div className="form-group mb-0">
                                <Form.Select className="form-control">
                                    <option>USDC</option>
                                    <option>0.1</option>
                                    <option>1</option>
                                    <option>10</option>
                                </Form.Select>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
            <div className="orderbookscroll">
                <SimpleBar className="table-responsive">
                    <Table className="sitetable">
                        <thead>
                            <tr>
                                <th>Price</th>
                                <th className="text-end">Size (USDC)</th>
                                <th className="text-end">Total (USDC)</th>
                            </tr>
                        </thead>
                    </Table>
                </SimpleBar>
                <div className="sellboxorder" id="sellorderbox">
                    <SimpleBar className="table-responsive sitescroll">
                        <div className="sellboxtablebg">
                            <Table className="sitetable" id='table5'>
                                <thead>
                                    <tr>
                                        <th>Price(ETH)</th>
                                        <th className="text-end">Amount(BTC)</th>
                                        <th className="text-end">Total(ETH)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td><span className="t-red">6218.45</span></td><td className="text-end">12.45</td><td className="text-end">64.72</td></tr>
                                    <tr><td><span className="t-red">6217.82</span></td><td className="text-end">8.32</td><td className="text-end">43.18</td></tr>
                                    <tr><td><span className="t-red">6216.39</span></td><td className="text-end">15.67</td><td className="text-end">81.54</td></tr>
                                    <tr><td><span className="t-red">6215.67</span></td><td className="text-end">21.98</td><td className="text-end">114.67</td></tr>
                                    <tr><td><span className="t-red">6214.21</span></td><td className="text-end">18.24</td><td className="text-end">95.33</td></tr>
                                    <tr><td><span className="t-red">6213.88</span></td><td className="text-end">7.89</td><td className="text-end">41.06</td></tr>
                                </tbody>
                            </Table>
                        </div>
                    </SimpleBar>
                </div>
                <div className="livepricebox livepricebox-bg" id="livepricebox">
                    <Table className="sitetable">
                        <thead>
                            <tr>
                                <th><span className="t-green">0.256</span></th>
                                <th className="text-end">0.001% <FontAwesomeIcon icon={faSignal} /></th>
                            </tr>
                        </thead>
                    </Table>
                </div>
                <div className="buyboxorder" id="buyorderbox">
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
                                    <tr><td><span className="t-green">6218.45</span></td><td className="text-end">18.25</td><td className="text-end">94.82</td></tr>
                                    <tr><td><span className="t-green">6217.82</span></td><td className="text-end">22.18</td><td className="text-end">115.23</td></tr>
                                    <tr><td><span className="t-green">6216.39</span></td><td className="text-end">14.76</td><td className="text-end">76.68</td></tr>
                                    <tr><td><span className="t-green">6215.67</span></td><td className="text-end">31.44</td><td className="text-end">163.71</td></tr>
                                    <tr><td><span className="t-green">6214.21</span></td><td className="text-end">12.89</td><td className="text-end">67.15</td></tr>
                                    <tr><td><span className="t-green">6213.88</span></td><td className="text-end">27.53</td><td className="text-end">143.24</td></tr>
                                </tbody>
                            </Table>
                        </div>
                    </SimpleBar>
                </div>
            </div>
        </div>
    );

    const TradesContent = () => (
        <div className="trades-section">
            <div className="recenthistory">
                <SimpleBar className="table-responsive sitescroll">
                    <Table className="sitetable">
                        <thead>
                            <tr>
                                <th>Price(BTC)</th>
                                <th>Amount(BTC)</th>
                                <th>Date &amp; Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td><span className="t-green">0.36985936</span></td><td>0.0052</td><td>11-12-19,07:16:16</td></tr>
                            <tr><td><span className="t-red">0.36985936</span></td><td>0.0052</td><td>11-12-19,07:16:16</td></tr>
                            <tr><td><span className="t-green">0.36985936</span></td><td>0.0052</td><td>11-12-19,07:16:16</td></tr>
                            <tr><td><span className="t-red">0.36985936</span></td><td>0.0052</td><td>11-12-19,07:16:16</td></tr>
                            <tr><td><span className="t-green">0.36985936</span></td><td>0.0052</td><td>11-12-19,07:16:16</td></tr>
                            <tr><td><span className="t-red">0.36985936</span></td><td>0.0052</td><td>11-12-19,07:16:16</td></tr>
                        </tbody>
                    </Table>
                </SimpleBar>
            </div>
        </div>
    );

    // ── Dropdown + Nav Header (reuse across all views) ──
    const TabHeader = ({ activeTab, setActiveTab }) => (
        <div className="innerpagetab historytab">
            <Nav variant="pills" className="tabbanner">
                <Nav.Item>
                    <Nav.Link
                        className={activeTab === 'orderbook' ? 'active' : ''}
                        onClick={() => setActiveTab('orderbook')}>
                        Order Book
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        className={activeTab === 'recenttrade' ? 'active' : ''}
                        onClick={() => setActiveTab('recenttrade')}>
                        Trades
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <div className='tabrightbox'>
                <div className="orderbook-menu">
                    <Dropdown align="end">
                        <Dropdown.Toggle as="div" className="orderbook-dots">
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="orderbook-dropdown">
                            <Dropdown.Item as="button" onClick={(e) => changeOrderBookView("tab", e)}>Tab</Dropdown.Item>
                            <Dropdown.Item as="button" onClick={(e) => changeOrderBookView("stacked", e)}>Stacked</Dropdown.Item>
                            <Dropdown.Item as="button" onClick={(e) => changeOrderBookView("large", e)}>Large</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </div>
    );

    // ── TAB view: original Tab.Container ──
    const [activeTab, setActiveTab] = useState('orderbook');

    return (
        <div className="orderbook griddragoption">
            <div className={`suborderbook buysellshow`} id="suborderbook">

                {/* ── TAB VIEW ── */}
                {obView === 'tab' && (
                    <Tab.Container defaultActiveKey="orderbook">
                        <div className="innerpagetab historytab">
                            <Nav variant="pills" className="tabbanner">
                                <Nav.Item><Nav.Link eventKey="orderbook">Order Book</Nav.Link></Nav.Item>
                                <Nav.Item><Nav.Link eventKey="recenttrade">Trades</Nav.Link></Nav.Item>
                            </Nav>
                            <div className='tabrightbox'>
                                <div className="orderbook-menu">
                                    <Dropdown align="end">
                                        <Dropdown.Toggle as="div" className="orderbook-dots">
                                            <FontAwesomeIcon icon={faEllipsisVertical} />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="orderbook-dropdown">
                                            <Dropdown.Item as="button" onClick={(e) => changeOrderBookView("tab", e)}>Tab</Dropdown.Item>
                                            <Dropdown.Item as="button" onClick={(e) => changeOrderBookView("stacked", e)}>Stacked</Dropdown.Item>
                                            <Dropdown.Item as="button" onClick={(e) => changeOrderBookView("large", e)}>Large</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        <Tab.Content>
                            <Tab.Pane eventKey="orderbook"><OrderBookContent /></Tab.Pane>
                            <Tab.Pane eventKey="recenttrade"><TradesContent /></Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                )}

                {/* ── STACKED VIEW: Order Book top, Trades bottom ── */}
                {obView === 'stacked' && (
                    <div className="stacked-view">
                        <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} />
                        <div className="stacked-content">
                            <div className="stacked-orderbook">
                                 <h5 className="heading-box od-head">Order Book</h5>
                                <OrderBookContent />
                            </div>
                            <div className="stacked-divider" />
                            <div className="stacked-trades">
                                <h5 className="heading-box">Trades</h5>
                                <TradesContent />
                            </div>
                        </div>
                    </div>
                )}

                {/* ── LARGE VIEW: Order Book left, Trades right ── */}
                {obView === 'large' && (
                    <div className="large-view">
                        <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} />
                        <div className="large-content">
                            <div className="large-orderbook">
                                <h5 className="heading-box">Orderbook</h5>
                                <OrderBookContent />
                            </div>
                            <div className="large-trades">
                                  <h5 className="heading-box">Trades</h5>
                                <TradesContent />
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Orderbook