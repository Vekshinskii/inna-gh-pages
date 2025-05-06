import React from 'react';
import styled from "styled-components";
import videoPathMP4 from "../../Images/IMG-6218.mov";
import videoPathWebm from "../../Images/IMG-6218webm.webm"

const VideoWrapper = styled.div`
display: flex;
align-items: center;
object-fit: cover;
height: 100%;
width: 100%;
overflow: hidden;
direction: ltr;
video {
    height: 100%;
    width: 100%;   
}
`
const VideoPage = () => {
    return (
        <VideoWrapper>
            <div>
                <video autoPlay muted playsInline loop>
                    <source src={videoPathMP4} type="video/mp4"/>
                    <source src={videoPathWebm} type="video/webm"/>
                    <p>Этот браузер не может воспроизвести видео</p>
                </video>
            </div>
        </VideoWrapper>
    );
};

export default VideoPage;