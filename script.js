let activeSounds = [];
let bonusAudio = [];
let dingClickCount = 0;

// 🔊 Play regular sounds (overlapping)
function playSound(file) {
  const audio = new Audio(file);
  audio.volume = 1.0;
  audio.play().catch(() => {});
  activeSounds.push(audio);
}

// 🔊 Play bonus sounds
function playBonusSound(file) {
  const audio = new Audio(file);
  audio.volume = 1.0;
  audio.play().catch(() => {});
  bonusAudio.push(audio);
}

// 🔇 Stop all sounds
function stopAllSounds() {
  activeSounds.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
  activeSounds = [];

  bonusAudio.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
  bonusAudio = [];
}

// 🔇 Stop only bonus sounds
function stopBonusSounds() {
  bonusAudio.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
  bonusAudio = [];
}

// 🔐 Unlock bonus buttons with Joe's house code
function checkCode() {
  const input = document.getElementById("codeInput")?.value || "";
  if (input === "2437") {
    const bonus = document.getElementById("bonus-buttons");
    if (bonus) bonus.style.display = "block";

    document.body.classList.add("flash-green");
    setTimeout(() => document.body.classList.remove("flash-green"), 500);
  }
}

// 😱 Show tribute popup
function showImage() {
  const popup = document.getElementById("popup");
  if (popup) popup.style.display = "flex";
}

// ❌ Hide tribute popup
function hideImage() {
  const popup = document.getElementById("popup");
  if (popup) popup.style.display = "none";
}

// 🌀 Animate dumbassjoe.jpg in circles (optional)
let angle = 0;
function animateJoe() {
  const joe = document.getElementById("joe-flyer");
  if (!joe) return;

  const radius = 150;
  const centerX = window.innerWidth / 2 - 75;
  const centerY = window.innerHeight / 2 - 75;

  angle += 0.05;
  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);

  joe.style.left = x + "px";
  joe.style.top = y + "px";

  requestAnimationFrame(animateJoe);
}

// 🕵️‍♂️ Track iPhone Ding clicks to unlock Tommy's sound
function playDingAndTrack() {
  playSound('phonetext.mp3');
  dingClickCount++;
  if (dingClickCount === 3) {
    const tommy = document.getElementById("tommy-button");
    if (tommy) tommy.style.display = "block";
    dingClickCount = 0;
  }
}

// 🧱 Fake "Page Not Found" overlay
function removeFake404() {
  const overlay = document.getElementById("fake-404");
  if (overlay) overlay.style.display = "none";
}

// 🧃 Start animation and overlay logic
window.addEventListener("load", () => {
  const joe = document.getElementById("joe-flyer");
  if (joe) {
    joe.style.position = "absolute";
    requestAnimationFrame(animateJoe);
  }
});



