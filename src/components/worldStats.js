import React, { useState } from "react";
import StatsCondition from '../conditions/statsConditions'
import styled from 'styled-components'
const Button = styled.button`
  color: blue;
  font-size: 1.5em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid blue;
  border-radius: 3px;
  :hover{
    cursor:pointer
  }
`;

export default function WorldStats() {
  let [stats, setStats] = useState({});
 function getAllStatistics(){
    fetch("https://corona.lmao.ninja/all", { method: "GET" })
    .then(res => {
      if (res.status === 200) {
        console.log(res.status);
        res.json()
        .then(res => {
          console.log(res);
          setStats(res);
        });
      }
    })
    .catch(err => {
      console.log(err);
    });
 } 

  return (
      <div>
          <Button onClick={getAllStatistics}>Get world stats</Button>
          <StatsCondition stats={stats}/>
      </div>
    
  );
}
