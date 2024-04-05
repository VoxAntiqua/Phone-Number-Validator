const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const allNumbers = /[0-9]{10}/;

const validNumbers = [
    allNumbers
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