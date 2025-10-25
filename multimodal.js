const title = document.getElementById("title");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  title.textContent = "Button Clicked!";
  title.style.color = "yellow";
});
