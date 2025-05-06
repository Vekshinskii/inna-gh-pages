import React, {useEffect, useState} from 'react';
import {albumElements,isMobileScreen} from "../../Utils/Constants";
import CardOfAlbum from "./CardOfAlbum";
import styled from "styled-components";
import {Swiper,SwiperSlide,} from "swiper/react";
import 'swiper/swiper.min.css';
import SwiperCore, {Navigation, Pagination, Scrollbar} from "swiper";

SwiperCore.use([Navigation,Pagination]);

const WrapperAlbum = styled.div`
padding: 0;
margin: 12vh 0 0 0;
width: 100vw;
height: 100%;
display: flex;
flex-direction: column;
align-items: start;
justify-content: start;
cursor: pointer;   

.swiper-button-next,
.swiper-button-prev {
  opacity: 1;
 --swiper-navigation-color: white;
}

    h1{
        padding: 0 10vh;
    }    
@media screen and (max-width: 1450px){
    h1{
        padding-left: 3vh;
    }
}
`
const AlbumBlock = styled.div`
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
`
const AlbumSection = styled.div`
width: 100%;
height: 100%
`
const Album = () => {
    const [showCarouselAlbum, setShowCarouselAlbum] = useState(false);
    const [albumElement, setAlbumElement] = useState([]);


    useEffect(() => {
        if (isMobileScreen) {
            setAlbumElement(albumElements.map((v,i)=>
                <SwiperSlide key={i}><CardOfAlbum
                    id={i} pathElem={v.pathElem} cardTitle={v.title} text={v.text}
                    pic={v.pic}/></SwiperSlide>));
            setShowCarouselAlbum(true);
        } else {
            setAlbumElement(albumElements.map(v =>
                <CardOfAlbum  pathElem={v.pathElem}
                              key={v.title} cardTitle={v.title} text={v.text}
                              pic={v.pic}/>));
        }
    }, [isMobileScreen])
    return (
        <WrapperAlbum id="portfolio">
            <h1>Портфолио</h1>
            <nav>
                {showCarouselAlbum ?
                    <AlbumSection><AlbumBlock><Swiper
                        modules={[Pagination,Navigation, Scrollbar]}
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        navigation
                        >
                        {albumElement}
                    </Swiper>
                    </AlbumBlock></AlbumSection> :
                    <AlbumBlock className="row g-0">{albumElement}</AlbumBlock>}
            </nav>
        </WrapperAlbum>
    );
};
export default Album;