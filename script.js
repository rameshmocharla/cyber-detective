

const startBtn = document.getElementById("startBtn");
const caseScreen = document.getElementById("caseScreen");
const hero = document.querySelector(".hero");
const xpDisplay = document.getElementById("xp");
const feedback = document.getElementById("feedback");
const backBtn = document.getElementById("backBtn");

let xp = 0;
let answered = false;

startBtn.addEventListener("click", () => {
  hero.classList.add("hidden");
  caseScreen.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelectorAll(".choice").forEach((button) => {
  button.addEventListener("click", () => {
    if (answered) return;

    answered = true;

    const correct = button.dataset.answer === "correct";

    document.querySelectorAll(".choice").forEach((choice) => {
      choice.disabled = true;

      if (choice.dataset.answer === "correct") {
        choice.classList.add("correct");
      }
    });

    if (correct) {
      xp += 100;
      xpDisplay.textContent = xp + " XP";
      feedback.textContent =
        "✓ Excellent detective! You identified the suspicious link. +100 XP";
      feedback.style.color = "#00ff9d";
    } else {
      button.classList.add("wrong");
      feedback.textContent =
        "✗ Not quite! Never trust unexpected account warnings. Inspect links safely first.";
      feedback.style.color = "#ff7979";
    }
  });
});

backBtn.addEventListener("click", () => {
  caseScreen.classList.add("hidden");
  hero.classList.remove("hidden");

  answered = false;

  document.querySelectorAll(".choice").forEach((button) => {
    button.disabled = false;
    button.classList.remove("correct", "wrong");
  });

  feedback.textContent = "";

  window.scrollTo({ top: 0, behavior: "smooth" });
});
