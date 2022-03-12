const openModalBtn = document.querySelector(".open-button");
const bodyArea = document.querySelector(".total-body");
console.log(bodyArea);

const closeModalBtn = document.querySelector(".close");
// console.log(closeModalBtn);

const modalBox = document.getElementById("myModal");
// console.log(modalBox);

const pageOverlay = document.querySelector(".page-overlay");

openModalBtn.addEventListener("click", () => {
  modalBox.style.display = "block";
  pageOverlay.style.visibility = "visible";
});

closeModalBtn.addEventListener("click", () => {
  modalBox.style.display = "none";
  pageOverlay.style.visibility = "hidden";
});
console.log(window);
// window.addEventListener("click", () => {
//   modalBox.style.display = "none";
//   pageOverlay.style.visibility = "hidden";
// });

// window.onclick = function(event) {
//   if (event.target == modalBox) {
//     modalBox.style.display = "none";
//   }
