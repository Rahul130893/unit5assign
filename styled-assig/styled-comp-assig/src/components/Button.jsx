
import styled from "styled-components"

const Button=styled.button`
width:120px;
height:35px;
padding:5px;

font-weight: 700;
background: ${(props)=>props.type==="primary" ? "blue":"while"};
color: ${(props)=>
{
    if(props.type==="primary"){
        return "white"
    }else if(props.type==="link"){
        return "blue"
    }
}};
border: ${(props)=>{
    if(props.type==="dashed"){
        return "dashed 1px"
    }else if(props.type==="text" || props.type==="link" || props.type==="primary"){
        return "none"
    }
}}




`
export {Button}