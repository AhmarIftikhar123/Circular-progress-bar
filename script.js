const number = document.getElementById("number"),
  circle = document.querySelector(".circle");

window.addEventListener("DOMContentLoaded", () => {
  let counter = 0;
  let speed = 50;
  setInterval(() => {
    if (counter === 100) {
      clearInterval();
    } else {
      counter++;
      number.textContent = counter + "%";
      circle.style.background = `conic-gradient(#8426ce ${
        counter * 3.6
      }deg, #efeeec 0deg)`;
    }
  }, speed);
});
