import React from "react";
import Team from "./team/Team";
import Values from "./values/Values";
import "./teamAndValues_styles.scss";
export default function TeamAndValues() {
    return (
        <>
            <div className="teamAndValues-container">
                <Team />
                <Values />
            </div>
        </>
    );
}
