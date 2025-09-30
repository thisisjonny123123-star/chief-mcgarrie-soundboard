let activeSounds = [];
let dingClickCount = 0;

// Play regular sounds
function playSound(file) {
  const audio = new Audio(file);
  audio.volume = 1.0;
  audio.play().catch(() => {});
  activeSounds.push(audio);
}

// Stop all sounds
function stopAllSounds() {
  activeSounds.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
  activeSounds = [];
}

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
function unlockSite() {
  const input = document.getElementById("entryCode")?.value || "";
  if (input === "2437") {
    const gate = document.getElementById("code-gate");
    if (gate) {
      gate.style.transition = "opacity 1s ease";
      gate.style.opacity = "0";
      setTimeout(() => gate.style.display = "none", 1000);
    }
  } else {
    alert("Incorrect code.");
  }
}

