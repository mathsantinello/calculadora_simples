import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const BodyStyle = createGlobalStyle`
    body{ 
    font-family: sans-serif;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    color: rgb(231,186,124);
    background: rgb(19,125,189);
    background: linear-gradient(90deg, rgba(19,125,189,1) 0%, rgba(228,24,24,1) 100%); 
}
`
export const Container=styled.div`
    margin-left: auto;
    margin-right: auto;
    background-color: rgb(45,46,45);
    border-radius: 10px;
    width: 450px;
    height: 745px;
    display: flex;
    flex-wrap: wrap;
    @media(max-width:550px){
        border-radius: 10px;
        width: 360px;
        height: 596px;
    }
    @media(max-width:700px) and (orientation: landscape){
        border-radius: 10px;
        width: 596px;
        height: 500px;
    } 
`