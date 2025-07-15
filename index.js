const cardsContainer = document.getElementById("cards");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

let currentIndex = 0;

function isMobile() {
  return window.innerWidth <= 748;
}

function updateCardsView() {
  if (isMobile()) {
    cardsContainer.style.transition = "transform 0.3s ease-in-out";
    cardsContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  } else {
    // На ПК/таблетах transform не нужен
    cardsContainer.style.transition = "none";
    cardsContainer.style.transform = "none";
  }
}

// Влево = назад
leftArrow.addEventListener("click", () => {
  if (isMobile()) {
    const cards = cardsContainer.children;
    const maxIndex = cards.length - 1;
    currentIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex;
  } else {
    // ПК/таб: перелистать назад — последнюю карточку вставить в начало
    const last = cardsContainer.firstElementChild;
    cardsContainer.appendChild(last);
  }
  updateCardsView();
});

// Вправо = вперёд
rightArrow.addEventListener("click", () => {
  if (isMobile()) {
    const cards = cardsContainer.children;
    const maxIndex = cards.length - 1;
    currentIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
  } else {
    // ПК/таб: перелистать вперёд — первую карточку вставить в конец
    const first = cardsContainer.lastElementChild;
    cardsContainer.prepend(first);
  }
  updateCardsView();
});

// Обновление при ресайзе
window.addEventListener("resize", () => {
  currentIndex = 0;
  updateCardsView();
});

window.addEventListener("load", updateCardsView);
