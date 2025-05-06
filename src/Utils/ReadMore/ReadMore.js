import React, {useEffect, useState} from "react";
import styled from "styled-components";

const TextWrapper = styled.span`
  width: 100%;
  white-space: pre-line;
    font-size: 2.5vh;
`
const ReadOrHide = styled.span`
  cursor: pointer;

  color: #a53d4c;
`
const ReadMore = props => {
    const [showText, setShowText] = useState("");
    const readForward = " читать далее ...";
    const collapse = " свернуть";
    const text = props.text;
    const [isReadMore, setIsReadMore] = useState(true);

    useEffect(() => {
        if(text.length > 250){
            if(isReadMore === true) {
            setShowText(readForward);
        }
        if(isReadMore === false) {
            setShowText(collapse);
        }
    }},[isReadMore]);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <TextWrapper>
            <p>
                {isReadMore ? text.slice(0, 250) : text}
                <ReadOrHide onClick={toggleReadMore}>
                    <br/>
                    {showText}
                </ReadOrHide>
            </p>
        </TextWrapper>
    );
};
export default ReadMore;