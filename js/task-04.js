document.addEventListener("keydown", event => {
  console.log("Keydown: ", event);
});

document.addEventListener("keyup", event => {
  console.log("Keyup: ", event);
});


const counter = document.querySelector("#value");
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
let counterValue = 0;

const increaseCounterValue = () => {
    counterValue = counterValue +1;
    counter.textContent = counterValue;
};
const decreaseCounterValue = () => {
    counterValue = counterValue -1;
    counter.textContent = counterValue;
};
incrementBtn.addEventListener("click", increaseCounterValue);
decrementBtn.addEventListener("click", decreaseCounterValue);
