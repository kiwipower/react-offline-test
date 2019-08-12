# React Offline Test

## What is this?

We ask our JavaScript candidates to take this test as part of our recruitment process. This is step one. If we like your submission we will invite you in for (probably one) technical interview where we will have a chat and ask you to do some pair programming. 

### What should it do?

Your task is to write a React application that displays the current mix of energy generation in the UK (i.e. how much nuclear, wind, solar etc.).

We have provided an empty React app to get you started. We have also included details about an existing API that you can call to load the data that you should display. 

### How should it work?

Definitely using React! 

How you decide to load and show the data is entirely up to you. 
You are free to use any libraries that you want (via `npm`) and you can choose how you wish to display the data. Some suggestions are:

* Huge numbers
* Icons with numbers
* A pie chart (or perhaps something more creative)
* Relative sized colour bands in a giant unicorn's rainbow puke

But please remember that we are looking for clean, readable, well-factored solutions, not the fanciest charting library you can find. Do not assume that a more complicated solution is better. 

## Getting started

* Get the dependencies - `npm install`
* Run the app - `npm start` - it will be available at https://localhost:8080
* Write your code, starting with `app.jsx`

### Where can I find the UK energy generation data?

Here: https://api.carbonintensity.org.uk/generation

An example response is in `example_api_response.json`, where you can see that the data includes the relative percentage values of a variety of fuels
for 1 settlement period (half hour block). A live call to the API will give you the data for the latest complete settlement period. This is absolutely fine for the purposes of this test - you do not need to worry about any larger time periods.

An existing website that shows this data is here: https://gridwatch.co.uk/

### Anything else I should know?

We like automated testing.

## FAQs

##### What language features can I use?

Any ES7 features (or earlier).

##### Is it OK for me to use 'helper' libraries like Lodash?

Yes, you can use any libraries.

##### How do I submit my finished test?

Let us know that you're done and we will clone it in GitHub.