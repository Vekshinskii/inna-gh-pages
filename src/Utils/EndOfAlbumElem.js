import React from 'react';
import styled from 'styled-components';
import {albumElements} from "./Constants";
import {Link} from "react-router-dom";
import list from "../Images/leaves_white_transparent (1).png";

const EndOfAlbumElemWrapper = styled.div`
padding: 5vh 2vh;
margin: 0;
height: 100%;
width: 100%;
background-color: floralwhite;
display: flex;
align-items: center;
justify-content: center;
text-align: center;

h2 {
padding: 5vh 2vh;
}

`
const ElemAlbumSection = styled.div`
height: 26vh;
width: 15vh;
margin: 0 3vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: start;
`
const ElemAlbumPhoto = styled.div`

margin: 1vh;
box-shadow: 10px 10px 10px grey;
`
const EndOfAlbumElemImg = styled.div`
display: flex;
height: 18vh;
width: 18vh;
align-items: center;
justify-content: center;
background-image: url(${(props) => props.pic});
background-position: top;
background-size: cover;
background-repeat: no-repeat;

:hover {
 box-shadow: inset 0 0 100px 100px #f8f8f8;
 }
`
const Leave = styled.img`
   height: 3vh;
   width: 4.3vh;  
`
const EndOfAlbumElemContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const ElemTitle = styled.div`
font-size: 13px;
padding: 1vh 0;
font-family: 'MiamaNuevaMedium', cursive;
font-weight: normal;
font-style: italic;
`
const EndOfAlbumElem = () => {

    const elemAlbum = albumElements.map((v,i) =>
        <ElemAlbumSection className=" col-6 col-md-3 col-lg-3 col-xl-1" key={i}>
            <ElemAlbumPhoto>
            <Link to={`/${v.pathElem}`}>
            <EndOfAlbumElemImg pic={v.pic}/>
            </Link>
            </ElemAlbumPhoto>
            <ElemTitle>{v.title}</ElemTitle>
        </ElemAlbumSection>);
    return (
        <EndOfAlbumElemWrapper className="row g-0">
            <h2> - - - -  Портфолио  <Leave src={list} alt="list"/>   - - - -</h2>
            <EndOfAlbumElemContainer  className="row g-0">
    {elemAlbum}
            </EndOfAlbumElemContainer>
        </EndOfAlbumElemWrapper>
    );
};

export default EndOfAlbumElem;