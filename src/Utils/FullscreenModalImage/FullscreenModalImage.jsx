import React, {useEffect, useState} from "react";
import styled from "styled-components";

const Modal = styled.div`
margin: 0;
    background-color: #2f3233;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    }    
    ${props => props.isVert ?  "img {height: 100vh;}" 
    : "img {width: 70%;}; @media screen and (max-width: 1200px){img {width: 100%};}"};
`
const FullscreenModalImage = (props) => {
    const [img, setImg] = useState('');
    const [show, setShow] = useState(false);
    useEffect(() => {
        setImg(props.img);
        setShow(props.show);
    },[props.img, props.show]);
    const handleClose = () => {
        props.close();
    }

    return (
        show && <Modal isVert={props.isVert} onClick={() => handleClose()}>
            <img src={img} alt='photo_modal'/>
        </Modal>
    );
}

export default FullscreenModalImage;