import React from 'react';
import "bootstrap";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        padding: 0;
        margin: 0;
        box-sizing: content-box;
        flex-wrap: wrap;
        width: 100%;
        overflow-x: hidden;
    }

    body {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        background-color: floralwhite;
        color: #1B4A3E;
        font-family: "Oswald", sans-serif;
        font-style: normal;
        font-weight: 320;
        letter-spacing: 1px;
        font-size: 3vh;
    }

    .popup:not(:target) {
        display: none;
    }

    .popup:target {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.9);
    }

    .full-img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .close {
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 30px;
        text-decoration: none;
        color: red;
    }

    h1 {
        font-family: GermanoRegular, serif;
        font-weight: 400;
        font-style: normal;
        letter-spacing: 2px;
        font-size: 45px;
        color: #1B4A3E;
    }

    h2 {
        font-family: GermanoRegular, serif;
        font-weight: 400;
        font-style: normal;
        font-size: 35px;
    }

    h3 {
        font-family: 'Conv_aAntaraDistance', sans-serif;
        font-weight: normal;
        letter-spacing: 10px;
        font-size: 35px;
    }

    h4 {
        font-size: 40px;
        padding: 2vh;
    }

    @media screen and (max-width: 1450px) {
        h3,
        h4 {
            font-size: 5vh;
        }
    }

    @media screen and (max-width: 768px) {
        h2 {
            font-size: 3vh;
        }

        h1 {
            font-size: 39px;
        }

        h3 {
            font-size: 5vh;
            letter-spacing: 2px;
        }

        h4 {
            font-size: 6vh;
            padding: 2vh;
        }

        p {
            font-size: 2.5vh;
        }
    }
`
ReactDOM.render(
    <BrowserRouter>
        <GlobalStyle/>
        <App/>
    </BrowserRouter>, document.getElementById('root')
);
