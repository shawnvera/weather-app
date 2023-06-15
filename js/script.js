// Variables:
const API_KEY = "73f003fe3ba211516a32407b6f8e25b6";
const API_URL = "https://api.openweathermap.org";
let API_PATH = "/data/2.5/weather";
const ZIP_CODES = [];
let header = document.getElementById("header");
let userInput = document.getElementById("user-input");
let weatherBtn = document.getElementById("weather-btn");
let city = document.getElementById("city");

// Event listeners:
weatherBtn.addEventListener('click', init);
userInput.addEventListener('keyup', init);
window.addEventListener('load', init);

// Functions:
async function init() {
    ZIP_CODES.push(userInput);
    try {
        let data = await getWeatherData(ZIP_CODES);
        // call the getData function to retrieve the weather data
    } catch (error) {
        console.error(`ERROR: ${error}`);
    }
}
// make the api call by passing in the zip code as the parameter
// pass in a zip code

async function getWeatherData(zipcode) {
    // assume that the zipcode is valid
    // prepare the data and make the axios call
    let weatherData = {};
     ZIP_CODES.push(weatherData.zip);
    // trap for any errors on the backend
    // 400 error will be handled based on the return data
    // 200 is a successful call
    // create an object that holds the baseURL, params obj - zip api_key
    // independent and dynamic obj.
    let options = {
        method: 'get',
        baseURL: API_URL,
        params: {
            zip: zipcode,
            appid: API_KEY,
        }
    };
    // make the axios call and provide the options obj in the second argument (parameter)
    try {
        weatherData = await axios
            .get(API_PATH, options)
            .then(function (response) {
                return response.data;
            })
            .then(function (data) {
                return data;
            })
        console.log(weatherData);
        throw "this is working"
    } catch (error) {
        console.log(`ERROR: ${error}`)
    }
    return weatherData;
    
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

checkUserInput (){
    if (userInput = null) {
        alert("Zip Code Must Be Entered.")
    } Else if (userIinput.length != 5) {
        alert("Zip Code Must Be 5 Digits.")
    } Else if (userInput.typeOf != number) {
        alert("Zip Code must be numeric.")
    } Else 
    return fetchData;
}


init () {
    init function invoked on button click of weatherBtn
    
    
    setState();
    
    fetchData();

    displayTemperature();

    checkUserInput();
}

// # Object oriented #

let weatherObj = {
    header: "Weather App"
    page : [],
};
*/