const api_key = "3d5add607b486f1397e0be91a7714510";

const weatherDataEl = document.getElementById("weather-data");

const cityInputEl = document.getElementById("city-input");

const formEl = document.querySelector("form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const cityValue = cityInputEl.value;
  getWeatherData(cityValue);
});

async function getWeatherData() {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q${cityValue}&apiid=${api_key}`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
