let activeSounds = [];
let bonusAudio = [];
let dingClickCount = 0;

// Play regular sounds (overlap enabled)
function playSound(file) {
  const audio = new Audio(file);
  audio.volume = 1.0;
  audio.play().catch(() => {
    // If a browser blocks autoplay without gesture, clicks should allow it.
    // Keeping catch to avoid unhandled promise errors.
  });
  activeSounds.push(audio);
}

// Play bonus sounds
function playBonusSound(file) {
  const audio = new Audio(file);
  audio.volume = 1.0;
  audio.play().catch(() => {});
  bonusAudio.push(audio);
}

// Stop all sounds
function stopAllSounds() {
  activeSounds.forEach(a => { a.pause(); a.currentTime = 0; });
  activeSounds = [];
  bonusAudio.forEach(a => { a.pause(); a.currentTime = 0; });
  bonusAudio = [];
}

// Stop only bonus sounds
function stopBonusSounds() {
  bonusAudio.forEach(a => { a.pause(); a.currentTime = 0; });
  bonusAudio = [];
}

// Unlock bonus buttons with Joe's house code
function checkCode() {
  const input = document.getElementById("codeInput")?.value || "";
  if (input === "2437") {
    const bonus = document.getElementById("bonus-buttons");
    if (bonus) bonus.style.display = "block";

    document.body.classList.add("flash-green");
    setTimeout(() => document.body.classList.remove("flash-green"), 500);
  }
}

// Optional popup helpers (only do something if elements exist)
function showImage() {
  const popup = document.getElementById("popup");
  if (popup) popup.style.display = "flex";
}
function hideImage() {
  const popup = document.getElementById("popup");
  if (popup) popup.style.display = "none";
}

// Animate dumbassjoe.jpg in circles (only if image exists)
let angle = 0;
function animateJoe() {
  const joe = document.getElementById("joe-flyer");
  if (!joe) return; // Guard: no image, no animation

  const radius = 150;
  const centerX = window.innerWidth / 2 - 75; // center minus half width
  const centerY = window.innerHeight / 2 - 75;

  angle += 0.05;
  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);

  joe.style.left = x + "px";
  joe.style.top = y + "px";

  requestAnimationFrame(animateJoe);
}

// Start animation safely
window.addEventListener("load", () => {
  if (document.getElementById("joe-flyer")) {
    // Ensure positioned absolutely for movement
    const joe = document.getElementById("joe-flyer");
    joe.style.position = "absolute";
    requestAnimationFrame(animateJoe);
  }
});

// Track iPhone Ding clicks to unlock Tommy's sound
function playDingAndTrack() {
  playSound('phonetext.mp3');
  dingClickCount++;
  if (dingClickCount === 3) {
    const tommy = document.getElementById("tommy-button");
    if (tommy) tommy.style.display = "block";
    dingClickCount = 0;
  }
}


