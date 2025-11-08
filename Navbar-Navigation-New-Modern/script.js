const list = document.querySelectorAll(".navigation ul li");

function activateLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}

list.forEach((item) => item.addEventListener("click", activateLink));
