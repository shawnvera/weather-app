// Variables:
let userInput = document.getElementById("user-input");
const API_KEY = "73f003fe3ba211516a32407b6f8e25b6";
const API_URL = "https://api.openweathermap.org";
let API_PATH = `/data/2.5/weather`;
const ZIP_CODES = [];
let header = document.getElementById("header");
let weatherBtn = document.getElementById("weather-btn");
let city = document.getElementById("city");
const weatherObj = {
    header: "Weather App",
    page: [],
    zipcode: "",
    weatherData: [],
    city: "",
}
console.log(weatherObj);
// Event listeners:
userInput.addEventListener('input', updateZipCode);
weatherBtn.addEventListener('click', getWeatherData);
window.addEventListener('load', renderUI);
// Functions:
function renderUI() {
    document.getElementById("city").innerHTML = weatherObj.weatherData[0].name;
    const kelvinTemp = Math.round(weatherObj.weatherData[0].main.temp);
    document.getElementById("kelvin").innerHTML = kelvinTemp + " Kelvin"; 
    document.getElementById("condition").innerHTML = weatherObj.weatherData[0].weather[0].main;
    document.getElementById("fahrenheit").innerHTML = Math.round(kelvinToFahrenheit(kelvinTemp)) + " Fahrenheit";
    document.getElementById("celcius").innerHTML = Math.round(kelvinToCelcius(kelvinTemp)) + " Celcius";
    document.getElementById("img").innerHTML = weatherObj.weatherData[0].weather[0].icon; 
}
function kelvinToCelcius(kelvinTemp) {
    let celcius = parseInt(kelvinTemp) - 273.15;
    return celcius
}
function kelvinToFahrenheit(kelvinTemp) {
    let fahrenheit = (kelvinTemp - 273.15) * 9 / 5 + 32
    return fahrenheit;
}
async function getWeatherData(e) {
    let options = {
        method: 'get',
        baseURL: API_URL,
        params: {
            zip: weatherObj.zipcode,
            appid: API_KEY,
        }
    };
    try {
        await axios
            .get(API_PATH, options)
            .then(function (response) {
                return response.data;
            })
            .then(function (data) {
                weatherObj.weatherData.push(data);
            })
    } catch (error) {
        document.getElementById("error").innerHTML = (`ERROR: ${error}`);
    }
    renderUI();
}
function updateZipCode(e) {
    if (userInput.value == "") {
        document.getElementById("error-text").textContent = "Zip Code Must Be Entered.";
    } else if (userInput.value.length !== 5) {
        document.getElementById("error-text").textContent = "Zip Code Must Be 5 Digits."
    } else {
        weatherObj.zipcode = userInput.value;
        document.getElementById("error-text").textContent = "";
    }
}