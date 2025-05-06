import styled from "styled-components";
import React from "react";
import "bootstrap";
import Main from "./Components/Main/Main";
import FooterSimple from "./Components/FooterSimple";
import Header from "./Components/Header/Header";

const AppWrapper = styled.div`
width: 100%;
height: 100%;
margin: 0;
padding: 0;
`

function App() {
    return (
        <AppWrapper>
            <Header/>
            <Main/>
            <FooterSimple/>
        </AppWrapper>
    );
}

export default App;
