import React, {useEffect, useState} from 'react';
import PreloadingScreen from "../PreloadingScreen/PreloadingScreen";
import Album from "../Album/Album";
import AboutMe from "../AboutMe/AboutMe";
import FactsStatistics from "../AboutMe/FactsStatistics";
import Price from "../Price/Price";
import HowIWork from "../HowIWork/HowIWork";
import PhotoProcessing from "../PhotoProcessing/PhotoProcessing";
import Reviews from "../Reviews/Reviews";
import Contact from "../Contacts/Contact";
import InstagramPage from "../InstagramPage/InstagramPage";
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {isMobileScreen} from "../../Utils/Constants";

const HomeWrapper = styled.div`
width: 100%;
height: 100%;
`
const Home = () => {
    const [homeElement, setHomeElement] = useState(false);

    useEffect(() => {
        Aos.init({duration: 1500});
        if(isMobileScreen){
            setHomeElement(true);
        }
    }, []);

    return (
        <HomeWrapper id="home">
            <PreloadingScreen/>
            <Album/>
            <AboutMe/>
            <FactsStatistics/>
            <Price/>
            {(homeElement) ? '': <HowIWork/>}
            <PhotoProcessing/>
            {(homeElement) ? '': <Reviews/>}
            <Contact/>
            {(homeElement) ? <Reviews/> : ''}
            <div><InstagramPage/></div>
        </HomeWrapper>
    );
};
export default Home;