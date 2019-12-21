// client-side js
// run by the browser each time your view template is loaded


import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';

async function getAir(country) {
                  const response = await fetch(
                    "https://api.waqi.info/feed/" +
                      country +
                      "/?token=85b11a1905f8c79ba68eba7a48593096ad35d271"
                  );
                  const data = await response.json();
                  let airQuality = data.data.aqi;
                  let pm25 = data.data.iaqi.pm25.v;
                  let pm10 = data.data.iaqi.pm10.v;
                  let Ozone = data.data.iaqi.o3.v;
                  let NitrogenDioxide = data.data.iaqi.no2.v;
                  let SulphurDioxide = data.data.iaqi.so2.v;
                  let CarbonMonoxyde = data.data.iaqi.co.v;

                  // console.log(airQuality, pm25, pm10,Ozone,NitrogenDioxide,SulphurDioxide,CarbonMonoxyde);

                  //return airQuality;
                  document.getElementById("psi-9").textContent = airQuality;
                  document.getElementById("pm25-9").textContent = pm25;
                  document.getElementById("pm10-9").textContent = pm10;
                  document.getElementById("Ozone-9").textContent = Ozone;
                  document.getElementById(
                    "NitrogenDioxide-9"
                  ).textContent = NitrogenDioxide;
                  document.getElementById(
                    "SulphurDioxide-9"
                  ).textContent = SulphurDioxide;
                  document.getElementById(
                    "CarbonMonoxyde-9"
                  ).textContent = CarbonMonoxyde;
                }

                async function getWeather(country) {
                  const response = await fetch(
                    "https://api.openweathermap.org/data/2.5/weather?q=" +
                      country +
                      "&appid=9013d3098e07b3421469bf162b8a561f"
                  );
                  const data = await response.json();
                  let weather = data.weather[0].main;
                  let WeatherDescription = data.weather[0].description;

                  let temp = data.main.temp - 273.15;
                  let pressure = data.main.pressure;
                  let humidity = data.main.humidity;
                  let visibility = data.visibility;
                  let windSpeed = data.wind.speed;
                  let clouds = data.clouds.all;
                  let icon = data.weather[0].icon;

                  console.log(
                    weather,
                    temp,
                    pressure,
                    humidity,
                    visibility,
                    windSpeed,
                    clouds,
                    WeatherDescription
                  );
                  document.getElementById("weather-9").textContent = weather;
                  document.getElementById(
                    "WeatherDescription-9"
                  ).textContent = WeatherDescription;
                  document.getElementById(
                    "Temperature-9"
                  ).textContent = temp.toFixed(2);
                  document.getElementById(
                    "RelativeHumidity-9"
                  ).textContent = humidity;
                  document.getElementById(
                    "visibility-9"
                  ).textContent = visibility;
                  document.getElementById(
                    "AtmostphericPressure-9"
                  ).textContent = pressure;
                  document.getElementById("wind-9").textContent = windSpeed;
                }