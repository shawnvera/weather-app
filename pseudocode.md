MoSCoW
Must have
requirements

Should have

Could have
local storage = ??

Won't have
AI/ML
Ability to store specific user data


#Procedural#
START
How to handle successful and unsucessful calls to the API?
INIT - variables, functions, steps, assumptions, known-knowns (requirements), known-unknowns
Ask questions:
how do we use axios to get data and display it?
how to fetch location data from the API? - use documentation on the website
API Key = 73f003fe3ba211516a32407b6f8e25b6


how is it going to be used?
Step 1: user goes to the site
Step 2: user enters the zip code and clicks the button/presses enter
Step 3: the user view the data returned from the API
Step 3.b: the user views the error message

How is state represented? what is state?
currentWeatherData "retrieved data" may start as "null"

userInput = {
    currentValue : "40511" // 5 digits, no characters, no special characters
    previousSearches : [
        {
            requestData: "40511",
            resultData: {...},
            requestTime : ... 
        }
        {
            requestData : "90210",
            resultData : {...},
            requestTime : ... 
        }
    ]
}

buildTheUi{
Present the UI
H1 Weather App
input       button
}

what are our atoms, molecules, and organisms?

data box


how is it going to be viewed on desktop or mobile?
how to display the data?


waiting for user input

receive user input
modify the UI to display an error or the weather data from the API


END

#Functional#

init (){
    steps?
    variables
    setState()
    event listeners (click, enter) - > map it to a function call
    -use an onchange listener
}


displayTemperature() {
    compute temperature? based on num param
    return it or update the UI

}

send API key and user input to API
fetchData(){
    what happens?
    - axios ? GET, where do we get data from? What do we send to the API to request weather data?
    -send user input, key
    -call to API
    -error catch (bad zip code)
        -showError - alert
}

setState(returned data){}

checkUserInput (){
    make sure the text field provides the input
    input length is 5 digits, no alpha, no special chars.
    what to do when we have an error?
        -showError - alert
    what to do when we have good user input?
        -fetchData();
}

rnderUI(){
    what does that mean?
    look in state to seee what we need to display?

}

#Object oriented#