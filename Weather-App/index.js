const api_key = "8bb1588799b9dd481452af46ef0811be";

const weatherDataEl = document.getElementById("weather-data");

const cityInputEl = document.getElementById("city-input");

const formEl = document.querySelector("form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const cityValue = cityInputEl.value;
  console.log(cityValue);
  getWeatherData(cityValue);
});

async function getWeatherData(cityValue) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${api_key}&units=metric`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = response.json();

    console.log(data);
  } catch (error) {
    
  }
}
