/**
 * Как приручить дракона: Викторина
 * Main game logic — v2 with timer, scoreboard, leaderboard
 */

// ===== Audio Engine (Procedural Web Audio) =====
let audioCtx = null;

function ensureAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function playTone(freq, duration, type = 'sine', volume = 0.15) {
  ensureAudio();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(volume, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
  osc.connect(gain).connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + duration);
}

function playCorrectSound() {
  ensureAudio();
  const notes = [523.25, 659.25, 783.99, 1046.5];
  notes.forEach((freq, i) => {
    setTimeout(() => playTone(freq, 0.25, 'sine', 0.12), i * 80);
  });
}

function playWrongSound() {
  ensureAudio();
  playTone(220, 0.4, 'triangle', 0.1);
  setTimeout(() => playTone(196, 0.4, 'triangle', 0.08), 100);
}

function playFanfare() {
  ensureAudio();
  const melody = [
    { freq: 523.25, time: 0 },
    { freq: 659.25, time: 120 },
    { freq: 783.99, time: 240 },
    { freq: 1046.5, time: 400 },
    { freq: 783.99, time: 550 },
    { freq: 1046.5, time: 700 },
  ];
  melody.forEach(n => {
    setTimeout(() => playTone(n.freq, 0.35, 'sine', 0.12), n.time);
  });
  setTimeout(() => playTone(261.63, 0.6, 'triangle', 0.08), 400);
}

function playClickSound() {
  ensureAudio();
  playTone(800, 0.05, 'square', 0.04);
}

function playTickSound() {
  ensureAudio();
  playTone(1000, 0.03, 'sine', 0.03);
}

function playTimeUpSound() {
  ensureAudio();
  playTone(300, 0.3, 'sawtooth', 0.08);
  setTimeout(() => playTone(200, 0.4, 'sawtooth', 0.06), 150);
}

// ===== Utility Functions =====
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getElement(id) {
  return document.getElementById(id);
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return m > 0 ? `${m}:${s.toString().padStart(2, '0')}` : `${s} сек`;
}

// ===== Cloud Leaderboard (Firebase Realtime Database) =====
// ЗАМЕНИТЕ ЭТУ СТРОКУ на URL вашей Firebase базы данных:
const FIREBASE_DB_URL = 'https://how-to-train-a-dragon-afaed-default-rtdb.europe-west1.firebasedatabase.app/';
let leaderboard = [];
let lastAddedId = null;

async function loadLeaderboard() {
  try {
    const res = await fetch(`${FIREBASE_DB_URL}/scores.json?orderBy="correct"&limitToLast=50`);
    if (res.ok) {
      const data = await res.json();
      if (data) {
        leaderboard = Object.entries(data).map(([id, entry]) => ({ ...entry, id }));
        // Sort: most correct first, then least time
        leaderboard.sort((a, b) => {
          if (b.correct !== a.correct) return b.correct - a.correct;
          return a.totalTime - b.totalTime;
        });
      } else {
        leaderboard = [];
      }
    }
  } catch (e) {
    console.log('Leaderboard fetch failed, using local cache');
  }
}

async function addToLeaderboard(entry) {
  // Add locally immediately
  leaderboard.push(entry);
  leaderboard.sort((a, b) => {
    if (b.correct !== a.correct) return b.correct - a.correct;
    return a.totalTime - b.totalTime;
  });
  leaderboard = leaderboard.slice(0, 50);

  // Push to Firebase
  try {
    const res = await fetch(`${FIREBASE_DB_URL}/scores.json`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entry)
    });
    if (res.ok) {
      const result = await res.json();
      lastAddedId = result.name; // Firebase returns { name: "-uniqueId" }
      // Refresh from cloud to get accurate data
      await loadLeaderboard();
    }
  } catch (e) {
    console.log('Failed to save score to cloud');
  }
}

// ===== Timer Constants per Difficulty =====
const TIMER_SECONDS = {
  easy: 60,
  medium: 50,
  hard: 40
};

// ===== Game State =====
let currentDifficulty = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let attempts = 0;
let playerName = '';
let questionTimer = null;
let timeLeft = 0;
let totalTimeUsed = 0;
let questionStartTime = 0;
const MAX_ATTEMPTS = 2;

// ===== Screen Management =====
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const screen = getElement(screenId);
  if (screen) {
    screen.classList.add('active');
  }
}

// ===== Timer =====
function startTimer() {
  timeLeft = TIMER_SECONDS[currentDifficulty];
  questionStartTime = Date.now();
  updateTimerDisplay();

  if (questionTimer) clearInterval(questionTimer);

  questionTimer = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    // Warning tick in last 5 seconds
    if (timeLeft <= 5 && timeLeft > 0) {
      playTickSound();
    }

    if (timeLeft <= 0) {
      clearInterval(questionTimer);
      questionTimer = null;
      handleTimeUp();
    }
  }, 1000);
}

