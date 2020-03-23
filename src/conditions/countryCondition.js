import React from "react";
import styled from "styled-components";

const Div = styled.div`
background-color:grey;
top:30px;
width: 300px;
border-radius:10px;
margin-left:auto;
margin-right:auto;
`;
const P = styled.p`
font-weight: 400;
font-size:  30px;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`


const Conditions = ({ countryData }) => {
  //console.log(countryData);
  return (
    <Div>
        {countryData.cases > 1 ?
        <div>
      <h1>{countryData.country}</h1>
  <P>Cases {""}:{countryData.cases}</P>
  <P>New cases {""}:{countryData.todayCases}</P>
  <P style={{color:'red'}}>Deaths {""}:{countryData.deaths}</P>
  <P style={{color:'green'}}>Recovered {""}:{countryData.recovered}</P>
  
  </div>
  :null}
    </Div>
    
  );
};

export default Conditions;
