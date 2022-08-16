import React from "react";
import imagesData from "../images.json";
import "./gallery_style.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
export default function Gallery() {
    return (
        <div className="gallery-wrapper">
            <h2>Our Game Characters</h2>
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
