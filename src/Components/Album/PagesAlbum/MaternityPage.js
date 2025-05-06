import React, {useState} from 'react';
import styled from "styled-components";
import {
    maternityAlbumPhotoHorizontal_1,
    maternityAlbumPhotoHorizontal_2,
    maternityAlbumPhotoHorizontal_3,
    maternityAlbumPhotoVertical_1,
    maternityAlbumPhotoVertical_2, maternityAlbumPhotoVertical_3
} from "../../../Utils/Constants";
import FullscreenModalImage from "../../../Utils/FullscreenModalImage/FullscreenModalImage";
import EndOfAlbumElem from "../../../Utils/EndOfAlbumElem";


const MaternityWrapper = styled.div`
padding: 0;
margin: 0;
background-color: #2f3233;
`
const MaternitySection = styled.div`
padding: 12.5vh 0 0.5vh 0;
margin: 0;
    .vertical {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
const MaternityElement = styled.div`
padding: 1vh;
    img {
        width: 100%;
    }
@media screen and (max-width: 768px){
padding: 0.5vh;
} 
`
const MaternityPage = () => {
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
        <MaternityWrapper>
            <FullscreenModalImage img={imgSrc} show={show} close={close} isVert={isVert}/>
            <MaternitySection className="row">
                {maternityAlbumPhotoVertical_1.map(v =>
                    <MaternityElement key={v.id} className="vertical col-4">
                        <img src={v.imgSrc} alt={v.imgSrc} onClick={() => openImage(v.imgSrc, true)}/></MaternityElement>)}
                {maternityAlbumPhotoHorizontal_1.map(v =>
                    <MaternityElement key={v.id} className="col-6">
                        <img src={v.imgSrc} alt={v.imgSrc} onClick={() => openImage(v.imgSrc)}/></MaternityElement>)}
                {maternityAlbumPhotoVertical_2.map(v =>
                    <MaternityElement key={v.id} className="vertical  col-4">
                        <img src={v.imgSrc} alt={v.imgSrc} onClick={() => openImage(v.imgSrc, true)}/></MaternityElement>)}
                {maternityAlbumPhotoHorizontal_2.map(v =>
                    <MaternityElement key={v.id} className=" col-6">
                        <img src={v.imgSrc} alt={v.imgSrc} onClick={() => openImage(v.imgSrc)}/></MaternityElement>)}
                {maternityAlbumPhotoVertical_3.map(v =>
                    <MaternityElement key={v.id} className="vertical col-4">
                        <img src={v.imgSrc} alt={v.imgSrc} onClick={() => openImage(v.imgSrc, true)}/></MaternityElement>)}
                {maternityAlbumPhotoHorizontal_3.map(v =>
                    <MaternityElement key={v.id} className="col-6">
                        <img src={v.imgSrc} alt={v.imgSrc} onClick={() => openImage(v.imgSrc)}/></MaternityElement>)}
            </MaternitySection>
            <EndOfAlbumElem/>
        </MaternityWrapper>
    );
};
export default MaternityPage;