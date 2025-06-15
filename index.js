const cardsContainer = document.getElementById("cards");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

leftArrow.addEventListener("click", () => {
  const first = cardsContainer.firstElementChild;
  cardsContainer.appendChild(first);
});

rightArrow.addEventListener("click", () => {
  const last = cardsContainer.lastElementChild;
  cardsContainer.prepend(last);
});
