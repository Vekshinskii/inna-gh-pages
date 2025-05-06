import React from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
import backPrice from "../../Images/factStatisticImg.jpg";
import backPriceMobile from "../../Images/factStatisticImgMobile.png";
import backPriceMiddle from "../../Images/backPriceMiddle.jpg";

const FactsStatisticsWrapper = styled.div`
padding: 10vh 0 0 0;
margin: 0;
height: 40%;
font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: 2px;
text-align: left;
color: white;
    h1 {
      text-align: left;
      padding-left: 2vh;
    }
    i {
        font-size: 3rem;
        color: white;
        padding: 1vh;
    }
@media (max-width: 1200px){
font-size: 2.5vh;     
} 
`
const CounterField = styled.div`
margin: 0;
position: relative;
background-color: rgba(0, 0, 0, 0.6);    
height: 65vh;
width: 100%;
display: flex;
align-items: center;
text-align: center;
justify-content: center;

@media screen and (max-device-width: 1200px) {
height: 75vh;
background: rgba(0, 0, 0, 0.3);
}
`
const FactBackground = styled.div`
background-attachment: fixed;
position: absolute;;
height:  65%;
width: 100%;
background-image: url(${backPrice});
-webkit-background-image: url(${backPrice});
-moz-background-image: url(${backPrice});
-o-background-image: url(${backPrice});
background-size: cover;
-webkit-background-size: cover;
-moz-background-size:cover;
-o-background-size: cover;
background-position: center;
background-repeat: no-repeat;

@media screen and (max-width: 1450px) {
background-image: url(${backPriceMiddle});
-webkit-background-image: url(${backPriceMiddle});
-moz-background-image: url(${backPriceMiddle});
-o-background-image: url(${backPriceMiddle});
}

@media only screen and (max-width: 1050px) {
background-attachment: scroll;
background-image: url(${backPriceMobile});
-webkit-background-image: url(${backPriceMobile});
-moz-background-image: url(${backPriceMobile});
-o-background-image: url(${backPriceMobile});
height: 75vh;
}
`
const Counter = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const CounterBody = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const CounterValue = styled.div`
padding: 2vh;
font-size: 2.5vw;
text-align: center;

@media (max-width: 1200px){
font-size: 4.5vh;    
} 
`
const CounterPostfix = styled.span`
`
const CounterTitle = styled.span`

`;
const FactsTitleWrapper = styled.span`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    h1 {
        padding: 3vh 3vh 1vh 3vh;
    }
`
const FactsStatistics = () => {
    const [focus, setFocus] = React.useState(false);
    return (
        <FactsStatisticsWrapper className='container-fluid'>
           <FactsTitleWrapper>
            <h1>Факты о моей работе</h1>
           </FactsTitleWrapper>
            <FactBackground/>
            <CounterField className='row'>
                <Counter className = 'col-6 col-md-6 col-lg-6 col-xl-3'>
                    <CounterBody>
                        <i className="fas fa-photo-video"/>
                        <CounterValue h1>
                            <CountUp start={focus ? 0 : null} end={400000} delay={0.3} duration={4} redraw={true}>
                                {({ countUpRef }) => (
                                    <VisibilitySensor onChange={(isVisible) => {
                                        if (isVisible) { setFocus(true); }
                                    }}>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </CounterValue>
                        <CounterTitle>Фотографий</CounterTitle>
                    </CounterBody>
                </Counter>
                <Counter className = 'col-6 col-md-6 col-lg-6 col-xl-3'>
                    <CounterBody>
                        <i className="fas fa-users"/>
                        <CounterValue h1>
                            <CountUp start={focus ? 0 : null} end={780} delay={0.3}  duration={4} redraw={true}>
                                {({ countUpRef }) => (
                                    <VisibilitySensor onChange={(isVisible) => {
                                        if (isVisible) { setFocus(true); }
                                    }}>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </CounterValue>
                        <CounterTitle>Довольных клиентов</CounterTitle>
                    </CounterBody>
                </Counter>
                <Counter className = 'col-6 col-md-6 col-lg-6 col-xl-3'>
                    <CounterBody>
                        <i className="fas fa-smile"/>
                        <CounterValue h1>
                            <CountUp start={focus ? 0 : null} end={100} delay={0.3} duration={4} redraw={true}>
                                {({ countUpRef }) => (
                                    <VisibilitySensor onChange={(isVisible) => {
                                        if (isVisible) { setFocus(true); }
                                    }}>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                            <CounterPostfix> %</CounterPostfix>
                        </CounterValue>
                        <CounterTitle>Позитивных отзывов</CounterTitle>
                    </CounterBody>
                </Counter>
                <Counter className = 'col-6 col-md-6 col-lg-6 col-xl-3'>
                    <CounterBody>
                        <i className="fas fa-user-tie"/>
                        <CounterValue h1>
                            <CountUp start={focus ? 0 : null} end={10} delay={0.3} duration={4} redraw={true}>
                                {({ countUpRef }) => (
                                    <VisibilitySensor onChange={(isVisible) => {
                                        if (isVisible) { setFocus(true); }
                                    }}>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                            <CounterPostfix> лет</CounterPostfix>
                        </CounterValue>
                        <CounterTitle>Профессиональной работы</CounterTitle>
                    </CounterBody>
                </Counter>
            </CounterField>
        </FactsStatisticsWrapper>
    );
};

export default FactsStatistics;