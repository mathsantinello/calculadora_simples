import React, { useState } from "react";
import { CalcButton, CalcDisplay } from "./calculator-style";

function CalcElements(){
    let [lastvalue, setLastValue]=useState('');
    let [value,setValue]=useState('0');
    let [dcheck, setDcheck]=useState(false); 
    let [initialstate,setInitialState]=useState(true);

    function count_chars (texto,char){
        var contador = 0;
        var i = 0;
        for (i=0; i<texto.length;i++){
            if (texto.charAt(i)===char){
                contador +=1;
            }
        }
        return contador;
    }
    const appendValue = (e) =>{
        if(initialstate||value==='0'){
            setValue(e.target.innerHTML); 
            setInitialState(false);
            return;
        }
        if(value.slice(-1)===')'){
            return;
        }
        if(e.target.innerHTML==='0' && ['+','-','*','/','('].includes(value.slice(-1))){
            setValue(value.concat('0.'));
            setDcheck(true);
            return;
        }
        setValue(value.concat(e.target.innerHTML));   
    }
    const appendOper = (e)=>{
        if(initialstate){ 
            setInitialState(false);
        }
        if(['+','-','*','/','('].includes(value.slice(-1))){
            return;
        }   
        setValue(value.concat(e.target.innerHTML));
        setDcheck(false);
        
    }
    const appendDecimal = () =>{
        if(initialstate){
            setValue('0.'); 
            setInitialState(false);
            setDcheck(true);
            return;
        }
        if (dcheck) {
            return;
        }
        setValue(value.concat('.'));
        setDcheck(true);
    }
    const appendMemory =()=>{
        if(lastvalue===''){
            alert("No answer in memory!");
            return;
        }
        if(lastvalue.indexOf('.')!==-1){
            setDcheck(true);
        }
        if(initialstate){
            setValue(lastvalue); 
            setInitialState(false);
            return;
        }
        if(!['+','-','*','/','('].includes(value.slice(-1))){
            return;
        }
        setValue(value.concat(lastvalue)); 
    }
    const openPar = () =>{
        if(initialstate||value==='0'){
            setValue('('); 
            setInitialState(false);
            return;
        }
        if(!['+','-','*','/','('].includes(value.slice(-1))){
            return;
        }
        setValue(value.concat('('));
           
    }
    const closePar = () =>{
        if(value==='0'){
            return;
        }
        if(['+','-','*','/','('].includes(value.slice(-1))){
            return;
        }
        if(count_chars(value,')')===count_chars(value,'(')){
            return;
        }
        setValue(value.concat(')'));  
    }
    const clear =()=>{
        setValue('0');
        setInitialState(true);
    }
    const deleteValue = () =>{  
        if (['+','-','*','/','('].includes(value.slice(-1))){
            setDcheck(true);
        }
        if(value.slice(-1)==='.'){
            setDcheck(false);
        }
        if(value.length===1){
            setValue('0');
            setInitialState(true);
        }
        else{
            setValue(value.slice(0,-1))
        }      
    }
    const calculate = () =>{
        if(count_chars(value,')')!==count_chars(value,'(')){
            alert("Must close all patentheses before evaluating!");
            return;
        }
        let new_value = eval(value).toString()
        setValue(new_value);
        setLastValue(new_value);
        setDcheck(false);
        setInitialState(true);
    }
    return(
        <>
            <CalcDisplay sz={value.length}>{value}</CalcDisplay>
            <CalcButton wd='2' onClick={clear}>AC</CalcButton>
            <CalcButton wd ='2' onClick={deleteValue}>DEL</CalcButton>
            <CalcButton onClick={appendMemory}>ANS</CalcButton>
            <CalcButton onClick={openPar}>(</CalcButton>
            <CalcButton onClick={closePar}>)</CalcButton>
            <CalcButton onClick={appendOper}>/</CalcButton>
            <CalcButton onClick={appendValue}>7</CalcButton>
            <CalcButton onClick={appendValue}>8</CalcButton>
            <CalcButton onClick={appendValue}>9</CalcButton>
            <CalcButton onClick={appendOper}>*</CalcButton>
            <CalcButton onClick={appendValue}>4</CalcButton>
            <CalcButton onClick={appendValue}>5</CalcButton>
            <CalcButton onClick={appendValue}>6</CalcButton>
            <CalcButton onClick={appendOper}>-</CalcButton>
            <CalcButton onClick={appendValue}>1</CalcButton>
            <CalcButton onClick={appendValue}>2</CalcButton>
            <CalcButton onClick={appendValue}>3</CalcButton>
            <CalcButton onClick={appendOper}>+</CalcButton>
            <CalcButton onClick={appendValue}>0</CalcButton>
            <CalcButton onClick={appendDecimal}>.</CalcButton>
            <CalcButton wd='2' onClick={calculate}>=</CalcButton>
        </>
    );
}
export default CalcElements;