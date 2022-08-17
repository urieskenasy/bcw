import React from "react";
import "./team_style.scss";
import team from "./teamData.js";
import { FiArrowDown } from "react-icons/fi";
export default function Team() {
    return (
        <div className="main-container">
            <div>
                <div className="component-head-container">
                    <h2>Meet Our Amazing Team</h2>
                    <p>
                        Our team is dedicated to providing a true NFT-based
                        gaming environment to the community. Using our expert
                        engineers, we will create a web-linking connection
                        between technical and business aspects in order to
                        create a true masterpiece.
                    </p>
                </div>
                <div className="component-intro-container">
                    <div>
                        <h2>2</h2>
                        <h4>Talented Developers</h4>
                        <p>
                            Two 3D Engineers are dedicated to developing the
                            gameplay, and one Blockchain Engineer will maintain
                            integration into the Ethereum network.
                        </p>
                    </div>
                    <div>
                        <h2>2</h2>
                        <h4>Gameplay in Development</h4>
                        <p>
                            First -Arena Battles, for both single and multiple
                            players. Story-based adventurers and meeting world
                            for enhancing power and connecting with other
                            players.
                        </p>
                    </div>
                    <div>
                        <h2>2</h2>
                        <h4>Business Developers</h4>
                        <p>
                            Will hold every aspect of Business Development to
                            keep the technological side busy.
                        </p>
                    </div>
                    <div>
                        <h2>1,500</h2>
                        <h4>Hours of Work</h4>
                        <p>
                            We are working hard in order to achieve every
                            milestone we are aiming towards. Advancement and
                            improvement are the mindsets of our project.
                        </p>
                    </div>
                </div>
            </div>
            <div className="arrows-container">
                <FiArrowDown className="arrow" />
                <FiArrowDown className="arrow" />
                <FiArrowDown className="arrow" />
            </div>
            <div className="our-devoted-team-container">
                <div>
                    <h2>Our Devoted Team</h2>{" "}
                </div>
                <div>
                    {" "}
                    {team.map((member, i) => {
                        return (
                            <div key={i}>
                                <img src={member.pictureUrl} alt="profile" />
                                <span>{member.num}</span>
                                <h3>{member.name}</h3>
                                <p>{member.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
