import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {isMobileScreen, workElem} from "../../Utils/Constants";
import {Navigation, Pagination, Scrollbar} from "swiper";
import WorkElement from "./WorkElement";
import {Swiper,SwiperSlide} from "swiper/react";
import 'swiper/swiper.min.css';
import Arrows from "../../Utils/StyledElements/Arrows";

const HowIWorkWrapper = styled.div`
height: 50vh;
width: 100%;
display: flex;
flex-direction: column; 
align-items: center;
justify-content: center;
cursor: pointer;
.swiper-button-next,
.swiper-button-prev {
  color: gray!important;
  opacity: 1;
}
        h1{
            padding:0 3vh 7vh 3vh;
        }
    
@media screen and (max-width: 1450px){
padding: 0;
}
`
const HowIWorkTitleSection = styled.span`
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: start;
`
const HowIWorkSection = styled.div`
width: 80%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media screen and (max-width: 1200px){
width: 90vw;
}
`
const WorkBlock = styled.div`
width: 100%;
padding: 0;
margin: 0;
display: flex;
align-items: center;
justify-content: space-around;
`
const HowIWork = () => {
    const [showCarouselWork, setShowCarouselWork] = useState(false);
    const [workElement, setWorkElement] = useState([]);

    useEffect(() => {
        if (isMobileScreen) {
            setWorkElement(workElem.map((v, i) =>
                <SwiperSlide  key={v.title}><WorkElement key={i} number={i + 1} picWork={v.pic} title={v.title}
                                                         description={v.description}/></SwiperSlide>));
            setShowCarouselWork(true);
        } else {
            setWorkElement(workElem.map((v, i) =>
                <WorkElement key={i} number={i + 1} picWork={v.pic} title={v.title} description={v.description}/>));
        }
    }, [])

    return (
        <HowIWorkWrapper>
            <HowIWorkTitleSection>
            <h1>Порядок работы со мной</h1>
            </HowIWorkTitleSection>
            <HowIWorkSection className="row">
                {showCarouselWork ? <HowIWorkSection><WorkBlock><Swiper
                    modules={[Pagination,Navigation, Scrollbar]}
                    spaceBetween={30}
                    slidesPerView={2}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    navigation
                    >
                 {workElement}
                </Swiper>
                </WorkBlock><Arrows/></HowIWorkSection> :
                    <WorkBlock className="row g-0">{workElement}</WorkBlock>}
            </HowIWorkSection>
        </HowIWorkWrapper>
    );
};
export default HowIWork;