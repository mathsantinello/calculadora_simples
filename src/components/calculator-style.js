import styled from "styled-components";

export const CalcDisplay=styled.div`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 10px;
    width: 430px;
    height: 80px;
    background-color: rgb(204,204,204);
    justify-content: flex-end;
    align-items: center;
    color: black;
    font-size: ${props=>props.sz<12?'60px':`${60*12/props.sz}px`};
    @media(max-width:550px){
        margin-top: 16px;
        margin-bottom: 8px;
        width: 344px;
        height: 64px;
        font-size: ${props=>props.sz<12?'48 px':`${48*12/props.sz}px`};
    }
    @media(max-width:700px) and (orientation: landscape){
        width: 580px;
        height: 64px;
    }
`
export const CalcButton=styled.button`
    margin-left: 10px;
    width: ${props=>props.wd==='2' ? '210px':'100px'};
    height: 84px;
    font-size: 32px;
    cursor: pointer; 
    @media(max-width:550px){
        margin-left: 8px;
        width: ${props=>props.wd==='2' ? '168px':'80px'};
        height: 67px;
        font-size: 32px;   
    }
    @media(max-width:700px) and (orientation: landscape){
        margin-left: 8px;
        width: ${props=>props.wd==='2' ? '286px':'139px'};
        height: 60px;
        font-size: 32px;  
    }   
`