import React from 'react';
import styled from 'styled-components';
import 'swiper/swiper.min.css';
import BeforeAfterPhoto from "../BeforeAfterPhoto";

const PhotoProcessingWrapper = styled.div`
padding: 10vh 0;
display: flex;
align-items: center;
justify-content: space-around;
width: 100%;
height: 100%;

@media screen and (max-width: 768px){
flex-direction: column;
}
`
const PhotoProcessingSection = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const TitleSection = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: left;
    @media (max-width: 768px) {
        justify-content: start;
       align-items: start;
        h1 {
            padding: 3vh 3vh 1vh 3vh;
        }
    }

`
const PhotoProcessing = () => {
    return (
        <PhotoProcessingWrapper>
            <TitleSection>
            <h1>Обработка Фотографии</h1>
            </TitleSection>
            <PhotoProcessingSection>
                <BeforeAfterPhoto/>
            </PhotoProcessingSection>
        </PhotoProcessingWrapper>
    );
};
export default PhotoProcessing;