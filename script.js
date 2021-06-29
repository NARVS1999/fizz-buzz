
let input = document.getElementById("user-input-number");
let output; 

function deleteButton() {
    let result = document.querySelector("p");
    result.remove();
}

input.onchange = function() {
    let answer = parseInt(input.value);
    if (isNaN(answer)) {
      output.textContent = 'You need to enter a number!';
      document.body.appendChild(output);
    } else {
        for (let i = 1; i <= answer; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                output = document.createElement("P");
                output.innerText = "FizzBuzz";
                document.body.appendChild(output);
            } else if (i % 3 === 0) {
                output = document.createElement("P");
                output.innerText = "Fizz";
                document.body.appendChild(output);
            } else if (i % 5 === 0) {
                output = document.createElement("P");
                output.innerText = "Buzz";
                document.body.appendChild(output);
            } else {
                output = document.createElement("P");
                output.innerText = i;
                document.body.appendChild(output);
            }
        }    
    }
}