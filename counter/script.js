const increase = document.getElementById("increment");
const counter = document.getElementById("count");
const decrease = document.getElementById('decrement');

let count = 0;

decrease.addEventListener("click", () => {
    count--;
    counter.textContent = count;
})

increase.addEventListener("click",() => {
    count++;
    counter.textContent = count;
})

if (counter > 0) {
    counter.style.color = green;
}
//JavaScript program written by t3nsor