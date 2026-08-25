"use client";

import React, { useEffect, useState } from "react";
import ReactSlider from "react-slider";

export default function LeverageSlider({ modeTab = "Cross", orderTab = "buy", leverageLevel }) {

    const MAX_LEVERAGE = Number(leverageLevel) || 50;
    const TICK_COUNT = 50;

    const [value, setValue] = useState(0);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        setValue(0);
        setInputValue("");
    }, [leverageLevel]);

    // Handle manual input
    const handleManualInput = (e) => {
        let raw = e.target.value.replace(/[^\d.]/g, ""); // remove non-numeric except .

        // If input is empty, reset everything
        if (raw === "") {
            setInputValue("");
            setValue(0);
            return;
        }

        let num = parseFloat(raw);
        if (isNaN(num)) return;

        // clamp value between 0 and 50
        if (num < 0) num = 0;
        if (num > MAX_LEVERAGE) num = MAX_LEVERAGE;

        setValue(num);
        setInputValue(raw); // numeric only (no x stored)
    };

    // Keydown validation (allow only numbers, dot, backspace, arrows)
    const handleKeyDown = (e) => {
        const allowedKeys = [
            "Backspace",
            "ArrowLeft",
            "ArrowRight",
            "Delete",
            "Tab",
            ".",
        ];
        
        if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) {
            e.preventDefault();
        }
    };

    // Handle slider change
    const handleSliderChange = (val) => {
        setValue(val);
        setInputValue(val.toFixed(2)); // format only when using slider
    };

    const leverageLabel = value <= 0 ? "None" : orderTab === "buy" ? "Long" : "Short";

    const tickActiveClass = orderTab === "buy" ? "tick-buy-active" : "tick-sell-active";

    return (
        <div className="leverage-wrapper">
            {/* Label */}
            <div className="label-row">
                <span className="label-text">
                    {modeTab === "Isolated" ? "Target Leverage" : "Leverage"}
                </span>

                {modeTab === "Cross" && (
                    <span className={`label-badge ${value <= 0 ? "none" : orderTab === "buy" ? "long" : "short"}`}>
                        {leverageLabel}
                    </span>
                )}
            </div>

            {/* Slider Row */}
            <div className="slider-row">
                <ReactSlider
                    className="slider"
                    thumbClassName="slider-thumb"
                    trackClassName="slider-track"
                    min={0}
                    max={MAX_LEVERAGE}   // dynamic max
                    value={value}
                    onChange={handleSliderChange}
                    renderTrack={(props, state) => {
                        const { key, ...restProps } = props;
                        const gradient =
                            "bg-gradient-to-r from-gray-500 via-green-400 to-green-500";
                        return (
                            <div
                                {...restProps}
                                key={state.index}
                                className={`slider-track ${state.index === 0 ? gradient : "bg-gray-700"}`}
                            />
                        );
                    }}
                />

                {/* Editable Input */}
                <input
                    type="text"
                    className="value-box"
                    value={inputValue === "" ? "" : `${inputValue}x`}
                    placeholder="0.00x"
                    onChange={handleManualInput}
                    onKeyDown={handleKeyDown}
                />
            </div>

            {/* Tick Marks */}
            <div className="ticks-row">
                {Array.from({ length: TICK_COUNT }).map((_, i) => {
                    const activeLimit = Math.round((value / leverageLevel) * TICK_COUNT);
                    return (
                        <div
                            key={i}
                            className={`tick ${i < activeLimit ? tickActiveClass : "tick-inactive"}`}
                        />
                    );
                })}
            </div>

            {/* Moving Arrow Indicator */}
            {/* <div className="scroll-arrow-row">
                <div
                    className="scroll-arrow"
                    style={{ left: `${(value / 50) * 100}%` }}
                ></div>
            </div> */}

        </div>
    );
}
