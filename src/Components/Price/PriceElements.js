import React from 'react';
import Button from "../../Utils/StyledElements/Button";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {descriptionPricePagePath} from "../../Utils/Constants";

const PriceElement = styled.div`
margin:0 0 5vh 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 45vh;
min-height: 50vw;
    a{
        text-decoration: none;
    }
    ul {
        margin-left: 3vh;
        height: 40vh;
        font-size: 2.7vh;
    }
    button {
        font-size: 2.9vh;
    }
    
@media screen and (max-width: 1200px){
width: 100%;
}
`
const PriceTitle = styled.div`
text-align: center;
padding: 0 0 2vh 0;
`
const PriceCost = styled.div`
text-align: center;
color: #1B4A3E;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const PriceText = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const ButtonPriceSection = styled.div`
    margin: 3vh 0;
`
const PriceElements = (props) => {
    return (
        <PriceElement>
            <PriceTitle>
                <h3>{props.title}</h3>
            </PriceTitle>
            <PriceText>
            {props.list}
            </PriceText>
            <PriceCost>
                <h1>{props.cost}</h1>
            </PriceCost>
            <Link to={`/${descriptionPricePagePath}`}>
                <ButtonPriceSection><Button text="Хочу подробности"/></ButtonPriceSection>
                </Link>
        </PriceElement>
    );
};
export default PriceElements;