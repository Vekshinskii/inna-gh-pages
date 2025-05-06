import React, {useState} from 'react';
import styled from "styled-components";
import {
    womanAlbumPhotosHorizontal_1,
    womanAlbumPhotosHorizontal_2,
    womanAlbumPhotosHorizontal_3,
    womanAlbumPhotosHorizontal_4, womanAlbumPhotosHorizontal_5,
    womanAlbumPhotosVertical_1,
    womanAlbumPhotosVertical_2,
    womanAlbumPhotosVertical_3,
    womanAlbumPhotosVertical_4, womanAlbumPhotosVertical_5, womanAlbumPhotosVertical_6
} from "../../../Utils/Constants";
import FullscreenModalImage from "../../../Utils/FullscreenModalImage/FullscreenModalImage";
import EndOfAlbumElem from "../../../Utils/EndOfAlbumElem";


const WrapperWoman = styled.div`
padding: 0;
margin: 0;
width: 100%;
background-color: #2f3233;
`
const WomanSection = styled.div`
padding: 12.5vh 0 0.5vh 0;
margin: 0;
.vertical {
img{
height: 100%;
}
}
`
const WomanElement = styled.div`
padding: 1vh;
    img {
        width: 100%;
    }
@media screen and (max-width: 768px){
padding: 0.5vh;
} 
`
const FemalePortraitPage = (props) => {
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
        <WrapperWoman className="row justify-content-md-center">
            <FullscreenModalImage img={imgSrc} show={show} close={close} isVert={isVert} />
            <WomanSection className=" row">
                {womanAlbumPhotosVertical_1.map(v =>
                    <WomanElement key={v.id} className=" vertical col-4">
                        <img className="vertical" src={v.imgSrc} alt={v.imgSrc} onClick={() => openImage(v.imgSrc,true)}/></WomanElement>)}
                {womanAlbumPhotosHorizontal_1.map(v =>
                    <WomanElement key={v.id} className=" col-6">
                        <img src={v.imgSrc} alt={v.imgSrc} onClick={() => openImage(v.imgSrc)}/></WomanElement>)}
                {womanAlbumPhotosVertical_2.map(v =>
                    <WomanElement key={v.id} className="vertical col-4">
                        <img className="vertical" src={v.imgSrc} alt={v.imgSrc} onClick={() => openImage(v.imgSrc,true)}/></WomanElement>)}
                {womanAlbumPhotosHorizontal_2.map(v =>
                    <WomanElement key={v.id} className=" col-6">
                        <img src={v.imgSrc} alt={v.imgSrc} onClick={() => openImage(v.imgSrc)}/></WomanElement>)}
                {womanAlbumPhotosVertical_3.map(v =>
                    <WomanElement key={v.id} className="vertical col-4">
                        <img className="vertical" src={v.imgSrc} alt={v.imgSrc} onClick={() => openImage(v.imgSrc,true)}/></WomanElement>)}
                {womanAlbumPhotosHorizontal_3.map(v =>
                    <WomanElement key={v.id} className=" col-6">
                        <img src={v.imgSrc} alt={v.imgSrc} onClick={() => openImage(v.imgSrc)}/></WomanElement>)}
                {womanAlbumPhotosVertical_4.map(v =>
                    <WomanElement key={v.id} className="vertical col-4">
                        <img className="vertical" src={v.imgSrc} alt={v.imgSrc} onClick={() => openImage(v.imgSrc,true)}/></WomanElement>)}
                {womanAlbumPhotosHorizontal_4.map(v =>
                    <WomanElement key={v.id} className=" col-6">
                        <img src={v.imgSrc} alt={v.imgSrc} onClick={() => openImage(v.imgSrc)}/></WomanElement>)}
                {womanAlbumPhotosVertical_5.map(v =>
                    <WomanElement key={v.id} className="vertical col-4">
                        <img className="vertical" src={v.imgSrc} alt={v.imgSrc} onClick={() => openImage(v.imgSrc,true)}/></WomanElement>)}
                {womanAlbumPhotosHorizontal_5.map(v =>
                    <WomanElement key={v.id} className=" col-6">
                        <img src={v.imgSrc} alt={v.imgSrc} onClick={() => openImage(v.imgSrc)}/></WomanElement>)}
                {womanAlbumPhotosVertical_6.map(v =>
                    <WomanElement key={v.id} className="vertical  col-4">
                        <img className="vertical" src={v.imgSrc} alt={v.imgSrc} onClick={() => openImage(v.imgSrc,true)}/></WomanElement>)}
            </WomanSection>
            <EndOfAlbumElem/>
        </WrapperWoman>
    );
};
export default FemalePortraitPage;