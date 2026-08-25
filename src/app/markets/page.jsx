"use client";
import React from "react";
import Homeheader from "../components/Homeheader";
import Homefooter from "../components/Homefooter";
import { Image, Table, Nav, Tab, Container } from "react-bootstrap";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import ResponsiveTable from "../components/ResponsiveTable";

const coins = [
  {
    name: "BTC/USDT",
    icon: "assets/images/color/btc.svg",
    price: "2562.365289",
    change: "2.20%",
    high: "2700.00",
    low: "2500.00",
    volume: "2562.365289",
    type: "up",
  },
  {
    name: "ETH/USDT",
    icon: "assets/images/color/eth.svg",
    price: "2562.365289",
    change: "2.20%",
    high: "2700.00",
    low: "2500.00",
    volume: "2562.365289",
    type: "up",
  },
  {
    name: "BNB/USDT",
    icon: "assets/images/color/bnb.svg",
    price: "2562.365289",
    change: "2.20%",
    high: "2700.00",
    low: "2500.00",
    volume: "2562.365289",
    type: "up",
  },
  {
    name: "TRX/USDT",
    icon: "assets/images/color/trx.svg",
    price: "2562.365289",
    change: "-1.20%",
    high: "2600.00",
    low: "2400.00",
    volume: "2562.365289",
    type: "down",
  },
];

const CoinTable = ({ tableId }) => (
  <>
    <SimpleBar className="table-responsive sitescroll">
      <Table className="sitetable" id={tableId}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Price</th>
            <th>24h Change</th>
            <th>24h High</th>
            <th>24h Low</th>
            <th>24h Vol</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {coins.map((coin, index) => (
            <tr key={index}>
              <td>
                <Image
                  src={coin.icon}
                  width={25}
                  height={25}
                  alt="coin"
                  className="coinlisticon"
                />{" "}
                {coin.name}
              </td>

              <td>{coin.price}</td>

              <td>
                <span className={coin.type === "up" ? "t-green" : "t-red"}>
                  {coin.change}{" "}
                  <FontAwesomeIcon
                    icon={coin.type === "up" ? faArrowUp : faArrowDown}
                  />
                </span>
              </td>

              <td>{coin.high}</td>
              <td>{coin.low}</td>
              <td>{coin.volume}</td>

              <td>
                <Link href="/trade" className="btn sitebtn btn-sm">
                  Trade
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </SimpleBar>

    <ResponsiveTable tableId={tableId} />
  </>
);

const Page = () => {
  return (
    <article className="gridparentbox innerpage innerpage-non-border privacy-page">
      <Homeheader />

      <div className="innerpages">
        <Container>
          <div className="panelcontentbox">

            <Tab.Container defaultActiveKey="hotspot">

              {/* Tabs */}
              <div className="innerpagetab historytab">
                <Nav variant="pills" className="tabbanner">

                  <Nav.Item>
                    <Nav.Link eventKey="favorites">Favorites</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="hotspot">Spot</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="gain">Top Gainer</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="losser">Top Loser</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="listing">New Listing</Nav.Link>
                  </Nav.Item>

                </Nav>
              </div>

              {/* Tab Content */}
              <Tab.Content className="mt-3">

                <Tab.Pane eventKey="hotspot">
                  <CoinTable tableId="table1" />
                </Tab.Pane>

                <Tab.Pane eventKey="gain">
                  <CoinTable tableId="table2" />
                </Tab.Pane>

                <Tab.Pane eventKey="losser">
                  <CoinTable tableId="table3" />
                </Tab.Pane>

                <Tab.Pane eventKey="listing">
                  <CoinTable tableId="table4" />
                </Tab.Pane>

              </Tab.Content>

            </Tab.Container>

          </div>
        </Container>
      </div>

      <Homefooter />
    </article>
  );
};

export default Page;