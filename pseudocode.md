# Procedural #

START

INIT - variables, functions, (declared in functional pseudo) steps, assumptions, known-knowns (requirements), known-unknowns

    **Steps:**

    Step 1: user goes to the webpage
    Step 2: user enters the zip code then clicks the BUTTON or presses enter (EVENT LISTENERS).
    Step 3: webpage ACCESSES weather data on the API (AXIOS)
    Step 4: the webpage will DISPLAY the data returned from the API
    Step 5: the user will either VIEW the data or an ERROR message.

    **Assumptions:**

    1. User already knows zip code for their area.

    **Known-knowns (requirements)**

    1. use API at https://openweathermap.org/ for weather data.
    2. allow the user to enter zip code and press button to load weather data
    3. run an "onClick" or "onSubmit" that executes an Axios GET to retrieve data
    4. Catch ERRORs on the Axios request
        a. if request is successful display the following in a mobile app format:
            i. city name
            ii. current weather conditions
            iii. current temp in Kelvin, Fahrenheit, and Celsius
            iv. unique image based on the current temp (read API docs as icons are built in)
        b. if unsuccessful show a specific ERROR message (zip code incorrect, timeout error, etc...)
    5. user should be able to enter new zip code to get weather at a different location without reloading
    6. design should be responsive using bootstrap and applies atomic design principles

    **known-unknowns (stretch goals?)**

    1. use JS to render entire app
    2. get weather data based on user loc (offer both options)
    3. multiple locs
    4. save location data in local storage
    5. use more data provided by the API
    6. keep track of user's current page (in case they accidentally refresh)
    7. dynamically change the CSS with JS

INPUT - user zip code

RENDER - weather data from API

DISPLAY - weather data

END

# Functional #

**Variables:**

userInput = zip code; -- this needs to have requirements (ex: at least 5 numeric digits)
weatherBtn = document.getElementById("weather-btn");


**Event listeners:**
weatherBtn.addEventListener('click', init);
userInput.addEventListener('onChange', init);

**Functions:**

setState() {
        change UI based on status of user
    }
    
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

setState(returned data){} -- not sure what this would do at the moment?

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

# Object oriented #

weatherObj = {};