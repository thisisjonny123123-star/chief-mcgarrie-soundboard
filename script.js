let activeSounds = [];
let bonusAudio = [];

function playSound(file) {
  const audio = new Audio(file);
  audio.volume = 1.0;
  audio.play();
  activeSounds.push(audio);
}

function playBonusSound(file) {
  const audio = new Audio(file);
  audio.volume = 1.0;
  audio.play();
  bonusAudio.push(audio);
}

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

function stopBonusSounds() {
  bonusAudio.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
  bonusAudio = [];
}

function checkCode() {
  const input = document.getElementById("codeInput").value;
  if (input === "2437") {
    document.getElementById("bonus-buttons").style.display = "block";

    // Flash green
    document.body.classList.add("flash-green");
    setTimeout(() => {
      document.body.classList.remove("flash-green");
    }, 500);
  }
}

function showImage() {
  document.getElementById("popup").style.display = "flex";
}

function hideImage() {
  document.getElementById("popup").style.display = "none";
}

// 🌀 Animate dumbassjoe.jpg in circles
let angle = 0;
function animateJoe() {
  const joe = document.getElementById("joe-flyer");
  const radius = 150;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  angle += 0.05;
  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);

  joe.style.left = x + "px";
  joe.style.top = y + "px";

  requestAnimationFrame(animateJoe);
}
window.onload = animateJoe;


