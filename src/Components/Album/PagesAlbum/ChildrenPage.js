import React, {useState} from 'react';
import styled from "styled-components";
import {
    childAlbumPhotosHorizontal_1,
    childAlbumPhotosHorizontal_2,
    childAlbumPhotosHorizontal_3,
    childAlbumPhotosHorizontal_4, childAlbumPhotosHorizontal_5, childAlbumPhotosHorizontal_6,
    childAlbumPhotosVertical_1,
    childAlbumPhotosVertical_2,
    childAlbumPhotosVertical_3,
    childAlbumPhotosVertical_4,
    childAlbumPhotosVertical_5,
} from "../../../Utils/Constants";
import FullscreenModalImage from "../../../Utils/FullscreenModalImage/FullscreenModalImage";
import EndOfAlbumElem from "../../../Utils/EndOfAlbumElem";


const WrapperChild = styled.div`
padding: 11vh 0 0 0;
margin: 0;
width: 100%;
background-color: #2f3233;
`
const ChildSection = styled.div`
margin: 0;
  .vertical {
        display: flex;
        align-items: center;
        justify-content: center;
  }
`
const ChildElement = styled.div`
padding: 1vh;
    img {
      width: 100%;
    }
@media screen and (max-width: 768px){
padding: 0.5vh;
} 
`
const ChildrenPage = () => {
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
        <WrapperChild>
            <FullscreenModalImage img={imgSrc} show={show} close={close} isVert={isVert}/>
            <ChildSection className="row">
                {childAlbumPhotosVertical_1.map(v =>
                    <ChildElement key={v.id} className="vertical col-4">
                        <img src={v.imgSrc} alt={v.imgSrc} onClick={() => openImage(v.imgSrc,true)}/></ChildElement>)}
                {childAlbumPhotosHorizontal_2.map(v =>
                    <ChildElement key={v.id} className="  col-6">
                        <img src={v.imgSrc} alt={v.imgSrc} onClick={() => openImage(v.imgSrc)}/></ChildElement>)}
                {childAlbumPhotosVertical_2.map(v =>
                    <ChildElement key={v.id} className="vertical col-4">
                        <img src={v.imgSrc} alt={v.imgSrc} onClick={() => openImage(v.imgSrc, true)}/></ChildElement>)}
                {childAlbumPhotosVertical_3.map(v =>
                    <ChildElement key={v.id} className="vertical col-4">
                        <img src={v.imgSrc} alt={v.imgSrc} onClick={() => openImage(v.imgSrc,true)}/></ChildElement>)}
                {childAlbumPhotosHorizontal_3.map(v =>
                    <ChildElement key={v.id} className="  col-6">
                        <img src={v.imgSrc} alt={v.imgSrc} onClick={() => openImage(v.imgSrc)}/></ChildElement>)}
                {childAlbumPhotosHorizontal_4.map(v =>
                    <ChildElement key={v.id} className="  col-6">
                        <img src={v.imgSrc} alt={v.imgSrc} onClick={() => openImage(v.imgSrc)}/></ChildElement>)}
                {childAlbumPhotosVertical_5.map(v =>
                    <ChildElement key={v.id} className="vertical col-4">
                        <img src={v.imgSrc} alt={v.imgSrc} onClick={() => openImage(v.imgSrc,true)}/></ChildElement>)}
                {childAlbumPhotosHorizontal_5.map(v =>
                    <ChildElement key={v.id} className=" col-6">
                        <img src={v.imgSrc} alt={v.imgSrc} onClick={() => openImage(v.imgSrc)}/></ChildElement>)}
                {childAlbumPhotosHorizontal_1.map(v =>
                    <ChildElement key={v.id} className=" col-6">
                        <img src={v.imgSrc} alt={v.imgSrc} onClick={() => openImage(v.imgSrc)}/></ChildElement>)}
                {childAlbumPhotosVertical_4.map(v =>
                    <ChildElement key={v.id} className="vertical col-4">
                        <img src={v.imgSrc} alt={v.imgSrc} onClick={() => openImage(v.imgSrc,true)}/></ChildElement>)}
                {childAlbumPhotosHorizontal_6.map(v =>
                    <ChildElement key={v.id} className="  col-6">
                        <img src={v.imgSrc} alt={v.imgSrc} onClick={() => openImage(v.imgSrc)}/></ChildElement>)}
            </ChildSection>
            <EndOfAlbumElem/>
        </WrapperChild>
    );
};
export default ChildrenPage;