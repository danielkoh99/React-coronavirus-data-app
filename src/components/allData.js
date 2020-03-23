import React, { useState } from "react";
import styled from "styled-components";
import CountrySelect from "./countryData";
import Chart from "./mainData";
import WorldStats from "./worldStats";

const Div = styled.div`
  text-align: center;
  grid-template-columns: 30% 30% 30%;
`;

const H1 = styled.h1`
  margin-bottom: 60px;
  margin-top: 60px;
`;

export default function Coronavirus() {
  let [responseObj, setResponseObj] = useState([]);
  let [countryOne, setCountryOne] = useState("");
  let [countryTwo, setCountryTwo] = useState("");
  let [countryThree, setCountryThree] = useState("");
  let [countryFour, setCountryFour] = useState("");
  let [countryFive, setCountryFive] = useState("");
  window.onload = function getStats() {
    fetch("https://corona.lmao.ninja/countries", { method: "GET" })
      .then(res => {
        if (res.status === 200) {
          //  console.log(res.status)
          res.json().then(res => {
            // console.log(res)
            setResponseObj(res);
            setCountryOne(res[0]);
            setCountryTwo(res[1]);
            setCountryThree(res[2]);
            setCountryFour(res[3]);
            setCountryFive(res[4]);
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <main>
      <Div>
        <h2 style={{ fontSize: 50 + "px" }}> Coronavirus data</h2>
        <H1>Get data by country</H1>
        <CountrySelect />

        <Chart
          responseObj={responseObj}
          countryOne={countryOne}
          countryTwo={countryTwo}
          countryThree={countryThree}
          countryFour={countryFour}
          countryFive={countryFive}
        />
        <H1>World statistics</H1>
        <WorldStats />
      </Div>
    </main>
  );
}

/* <Input
              placeholder="Enter your city"
              maxLength="30"
              onChange={e => setCountry(e.target.value)}
              type="text"
              required
            />*/
