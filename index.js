// Import stylesheets
import './style.css';

// Write Javascript code!
const user = prompt("Please enter your name!");

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>hello ${user}</h1>`;