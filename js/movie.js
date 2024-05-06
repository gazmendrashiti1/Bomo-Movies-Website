
const button = document.querySelector("#myButton");
const modal = document.querySelector("#myModal");
const close = document.querySelector(".close");

button.addEventListener("click", function () {
  modal.style.display = "block";
});

close.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});



