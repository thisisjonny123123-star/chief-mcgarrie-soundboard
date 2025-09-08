let currentAudio = null;
let bonusAudio = [];

function playSound(file) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  currentAudio = new Audio(file);
  currentAudio.volume = 1.0;
  currentAudio.play();
}

function playBonusSound(file) {
  const audio = new Audio(file);
  audio.volume = 1.0;
  audio.play();
  bonusAudio.push(audio);
}

function stopAllSounds() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
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
