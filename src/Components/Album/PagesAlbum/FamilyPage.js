import React, {useState} from 'react';
import styled from "styled-components";
import {
    familyAlbumPhotosHorizontal_1,
    familyAlbumPhotosHorizontal_2, familyAlbumPhotosHorizontal_3, familyAlbumPhotosHorizontal_4,
    familyAlbumPhotosVertical_1,
    familyAlbumPhotosVertical_2, familyAlbumPhotosVertical_3,
} from "../../../Utils/Constants";
import FullscreenModalImage from "../../../Utils/FullscreenModalImage/FullscreenModalImage";
import EndOfAlbumElem from "../../../Utils/EndOfAlbumElem";


const FamilyWrapper = styled.div`
padding: 0;
margin: 0;
background-color: #2f3233;
`
const FamilySection = styled.div`
padding: 12.5vh 0 0.5vh 0;
margin: 0;
    .vertical {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
const FamilyElement = styled.div`
padding: 1vh;
    img {
       width: 100%;
    }
@media screen and (max-width: 768px){
padding: 0.5vh;
} 
`
const FamilyPage = () => {
    const [show, setShow] = useState(false);
    const [imgSrc, setImgSrc] = useState('');
    const [isVert, setVert] = useState(false);

    const openImage = (src, flag) => {
           setImgSrc(src);
           setVert(flag);
           setShow(true);
    }
    const close = () => {
        setShow(false);
    }
    return (
    <FamilyWrapper>
            <FullscreenModalImage img={imgSrc} show={show} close={close} isVert={isVert}/>
            <FamilySection className="row">
                {familyAlbumPhotosVertical_1.map(v =>
                    <FamilyElement key={v.id} className="vertical col-4">
                        <img src={v.imgSrc} alt={v.imgSrc} onClick={() => openImage(v.imgSrc, true)}/></FamilyElement>)}
                {familyAlbumPhotosHorizontal_1.map(v =>
                    <FamilyElement key={v.id} className="col-6">
                        <img src={v.imgSrc} alt={v.imgSrc} onClick={() => openImage(v.imgSrc)}/></FamilyElement>)}
                {familyAlbumPhotosHorizontal_2.map(v =>
                    <FamilyElement key={v.id} className="col-6">
                        <img src={v.imgSrc} alt={v.imgSrc} onClick={() => openImage(v.imgSrc)}/></FamilyElement>)}
                {familyAlbumPhotosVertical_3.map(v =>
                    <FamilyElement key={v.id} className="vertical col-4">
                        <img src={v.imgSrc} alt={v.imgSrc} onClick={() => openImage(v.imgSrc, true)}/></FamilyElement>)}
                {familyAlbumPhotosHorizontal_4.map(v =>
                    <FamilyElement key={v.id} className="col-6">
                        <img src={v.imgSrc} alt={v.imgSrc} onClick={() => openImage(v.imgSrc)}/></FamilyElement>)}
                {familyAlbumPhotosVertical_2.map(v =>
                    <FamilyElement key={v.id} className="vertical col-4">
                        <img src={v.imgSrc} alt={v.imgSrc} onClick={() => openImage(v.imgSrc, true)}/></FamilyElement>)}
                {familyAlbumPhotosHorizontal_3.map(v =>
                    <FamilyElement key={v.id} className="col-6">
                        <img src={v.imgSrc} alt={v.imgSrc} onClick={() => openImage(v.imgSrc)}/></FamilyElement>)}
            </FamilySection>
        <EndOfAlbumElem/>
        </FamilyWrapper>
    );
};

export default FamilyPage;