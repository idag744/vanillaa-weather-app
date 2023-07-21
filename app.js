function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;

  let weatherCondition = document.querySelector("#description");
  weatherCondition.innerHTML = response.data.weather[0].description;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = Math.round(response.data.main.humidity);

  let wind = document.querySelector("#windSpeed");
  wind.innerHTML = Math.round(response.data.main.wind.speed);
}

function searchCity(event) {
  let apikey = "193326794b34c5f0cbbc22b088ed5be5";

  let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityElement}&appid=${apikey}&units=metric`;

  axios.get(apiurl).then(displayTemperature);
}

let cityElement = document.querySelector("#cityInput");

cityElement.addEventListener("submit", searchCity);
