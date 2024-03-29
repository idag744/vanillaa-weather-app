function formatDate(timestamp) {
  let hours = timestamp.getHours();

  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = timestamp.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  return `${day}, ${hours}:${minutes}`;
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;

  let weatherCondition = document.querySelector("#description");
  weatherCondition.innerHTML = response.data.weather[0].description;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = Math.round(response.data.main.humidity);

  let wind = document.querySelector("#speed");
  wind.innerHTML = Math.round(response.data.main.wind.speed);

  let dateElement = document.querySelector("#date");
  dateElement.innerHTML = formatDate(response.data.dt * 1000);

  let weatherIcon = document.querySelector("#icon");
  weatherIcon.setAttribute =
    ("src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
  weatherIcon.setAttribute = ("alt", response.data.weather[0].description);
}

function search(city) {
  let apikey = "19904507a7d7b1fe1d4783e56f872c1d";

  let city = document.querySelector("#city");
  city.innerHTML = cityInput.value;

  let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

  axios.get(apiurl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");

  search(cityInput.value);
}

let form = document.querySelector("#search-form");

form.addEventListener("submit", handleSubmit);

search("new york");
