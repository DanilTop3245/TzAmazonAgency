const cardsContainer = document.getElementById("cards");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

// Нажатие влево – показать предыдущую (вставить в конец)
leftArrow.addEventListener("click", () => {
  const first = cardsContainer.firstElementChild;
  cardsContainer.appendChild(first);
});

// Нажатие вправо – показать следующую (вставить в начало)
rightArrow.addEventListener("click", () => {
  const last = cardsContainer.lastElementChild;
  cardsContainer.prepend(last);
});
