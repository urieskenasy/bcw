import React from "react";
import "./home_style.scss";
import GameDescription from "./gameDescription/GameDescription";
import GalleryAndVideo from "./galleryAndVideo/GalleryAndVideo";
export default function Home() {
    return (
        <div className="home-page">
            <GameDescription />
            <GalleryAndVideo />
        </div>
    );
}
