import React from 'react';
import picLogo from '../../Images/inna_gusinski_logo_for_site2.webp';
import styled from 'styled-components';
import BackGo from "../../Utils/StyledElements/BackGo";

const ThankWrapper = styled.div`
width: 100%;
height: 80vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const ThankSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
    img {
        margin-bottom: 3vh;
        height: 13vh;
        width: 18vh;
    }
`

const ThankPage = () => {
    return (
        <ThankWrapper>
            <BackGo/>
            <ThankSection>
                <img src={picLogo} alt="logo"/>
                <h1>Спасибо!</h1>
                <h4>C Вами свяжутся в ближайшее время.</h4>
            </ThankSection>
        </ThankWrapper>
    );
};
export default ThankPage;