import React from 'react';
import { useEffect } from 'react';
import '../../../public/assets/css/bootstrap-slider.css';
import '../../../public/assets/js/bootstrap-slider.js';
import $ from 'jquery';


function Rangeslider() {
  useEffect(() => {
    $(".rangeslider").slider({
      ticks: [0, 25, 50, 75, 100],
      ticks_snap_bounds: 1
    });
  }, []);

  return (
    <div>
      <div className="form-group rangesliderbox">
        <input type="range" className="rangeslider" />
      </div>
    </div>
  );
}

export default Rangeslider;