import React from "react";
import "./team_style.scss";
import { team, teamDescription } from "./teamData.js";
import { FiArrowDown } from "react-icons/fi";
import {
    ScrollContainer,
    ScrollPage,
    Animator,
    Sticky,
    Zoom,
    batch,
    Fade,
    MoveOut,
    StickyIn,
    FadeIn,
    ZoomIn,
    Move,
    MoveIn,
} from "react-scroll-motion";
export default function Team() {
    const FadeUp = batch(Fade(), Sticky(), Move());
    return (
        <ScrollContainer>
            <div className="main-container">
                <ScrollPage page={0}>
                    <Animator animation={FadeUp}>
                        <div>
                            <div className="component-head-container">
                                <h2>Meet Our Amazing Team</h2>
                                <p>
                                    Our team is dedicated to providing a true
                                    NFT-based gaming environment to the
                                    community. Using our expert engineers, we
                                    will create a web-linking connection between
                                    technical and business aspects in order to
                                    create a true masterpiece.
                                </p>
                            </div>
                            <div className="component-intro-container">
                                {teamDescription.map((element, index) => {
                                    return (
                                        <div>
                                            <h2>{element.number}</h2>
                                            <h4>{element.title}</h4>
                                            <p>{element.content}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </Animator>
                </ScrollPage>
                <div className="our-devoted-team-h2-container">
                    <h2>Our Devoted Team</h2>{" "}
                </div>
                <div className="arrows-container">
                    <FiArrowDown className="arrow" />
                    <FiArrowDown className="arrow" />
                    <FiArrowDown className="arrow" />
                </div>

                <div className="our-devoted-team-container">
                    <div>
                        {" "}
                        {team.map((member, i) => {
                            return (
                                <div key={i}>
                                    <img
                                        src={member.pictureUrl}
                                        alt="profile"
                                    />
                                    <span>{member.num}</span>
                                    <h3>{member.name}</h3>
                                    <p>{member.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </ScrollContainer>
    );
}
