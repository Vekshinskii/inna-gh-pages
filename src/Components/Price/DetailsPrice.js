import React from 'react';
import styled from "styled-components";
import {detailsPrice} from "../../Utils/Constants";
import DetailElement from "../DetailElement";
import backDetailPrice from "../../Images/detailPhon.webp";
import backDetailPriceMobile from "../../Images/detailMobile.webp";

const DetailsPriceWrapper = styled.div`
margin: 0;
padding: 15vh 5vh 5vh 5vh;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
background-image: url(${backDetailPrice});
background-size: cover;
background-position: center;
background-repeat: no-repeat;

@media screen and (max-width: 1200px){
justify-content: center;
background-image: url(${backDetailPriceMobile});
}
`
const DetailsPrice = () => {
    const detailElements = detailsPrice.map(v =>
        <DetailElement key={v.id} title={v.title} text={v.text}>{v}</DetailElement>);
    return (
        <DetailsPriceWrapper className="row g-0">
            {detailElements}
        </DetailsPriceWrapper>
    );
};
export default DetailsPrice;