import React, { useState } from "react";
import axios from "axios";
import { debounce } from "lodash";
import ResultSection from "./ResultSection";
import FormSubmit from "./FormSubmit";

function AsideLeft() {
  const [weatherData, setWeatherData] = useState({
    weather: [{ id: "", description: "" }],
    main: { temp: "", temp_min: "", temp_max: "" },
    name: "",
    sys: { country: "" },
  });
  const [searchVal, setSearchVal] = useState("dfd");
  const [error, setError] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [tempType, setTempType] = useState("fahrenheit");

  const handleSearch = debounce((e) => {
    setSearchVal(e.target.value);
   
  }, 500);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const weatherAPI = `http://api.openweathermap.org/data/2.5/weather?q=${searchVal}&appid=107a420b6f4b7dd8c2243eb7a310e6fe`;
    axios
      .get(weatherAPI)
      .then((weatherRes) => {
        setShowResult(true);
      
        setWeatherData({
          weather: weatherRes.data.weather,
          main: weatherRes.data.main,
          name: weatherRes.data.name,
          sys: weatherRes.data.sys,
        });
        
        setError("");
      
      })
      .catch((err) => setError(err));
  };

  const handleTempTypeChange = (e) => {
    setTempType(e.target.value);
  };

  return (
    <aside id="left-side">
      <h3 className="aside-h3">Find Current Weather Conditions</h3>
      <h3 className="aside-h3">Of Any City In The World</h3>
      <input
        onChange={handleSearch}
        id="search"
        type="text"
        placeholder="Enter city..."
      />
      {error && <div id="error">There is no such city in the world</div>}
      <FormSubmit
        handleFormSubmit={handleFormSubmit}
        tempType={tempType}
        handleTempTypeChange={handleTempTypeChange}
      />
      {showResult && (
        <ResultSection weatherData={weatherData} tempType={tempType} />
      )}
    </aside>
  );
}

export default AsideLeft;