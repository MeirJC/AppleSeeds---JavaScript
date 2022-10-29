// Instructions
// We are going to use this star wars API to get information.
// We want to get information about 10 characters.
// We want the following information:
// 1. Name
// 2. Height
// 3. Hair Color
// 4. The planet they came from
// 5. Planet population
//
// Create the object structure like this:
// Each object will have the following:
// ● a key, the value of hair,
// ● a key, the value of height
// ● a key, the value of the name
// ● a key of the planet whose value is an object
// ○ inside that object you have a key, the value of the
// planets
// ● name and key, the value of the population.
//
// Note:
// When you fetch data from an API, here are the steps I like to
// do:
// 1) Fetch the raw data and display it in your console. Make
// sure there is no CORS or anything preventing you for
// fetching it.
// 2) Understand how the API is structured and understand
// where to look for the data you want.
// 3) Fetch the data you want and print it in the console
// 4) Many times I want to create an object of all the data I
// want because of the following reasons:
// - Less clutter. You have exactly the data you want without
// all the extra noise.
// - Sometimes you call several APIs and want to put them in
// one object.
// - You have one place where you have all of your API’s
// data.
// 5) I display it on the screen with no styling.
// 6) Only then I start styling it to my preference.
// We want to place it dynamically into the DOM without using
// any HTMLYou can display the data any way you would like. For good
// practice, I suggest you create a table or with flexbox and
// place the information there
