"use client";

// components/HoverDropdown.js
import React, { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';

const HoverDropdown = ({ title, children, className, id }) => {
  const [show, setShow] = useState(false);

  return (
    <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      <NavDropdown
        show={show}
        title={title}
        className={className}
        id={id}
      >
        {children}
      </NavDropdown>
    </div>
  );
};

export default HoverDropdown;