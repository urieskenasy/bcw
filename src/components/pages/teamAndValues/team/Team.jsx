import React from "react";
import "./team_style.scss";
export default function Team() {
    const team = [
        {
            num: 1,
            name: "Ran Shoshan – CEO",
            description: `Ran, a Serial entrepreneur with experience in setting up and managing businesses in a variety of different sectors and managing dozens of employees and large budgets, has founded a startup company.\n
        Has extensive and proven experience in product management, business development, networking, and strategic business planning.`,
            pictureUrl: "./Profile_Images/Ran_Shoshan_Profile_Picture.png",
        },
        {
            num: 2,
            name: "Roy Livne – CTO & Head of 3D",
            description: `Roy, programmer, 3D artist/generalist. Experienced with unreal engine, 3D pipeline, creating characters/props/assets, game prototyping, and making ideas come to life.`,
            pictureUrl: "",
        },
        {
            num: 3,
            name: "Yohai Sitbon – Head of Business Development",
            description: `Yohai, an entrepreneur with a proven track record, a planner, and a doer. Finishing up a degree in business administration (specialization in digital innovation) at Reichman University, Israel. Has been in the crypto world since 2016 and has a wide network of contacts across the space.`,
            pictureUrl: "",
        },
        {
            num: 4,
            name: "Eilon Cohen – Head of Crypto",
            description: `Eilon, Based in Tel Aviv, software & crypto engineer, cyber security expert, and digital technologies explorer. Mastered the Ethereum network developing environment, Web development, and Security research.`,
            pictureUrl: "./Profile_Images/Eilon_Cohen_Profile_Picture.png",
        },
    ];

    return (
        <div className="main-container">
            <div className="component-head-container">
                <h2>Meet Our Amazing Team</h2>
                <p>
                    Our team is dedicated to providing a true NFT-based gaming
                    environment to the community. Using our expert engineers, we
                    will create a web-linking connection between technical and
                    business aspects in order to create a true masterpiece.
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
                        players. Story-based adventurers and meeting world for
                        enhancing power and connecting with other players.
                    </p>
                </div>
                <div>
                    <h2>2</h2>
                    <h4>Business Developers</h4>
                    <p>
                        Will hold every aspect of Business Development to keep
                        the technological side busy.
                    </p>
                </div>
                <div>
                    <h2>1,500</h2>
                    <h4>Hours of Work</h4>
                    <p>
                        We are working hard in order to achieve every milestone
                        we are aiming towards. Advancement and improvement are
                        the mindsets of our project.
                    </p>
                </div>
            </div>
            <div className="our-devoted-team-container">
                <div>
                    <h2>Our Devoted Team</h2>{" "}
                </div>
                <div>
                    {" "}
                    {team.map((member, i) => {
                        return (
                            <div>
                                {/* <img src={{require(member.pictureUrl)}} /> */}
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
