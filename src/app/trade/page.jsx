'use client'

import React, { useEffect, useState } from 'react';
import Userheader from '../components/Userheader';
import Leftsidemenu from '../components/Leftsidemenu';
import Userfooter from '../components/Userfooter';
import Livepricelist from './livepricelist';
import Chart from './chart';
import Orderbook from './orderbook';
import Orderform from './orderform';
import Openorder from './openorder';
import Tradehistory from './tradehistory';
import BuySelltab from './buyselltab';
import Marketlist from './marketlist';
import Recentliveprice from './recentliveprice';
import Walletassets from './walletassets';
import { Container } from 'react-bootstrap';
import 'simplebar-react/dist/simplebar.min.css';

const page = () => {
    const [windowWidth, setWindowWidth] = useState(0); // Safe initial value

    const chartTab = (event) => {
        const element1 = document.getElementById("tradepage");
        element1?.classList.add("chartactive");
        element1?.classList.remove("openorderactive", "tradeactive");
    };

    const orderTab = (event) => {
        const element1 = document.getElementById("tradepage");
        element1?.classList.remove("chartactive", "tradeactive");
        element1?.classList.add("openorderactive");
    };

    const tradeTab = (event) => {
        const element1 = document.getElementById("tradepage");
        element1?.classList.remove("chartactive", "openorderactive");
        element1?.classList.add("tradeactive");
    };

    useEffect(() => {
        document.body.classList.add('tradepagbg');

        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth);

            const handleResize = () => {
                setWindowWidth(window.innerWidth);
            };

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
                document.body.classList.remove('tradepagbg');
            };
        }
    }, []);

    useEffect(() => {
        const tradepageElement = document.getElementById('tradepage');
        if (!tradepageElement) return;

        // if (windowWidth < 767) {
        //   tradepageElement.classList.remove('buyorderformactive1');
        // } else if (windowWidth < 991) {
        //   tradepageElement.classList.add('buyorderformactive1');
        // }
    }, [windowWidth]);

    return (
        <div className="pagecontent gridpagecontent tradepage chartactive buyorderformactive1" id="tradepage">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <article className="gridparentbox tradecontentbox">
                <Container className="container sitecontainer">
                    <div className="grid-box pb-3">
                        <div className="mobilegrid tabs-nav">
                            <li className="orderlist"><a href="#tab-1" onClick={chartTab}>Chart</a></li>
                            <li className="orderlist"><a href="#tab-2" onClick={orderTab}>Open Orders</a></li>
                            <li className="orderlist"><a href="#tab-3" onClick={tradeTab}>Trade History</a></li>
                        </div>
                        <BuySelltab />
                        <Recentliveprice />
                        <Livepricelist />
                        <Chart />
                        <Marketlist />
                        <Orderbook />
                        <Orderform />
                        <Openorder />
                        <Tradehistory />
                        <Walletassets />
                    </div>
                </Container>
            </article>
            <Userfooter />
        </div>
    );
};

export default page;
