const cardsContainer = document.getElementById("cards");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

let currentIndex = 0;
const cards = cardsContainer.children;
const gap = 18;

function getVisibleCardsCount() {
  if (window.innerWidth <= 748) return 1;
  return 3;
}

function updateCardsView() {
  const visibleCards = getVisibleCardsCount();
  const maxIndex = Math.max(0, cards.length - visibleCards);
  currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));

  if (visibleCards < cards.length) {
    if (window.innerWidth <= 748) {
      cardsContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    } else {
      const cardWidth = cards[0].getBoundingClientRect().width;
      const offset = currentIndex * (cardWidth + gap);
      cardsContainer.style.transform = `translateX(-${offset}px)`;
    }
  } else {
    cardsContainer.style.transform = "";
  }
}


leftArrow.addEventListener("click", () => {
  const visibleCards = getVisibleCardsCount();
  const maxIndex = Math.max(0, cards.length - visibleCards);
  currentIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex;
  updateCardsView();
});

rightArrow.addEventListener("click", () => {
  const visibleCards = getVisibleCardsCount();
  const maxIndex = Math.max(0, cards.length - visibleCards);
  currentIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
  updateCardsView();
});

window.addEventListener("resize", () => {
  currentIndex = 0;
  updateCardsView();
});

window.addEventListener("load", () => {
  updateCardsView();
});

