const increaseButton = document.querySelector(".inc");
const decreaseButton = document.querySelector(".dec");
const resetButton = document.querySelector(".reset");
const span = document.getElementById("value");

function currentValue() {
  const spanVal = Number(document.getElementById("value").innerText);
  return spanVal;
}

function applyColor() {
  const spanVal = Number(document.getElementById("value").innerText);
  if (spanVal < 0) {
    span.style.color = "red";
  }
  if (spanVal === 0) {
    span.style.color = "black";
  }
  if (spanVal > 0) {
    span.style.color = "green";
  }
}

increaseButton.addEventListener("click", () => {
  const spanVal = currentValue();
  span.innerText = spanVal + 1;
  applyColor();
});

decreaseButton.addEventListener("click", () => {
  const spanVal = currentValue();
  span.innerText = spanVal - 1;
  applyColor();
});

resetButton.addEventListener("click", () => {
  const spanVal = currentValue();
  span.innerText = 0;
  span.style.color = "black";
});
