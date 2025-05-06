import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import backPrice from "../../Images/image-from-rawpixel-id-557649-original.webp";
import backPriceForMobile from "../../Images/image-price-for-mobile.webp";
import {Carousel, CarouselItem} from "react-bootstrap";
import {priceElements,isMobileScreen} from "../../Utils/Constants";
import PriceElements from "./PriceElements";

const PriceWrapper = styled.div`
margin-top: 0.5rem;
padding: 0;
height: 100%;
width: 100%;
    h1 {
        padding: 3vh 3vh 1vh 3vh;
    }

@media screen and (max-width: 1200px) {
cursor: pointer;
h1{
padding: 1vw 3vh;
}
}
`
const BackgroundPrice = styled.div`
margin: -17vh 0 0 0;
background-attachment: scroll;
height: 100%;
width: 100%;
opacity: 0.1;
position: absolute;
background-image: url(${backPrice});
background-position: center;
background-size: 100% 100%;
background-repeat: no-repeat;

@media (max-width: 1200px){
background-image: url(${backPriceForMobile});
width: 100%;
}
`
const PriceSection = styled.div`
width: 100%;
font-size: 3.5vh;
`
const PriceBlock = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-around;
`
const Price = () => {
    const [showCarousel, setShowCarousel] = useState(false);
    const [priceElement, setPriceElement] = useState([]);
    useEffect(() => {
        if (isMobileScreen) {
            setPriceElement(priceElements.map(v => <CarouselItem key={v.id}><PriceElements title={v.title} key={v.id}
                                                                                           list={v.listPrice} active = {v.activ}
                                                                                           cost={v.cost}/></CarouselItem>));
            setShowCarousel(true);
        } else {
            setPriceElement(priceElements.map(v => <PriceElements title={v.title} key={v.id}
                                                                  list={v.listPrice} cost={v.cost}/>));
        }
    }, [])
    return (
        <PriceWrapper id="price">
            <BackgroundPrice/>
            <h1>Цены</h1>
            <PriceSection>
                {showCarousel ? <Carousel className="carousel slide carousel-dark">{priceElement}</Carousel> :
                    <PriceBlock>{priceElement}</PriceBlock>}
            </PriceSection>
        </PriceWrapper>
    );
};
export default Price;
