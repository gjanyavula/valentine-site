const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const heartsContainer = document.querySelector(".hearts");
const questionCard = document.getElementById("questionCard");
const answerCard = document.getElementById("answerCard");

// Make hearts appear periodically
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "❤";

  const size = Math.random() * 10 + 14;
  heart.style.fontSize = size + "px";

  const left = Math.random() * 100;
  heart.style.left = left + "vw";

  const duration = Math.random() * 3 + 4;
  heart.style.animationDuration = duration + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), duration * 1000);
}

setInterval(createHeart, 600);

// No button dodges the cursor
noBtn.addEventListener("mouseover", () => {
  const cardRect = questionCard.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = cardRect.width - btnRect.width - 10;
  const maxY = cardRect.height - btnRect.height - 10;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY + 60;

  noBtn.style.position = "absolute";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

// Yes button: show second screen
yesBtn.addEventListener("click", () => {
  // hide first card, show love letter
  questionCard.classList.add("hidden");
  answerCard.classList.remove("hidden");

  // extra hearts burst
  for (let i = 0; i < 25; i++) {
    setTimeout(createHeart, i * 80);
  }
});
