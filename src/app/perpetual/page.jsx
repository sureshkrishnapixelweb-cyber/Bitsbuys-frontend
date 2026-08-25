"use client"
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import "../../../public/assets/css/home.css";
import "../../../public/assets/css/trade.css";
import "../../../src/app/globals.css";
import Livepricelist from './livepricelist'
import BuySelltab from './buyselltab'
import Chart from './chart'
import Orderbook from './orderbook'
import Orderform from './orderform'
import Openorder from './openorder'
import Account from './account'
import Recentliveprice from './recentliveprice';
import Leftsidemenu from '../components/Leftsidemenu';





export const Perpetual = () => {

    useEffect(() => {
        document.body.classList.add('futurespage');
        return () => {
            document.body.classList.remove('futurespage', 'tradepagbg');
        };
    }, []);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    function chartTab(event) {
        const element1 = document.getElementById("tradepage");
        element1?.classList.add("chartactive");
        element1?.classList.remove("openorderactive");
        element1?.classList.remove("tradeactive");
    }

    function orderTab(event) {
        const element1 = document.getElementById("tradepage");
        element1?.classList.remove("chartactive");
        element1?.classList.add("openorderactive");
        element1?.classList.remove("tradeactive");
    }

    function tradeTab(event) {
        const element1 = document.getElementById("tradepage");
        element1?.classList.remove("chartactive");
        element1?.classList.remove("openorderactive");
        element1?.classList.add("tradeactive");
    }

    useEffect(() => {
        document.body.classList.add('tradepagbg');
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const tradepageElement = document.getElementById('tradepage');
        if (windowWidth < 991) {
            tradepageElement.classList.add('buyorderformactive1');
        } else {
            tradepageElement.classList.remove('buyorderformactive1');
        }
    }, [windowWidth]);

    useEffect(() => {
        const tradepageElement = document.getElementById('tradepage');
        if (windowWidth < 767) {
            tradepageElement.classList.remove('buyorderformactive1');
        }
    }, [windowWidth]);



    return (
        <div className="pagecontent gridpagecontent tradepage chartactive" id="tradepage">
            <Userheader />
            <Leftsidemenu />


            <article className="gridparentbox tradecontentbox ">
                <Container className="container sitecontainer">
                    <div className="grid-box-futures ob-tab-view">
                        <div className="mobilegrid tabs-nav">
                            <li className="orderlist"><a href="#tab-1" onClick={chartTab}>Chart</a></li>
                            <li className="orderlist"><a href="#tab-2" onClick={orderTab}>Open Orders</a></li>
                        </div>
                         <BuySelltab />
                        <Livepricelist />
                        <Chart />
                        <Orderbook />
                        <Orderform />
                        <Openorder />
                        <Recentliveprice />
                        <Account/>
                    </div>
                </Container>
            </article>
            <Userfooter />
        </div>
    )
}

export default Perpetual;