import React from "react";
import "./gameDescription.scss";
import imageAll from "../../../../../images/all3_2.PNG";

export default function GameDescription() {
    return (
        <div className="gameDescription">
            <h2>Baby Cyborg Warriors</h2>
            <p>
                Baby Cyborg Warriors (or BCW) is a Play2Earn game hosted by the
                Ethereum network that combines two genres: story-based exploring
                and arena battles, for both single and team players. The BCW
                development team is concentrating on two key goals: a long-term
                Play2Earn economy and fun gameplay mechanisms.
            </p>
            <img src={imageAll} alt="all game characters" />
        </div>
    );
}
