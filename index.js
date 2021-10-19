// sidebar toggle
const openBtn = document.querySelector(".toggle-btn");
const closeBtn = document.querySelector(".fa-times");
const sideBar = document.querySelector(".sidebar-container");

openBtn.addEventListener("click", () => {
  sideBar.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  sideBar.classList.remove("show");
});
// end of sidebar toggle
