"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import '../../../public/assets/css/mobileview.css'

export default function MobileFooterNav() {
    const [active, setActive] = useState("dashboard");

    const items = [
        { id: "dashboard", label: "Dashboard", icon: "/assets/images/mobile-homeicon.svg" },
        { id: "wallet", label: "Wallet", icon: "/assets/images/mobile-walleticon.svg" },
        { id: "transfer", label: "Transfer", icon: "/assets/images/mobile-svgmobile-time.svg" },
        { id: "store", label: "Store", icon: "/assets/images/mobile-storefront.svg" },
        { id: "history", label: "History", icon: "/assets/images/mobile-time.svg" },
    ];

    return (
        <div className="mobile-footer-main">
            <nav className="mobile-footer-nav">
                {items.map(({ id, label, icon }) => {
                    const isActive = active === id;

                    return (
                        <motion.button
                            key={id}
                            type="button"
                            onClick={() => setActive(id)}
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.08 }}
                            className={`nav-button ${isActive ? 'nav-button-active' : 'nav-button-inactive'}`}
                        >
                            <motion.img
                                src={icon}
                                alt={label}
                                className={`nav-icon ${isActive ? 'nav-icon-active' : ''}`}
                                animate={isActive ? { rotate: 360, scale: 1.1 } : { rotate: 0, scale: 1 }}
                                transition={{ type: "spring", stiffness: 140, damping: 16 }}
                            />

                            {isActive && (
                                <motion.span
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                        transition: { type: "spring", stiffness: 160, damping: 18 },
                                    }}
                                    className="nav-label"
                                >
                                    {label}
                                </motion.span>
                            )}
                        </motion.button>
                    );
                })}
            </nav>
        </div>
    );
}