import React from "react";

function ResultSection({ weatherData, tempType }) {
  const convertKtoF = (temp, type) => {
    return type === "fahrenheit"
      ? Math.floor(((temp - 273.15) * 9) / 5 + 32)
      : Math.floor(temp - 273.15);
  };

  return (
    <section className="search-result">
      <i className={`wi wi-owm-${weatherData.weather[0].id} display-1`}></i>
      <div className="result-description">
        <span>
          {weatherData.name}, {weatherData.sys.country}
        </span>
        <h3>{convertKtoF(weatherData.main.temp, tempType)}&deg;</h3>
        <h6>
          <span>
            Low: {convertKtoF(weatherData.main.temp_min, tempType)}&deg;
          </span>
          {" - "}
          <span>
            High: {convertKtoF(weatherData.main.temp_max, tempType)}&deg;
          </span>
        </h6>
        <h4>{weatherData.weather[0].description}</h4>
      </div>
    </section>
  );
}

export default ResultSection;