import React from 'react';
import styled from 'styled-components';
import picBackGo from '../../Images/back.png';
import picNextAlbum from '../../Images/next.png';
import {Link} from "react-router-dom";
import leave from "../../Images/leaves_white_transparent (1).png";

const BackGoWrapper = styled.div`
padding: 0;
margin: 0;
position: fixed;
left: 0;
right: 0;
align-items: center;
justify-content: space-between;
width: 100%;
height: 12vh;
background-color: floralwhite;

#leftArrow{
display: flex;
align-items: center;
justify-content: left;
padding-left: 2vh;
}

#rightArrow{
display: flex;
align-items: center;
justify-content: end;
padding-right: 2vh;
}
    h4 {
        font-size: 35px;
    }
    a {
        text-decoration: none;
        color: #2f3233 ;
        :hover {
        color: #2f3233;
        }
    }
@media screen and (max-width: 768px){
    h4 {
        font-size: 20px;
    }
}
`
const BackGoSection = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
    img {
        width: 3vh;
        height: 2vh;
    }    
`
const NameAlbum = styled.span`
font-size: 2.5vh;
font-family: 'MiamaNuevaMedium', cursive;
font-weight: normal;
font-style: italic;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
padding: 2.5vh 3vh 0 3vh;
`
const BackGo = (props) => {
    return (
        <BackGoWrapper>
                <BackGoSection>
                <Link to={`/${props.prevAlbum}`}>
                <span id="leftArrow">
                <img src={picBackGo} alt="back"/>
                <h4>Back</h4>
                </span>
                </Link>
                    <NameAlbum><p>{props.name}</p><img src={leave} alt="leave"/></NameAlbum>
                    <Link to={`/${props.nextAlbum}`}>
                <span id="rightArrow">
                <h4>Next</h4>
                <img src={picNextAlbum} alt="next"/>
                </span>
                    </Link>
                </BackGoSection>
        </BackGoWrapper>
    );
};
export default BackGo;