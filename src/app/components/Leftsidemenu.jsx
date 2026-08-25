'use client'
import React, { useState } from "react";
import Link from 'next/link';
import { Image, NavDropdown, Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation'


const Leftsidemenu = () => {
  const [showModal1, setShowModal1] = useState(false);
  const handleClose1 = () => setShowModal1(false);

  const pathname = usePathname()

  const isHistoryActive = [
    '/deposithistory',
    '/withdrawhistory',
    '/transferhistory',
    '/openorderhistory',
    '/orderhistory',
    '/tradehistory',
    '/perpetualPositionshistory',
    '/perpetualFillshistory',
    '/perpetualFillshistory',
    '/perpetualorderhistory',
    '/perpetualfundingPayments'
  ].some(path => pathname.includes(path));

  const isAccountActive = [
    '/kyc',
    '/security'

  ].some(path => pathname.includes(path));

  const isWalletActive = [
    '/fundingwallet',
    'spot-wallet'
  ].some(path => pathname.includes(path));

  const isChatActive = [
    '/support',
    '/chat'
  ].some(path => pathname.includes(path));

  function closeCollapse() {
    var element = document.getElementById("leftsidemenu");
    element?.classList.remove("active");
    document.body.classList.remove('pagewrapperbox');
    var element1 = document.getElementById("backgroundoverlay");
    element1?.classList.remove("active");
  }
  function menuclick() {
    var element = document.getElementById("leftsidemenu");
    element?.classList.remove("active");
    document.body.classList.remove('pagewrapperbox');
    var element1 = document.getElementById("backgroundoverlay");
    element1?.classList.remove("active");
  }
  return (

    <div className="leftsidemenu" id="leftsidemenu">
      <div className="closeiconbtn" onClick={closeCollapse}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <hr />
      <div className="leftsidescroll">
        <ul>
          <li><Link id="dashboardlink" href="/dashboard" className={`titlemenu ${pathname === '/dashboard' ? 'active' : ''}`} onClick={menuclick}><i><Image src="/assets/images/homeicon.svg" alt="icon" width={100} height={100} /></i><div>Dashboard</div></Link></li>
          <li className="dropdown">
            <a href="#" id="walletlink" className={`titlemenu dropdown-bs-toggle  ${isWalletActive ? 'active' : ''}`} data-bs-toggle="dropdown"><i><Image src="/assets/images/spoticon.svg" alt="icon" width={100} height={100} /></i>Trade<span className="careticondown"><FontAwesomeIcon icon={faCaretDown} /></span></a>
            <div className="walletlink-menu-dd dropdown-menu">
              <NavDropdown.Item as={Link} className={`titlemenu ${pathname === '/trade' ? 'active' : ''}`} href="/trade">Spot</NavDropdown.Item>
              <NavDropdown.Item as={Link} className={`titlemenu ${pathname === '/perpetual' ? 'active' : ''}`} href="/perpetual">Perpetual</NavDropdown.Item>
            </div>
          </li>
          {/* <li className="webhide"><Link id="tradelink" className={`titlemenu ${pathname === '/trade' ? 'active' : ''}`} href="/trade"><i><Image src="/assets/images/spoticon.svg" alt="icon" width={100} height={100} /></i><div>Spot</div></Link></li> */}
          <li className="webhide"><Link id="marketlink" className={`titlemenu ${pathname === '/markets' ? 'active' : ''}`} href="/markets"><i><Image src="/assets/images/marketicon.svg" alt="icon" width={100} height={100} /></i><div>Markets</div></Link></li>
          {/* <li className="dropdown webhide">
            <a href="#" className="nav-link dropdown-bs-toggle titlemenu" data-bs-toggle="dropdown"><i><Image src="/assets/images/savings.svg" alt="icon" width={100} height={100} /></i>Earn<span className="careticondown"><FontAwesomeIcon icon={faCaretDown} /></span></a>
            <div className="dropdown-menu">
              <NavDropdown.Item as={Link} id="savinglink" className={`titlemenu ${pathname === '/saving' ? 'active' : ''}`} href="/saving"><i><Image src="/assets/images/earnview.svg" alt="icon" width={100} height={100} /></i><div>Overview</div></NavDropdown.Item>
              <NavDropdown.Item as={Link} id="earnhistorylink" className={`titlemenu ${pathname === '/earn' ? 'active' : ''}`} href="/earn"><i><Image src="/assets/images/earnhistory.svg" alt="icon" width={100} height={100} /></i><div>History</div></NavDropdown.Item>
            </div>
          </li> */}

          <li className="dropdown">
            <a href="#" id="walletlink" className={`titlemenu dropdown-bs-toggle  ${isWalletActive ? 'active' : ''}`} data-bs-toggle="dropdown"><i><Image src="/assets/images/walleticon.svg" alt="icon" width={100} height={100} /></i>Asstes<span className="careticondown"><FontAwesomeIcon icon={faCaretDown} /></span></a>
            <div className="walletlink-menu-dd dropdown-menu">
              <NavDropdown.Item as={Link} className={`titlemenu ${pathname === '/wallet' ? 'active' : ''}`} href="/wallet">Wallet Overview</NavDropdown.Item>
              <NavDropdown.Item as={Link} className={`titlemenu ${pathname === '/fundingwallet' ? 'active' : ''}`} href="/fundingwallet">Funding Wallet</NavDropdown.Item>
              <NavDropdown.Item as={Link} className={`titlemenu ${pathname === '/spot-wallet' ? 'active' : ''}`} href="/spot-wallet">Spot Wallet</NavDropdown.Item>
            </div>
          </li>
          <li className="dropdown">
            <a href="#" id="historylink" className={`titlemenu dropdown-bs-toggle  ${isHistoryActive ? 'active' : ''}`} data-bs-toggle="dropdown"><i><Image src="/assets/images/historyicon.svg" alt="icon" width={100} height={100} /></i>Orders<span className="careticondown"><FontAwesomeIcon icon={faCaretDown} /></span></a>
            <div className="historylink-menu-dd dropdown-menu">
              <NavDropdown.Item as={Link} className={`titlemenu ${pathname === '/deposithistory' ? 'active' : ''}`} href="/deposithistory">Assets History</NavDropdown.Item>
              <NavDropdown.Item as={Link} className={`titlemenu ${pathname === '/openorderhistory' ? 'active' : ''}`} href="/openorderhistory">Spot Orders</NavDropdown.Item>
              <NavDropdown.Item as={Link} className={`titlemenu ${pathname === '/perpetualPositionshistory' ? 'active' : ''}`} href="/perpetualPositionshistory">Perpetual Orders</NavDropdown.Item>
            </div>
          </li>
          {/* <li><Link id="kyclink" className={`titlemenu ${pathname === '/kyc' ? 'active' : ''}`} href="/kyc"><i><Image src="/assets/images/kycicon-1.svg" alt="icon" width={100} height={100} /></i><div>Identification</div></Link></li>
          <li><Link id="securitylink" className={`titlemenu ${pathname === '/security' ? 'active' : ''}`} href="/security"><i><Image src="/assets/images/securityicon.svg" alt="icon" width={100} height={100} /></i><div>Security</div></Link> </li> */}
          <li className="dropdown">
            <a href="#" id="accountlink" className={`titlemenu dropdown-bs-toggle  ${isAccountActive ? 'active' : ''}`} data-bs-toggle="dropdown"><i><Image src="/assets/images/accounticon.svg" alt="icon" width={100} height={100} /></i>Account<span className="careticondown"><FontAwesomeIcon icon={faCaretDown} /></span></a>
            <div className="historylink-menu-dd dropdown-menu">
              <NavDropdown.Item as={Link} id="kyclink" className={`titlemenu ${pathname === '/kyc' ? 'active' : ''}`} href="/kyc">Identification</NavDropdown.Item>
              <NavDropdown.Item as={Link} id="securitylink" className={`titlemenu ${pathname === '/security' ? 'active' : ''}`} href="/security">Security</NavDropdown.Item>
            </div>
          </li>
          <li className="barhide"><Link id="supportlink" className={`titlemenu ${isChatActive ? 'active' : ''}`} href="/support"><i><Image src="/assets/images/supporticon.svg" alt="icon" width={100} height={100} /></i><div>Support</div></Link></li>
          <li><Link id="settingslink" className={`titlemenu ${pathname === '/settings' ? 'active' : ''}`} href="/settings"><i><Image src="/assets/images/settingsicon.svg" alt="icon" width={100} height={100} /></i><div>Settings</div></Link> </li>
          <li><span href="#" onClick={setShowModal1} className="titlemenu logout" id="logoutlink"><i><Image src="/assets/images/logouticon.svg" alt="icon" width={100} height={100} /></i><div>Sign Out</div></span></li>

        </ul>
      </div>
      <Modal show={showModal1} onHide={handleClose1} className="modalbgt authmodal  signoutpopupbg"
        aria-labelledby="contained-modal-title-vcenter" centered >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <div className="logimgbg">
              <Image src="/assets/images/homeicon.svg" alt="icon" width={100} height={100} className="signoutimg" />
            </div>
            <h4 className="subhead">Are you sure, do you want to sign out?</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae,
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae,
            </p>
            <div className="d-flex gap-2 mt-3">
              <Button type="button" className="sitebtn" data-bs-dismiss="modal">Cancel</Button>
              <Link href="" className="btn sitebtn">Sign Out</Link>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Leftsidemenu