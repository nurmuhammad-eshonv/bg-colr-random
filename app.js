const body = document.querySelector("body");
const container = document.querySelector(".container");
const colorText = document.querySelector(".color-text");

const values = [
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
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

function getColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.trunc(Math.random() * values.length);
    color += values[randomNumber];
  }
  return color;
}

function setColor() {
  const color1 = getColor();
  const color2 = getColor();
  const randomDeg = Math.trunc(Math.random() * 360);
  const bgColor = `linear-gradient(${randomDeg}deg, ${color1}, ${color2})`;
  body.style.backgroundImage = bgColor;
  colorText.textContent = bgColor;
}

document.addEventListener("DOMContentLoaded", function() {
  setColor();
});

container.addEventListener("click", setColor);