function stopTimer() {
  if (questionTimer) {
    clearInterval(questionTimer);
    questionTimer = null;
  }
  // Record time used for this question
  const elapsed = Math.round((Date.now() - questionStartTime) / 1000);
  totalTimeUsed += elapsed;
}

function updateTimerDisplay() {
  const timerEl = getElement('timer-value');
  const timerBar = getElement('timer-bar');
  const timerContainer = getElement('timer-container');

  if (timerEl) timerEl.textContent = timeLeft;
  if (timerBar) {
    const max = TIMER_SECONDS[currentDifficulty];
    const pct = (timeLeft / max) * 100;
    timerBar.style.width = pct + '%';

    // Color changes based on time
    timerContainer.classList.remove('timer-warning', 'timer-danger');
    if (timeLeft <= 5) {
      timerContainer.classList.add('timer-danger');
    } else if (timeLeft <= 10) {
      timerContainer.classList.add('timer-warning');
    }
  }
}

function handleTimeUp() {
  playTimeUpSound();
  const q = currentQuestions[currentQuestionIndex];

  // Record full time as used
  totalTimeUsed += TIMER_SECONDS[currentDifficulty];

  // Show correct answer
  const feedback = getElement('feedback');
  feedback.className = 'feedback visible wrong';
  feedback.innerHTML = '<span class="feedback-icon">⏰</span> Время вышло!';

  if (q.type === 'image') {
    const container = getElement('answers-images');
    const buttons = container.querySelectorAll('.btn-image-answer');
    buttons[q.correct].classList.add('correct');
    disableAllImageButtons(container);
  } else {
    const container = getElement('answers-text');
    const buttons = container.querySelectorAll('.btn-answer');
    buttons[q.correct].classList.add('correct');
    disableAllButtons(container, 'btn-answer');
  }

  setTimeout(() => nextQuestion(), 2000);
}

// ===== Player Name Entry =====
function selectDifficulty(difficulty) {
  playClickSound();
  currentDifficulty = difficulty;
  showScreen('name-screen');

  const nameInput = getElement('player-name-input');
  const diffLabel = getElement('name-difficulty-label');
  const diffData = QUESTIONS[difficulty];
  diffLabel.textContent = `${diffData.icon} ${diffData.label}`;

  // Focus input
  setTimeout(() => nameInput.focus(), 300);
}

function startGameFromName() {
  const nameInput = getElement('player-name-input');
  const name = nameInput.value.trim();
  if (!name) {
    nameInput.classList.add('shake');
    setTimeout(() => nameInput.classList.remove('shake'), 500);
    return;
  }
  playerName = name;
  playClickSound();
  startGame();
}

// ===== Game Flow =====
function startGame() {
  const data = QUESTIONS[currentDifficulty];
  const count = QUESTION_COUNTS[currentDifficulty];

  // Shuffle questions, pick the needed count
  const allQuestions = shuffle(data.questions);
  currentQuestions = allQuestions.slice(0, count);

  // For image-type questions, shuffle image positions
  currentQuestions = currentQuestions.map(q => {
    if (q.type === 'image') {
      const correctImage = q.images[q.correct];
      const shuffledImages = shuffle(q.images);
      const newCorrectIndex = shuffledImages.indexOf(correctImage);
      return { ...q, images: shuffledImages, correct: newCorrectIndex };
    }
    if (q.type === 'choice' || q.type === 'image_text') {
      const correctAnswer = q.answers[q.correct];
      const shuffledAnswers = shuffle(q.answers);
      const newCorrectIndex = shuffledAnswers.indexOf(correctAnswer);
      return { ...q, answers: shuffledAnswers, correct: newCorrectIndex };
    }
    return q;
  });

  currentQuestionIndex = 0;
  score = 0;
  attempts = 0;
  totalTimeUsed = 0;

  showScreen('question-screen');
  renderQuestion();
}

