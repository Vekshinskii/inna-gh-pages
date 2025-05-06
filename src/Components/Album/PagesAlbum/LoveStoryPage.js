import React, {useState} from 'react';
import styled from "styled-components";
import {
    loveStoryAlbumPhoto,
} from "../../../Utils/Constants";
import FullscreenModalImage from "../../../Utils/FullscreenModalImage/FullscreenModalImage";
import EndOfAlbumElem from "../../../Utils/EndOfAlbumElem";

const LoveStoryWoman = styled.div`
padding: 0;
margin: 0;
background-color: #2f3233;
`
const LoveStorySection = styled.div`
padding: 12.5vh 0 0.5vh 0;
margin: 0;
`
const LoveStoryElement = styled.div`
padding: 1vh;
    img {
        width: 100%;
    }
@media screen and (max-width: 768px){
padding: 0.5vh;
}     
`
const LoveStoryPage = () => {
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
        <LoveStoryWoman>
            <FullscreenModalImage img={imgSrc} show={show} close={close} isVert={isVert}/>
            <LoveStorySection className="row g-0">
                {loveStoryAlbumPhoto.map(v =>
                    <LoveStoryElement key={v.id} className="col-6">
                        <img src={v.imgSrc} alt={v.imgSrc} onClick={() => openImage(v.imgSrc)}/></LoveStoryElement>)}
            </LoveStorySection>
            <EndOfAlbumElem/>
        </LoveStoryWoman>
    );
};
export default LoveStoryPage;