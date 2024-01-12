let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let history = document.getElementById("history");

let string = "";
let historyString = "";
let arr = Array.from(buttons);

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      try {
        const result = eval(string);
        if (!isFinite(result)) {
          throw new Error("Error: Division by zero or invalid operation");
        }
        input.value = result;

        // Update history
        historyString += `${string} = ${result}\n`;
        history.textContent = historyString;

        // Reset current expression
        string = "";
      } catch (error) {
        string = "";
        input.value = "Can't divide by zero";
      }
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
