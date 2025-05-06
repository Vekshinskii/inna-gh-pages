import React, {useState} from 'react';
import styled from "styled-components";
import {
    pregnancyAlbumPhoto,
} from "../../../Utils/Constants";
import FullscreenModalImage from "../../../Utils/FullscreenModalImage/FullscreenModalImage";
import EndOfAlbumElem from "../../../Utils/EndOfAlbumElem";

const PregnancyWrapper = styled.div`
padding: 0;
margin: 0;
background-color: #2f3233;
`
const PregnancySection = styled.div`
padding: 11vh 0 0.5vh 0;
margin: 0;
`
const PregnancyElement = styled.div`
padding: 1vh;
    img {
        width: 100%;
    }
@media screen and (max-width: 768px){
padding: 0.5vh;
}    
`
const PregnancyPage = () => {
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
        <PregnancyWrapper>
            <FullscreenModalImage img={imgSrc} show={show} close={close} isVert={isVert}/>
            <PregnancySection className="row">
                {pregnancyAlbumPhoto.map(v => <PregnancyElement key={v.id}
                                                                className=" col-6"><img
                    src={v.imgSrc} alt={v.imgSrc} onClick={() => openImage(v.imgSrc)}/></PregnancyElement>)}
            </PregnancySection>
            <EndOfAlbumElem/>
        </PregnancyWrapper>
    );
};
export default PregnancyPage;