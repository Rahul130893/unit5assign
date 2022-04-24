import styled from "styled-components"

const Flex=styled.div`
  width: 35%;
  height:200px;
  margin:auto;
  margin-top: 200px;
  border:1px solid grey;
  display: flex;
  flex-wrap: wrap;
  padding: 30px;

  & > Button{
      margin-left:30px;
      margin-top:20px;
    
  }


`

export {Flex}