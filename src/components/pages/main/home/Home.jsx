import React from "react";
import "./home_style.scss";
import GameDescription from "./gameDescription/GameDescription";
import GalleryAndVideo from "./galleryAndVideo/GalleryAndVideo";
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
export default function Home() {
    return (
        <ScrollContainer>
            <div className="home-page">
                <ScrollPage page={0}>
                    <Animator
                        animation={batch(Sticky(), Fade(), MoveOut(0, -200))}
                    >
                        <GameDescription />
                    </Animator>
                </ScrollPage>
                <GalleryAndVideo />
            </div>
        </ScrollContainer>
    );
}
