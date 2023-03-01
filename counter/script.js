const increase = document.getElementById("increment");
const counter = document.getElementById("count");
const decrease = document.getElementById('decrement');

let count = 0;

decrease.addEventListener("click", () => {
    count--;
    counter.textContent = count;
    if (count > 0) {
        counter.style.color = "green";
    } else if (count < 0) {
        counter.style.color = "red";
    } else {
        counter.style.color = "yellow";
    }
})

increase.addEventListener("click", () => {
    count++;
    counter.textContent = count;
    if (count > 0) {
        counter.style.color = "green";
    } else if (count < 0) {
        counter.style.color = "red";
    } else {
        counter.style.color = "yellow";
    }
})


//JavaScript program written by t3nsor