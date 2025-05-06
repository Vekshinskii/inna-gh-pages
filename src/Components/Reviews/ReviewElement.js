import React from 'react';
import styled from 'styled-components';
import leavePic from "../../Images/leaves_white_transparent (1).png";
import ReadMore from "../../Utils/ReadMore/ReadMore";

const ReviewsElementsWrapper = styled.div`
display: flex;
width: 100%;
padding: 0;
align-items: center;
justify-content: center;
background-color: floralwhite;
text-align: justify;
  a {
  text-decoration: none;
  color: #1B4A3E;
  font-size: 2.5vh;
  padding: 2vh;
  :hover{
  color: #a53d4c;
  }
  }

@media (max-width: 1200px) {
height: 100%;
}
`
const FrameImg = styled.div`
padding: 2vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 40vh;
width: 50%;
text-align: center;

@media screen  and (max-width: 1200px){
width: 100%;
height: 100%;
padding: 0;
}
`
const  ReviewsElementsSection = styled.div`
width: 100%;
display: flex;
align-items: start;
justify-content: left;

@media screen and (max-width: 1200px) {
flex-direction: column;
}
`
const ImgLeave = styled.img`
height: 5.3vh;
width: 8vh;
`
const IMgReview = styled.img`
height: 60%;
box-shadow: 10px 10px 10px gray;
 :hover {
  -webkit-transform: scale(1.7);
  -ms-transform: scale(1.7);
  transform: scale(1.7);
}
@media screen and (max-width: 1200px) {
width: 100%;
height: 100%;
}
`
const TitleReview = styled.p`
color: #1B4A3E;
`
const TitleReviewSection = styled.div`
padding: 1vh;
display: flex;
`
const MainSection = styled.div`
width: 100%;
padding: 4vh;
`
const TextReview = styled.div`
width: 100%;
    padding: 1rem ;
`
const NameReviewSection = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: right;
`
const NameReview = styled.div`
width: 30vw;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
p {
margin: 0;
font-size: 2.5vh;
}
@media screen  and (max-width: 1200px){
flex-direction: column;
width: 50vw;
}
`
const ReviewElement = (props) => {
    return (
        <ReviewsElementsWrapper pic={props.pic}>
            <ReviewsElementsSection>
                <FrameImg>
                <IMgReview src={props.pic} alt="review_pic"/>
                </FrameImg>
                <MainSection>
                    <TitleReviewSection>
                        <TitleReview>{props.title}</TitleReview>
                        <ImgLeave src={leavePic} alt="leave"/>
                    </TitleReviewSection>
                    <TextReview>
                    <ReadMore text={props.text}/>
                    <NameReviewSection>
                    <NameReview>
                        <p>{props.name}</p>
                        <a href={props.social} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"/> Мой аккаунт</a>
                    </NameReview>
                    </NameReviewSection>
                    </TextReview>
                </MainSection>
            </ReviewsElementsSection>
        </ReviewsElementsWrapper>
    );
};
export default ReviewElement;