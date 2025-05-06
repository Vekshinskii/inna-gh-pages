import React from 'react';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import styled from "styled-components";
import imgAfter from "../Images/Photoprocessing/photoProcessing_0.webp";
import imgBefore from "../Images/Photoprocessing/photoProcessing_8.webp";

const BeforeAfterWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 20vw;

@media screen and (max-width: 768px){
width: 100%;
}
`
const SectionAfterBefore = styled.div`
width: 100%;
height: 100%;
`

const BeforeAfterPhoto = () => {
    const FIRST_IMAGE = {
        imageUrl: `${imgBefore}`,
        alt:'before'
    };
    const SECOND_IMAGE = {
        imageUrl: `${imgAfter}`,
        alt: 'after'
    };
    return (
        <BeforeAfterWrapper>
            <SectionAfterBefore>
            <ReactBeforeSliderComponent
                firstImage={FIRST_IMAGE}
                secondImage={SECOND_IMAGE}
            />
            </SectionAfterBefore>
        </BeforeAfterWrapper>
    );
};

export default BeforeAfterPhoto;