const axios = require('axios');
axios.get('http://api.openweathermap.org/geo/1.0/zip?zip=40509,US&appid=73f003fe3ba211516a32407b6f8e25b6')
    .then(function (response) {
        console.log(response);
    }) 
    .catch(function (error) {
        console.log(error);
    })
    .finally(function(){

    })      