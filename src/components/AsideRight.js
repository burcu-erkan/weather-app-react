import React, { useState, useEffect } from "react";
import LocalTime from "./LocalTime";
import axios from "axios";
const API_key = "d9f74750265ef9dc89f33cdb37eb1887"

function AsideRight() {
  const [currLocData, setCurrLocData] = useState({
    city: "",
    state: "",
    country: "",
  });

  const [currLocWeatherCond, setCurrLocWeatherCond] = useState({
    weather: [{ id: "", description: "" }],
    main: { temp: "", temp_min: "", temp_max: "" },
  });

  useEffect(() => {
    const currLocationAPI = "http://extreme-ip-lookup.com/json/";
    axios
      .get(currLocationAPI)
      .then(async (currLocationRes) => {
        const currWeatherApi = `http://api.openweathermap.org/data/2.5/weather?q=${currLocationRes.data.city}&appid=${API_key}`;
        const res = await fetch(currWeatherApi);
        const result = await res.json();
       console.log(result,"result");
       console.log(currLocationRes)
        setCurrLocWeatherCond({
          weather: result.weather,
          main: result.main,
        });
        setCurrLocData({
          city: currLocationRes.data.city,
          state: currLocationRes.data.region,
          country: currLocationRes.data.countryCode,
        });
      })

  }, []);
  const convertKtoF = (temp) => {
    return Math.floor(((temp - 273.15) * 9) / 5 + 32);
  };

  const minMaxTemp = (min, max) => {
    return (
      <h6>
        <span>Low: {convertKtoF(min)}&deg;</span>
        {" - "}
        <span>High: {convertKtoF(max)}&deg;</span>
      </h6>
    );
  };

  const { temp_min, temp_max, temp } = currLocWeatherCond.main;
  const { city, state, country } = currLocData;
  const { description, id } = currLocWeatherCond.weather[0];
  const customCl = `wi wi-owm-${id} display-1`;
  return (
    <aside id="right-side">
      <h3 className="aside-h3">Local Weather</h3>
      <div className="current-location">
        <span>{city}</span>
        <br />
        <span>{state}</span>
        {", "}
        <span>{country}</span>
      </div>
      <i className={customCl}></i>
      <h1>{convertKtoF(temp)}&deg;</h1>
      {minMaxTemp(temp_min, temp_max)}
      <h4>{description}</h4> 
      <LocalTime />
    </aside>
  );
}

export default AsideRight;