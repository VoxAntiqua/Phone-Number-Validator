const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const isValidNumber = (num) => {
};

checkBtn.addEventListener("click", () => {
    if (userInput.value === "") {
        alert("Please provide a phone number");
        return;
        }
    
        resultsDiv.textContent = `You entered ${userInput.value}`;
    }
);

clearBtn.addEventListener("click", () => {
    resultsDiv.textContent = "";
});