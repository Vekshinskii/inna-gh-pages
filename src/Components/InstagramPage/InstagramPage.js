import React from 'react';
import {instagramImages} from "../../Utils/Constants";
import styled from "styled-components";
import fontInst from "../../Images/font-instagram-png-5-Transparent-Images.png";

const InstaWrapper = styled.div`
position: relative;
margin: 0;
padding:0 0 5vh 0;
display: flex;
align-items: center;
justify-content: space-around;
    a {
        text-decoration: none;
    }
`
const InstaSection = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
`
const InstagramElement = styled.div`
width: 27vh;
height: 27vh;
background-image: url(${(props) => props.path});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
margin: 2vh;
box-shadow: 10px 10px 10px gray;
@media screen and (max-width: 1450px){
width: 20vh;
height: 20vh;
margin: 1.5vh;
}
`
const InstagramLink = styled.div`
width: 29vh;
height: 8.5vh;
position: absolute;
left: 42.5%;
top:30%;
color: #1B4A3E;
background-color: floralwhite;
display: flex;
align-items: center;
justify-content: center;
background-image: url(${fontInst});
background-size: 100% 100%;
background-repeat: no-repeat;
background-position: center;

@media screen and (max-width: 1000px){
left: 30%;
top: 35%;
}
@media screen and (max-width: 800px){
top: 40%;
}
@media screen and (max-width: 600px){
left: 22%;
}
`
const InstaTitle = styled.div`

`
const InstagramPage = () => {
    const instagramElem = instagramImages.map((v, i) => <InstagramElement
        className="col-6 col-sm-6 col-md-2 col-lg-2 col-xl-2"
        key={"inst_" + i} path={v} alt={"inst_" + i}/>);
    return (
        <InstaWrapper>
            <InstaSection className=" row">
                <a href="https://www.instagram.com/inna_gusinski/?utm_medium=copy_link"><InstagramLink>
                    <InstaTitle/>
                </InstagramLink></a>
                {instagramElem}
            </InstaSection>
        </InstaWrapper>
    );
};
export default InstagramPage;