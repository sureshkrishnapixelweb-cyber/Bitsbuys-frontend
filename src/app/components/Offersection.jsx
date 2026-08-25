import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Offersection = () => {
  return (
  <>
      <div className='offer-section  maintenance-banner d-flex justify-content-around align-items-center'>
      {/* <button className="maintenance-close">
        <FontAwesomeIcon icon={faXmark} />
      </button> */}
      <span className='w-100' >
        Maintenance Window: 20 Aug 2026, 12:00 AM IST – 22 Aug 2026, 12:00 AM IST
      </span>

      <button className="maintenance-close">
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  
  </>
  )
}

export default Offersection