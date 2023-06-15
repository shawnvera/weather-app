// Variables:
let userInput = document.getElementById("user-input");
const API_KEY = "73f003fe3ba211516a32407b6f8e25b6";
const API_URL = "https://api.openweathermap.org";
let API_PATH = `/data/2.5/weather`;
const ZIP_CODES = [];
let header = document.getElementById("header");

let weatherBtn = document.getElementById("weather-btn");
let city = document.getElementById("city");

// Event listeners:
userInput.addEventListener('input', checkUserData); // change function to updateZipCode
weatherBtn.addEventListener('click', getWeatherData);
window.addEventListener('load', init);

// Functions:
async function init(e) {
    // ZIP_CODES.push(userInput.value);
    // console.log(ZIP_CODES);
    // try {
    //     let data = await getWeatherData(ZIP_CODES);
    //     // call the getData function to retrieve the weather data
    // } catch (error) {
    //     console.error(`ERROR: ${error}`);
    // }
}
// make the api call by passing in the zip code as the parameter
// pass in a zip code

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
        console.log(`ERROR: ${error}`);
    }
}










function setState(weatherData) {
    city.textContent = getWeatherData.city;
};







/*
fetchData() {
    Axios
    send API key and user input to API
    calls API
    return data in global scope variable
    error catch (bad user input, timeout, etc...)
    showError - alert
}

displayTemperature() {
compute temperature? based on num param in required measures
return it or update the UI
}

renderUI(){
currentPage = {};
if statement to determine which state is current

}
*/

function checkUserData(e) {
    if (userInput.value == "") {
        document.getElementById("error-text").textContent = "Zip Code Must Be Entered.";
    } else if (userInput.value.length !== 5) {
        document.getElementById("error-text").textContent = "Zip Code Must Be 5 Digits."
    } else {
        weatherObj.zipcode = userInput.value;
        document.getElementById("error-text").textContent = "";
    }
}


// init () {
// init function invoked on button click of weatherBtn


// setState();

// fetchData();

// displayTemperature();

// checkUserInput();
// }

// // # Object oriented #

let weatherObj = {
    header: "Weather App",
    page: [],
    zipcode: "",
    weatherData: [],
    city: "",
}