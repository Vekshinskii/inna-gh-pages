import React from 'react';
import styled from "styled-components";

const ButtonWrapper = styled.div`
    cursor: pointer;
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;

`
const StyledButton = styled.button`
    padding: 0.7rem 1.2rem;
    min-height: 4vw;
    min-width: fit-content;
    font-weight: 200;
    border: none;
    letter-spacing: 2px;
    background-color: #1b4a3e;
    //background-color: #5c6b63;
    border-radius: 50px;
    color: floralwhite;
    box-shadow: 10px 10px 10px gray;

    &:hover {
        background-color: rgba(27, 74, 62, 0.7);
    }
`
const Button = (props) => {
    return (
        <ButtonWrapper {...props}>
            <StyledButton {...props} >{props.text}</StyledButton>
        </ButtonWrapper>
    );
};
export default Button;