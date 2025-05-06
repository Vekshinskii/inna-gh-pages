import React, {useState} from 'react';
import styled from "styled-components";
import Button from "../../Utils/StyledElements/Button";

const PreloadingScreenWrapper = styled.div`
margin: 4vh 0 0 0;
width: 100%;
height: 30vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: start;  
    a {
        text-decoration: none;
    }
    @media (max-width: 768px) {
        margin-top: 20vw;
        height: 60vw;
    }
`
const PreloadingScreenSection = styled.span`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const PreloadingScreenTitle = styled.span`
    h3 {
        padding: 7vh 5vh 4vh 5vh;
        font-size: 20vh;
        animation: text 3s  ease-in-out;
        background-color: floralwhite;
        position: relative;
        white-space: nowrap;
    }
    @keyframes text {
    0% {
        color: floralwhite;
        margin-bottom: -60px;
    }
    30% {
        color: floralwhite;
        letter-spacing: 50px;
        margin-bottom: -60px;
    }
    80% {
        letter-spacing: 15px;
        margin-bottom: -60px;
    }
    }
}

@media(max-width: 1200px) {
    h3 {
        font-size: 15vh;
        letter-spacing: 2px;
    }
    @keyframes text {
    0% {
        color: floralwhite;
        margin-bottom: -80px;
    }
    30% {
        color: floralwhite;
        letter-spacing: 60px;
        margin-bottom: -80px;
    }
    80% {
        letter-spacing: 7px;
        margin-bottom: -80px;
        padding: 0;
    }
    }

@media(max-width: 768px) {
    h3 {
    padding: 2vh;
        font-size: 10vh;
        letter-spacing: 2px;
    }
    
    @keyframes text {
    0% {
        color: floralwhite;
        margin-bottom: -70px;
    }
    30% {
        color: floralwhite;
        letter-spacing: 30px;
        margin-bottom: -80px;
    }
    80% {
        letter-spacing: 2px;
    }
    }
 }  
`
const PreloadingScreenDescription = styled.h1`
color: #1b4a3e;
    font-family: "Oswald", sans-serif;
    font-weight: 200;
font-size: 3.5vh;
padding: 3vh 0 5vh 0;
animation: opacityDescription 2s forwards;
-webkit-animation: opacityDescription 2s forwards;
-moz-animation: opacityDescription 2s forwards;
-o-animation: opacityDescription 2s forwards;
animation-delay: 3s;
opacity: 0;
@keyframes opacityDescription {
0% {
opacity: 0;
}
100% {
opacity: 1;
}
} 

@media(max-width: 1200px) {
font-size: 3.5vh;
letter-spacing: 4px;
padding:0 1vh;
}

@media(max-width: 768px) {
font-size: 3.3vh;
letter-spacing: 1px;
padding: 0 2vh;
text-align: center;
}
`
const ButtonElem = styled.div`
opacity: 0;
animation: opacityButton 3s forwards;
-webkit-animation: opacityButton 3s forwards;
-moz-animation: opacityButton 3s forwards;
-o-animation: opacityButton 3s forwards;
animation-delay: 2s;
margin-top: 1rem;

    @keyframes opacityButton {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
    }
 
`
const PreloadingScreen = () => {
    const [playVideo, setPlayVideo] = useState(false);
    const handleClick = () => {
        setPlayVideo(!playVideo);
    }
    return (
        <PreloadingScreenWrapper>
            <PreloadingScreenSection>
                <PreloadingScreenTitle><h3>Inna Gusinski</h3></PreloadingScreenTitle>
                <PreloadingScreenDescription>Профессиональный фотограф в Израиле</PreloadingScreenDescription>
                <a href="#contact"><ButtonElem onClick={() => handleClick()}><Button text="Сделать заказ"/></ButtonElem></a>
            </PreloadingScreenSection>
        </PreloadingScreenWrapper>
    );
};
export default PreloadingScreen;