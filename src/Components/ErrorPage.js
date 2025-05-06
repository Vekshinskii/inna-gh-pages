import React from 'react';
import styled from "styled-components";
import VideoPage from "../Components/Video/VideoPage";
import logo from "../Images/inna_gusinski_logo_for_site2.webp";
import backError from "../Images/image-from-rawpixel-id-557649-original.webp";
import backErrorForMobile from "../Images/image-price-for-mobile.webp";

const ErrorPageWrapper = styled.div`
display: flex;
flex-direction: row;
height: 100vh;
align-items: center;
justify-content: space-around;
padding-bottom: 2vh;
@media screen and (max-width: 1200px){
    justify-content: center;
}
`

const ErrorPageText = styled.div`
display: flex;
width: 40%;
flex-direction: column;
align-items: center;
justify-content: center;
img{  
    width: 9rem;
    height: 5.5rem;    
    @media screen and (max-width: 1200px){           
      width: 7.9rem;
      height: 5.1rem;
    }
}
a{
    color: #0c4128;
}
@media screen and (max-width: 1200px){
    width: 100%;
    padding: 0;
    margin: 0;
}
`

const  ErrorPageVideo = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-left: 10%;
margin: 0;
`
const BackgroundError = styled.div`
background-attachment: scroll;
z-index: -1;
height: 100%;
width: 100%;
opacity: 0.1;
position: absolute;
background-image: url(${backError});
background-position: center;
background-size: 100% 100%;
background-repeat: no-repeat;

@media screen and (max-width: 1200px){
    background-image: url(${backErrorForMobile});
    width: 100%;
}
`
const ErrorPageSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 2vh;
h1 {
    font-size: 9vh;
    font-weight: bold;
}
p {
    font-size:4.5vh;
}
@media screen and (max-width: 1200px){
    padding: 0;
}
`
const ErrorPageSectionSecond = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const ErrorPage = () => {
    return (
        <ErrorPageWrapper className='row'>
            <BackgroundError/>
        <ErrorPageVideo className = 'col-12 col-md-12 col-lg-6'>
            <VideoPage/>
        </ErrorPageVideo>
            <ErrorPageText className = 'col-12 col-md-12 col-lg-6'>
                <img src={logo} alt='logo'/>
                <ErrorPageSection>
                <h3>404</h3>
                <p>Ошибка</p>
                </ErrorPageSection>
                <ErrorPageSectionSecond>
                <p>Такой страницы у нас нет</p>
                <p>ЗАТО ЕСТЬ ДРУГИЕ :)</p>
                <a href="/" >Перейти на сайт</a>
                </ErrorPageSectionSecond>
            </ErrorPageText>
        </ErrorPageWrapper>

    );
};

export default ErrorPage;