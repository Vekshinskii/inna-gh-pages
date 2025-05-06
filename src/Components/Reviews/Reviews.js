import React from 'react';
import styled from 'styled-components';
import {reviews} from "../../Utils/Constants";
import ReviewElement from "./ReviewElement";
import SwiperCore, {Navigation} from "swiper";
import {Swiper,SwiperSlide} from "swiper/react";

SwiperCore.use([Navigation]);

const ReviewsNewWrapper = styled.div`
padding: 4vh 0 0 0;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: left;
margin-bottom: -10vh;
h1{
padding-bottom: 3vh;
}
.swiper-button-next,
.swiper-button-prev {
  color: gray;
  opacity: 1;
  font-size: 2.5vh;
   --swiper-navigation-size: 2rem;
}
.swiper-button-next{
right: 2px;
}
.swiper-button-prev{
left: 2px;
}
@media screen and (max-width: 1200px){
text-align: left;
align-items: start;
h1{
 padding: 0 3vh;
}
}
`
const ReviewsTitleWrapper = styled.span`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    h1 {
        padding: 3vh 3vh 1vh 3vh;
    }
`
const ReviewsNewWrapperSection  = styled.div`
width: 80vw;
height: 57vh;
display: flex;
align-items: center;
justify-content: center;
@media screen and (max-width: 1200px){
height: 100%;
width: 100%;
}
`
const Reviews = () => {
    const items = reviews.map(v => <SwiperSlide key={v.id}><ReviewElement pic={v.pic} text={v.text}
                                                                           title={v.title} social={v.social}
                                                                           name={v.name}/></SwiperSlide>);
    return (
        <ReviewsNewWrapper id="reviews">
            <ReviewsTitleWrapper>
            <h1>Отзывы</h1>
            </ReviewsTitleWrapper>
            <ReviewsNewWrapperSection>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    loop={true}
                >
                    {items}
                </Swiper>
            </ReviewsNewWrapperSection>
        </ReviewsNewWrapper>
    );
};

export default Reviews;