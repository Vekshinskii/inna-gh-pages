import React from "react";
import {Route, Routes} from "react-router-dom";
import LoveStoryPage from "../Album/PagesAlbum/LoveStoryPage";
import ChildrenPage from "../Album/PagesAlbum/ChildrenPage";
import FamilyPage from "../Album/PagesAlbum/FamilyPage";
import FemalePortraitPage from "../Album/PagesAlbum/FemalePortraitPage";
import ManPortraitPage from "../Album/PagesAlbum/ManPortraitPage";
import MaternityPage from "../Album/PagesAlbum/MaternityPage";
import PregnancyPage from "../Album/PagesAlbum/PregnancyPage";
import WeddingPage from "../Album/PagesAlbum/WeddingPage";
import {
    aboutMe,
    childrenPagePath, contact, descriptionPricePagePath,
    familyPagePath,
    femalePortraitPagePath, homePagePath, loveStoryPagePath,
    manPortraitPagePath, maternityPagePath, portfolio, pregnancyPagePath, price, review, thankPagePath, weddingPagePath
} from "../../Utils/Constants";
import Home from "../Home/Home";
import DetailsPrice from "../Price/DetailsPrice";
import ThankPage from "../ThankPage/ThankPage";
import ScrollToTop from "../../Utils/ScrollToTop/ScrollToTop";
import ErrorPage from "../ErrorPage";
import AboutMe from "../AboutMe/AboutMe";
import Price from "../Price/Price";
import Reviews from "../Reviews/Reviews";
import Album from "../Album/Album";
import Contact from "../Contacts/Contact";

const Main = () => {
    return (
            <Routes>
                <Route path="/"  element={<div><ScrollToTop/><Home/></div>}/>
                <Route path={`/${homePagePath}`} element={<div><ScrollToTop/><Home/></div>}/>
                <Route path={`/${loveStoryPagePath}`}  exact element={<div><ScrollToTop/><LoveStoryPage/></div>}/>

                <Route path={`/${aboutMe}`}  exact element={<div><ScrollToTop/><AboutMe/></div>}/>
                <Route path={`/${price}`}  exact element={<div><ScrollToTop/><Price/></div>}/>
                <Route path={`/${review}`}  exact element={<div><ScrollToTop/><Reviews/></div>}/>
                <Route path={`/${portfolio}`}  exact element={<div><ScrollToTop/><Album/></div>}/>
                <Route path={`/${contact}`}  exact element={<div><ScrollToTop/><Contact/></div>}/>

                <Route path={`/${childrenPagePath}`} element={<div><ScrollToTop/><ChildrenPage/></div>}/>
                <Route path={`/${familyPagePath}`}  element={<div><ScrollToTop/><FamilyPage/></div>}/>
                <Route path={`/${femalePortraitPagePath}`} element={<div><ScrollToTop/><FemalePortraitPage/></div>}/>
                <Route path={`/${manPortraitPagePath}`}  element={<div><ScrollToTop/><ManPortraitPage/></div>}/>
                <Route path={`/${maternityPagePath}`}  element={<div><ScrollToTop/><MaternityPage/></div>}/>
                <Route path={`/${pregnancyPagePath}`}  element={<div><ScrollToTop/><PregnancyPage/></div>}/>
                <Route path={`/${weddingPagePath}`}  element={<div><ScrollToTop/><WeddingPage/></div>}/>
                <Route path={`/${descriptionPricePagePath}`} element={<div><ScrollToTop/><DetailsPrice/></div>}/>
                <Route path={`/${thankPagePath}`} element={<div><ScrollToTop/><ThankPage/></div>}/>

                <Route path="*" element={<div><ScrollToTop/><ErrorPage/></div>}/>
            </Routes>
    );
};

export default Main;