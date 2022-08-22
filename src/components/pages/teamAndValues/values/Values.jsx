import React from "react";
import "./values_style.scss";
import values from "./valuesData.js";
export default function Values() {
    return (
        <div className="values-container">
            <div className="values-container-header">
                <h1>Our Values</h1>
                <p>
                    Reflecting on our state of mind this project will represent
                    the values we are built upon and developing.
                </p>
            </div>
            <div className="value-container">
                {values.map((value, index) => {
                    return (
                        <div key={index} className="value-wrapper">
                            <h1>{value.title}</h1>
                            <p>{value.content}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
