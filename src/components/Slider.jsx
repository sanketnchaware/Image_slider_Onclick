import { data } from "../data";
import React, { useState, useEffect } from 'react';
import "./Slider.css"
export const Slider = () => {

    const [index, setIndex] = useState(0);


    const handleReset = () => {
        setIndex(0)
    }
    const handlePrev = () => {
        if (index > 0) {
            setIndex(index - 1)
        }
        return
    }
    const handleNext = () => {

        if (index < data.length - 1) {
            setIndex(index + 1)
        }

        return;

    }
    return <div style={{ width: "100%" }} className="Slider">
        <h1 className="heading"> 💥💥Dp Shaattt Image Gallery💥💥</h1>


        <section className="buttons">
            <button id="reset" onClick={handleReset}>Reset ⭐</button>
            <button id="pre" disabled={index === 0} onClick={handlePrev}>👈Previous</button>
            <button id="next" disabled={index === data.length - 1} onClick={handleNext}>Next👉</button>
        </section>

        <section style={{ width: "100%" }}>
           
            <img style={{ width: "75vw" }} src={data[index].image} alt="" />

        </section>



    </div>;
};
