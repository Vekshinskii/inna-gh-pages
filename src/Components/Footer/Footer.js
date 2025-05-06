import React from 'react';
import styled from "styled-components";
import logoFooter from "../../Images/inna_gusinski_logo_for_site2.webp"
import backgroundFooter from "../../Images/leave_background.webp";
import backgroundFooterMobile from "../../Images/backFooterMobile.webp";
import { Link } from "react-router-dom";

const FooterWrapper = styled.div`
padding: 0;
margin: 0;
display: flex;
flex-direction: row;
align-items: start;
justify-content: space-around;
height: 100%;
width: 100%;
font-size: 2.5vh;
    a {
        text-decoration: none;
        color: #1B4A3E;
    }
       @media screen and (max-width: 1200px){
    width: 100%;
    padding-top: 10vh;
    } 
`
const LogoType = styled.div` 
padding-top: 2vh; 
display: flex;
align-items: center;
justify-content: center;   
    img{  
        width: 7.9rem;
        height: 5.1rem;
    }
`
const IconSocialFooter = styled.nav`
display: flex;
align-items: center;
justify-content: center;
i {
padding: 3vh 0;
margin: 0.5vw;
font-size: 3.5vh;
}
`
const Telephone = styled.div`
font-size: 3vh;

@media(min-width: 1200px) {
font-size: 4vh;
}
`
const Navigation = styled.ul`
padding: 1vh 0;
display: flex;
flex-direction: row;
list-style-type: none;
text-align: left;
    li {
        padding:0.5vh 0;
        text-align: left;
    }
    
@media(max-width: 1200px){
flex-direction: column;
    li {
      text-align: center;
    }
}
`
const ContactFooter = styled.div`
padding-top: 2vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const DesignerSection = styled.div`
padding-bottom: 2vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 2vh;

@media(min-width: 1200px){
padding-top: 2vh;
}
`
const BackFooter = styled.div`

@media screen and (max-width: 1200px){
background-attachment: scroll;
margin: 0;
padding: 0;
height: 100%;
width: 100%;
opacity: 0.2;
z-index: -1;
position: absolute;
background-image: url(${backgroundFooter});
background-position: center;
background-size: 100% 100%;
background-repeat: no-repeat;
}

@media screen and (max-width: 1200px){
background-image: url(${backgroundFooterMobile});
width: 100%;
}
`
const Footer = () => {
    return (
        <FooterWrapper className="row p-0">
            <BackFooter/>
            <LogoType className=" col-12 col-md-12 col-lg-2 col-xl-2"><Link to="/home"><img src={logoFooter}
                                                                                            alt="logo"/></Link></LogoType>
            <Navigation className=" col-6 col-sm-6 col-md-12 col-lg-12 col-xl-2">
                <div className=" col-12 col-md-12 col-lg-12  col-xl-4">
                    <li><a href="#home">Главная</a></li>
                    <li><a href="#aboutMe">Обо мне</a></li>
                    <li><a href="#price">Цены</a></li>
                </div>
                <div className=" col-12 col-md-12 col-lg-12 col-xl-4">
                    <li><a href="#reviews">Отзывы</a></li>
                    <li><a href="#portfolio">Портфолио</a></li>
                    <li><a href="#contact">Контакты</a></li>
                </div>
            </Navigation>
            <ContactFooter className=" col-12 col-md-12 col-lg-12 col-xl-3">
                <Telephone>+(972)-55-984-49-75</Telephone>
                <p>Израиль</p>
            </ContactFooter>
            <IconSocialFooter className=" col-12 col-md-12 col-lg-12 col-xl-2">
                <a href="https://www.instagram.com/inna_gusinski/?utm_medium=copy_link" target="_blank" rel="noopener noreferrer"><i
                    className="fab fa-instagram-square"/></a>
                <a href="https://www.facebook.com/israelphoto.inna" target="_blank"
                   rel="noopener noreferrer"><i className="fab fa-facebook"/></a>
                <i className="fab fa-pinterest"/>
            </IconSocialFooter>
            <DesignerSection className=" col-12 col-md-12 col-lg-12 col-xl-2">
                <p>Created by HexoBee</p>
                <a href="#">IMAGES BY</a>
            </DesignerSection>
        </FooterWrapper>
    );
};
export default Footer;