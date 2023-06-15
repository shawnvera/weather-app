const API_KEY = "73f003fe3ba211516a32407b6f8e25b6";
const API_URL = "https://api.openweathermap.org";
let API_PATH = "/data/2.5/weather";
const ZIP_CODES = [40511, 90210];
/* 
const axios = require('axios');
axios.get('http://api.openweathermap.org/geo/1.0/zip?zip=40509,US&appid=73f003fe3ba211516a32407b6f8e25b6')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {

    })
*/

window.addEventListener('load', init);

 async function init() {
    console.log("hello world");
    let data = await getWeatherData(ZIP_CODES[0]);
    // call the getData function to retrieve the weather data
}

// make the api call by passing in the zip code as the parameter
// pass in a zip code

async function getWeatherData(zipcode){
    // assume that the zipcode is valid
// prepare the data and make the axios call
let weatherData = {};
try {
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
    weatherData = await axios.get(API_PATH, options)
    .then(function (response) {
        return response.data;
    })
    .then(function (data){
return data;
    })
console.log(weatherData);
    throw "this is working"
} catch (error) {
console.log(error);
}
return weatherData;
}