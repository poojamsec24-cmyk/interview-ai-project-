// Read settings from URL
const params = new URLSearchParams(window.location.search);
const category = params.get("category");
const difficulty = params.get("difficulty");
let totalQuestions = parseInt(params.get("count"));
const questionBank = {
  hr: [
    "Tell me about yourself.",
    "Why should we hire you?",
    "What are your strengths?",
    "What are your weaknesses?",
    "Where do you see yourself in five years?",
    "Why do you want to work for our company?",
    "Describe your ideal work environment.",
    "How do you handle criticism?",
    "What motivates you?",
    "Tell me about a time you showed leadership."
  ],

  technical: [
    "Explain OOP concepts.",
    "What is a database index?",
    "Explain normalization.",
    "What is a foreign key?",
    "What is the difference between SQL and NoSQL?",
    "Explain the concept of recursion.",
    "What is an API?",
    "What is multithreading?",
    "Explain the SDLC process.",
    "What is the difference between GET and POST?"
  ],

  behavioral: [
    "Describe a challenge you faced.",
    "Tell me about a conflict at work.",
    "How do you handle pressure?",
    "Describe a time you failed and what you learned.",
    "Tell me about a time you worked in a team.",
    "Describe a situation where you solved a difficult problem.",
    "Tell me about a time you took initiative.",
    "Describe a time you had to meet a tight deadline.",
    "Tell me about a time you disagreed with your manager.",
    "Describe a time you adapted to change."
  ]
};



let questions = questionBank[category].slice(0, totalQuestions);

let currentIndex = 0;

function loadQuestion() {
  document.getElementById("questionText").textContent = questions[currentIndex];
  document.getElementById("answer").value = "";
  document.getElementById("result").style.display = "none";
}

function nextQuestion() {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion();
  }
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    loadQuestion();
  }
}

function submitAnswer() {
  const answer = document.getElementById("answer").value.trim();
  const resultBox = document.getElementById("result");

  if (answer === "") {
    resultBox.textContent = "Please enter your answer before analyzing.";
  } else {
    resultBox.textContent = `Your answer to "${questions[currentIndex]}" has been recorded.`;
  }

  resultBox.style.display = "block";
}
function finishInterview() {
  const score = Math.floor(Math.random() * 100); // temporary scoring
  const strengths = "Clear communication, structured answers";
  const weaknesses = "Needs more detail in examples";
  const suggestions = "Practice STAR method, improve confidence";

  window.location.href =
    `summary.html?score=${score}&strengths=${strengths}&weaknesses=${weaknesses}&suggestions=${suggestions}`;
}
// Load first question on page load
window.onload = loadQuestion;
