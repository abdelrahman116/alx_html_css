document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".ex");
  const bar = document.querySelector(".holberton_school-icon-menu");
  const links = document.querySelector(".navLink");

  button.addEventListener("click", () => {
    bar.style.display = "block";
    button.style.display = "none";
    links.style.display = "none";
  });
  bar.addEventListener("click", function () {
    bar.style.display = "none";
    button.style.display = "flex";
    links.style.display = "block";
  });
});