function renderQuestion() {
  const q = currentQuestions[currentQuestionIndex];
  const total = currentQuestions.length;
  attempts = 0;

  // Update progress
  getElement('progress-current').textContent = currentQuestionIndex + 1;
  getElement('progress-total').textContent = total;
  const progressFill = getElement('progress-fill');
  progressFill.style.width = `${((currentQuestionIndex) / total) * 100}%`;
  progressFill.className = `progress-fill ${currentDifficulty}`;

  // Show difficulty label
  const diffData = QUESTIONS[currentDifficulty];
  getElement('difficulty-label').textContent = `${diffData.icon} ${diffData.label}`;

  // Show player name
  const playerLabel = getElement('player-label');
  if (playerLabel) playerLabel.textContent = playerName;

  // Set question text
  getElement('question-text').textContent = q.question;

  // Hide feedback
  const feedback = getElement('feedback');
  feedback.className = 'feedback';

  // Show/hide the featured image
  const questionImage = getElement('question-image');
  if (q.type === 'image_text') {
    questionImage.src = q.showImage;
    questionImage.style.display = 'block';
  } else {
    questionImage.style.display = 'none';
  }

  // Render answers
  const textAnswers = getElement('answers-text');
  const imageAnswers = getElement('answers-images');

  if (q.type === 'image') {
    textAnswers.style.display = 'none';
    imageAnswers.style.display = 'grid';
    renderImageAnswers(q);
  } else {
    textAnswers.style.display = 'flex';
    imageAnswers.style.display = 'none';
    renderTextAnswers(q);
  }

  // Animate the card
  const card = document.querySelector('.question-card');
  card.style.animation = 'none';
  requestAnimationFrame(() => {
    card.style.animation = 'slideInUp 0.4s ease-out';
  });

  // Start timer
  startTimer();
}

function renderTextAnswers(q) {
  const container = getElement('answers-text');
  const letters = ['А', 'Б', 'В', 'Г'];
  container.innerHTML = '';

  q.answers.forEach((answer, i) => {
    const btn = document.createElement('button');
    btn.className = 'btn-answer';
    btn.innerHTML = `
      <span class="answer-letter">${letters[i]}</span>
      <span class="answer-text">${answer}</span>
    `;
    btn.addEventListener('click', () => handleAnswer(i, q.correct, btn, container));
    container.appendChild(btn);
  });
}

function renderImageAnswers(q) {
  const container = getElement('answers-images');
  container.innerHTML = '';

  q.images.forEach((img, i) => {
    const btn = document.createElement('button');
    btn.className = 'btn-image-answer';
    btn.innerHTML = `
      <img src="${img.src}" alt="" loading="lazy">
    `;
    btn.addEventListener('click', () => handleImageAnswer(i, q.correct, btn, container));
    container.appendChild(btn);
  });
}

function handleAnswer(selected, correct, btn, container) {
  playClickSound();
  attempts++;

  if (selected === correct) {
    stopTimer();
    btn.classList.add('correct');
    showFeedback(true);
    playCorrectSound();
    score++;
    disableAllButtons(container, 'btn-answer');
    setTimeout(() => nextQuestion(), 1500);
  } else {
    btn.classList.add('wrong');
    btn.disabled = true;
    playWrongSound();

    if (attempts >= MAX_ATTEMPTS) {
      stopTimer();
      showFeedback(false);
      const buttons = container.querySelectorAll('.btn-answer');
      buttons[correct].classList.add('correct');
      disableAllButtons(container, 'btn-answer');
      setTimeout(() => nextQuestion(), 2000);
    } else {
      showFeedback(false, true);
    }
  }
}

function handleImageAnswer(selected, correct, btn, container) {
  playClickSound();
  attempts++;

  if (selected === correct) {
    stopTimer();
    btn.classList.add('correct');
    showFeedback(true);
    playCorrectSound();
    score++;
    disableAllImageButtons(container);
    setTimeout(() => nextQuestion(), 1500);
  } else {
    btn.classList.add('wrong');
    btn.disabled = true;
    playWrongSound();

    if (attempts >= MAX_ATTEMPTS) {
      stopTimer();
      showFeedback(false);
      const buttons = container.querySelectorAll('.btn-image-answer');
      buttons[correct].classList.add('correct');
      disableAllImageButtons(container);
      setTimeout(() => nextQuestion(), 2000);
    } else {
      showFeedback(false, true);
    }
  }
}

function disableAllButtons(container, className) {
  container.querySelectorAll(`.${className}`).forEach(b => b.disabled = true);
}

function disableAllImageButtons(container) {
  container.querySelectorAll('.btn-image-answer').forEach(b => b.disabled = true);
}

function showFeedback(isCorrect, tryAgain = false) {
  const feedback = getElement('feedback');
  if (isCorrect) {
    feedback.className = 'feedback visible correct';
    feedback.innerHTML = '<span class="feedback-icon">🎉</span> Молодец!';
  } else if (tryAgain) {
    feedback.className = 'feedback visible wrong';
    feedback.innerHTML = '<span class="feedback-icon">🤔</span> Попробуй ещё!';
  } else {
    feedback.className = 'feedback visible wrong';
    feedback.innerHTML = '<span class="feedback-icon">😊</span> Не беда! Смотри правильный ответ';
  }
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex >= currentQuestions.length) {
    showResults();
  } else {
    renderQuestion();
  }
}

