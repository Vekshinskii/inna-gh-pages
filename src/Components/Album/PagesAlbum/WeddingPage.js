import React, {useState} from 'react';
import styled from "styled-components";
import {
    weddingAlbumPhotosHorizontal_1,
    weddingAlbumPhotosVertical_1,
} from "../../../Utils/Constants";
import FullscreenModalImage from "../../../Utils/FullscreenModalImage/FullscreenModalImage";
import EndOfAlbumElem from "../../../Utils/EndOfAlbumElem";

const WeddingWrapper = styled.div`
padding: 0;
margin: 0;
background-color: #2f3233;
`
const WeddingSection = styled.div`
padding: 12.5vh 0 0.5vh 0;
margin: 0;
    .vertical {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
const WeddingElement = styled.div`
padding: 1vh;
    img {
        width: 100%;
    }
@media screen and (max-width: 768px){
padding: 0.5vh;
}    
`
const WeddingPage = () => {
    const [show, setShow] = useState(false);
    const [imgSrc, setImgSrc] = useState('');
    const [isVert, setVert] = useState(false);

    const openImage = (src,flag) => {
        setImgSrc(src);
        setVert(flag);
        setShow(true);
    }
    const close = () => {
        setShow(false);
    }

    return (
        <WeddingWrapper>
            <FullscreenModalImage img={imgSrc} show={show} close={close} isVert={isVert}/>
            <WeddingSection className="row">
                {weddingAlbumPhotosHorizontal_1.map(v =>
                    <WeddingElement key={v.id} className="col-6">
                        <img src={v.imgSrc} alt={v.imgSrc} onClick={() => openImage(v.imgSrc)}/></WeddingElement>)}
                {weddingAlbumPhotosVertical_1.map(v =>
                    <WeddingElement key={v.id} className="vertical  col-4">
                        <img src={v.imgSrc} alt={v.imgSrc} onClick={() => openImage(v.imgSrc,true)}/></WeddingElement>)}
            </WeddingSection>
            <EndOfAlbumElem/>
        </WeddingWrapper>
    );
};

export default WeddingPage;