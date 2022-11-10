const body = document.querySelector("body");
const colorChangeBtn = document.querySelector(".color-change");

colorChangeBtn.addEventListener("click", () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let color = `rgb(${r}, ${g}, ${b})`;
  body.style.backgroundColor = color;
});
