import React from 'react';
import styled from "styled-components";

const  WorkElementWrapper = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 2.5vh;
    &:hover {
    color: #f2e7c3;
        #workText {
            visibility: visible;
            transition: .5s ease;
            transition-property: all;
            transition-duration: 0.5s;
            transition-timing-function: ease;
            transform: translate(-10px,-30px);
            color: #1B4A3E;
            width: 20vw;
            text-align: center;
        }
    }
    
@media screen and (max-width: 1200px){
width: 100%;
height: 100%;
}
`
const WorkDescription = styled.div`
position: absolute;
top: 10vh;
font-size: 2.5vh;
box-shadow: 0 2px 10px gray;
padding: 16px;
background:floralwhite;
visibility: hidden;
z-index: 2;
text-align: center;

@media screen and (max-width: 1200px){
display: none;
}
`
const WorkNumber = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const WorkElemTitle = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
height: 12vh;

@media screen and (max-width: 1450px){
height: 17vh;
}
`
const WorkElemSection =styled.div`
width: 100%;
height: 100%;
`
const WorkElement = props => {
    return (
        <WorkElementWrapper className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-1">
            <WorkNumber>
                <h3>{props.number}</h3>
            </WorkNumber>
            <WorkElemSection>
            <WorkElemTitle>
                <p>{props.title}</p>
            </WorkElemTitle>
            </WorkElemSection>
            <WorkDescription id="workText">
                <p>{props.description}</p>
            </WorkDescription>
        </WorkElementWrapper>
    );
}
export default WorkElement;