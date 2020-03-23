import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis,
    VictoryTheme, VictoryTooltip } from 'victory'




export default function Chart(props){

   // console.log(props)
  const data = [
    { country: 1, cases: props.countryOne.cases, label: props.countryOne.cases },
    { country: 2, cases: props.countryTwo.cases, label:props.countryTwo.cases},
    { country: 3, cases: props.countryThree.cases, label: props.countryThree.cases },
    { country: 4, cases: props.countryFour.cases, label: props.countryFour.cases },
    { country: 5, cases: props.countryFive.cases, label:  props.countryFive.cases }
  ];
  /*console.log(props.countryOne.country)
  console.log(props.countryTwo.country)
  console.log(props.countryThree.country)
  console.log(props.countryFour.country)
  console.log(props.countryFive.country)*/
    return (
    <div>
        <h1>5 countries with most sicknesses</h1>
   
      <VictoryChart width={330} height={200} theme={VictoryTheme.material}
        domainPadding={20}>
         
         
        <VictoryAxis 
        
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={[
            props.countryOne.country,
            props.countryTwo.country,
            props.countryThree.country,
            props.countryFour.country,
            props.countryFive.country]}
        />
         
         
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={x => `${x / 1000}k`}
        />
       
        <VictoryBar  
        labelComponent={<VictoryTooltip/>}
        data={data} x="country" y="cases" />
      </VictoryChart>
      </div>
    );
  }

