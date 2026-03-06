// Quiz Data with Multiple Categories
const allQuizzes = {
  general: [
    { question: "What is the capital of France?", options: ["London", "Paris", "Berlin", "Madrid"], answer: "Paris" },
    { question: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "Mark Twain", "William Shakespeare", "Jane Austen"], answer: "William Shakespeare" },
    { question: "What is the largest planet in our solar system?", options: ["Saturn", "Jupiter", "Neptune", "Venus"], answer: "Jupiter" },
    { question: "In which year did World War II end?", options: ["1943", "1944", "1945", "1946"], answer: "1945" },
    { question: "What is the smallest country in the world by area?", options: ["Monaco", "Vatican City", "Liechtenstein", "San Marino"], answer: "Vatican City" }
  ],
  tech: [
    { question: "HTML stands for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks Text Management Language", "Hypertext Transfer Markup Library"], answer: "Hyper Text Markup Language" },
    { question: "CSS is used for styling web pages.", options: ["True", "False"], answer: "True" },
    { question: "Which is not a JavaScript framework?", options: ["React", "Angular", "Django", "Vue"], answer: "Django" },
    { question: "What does API stand for?", options: ["Application Program Interface", "Advanced Programming Instruction", "Application Process Integration", "Advanced Process Interface"], answer: "Application Program Interface" },
    { question: "Which language is known as the 'language of the web'?", options: ["Python", "JavaScript", "Java", "C++"], answer: "JavaScript" }
  ],
  science: [
    { question: "What is the chemical symbol for Gold?", options: ["Go", "Gd", "Au", "Ag"], answer: "Au" },
    { question: "What is the pH of pure water?", options: ["5", "6", "7", "8"], answer: "7" },
    { question: "How many bones does an adult human have?", options: ["186", "206", "226", "246"], answer: "206" },
    { question: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "100,000 km/s"], answer: "300,000 km/s" },
    { question: "What is the most abundant gas in Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], answer: "Nitrogen" }
  ]
};

// Game State
let gameState = {
  currentQuestion: 0,
  score: 0,
  timer: null,
  timeLeft: 60,
  username: "",
  category: "general",
  quizData: [],
  answered: false,
  selectedAnswer: null,
  correctAnswers: 0,
  incorrectAnswers: 0
};

// DOM Elements
const screens = {
  start: document.getElementById("start-screen"),
  quiz: document.getElementById("quiz-screen"),
  result: document.getElementById("result-screen")
};

const elements = {
  startBtn: document.getElementById("start-btn"),
  username: document.getElementById("username"),
  category: document.getElementById("quiz-category"),
  question: document.getElementById("question"),
  options: document.getElementById("options"),
  nextBtn: document.getElementById("next-btn"),
  feedback: document.getElementById("feedback"),
  timer: document.getElementById("time"),
  retryBtn: document.getElementById("retry-btn"),
  homeBtn: document.getElementById("home-btn"),
  history: document.getElementById("history"),
  currentQ: document.getElementById("current-q"),
  totalQ: document.getElementById("total-q"),
  progressFill: document.getElementById("progress-fill"),
  finalScore: document.getElementById("final-score"),
  totalScore: document.getElementById("total-score"),
  percentage: document.getElementById("percentage"),
  performanceMsg: document.getElementById("performance-msg"),
  userResultName: document.getElementById("user-result-name"),
  correctCount: document.getElementById("correct-count"),
  incorrectCount: document.getElementById("incorrect-count"),
  historyPreview: document.getElementById("history-preview")
};

// Event Listeners
elements.startBtn.addEventListener("click", startQuiz);
elements.nextBtn.addEventListener("click", nextQuestion);
elements.retryBtn.addEventListener("click", retakeQuiz);
elements.homeBtn.addEventListener("click", goHome);

// Start Quiz Function
function startQuiz() {
  gameState.username = elements.username.value.trim();
  if (!gameState.username) {
    alert("Please enter your name!");
    return;
  }

  gameState.category = elements.category.value;
  gameState.quizData = allQuizzes[gameState.category];
  gameState.currentQuestion = 0;
  gameState.score = 0;
  gameState.answered = false;
  gameState.correctAnswers = 0;
  gameState.incorrectAnswers = 0;

  elements.totalQ.textContent = gameState.quizData.length;

  switchScreen("quiz");
  loadQuestion();
  startTimer();
}

// Load Question Function
function loadQuestion() {
  const q = gameState.quizData[gameState.currentQuestion];
  elements.question.textContent = q.question;
  elements.options.innerHTML = "";
  elements.feedback.textContent = "";
  elements.feedback.className = "feedback";
  elements.currentQ.textContent = gameState.currentQuestion + 1;
  elements.nextBtn.classList.remove("enabled");
  gameState.answered = false;
  gameState.selectedAnswer = null;

  // Update progress bar
  const progressPercent = ((gameState.currentQuestion + 1) / gameState.quizData.length) * 100;
  elements.progressFill.style.width = progressPercent + "%";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option");
    btn.onclick = () => selectAnswer(option, btn);
    elements.options.appendChild(btn);
  });

  resetTimer();
}

