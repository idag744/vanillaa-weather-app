function showTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = response.data.main.temp;

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;

  let weatherCondition = document.querySelector("#description");
  weatherCondition.innerHTML = response.data;
  axios.get(apiurl).then(showTemperature);
}

let city = document.querySelector("#cityInput");

let apikey = "193326794b34c5f0cbbc22b088ed5be5";

let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
