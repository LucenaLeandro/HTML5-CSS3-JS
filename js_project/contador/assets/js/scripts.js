var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber =0;

function increment() {
    // get info on Html, increment by 1 and return to html
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber
}

function decrement() {
    // get info on Html, decrement by 1 and return to html
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber
}
