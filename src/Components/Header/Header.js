import React from 'react';
import styled from "styled-components";
import {Nav, Navbar} from "react-bootstrap";
import {aboutMe, contact, homePagePath, portfolio, price, review} from "../../Utils/Constants";

const WrapperHeader = styled.div`
position: fixed;
padding: 0 2vh;
top: 0;
z-index: 100;
background-color: floralwhite;
width: 100vw;

h3{
letter-spacing: 1px;
font-size: 5vh;
color: #1B4A3E;
}
.navbar-nav {
width: 100%;
display: flex;
align-items: center;
justify-content: left;
padding-left: 20%;

}   
@media screen and (max-width: 1200px){
flex-direction: column;
.navbar-nav {
padding: 2vh 0;    
margin: 0;      
}
} 
`
const NavIcon = styled.div`
display: flex;
align-items: center;
justify-content: end;
i {
font-size: 5vh;
padding: 1.8vh;
}
@media screen and (min-width: 1200px){
display: none;
}
`
const Header = () => {
    return (
        <WrapperHeader>
            <Navbar fixed="top" sticky="top"
                    collapseOnSelect expand="xl"  variant="light" >
                    <Navbar.Brand href={homePagePath}><h3>Inna Gusinski</h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="mr-auto">
                        <Nav.Link href={homePagePath}>Главная</Nav.Link>
                        <Nav.Link href={aboutMe}>Обо мне</Nav.Link>
                        <Nav.Link href={price}>Цены</Nav.Link>
                        <Nav.Link href={review}>Отзывы</Nav.Link>
                        <Nav.Link href={portfolio}>Портфолио</Nav.Link>
                        <Nav.Link href={contact}>Контакты</Nav.Link>
                        <NavIcon>
                           <Nav.Link href="https://www.facebook.com/israelphoto.inna" target="_blank" rel="noopener noreferrer">
                               <i className="fab fa-facebook"/></Nav.Link>
                           <Nav.Link href="https://www.instagram.com/inna_gusinski/?utm_medium=copy_link"
                                   target="_blank" rel="noopener noreferrer" ><i className="fab fa-instagram-square"/></Nav.Link>
                        </NavIcon>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </WrapperHeader>
    );
};
export default Header;