// ===== Results =====
function showResults() {
  if (questionTimer) {
    clearInterval(questionTimer);
    questionTimer = null;
  }

  playFanfare();
  showScreen('results-screen');

  const total = currentQuestions.length;
  const pct = (score / total) * 100;

  // Stars
  let starCount = 0;
  if (pct >= 90) starCount = 3;
  else if (pct >= 60) starCount = 2;
  else if (pct >= 30) starCount = 1;

  getElement('results-player-name').textContent = playerName;
  getElement('results-score').textContent = `${score} из ${total} правильных ответов`;
  getElement('results-time').textContent = `Время: ${formatTime(totalTimeUsed)}`;

  const starsContainer = getElement('stars-container');
  starsContainer.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    const star = document.createElement('span');
    star.className = `star ${i < starCount ? 'earned' : ''}`;
    star.textContent = '⭐';
    starsContainer.appendChild(star);
  }

  // Message
  const messages = {
    3: 'Ты настоящий знаток драконов! 🐉',
    2: 'Отличная работа! Ты многое знаешь!',
    1: 'Хорошее начало! Попробуй ещё разок!',
    0: 'Не расстраивайся! Прочитай книгу и попробуй снова!'
  };
  getElement('results-message').textContent = messages[starCount];

  const titles = {
    3: 'Великолепно!',
    2: 'Здорово!',
    1: 'Неплохо!',
    0: 'Попробуй ещё!'
  };
  getElement('results-title').textContent = titles[starCount];

  const dragons = {
    3: '🐲',
    2: '🐉',
    1: '🦎',
    0: '🥚'
  };
  getElement('results-dragon').textContent = dragons[starCount];

  // Progress fill 100%
  const progressFill = getElement('progress-fill');
  if (progressFill) progressFill.style.width = '100%';

  // Save to leaderboard
  const diffData = QUESTIONS[currentDifficulty];
  addToLeaderboard({
    name: playerName,
    difficulty: currentDifficulty,
    difficultyLabel: diffData.label,
    correct: score,
    total: total,
    totalTime: totalTimeUsed,
    date: new Date().toLocaleDateString('ru-RU')
  });
}

function goToTitle() {
  playClickSound();
  showScreen('title-screen');
}

async function showLeaderboard() {
  playClickSound();
  await loadLeaderboard();
  renderLeaderboard();
  showScreen('leaderboard-screen');
}

async function showLeaderboardFromResults() {
  playClickSound();
  await loadLeaderboard();
  renderLeaderboard();
  showScreen('leaderboard-screen');
}

// ===== Leaderboard Rendering =====
function renderLeaderboard(filterDifficulty = 'all') {
  const container = getElement('leaderboard-list');
  const emptyMsg = getElement('leaderboard-empty');

  let entries = leaderboard;
  if (filterDifficulty !== 'all') {
    entries = entries.filter(e => e.difficulty === filterDifficulty);
  }

  // Update filter buttons
  document.querySelectorAll('.lb-filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filterDifficulty);
  });

  if (entries.length === 0) {
    container.innerHTML = '';
    emptyMsg.style.display = 'block';
    return;
  }

  emptyMsg.style.display = 'none';

  // Medal emojis
  const medals = ['🥇', '🥈', '🥉'];

  container.innerHTML = entries.map((entry, i) => {
    const medal = i < 3 ? medals[i] : `<span class="lb-rank-num">${i + 1}</span>`;
    const diffIcons = { easy: '🐲', medium: '⚔️', hard: '👑' };
    const isCurrentPlayer = lastAddedId ? entry.id === lastAddedId : (entry.name === playerName && entry.correct === score && entry.totalTime === totalTimeUsed);

    return `
      <div class="lb-row ${isCurrentPlayer ? 'lb-row-current' : ''} ${i < 3 ? 'lb-row-top' : ''}">
        <div class="lb-medal">${medal}</div>
        <div class="lb-info">
          <span class="lb-name">${escapeHtml(entry.name)}</span>
          <span class="lb-diff">${diffIcons[entry.difficulty] || ''} ${entry.difficultyLabel || ''}</span>
        </div>
        <div class="lb-stats">
          <span class="lb-score">${entry.correct}/${entry.total}</span>
          <span class="lb-time">${formatTime(entry.totalTime)}</span>
        </div>
      </div>
    `;
  }).join('');
}

async function filterLeaderboard(difficulty) {
  playClickSound();
  await loadLeaderboard();
  renderLeaderboard(difficulty);
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ===== Initialization =====
document.addEventListener('DOMContentLoaded', () => {
  loadLeaderboard();

  // Initialize audio on first click
  document.addEventListener('click', () => {
    ensureAudio();
  }, { once: true });

  // Handle Enter key on name input
  const nameInput = getElement('player-name-input');
  if (nameInput) {
    nameInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        startGameFromName();
      }
    });
  }

  // Hover sound
  document.addEventListener('mouseenter', (e) => {
    if (e.target.closest('button') && audioCtx) {
      playTone(600, 0.03, 'sine', 0.02);
    }
  }, true);
});
