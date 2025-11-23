// 1. Write code to allow visitors of the page to customize it to their liking. There is a
// form on the page that accepts a name (to be used in a greeting when the user visits
// the page) and a color picker to allow the user to choose their preferred background
// color/foreground color combination. Write the necessary code to capture these values
// when the form is submitted (prevent the default action on the form submission button to
// achieve this) and store these values in localStorage (so that it persists on the user’s
// computer and their preferences are saved indefinitely). Next, write a function to apply
// the preferences if they have been set and call it each time the page loads. You may
// also want to call this function again when the user saves their preferences to
// immediately apply them. Make sure you also notify the user somehow that the preferences
// were saved.


let form = document.getElementById("preferences-form");  // Point variable "form" to selected form element

let username = document.getElementById("name");  // Point variable "username" to selected name element
let backgroundColor = document.getElementById("background-color");  // Point variable "backgroundColor" to selected background color element
let foregroundColor = document.getElementById("foreground-color");  // Point variable "foregroundColor" to selected foreground color element

let greeting = document.getElementById("greeting");  // Point variable "greeting" to selected greeting element

document.addEventListener("DOMContentLoaded", () => {  // Have document listen for when the page loads
    applyPreferences();  // Apply preferences when the page loads
});

form.addEventListener("submit", event => {  // Have form listen for when a submit event occurs
    event.preventDefault();  // Prevent default behavior

    localStorage.setItem("username", username.value);  // Set item "username"
    localStorage.setItem("backgroundColor", backgroundColor.value);  // Set item "backgroundColor"
    localStorage.setItem("foregroundColor", foregroundColor.value);  // Set item "foregroundColor"

    applyPreferences();  // Apply preferences
})

function applyPreferences() {
    document.body.style.backgroundColor = localStorage.getItem("backgroundColor");  // Set background color to background color value in localStorage
    document.body.style.color = localStorage.getItem("foregroundColor");  // Set foreground color to foreground color value in localStorage
    greeting.innerText = "Hello " + localStorage.getItem("username") + "!";  // Set greeting to altered username value in localStorage

}
