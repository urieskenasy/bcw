import React from "react";
import imagesData from "../images.json";
import "./gallery_style.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
export default function Gallery() {
    return (
        <div className="gallery-wrapper">
            <h2>Meet the Baby Cyborg Warriors!</h2>
            <p>
                The metaverse has become corrupt, overrun by the master computer
                that has developed consciousness and turned against its makers –
                us humans. Out of the evil rulers of this corrupt and dark
                existence comes a new breed of warriors- an experiment with
                humans and robot inbreeding – A half-human half cyborg, with the
                plan to exterminate the human race. But every computer has a
                bug, and a new group of warriors with human hearts comes out of
                these experiments. They have turned against their makers and aim
                to restore the metaverse to the utopia it once was.
            </p>
            <Splide
                options={{
                    perPage: 1,
                    arrows: true,
                    pagination: false,
                    drag: "free",
                    width: 800,
                    gap: "1rem",
                }}
            >
                {imagesData.map((image, index) => {
                    return (
                        <SplideSlide key={index}>
                            <div className="image">
                                <img src={image.route} className="img" />
                                <h2>{image.name}</h2>
                            </div>
                        </SplideSlide>
                    );
                })}
            </Splide>
        </div>
    );
}
