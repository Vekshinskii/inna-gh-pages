import React from 'react';
import styled from 'styled-components';
import list from "../../Images/leaves_white_transparent (1).png";
import {Link} from "react-router-dom";


const WrapperCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 22%;
margin: 1vw;
background-color: floralwhite;
//box-shadow: 0 2px 10px gray;
 
    p {
        font-size: 2.2vh;
        text-align: justify;
        padding: 1.5vh;
    }
    a{
        text-decoration: none;
        color: #1B4A3E;
    }
    :hover {
         box-shadow: inset 0 0 100px 100px #f8f8f8;
     }
   @media(max-width: 1200px){
       width: 100%;
       box-shadow: none;
   }
`
const BackgroundDark = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
   flex-direction: column;
    align-items: center;
    justify-content: center;
     background-color: rgba(0,0,0,0.05);   
`
const ImgCard = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-image: url(${(props) => props.pic});
background-position: top;
background-size: cover;
background-repeat: no-repeat;
height: 50vh;
width: 100%;
:hover {
 box-shadow: inset 0 0 100px 100px #f8f8f8;
 }
@media(max-width: 1200px){
width: 100vw;
}
`
const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
   font-size: 2.5vh;
   font-family: 'MiamaNuevaMedium', cursive;
   font-weight: normal;
   font-style: italic;
   
   img {
   height: 3vh;
   width: 4.3vh;
   }
   
   @media(max-width: 1200px){
      font-size: 2.2vh;
   }  
   @media(max-width: 600px){
      font-size: 3.5vh;
   }
   
`
const TextCard = styled.span`
display: flex;
flex-direction: column;
align-items: center;
justify-content: start;
width: 100%;
height: 36vh;
padding: 2vh;
 @media screen and (max-width: 1450px){
 height: 38vh;
 }
`
const CardOfAlbum = (props) =>{
    return (
        <WrapperCard className=" col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <Link to={`/${props.pathElem}`}>
                <BackgroundDark>
                    <ImgCard pic={props.pic} alt="card-pic"/>
                    <TextCard>
                        <CardTitle>
                            <p>{props.cardTitle}</p>
                            <img src={list} alt="list"/>
                        </CardTitle>
                        <p>{props.text}</p>
                    </TextCard>
                </BackgroundDark>
            </Link>
        </WrapperCard>
    );
};
export default CardOfAlbum;