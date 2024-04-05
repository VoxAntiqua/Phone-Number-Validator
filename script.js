const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const allNumbers = /[0-9]{10}/;
const dashes = /(1 )?[0-9]{3}-[0-9]{3}-[0-9]{4}/;
const parentheses = /1?\([0-9]{3}\)[0-9]{3}-[0-9]{4}/;
const spaces = /1 [0-9]{3} [0-9]{3} [0-9]{4}/;
const countryCode = /1 \([0-9]{3}\) [0-9]{3}-[0-9]{4}/;

const validNumbers = [
    allNumbers,
    dashes,
    parentheses,
    spaces,
    countryCode
];

const isValidNumber = (num) => 
    validNumbers.some((regex) => regex.test(num));

checkBtn.addEventListener("click", () => {
    if (userInput.value === "") {
        alert("Please provide a phone number");
        return;
        }
    
        resultsDiv.textContent = isValidNumber(userInput.value) 
            ? "Valid " : "Invalid ";
        resultsDiv.textContent += `US number: ${userInput.value}`;
    }
);

clearBtn.addEventListener("click", () => {
    resultsDiv.textContent = "";
});