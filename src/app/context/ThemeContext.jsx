"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
    const [isNightMode, setIsNightMode] = useState(false);

    const toggleNightMode = () => {
        setIsNightMode((prev) => !prev);
    };

    useEffect(() => {
        if (isNightMode) {
            document.body.classList.add("daymode");
        } else {
            document.body.classList.remove("daymode");
        }
    }, [isNightMode]);

    return (
        <ThemeContext.Provider value={{ isNightMode, toggleNightMode }}>
            {children}
        </ThemeContext.Provider>
    );
}
