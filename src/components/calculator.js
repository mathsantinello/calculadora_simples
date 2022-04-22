import React, { useEffect, useState } from "react";
import { CalcButton, CalcDisplay } from "./calculator-style";

function CalcElements(){
    let [curval, setCurVal]=useState('0'); 
    let [preval, setPreVal]=useState('0'); 
    let [oper,setOper]=useState('');
    let [initialstate,setInitialState]=useState(true);
    let [evalstate, setEvalState]=useState(false);  
    
    const Operation = (num1,num2,op) =>{
        switch(op){
            case '+':
                num2 = (parseFloat(num1)+parseFloat(num2)).toString();
                break;
            case '-':
                num2 = (parseFloat(num1)-parseFloat(num2)).toString();
                break;
            case '*':
                num2 = (parseFloat(num1)*parseFloat(num2)).toString();
                break;
            case '/':
                num2 = (parseFloat(num1)/parseFloat(num2)).toString();
                break;
            default:
                break; 
            }
        return num2;
    }
    const AppendValue = (e) =>{
        if(initialstate||curval==='0'){
            setCurVal(e.target.innerHTML); 
            setInitialState(false);
            return;
        }
        if((e.target.innerHTML==='.'&&curval.includes('.'))||(e.target.innerHTML==='0'&&curval==='0')){
            return;
        }
        if(evalstate){
            clear();
            setInitialState(false);
        }
        setCurVal(curval.concat(e.target.innerHTML));
        console.log(initialstate); 
    }
    const AppendOper = (e)=>{
        if(!initialstate) Equals();
        setOper(e.target.innerHTML);
        setEvalState(false);
    }
    const Equals=()=>{
        evalstate?setCurVal(Operation(curval,preval,oper)):setCurVal(Operation(preval,curval,oper));  
        setInitialState(true);
        if(!evalstate){
            setEvalState(true);
            setPreVal(curval);
        }      
    }
    useEffect(()=>{
        if(initialstate && !evalstate){
            setPreVal(curval);
        }
    })
    const clear =()=>{
        setCurVal('0');
        setPreVal('0');
        setOper('');
        setInitialState(true);
        setEvalState(false);
    }
    const deleteValue = () =>{  
        setCurVal(curval.slice(0,-1))
        if(curval.length===1){
            clear();      
        }      
    }
    return(
        <>
            <CalcDisplay sz={curval.length}>{curval}</CalcDisplay>
            <CalcButton wd='2' onClick={clear}>AC</CalcButton>
            <CalcButton onClick={deleteValue}>DEL</CalcButton>
            <CalcButton onClick={AppendOper}>/</CalcButton>
            <CalcButton onClick={AppendValue}>7</CalcButton>
            <CalcButton onClick={AppendValue}>8</CalcButton>
            <CalcButton onClick={AppendValue}>9</CalcButton>
            <CalcButton onClick={AppendOper}>*</CalcButton>
            <CalcButton onClick={AppendValue}>4</CalcButton>
            <CalcButton onClick={AppendValue}>5</CalcButton>
            <CalcButton onClick={AppendValue}>6</CalcButton>
            <CalcButton onClick={AppendOper}>-</CalcButton>
            <CalcButton onClick={AppendValue}>1</CalcButton>
            <CalcButton onClick={AppendValue}>2</CalcButton>
            <CalcButton onClick={AppendValue}>3</CalcButton>
            <CalcButton onClick={AppendOper}>+</CalcButton>
            <CalcButton onClick={AppendValue}>0</CalcButton>
            <CalcButton onClick={AppendValue}>.</CalcButton>
            <CalcButton wd='2' onClick={Equals}>=</CalcButton>
        </>
    );
}
export default CalcElements;