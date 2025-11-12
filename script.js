// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Typing animation
const typedText = document.getElementById("typed");
const textArray = [
  "Data Science 💻",
  "Data Science Student 📊",
  "AI Learner 🤖",
  "Creative Coder ⚡"
];
let textIndex = 0;
let charIndex = 0;
let typingSpeed = 100;
let erasingSpeed = 70;
let newTextDelay = 1500;

function type() {
  if (charIndex < textArray[textIndex].length) {
    typedText.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    textIndex++;
    if (textIndex >= textArray.length) textIndex = 0;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (textArray.length) setTimeout(type, 1000);
});
