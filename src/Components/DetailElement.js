import React from 'react';
import styled from "styled-components";

const DetailElementWrapper = styled.div`
margin: 2vh;
padding: 1vh;
height: fit-content;
color: #1B4A3E;
font-size: 2.7vh;
background-color: floralwhite;
border: 0.1px solid floralwhite;
    h4{
        text-align: center;
    }
    
@media screen and (max-width: 1200px){
height: 50%;
width: 80vw;
}
`
const DetailSection = styled.div`
`
const DetailElement = (props) => {
    return (
        <DetailElementWrapper className=" col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
            <h4>{props.title}</h4>
            <DetailSection><p>{props.text}</p></DetailSection>
        </DetailElementWrapper>
    );
};

export default DetailElement;