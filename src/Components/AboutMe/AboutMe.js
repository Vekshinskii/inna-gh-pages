import React, {useEffect} from 'react';
import styled from "styled-components";
import myPhotoImg from "../../Images/about_me.webp";
import ReadMore from "../../Utils/ReadMore/ReadMore";
import {textAboutMe} from "../../Utils/Constants";
import Aos from 'aos';
import 'aos/dist/aos.css';

const WrapperAboutMe = styled.div`
height: 100%;
width: 100%;
margin: 0;
padding: 15vh 0 0 0;
    a {
      text-decoration: none;
    }
`
const DescriptionMe = styled.div`
margin: 0;
display: flex;
align-items: center;
justify-content:  center;
text-align: justify;
`
const Message = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
    p {
        font-size: 1.3rem;
        text-align: justify;
    }
`
const TitleAbout = styled.div`
width: 100%;
text-align: center;
    h3 {
        font-size: 10vh;
        text-align: center;
    }
    h1 {
        font-size: 4vh;
    }
@media only screen and (max-device-width: 1200px) {
padding: 3vh 0 0 0;
  h3 {
      font-size: 6vh;
      letter-spacing: 2px;
  }
}
`
const MyPhoto = styled.div`
display: flex;
align-items: center;
justify-content: space-around;

    img {
        height: 42vh;
        width: 32vh;
        box-shadow: 10px 10px 10px gray;
    
    @media (max-width: 1200px) {
        margin: 3vh 0;
        height: 27vh;
        width: 19vh;
    }
`
const TitleAboutMe = styled.div`
display: flex;
align-items: center;
justify-content: center;
    h1 {
        padding: 3vh 3vh 1vh 3vh;
    }
`
const AboutMe = () => {

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <WrapperAboutMe id="aboutMe">
            <DescriptionMe className="row container-fluid">
                <MyPhoto className="col-xl-5 col-lg-5 col-md-12 col-12">
                    <TitleAboutMe>
                        <h1>Обо мне</h1>
                    </TitleAboutMe>
                    <img src={myPhotoImg} alt="I_am"/>
                </MyPhoto>
                <Message className="col-xl-7 col-lg-7 col-md-12 col-12">
                    <TitleAbout>
                        <h2>Привет Всем, я</h2>
                        <h3>Inna Gusinski</h3>
                        <h2>профессиональный фотограф в Израиле.</h2>
                    </TitleAbout>
                    <ReadMore text={textAboutMe}/>
                </Message>
            </DescriptionMe>
        </WrapperAboutMe>
    );
};
export default AboutMe;