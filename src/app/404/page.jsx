'use client'
import React, { useEffect } from 'react'
import { Image } from 'react-bootstrap'
import { useTheme } from "../context/ThemeContext";

const Page = () => {

  const { isNightMode, toggleNightMode } = useTheme();

    useEffect(() => {
        document.body.classList.add("error-page");

        return () => {
            document.body.classList.remove("error-page");
        };
    }, []);

    return (
        <section className="fournotfour">
            <div className="fournotfour-wrapper">
                {isNightMode ? (
                    <Image src="/assets/images//404-light.svg" width={100} height={57} className="fournotfour-img " alt="404" />
                ) : (
                    <Image src="/assets/images/404-dark.svg" width={100} height={57} className="fournotfour-img " alt="404" />
                )}
                <h2 className="error-title">Page Not Found</h2>
                <p className="error-desc">Oops! The page you are looking for doesn't exist.</p>
            </div>
        </section>
    )
}

export default Page