const form = document.querySelector("#love-form");
const result = document.querySelector("#result");

form.addEventListener("submit", function (event) {
  // Stop the form from refreshing the page.
  event.preventDefault();

  const firstName = document.querySelector("#name-one").value.trim();
  const secondName = document.querySelector("#name-two").value.trim();

  if (firstName === "" || secondName === "") {
    result.textContent = "Please enter both names first.";
    return;
  }

  // Pick a playful score from 1 to 100.
  const score = Math.floor(Math.random() * 100) + 1;
  let message = "A fun match to explore!";

  if (score >= 80) {
    message = "A super sweet match!";
  } else if (score >= 50) {
    message = "There's a spark!";
  }

  result.textContent = `${firstName} + ${secondName}: ${score}% — ${message}`;
});