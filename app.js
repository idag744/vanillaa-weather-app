function showTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = response.data.main.temp;

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;

  let weatherCondition = document.querySelector("#description");
  weatherCondition.innerHTML = response.data;
}

let apikey = "52ceb403b71724e4ec9a598d80f9ebaa";

let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=new York&appid=${apikey}`;

axios.get(apiurl).then(showTemperature);