// Select Answer Function
function selectAnswer(selected, buttonEl) {
  if (gameState.answered) return;

  gameState.selectedAnswer = selected;
  const correct = gameState.quizData[gameState.currentQuestion].answer;
  const allOptions = document.querySelectorAll(".option");

  // Disable all options
  allOptions.forEach(btn => (btn.disabled = true));

  // Show result
  if (selected === correct) {
    gameState.score++;
    gameState.correctAnswers++;
    buttonEl.classList.add("correct");
    elements.feedback.textContent = "✓ Correct!";
    elements.feedback.classList.add("correct");
  } else {
    gameState.incorrectAnswers++;
    buttonEl.classList.add("incorrect");
    allOptions.forEach(btn => {
      if (btn.textContent === correct) {
        btn.classList.add("correct");
      }
    });
    elements.feedback.textContent = `✗ Incorrect! Correct answer: ${correct}`;
    elements.feedback.classList.add("incorrect");
  }

  gameState.answered = true;
  elements.nextBtn.classList.add("enabled");
  clearInterval(gameState.timer);
}

// Next Question Function
function nextQuestion() {
  gameState.currentQuestion++;
  if (gameState.currentQuestion < gameState.quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

// Show Result Function
function showResult() {
  clearInterval(gameState.timer);
  const percentage = Math.round((gameState.score / gameState.quizData.length) * 100);
  let performanceMessage = "";

  if (percentage === 100) {
    performanceMessage = "Perfect Score! Outstanding! 🌟";
  } else if (percentage >= 80) {
    performanceMessage = "Excellent! You did great! 🎉";
  } else if (percentage >= 60) {
    performanceMessage = "Good job! Keep it up! 👍";
  } else if (percentage >= 40) {
    performanceMessage = "Not bad! Try again to improve! 💪";
  } else {
    performanceMessage = "Give it another shot! 📚";
  }

  elements.userResultName.textContent = `${gameState.username}'s Results`;
  elements.finalScore.textContent = gameState.score;
  elements.totalScore.textContent = gameState.quizData.length;
  elements.percentage.textContent = percentage + "%";
  elements.performanceMsg.textContent = performanceMessage;
  elements.correctCount.textContent = gameState.correctAnswers;
  elements.incorrectCount.textContent = gameState.incorrectAnswers;

  saveHistory(gameState.username, gameState.score, gameState.quizData.length, gameState.category);
  displayHistory();

  switchScreen("result");
}

// Retake Quiz Function
function retakeQuiz() {
  gameState.currentQuestion = 0;
  gameState.score = 0;
  gameState.answered = false;
  gameState.correctAnswers = 0;
  gameState.incorrectAnswers = 0;
  switchScreen("quiz");
  loadQuestion();
  startTimer();
}

// Go Home Function
function goHome() {
  switchScreen("start");
  elements.username.value = "";
  elements.category.value = "general";
}

// Start Timer Function
function startTimer() {
  gameState.timeLeft = 60;
  elements.timer.textContent = gameState.timeLeft;
  gameState.timer = setInterval(() => {
    gameState.timeLeft--;
    elements.timer.textContent = gameState.timeLeft;
    if (gameState.timeLeft <= 0) {
      clearInterval(gameState.timer);
      if (!gameState.answered) {
        gameState.incorrectAnswers++;
        const correct = gameState.quizData[gameState.currentQuestion].answer;
        const allOptions = document.querySelectorAll(".option");
        allOptions.forEach(btn => (btn.disabled = true));
        elements.feedback.textContent = `⏱️ Time is up! Correct answer: ${correct}`;
        elements.feedback.classList.add("timeout");
        gameState.answered = true;
        elements.nextBtn.classList.add("enabled");
      }
    }
  }, 1000);
}

// Reset Timer Function
function resetTimer() {
  clearInterval(gameState.timer);
  startTimer();
}

// Switch Screen Function
function switchScreen(screenName) {
  Object.values(screens).forEach(screen => screen.classList.remove("active"));
  screens[screenName].classList.add("active");
}

// Save to History
function saveHistory(name, score, total, category) {
  let history = JSON.parse(localStorage.getItem("quizHistory")) || [];
  history.push({
    name,
    score,
    total,
    category,
    percentage: Math.round((score / total) * 100),
    date: new Date().toLocaleString()
  });
  localStorage.setItem("quizHistory", JSON.stringify(history));
}

// Display Quiz History
function displayHistory() {
  let history = JSON.parse(localStorage.getItem("quizHistory")) || [];
  let historyHTML = "<h3>📋 Quiz History</h3>";

  if (history.length === 0) {
    historyHTML += "<p style='color: #999;'>No quiz history yet.</p>";
  } else {
    history.slice().reverse().forEach(entry => {
      const statusEmoji = entry.percentage >= 60 ? "✓" : "✗";
      historyHTML += `
        <div class='history-item'>
          <strong>${statusEmoji} ${entry.name}</strong> - ${entry.score}/${entry.total} (${entry.percentage}%) in ${entry.category}
          <br><span style='font-size: 0.85em; color: #999;'>${entry.date}</span>
        </div>
      `;
    });
  }

  elements.history.innerHTML = historyHTML;
}

// Display History Preview on Start Screen
function displayHistoryPreview() {
  let history = JSON.parse(localStorage.getItem("quizHistory")) || [];
  let previewHTML = "";

  if (history.length > 0) {
    previewHTML = "<h3 style='margin-bottom: 10px;'>Recent Attempts:</h3>";
    history.slice().reverse().slice(0, 3).forEach(entry => {
      previewHTML += `
        <div class='history-item' style='margin-bottom: 8px;'>
          <strong>${entry.name}</strong> - ${entry.score}/${entry.total} (${entry.percentage}%)
        </div>
      `;
    });
  }

  elements.historyPreview.innerHTML = previewHTML;
}

// Initialize on Page Load
displayHistoryPreview();