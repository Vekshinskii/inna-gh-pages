import React, {useState} from 'react';
import styled from "styled-components";
import {
    manAlbumPhoto,
} from "../../../Utils/Constants";

import FullscreenModalImage from "../../../Utils/FullscreenModalImage/FullscreenModalImage";
import EndOfAlbumElem from "../../../Utils/EndOfAlbumElem";


const WrapperMan = styled.div`
padding: 0;
margin: 0;
background-color: #2f3233;
`
const ManSection = styled.div`
padding: 12.5vh 0 0.5vh 0;
margin: 0;
`
const ManElement = styled.div`
padding: 1vh;
    img{
        width: 100%;
    }
@media screen and (max-width: 768px){
padding: 0.5vh;
} 
`
const ManPortraitPage = () => {
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
        <WrapperMan>
            <FullscreenModalImage img={imgSrc} show={show} close={close} isVert={isVert}/>
            <ManSection className="row g-0">
                {manAlbumPhoto.map(v => <ManElement key={v.id} className=" col-4"><img
                    src={v.imgSrc} alt={v.id} onClick={() => openImage(v.imgSrc, true)}/></ManElement>)}
            </ManSection>
            <EndOfAlbumElem/>
        </WrapperMan>
    );
};
export default ManPortraitPage;