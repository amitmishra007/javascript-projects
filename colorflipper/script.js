const heroArea = document.querySelector(".hero-area");

const span = document.querySelector("span");
console.log(span.innerHTML);

const clickButton = document.getElementById("click-me");
console.log(clickButton);

function randomRGBColorGenerator() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const randomRGBColor = `rgb(${red},${green},${blue})`;
  return randomRGBColor;
}
let hexColor = "#";
const hexColorArray = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

// console.log(Math.floor(Math.random() * 10));

function randomHexColorGenerator() {
  for (let i = 0; i < 6; i++) {
    hexColor += hexColorArray[Math.floor(Math.random() * 16)];
  }
  console.log(hexColor);
  return hexColor;
}
// randomHexColorGenerator();

// clickButton.addEventListener("click", () => {
//   const randomRGBColor = randomRGBColorGenerator();
//   heroArea.style.backgroundColor = randomRGBColor;
//   span.style.color = randomRGBColor;
//   span.innerHTML = randomRGBColor;
// });

clickButton.addEventListener("click", () => {
  const randomHexColor = randomHexColorGenerator();
  heroArea.style.backgroundColor = randomHexColor;
  span.style.color = randomHexColor;
  span.innerHTML = randomHexColor;
  hexColor = "#";
});
