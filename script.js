let currentAudio = null;

function playSound(file) {
  // Stop any sound that's already playing
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  // Create and play the new sound
  currentAudio = new Audio(file);
  currentAudio.play();
}

function pauseSound() {
  // Pause the current sound
  if (currentAudio) {
    currentAudio.pause();
  }
}

function stopSound() {
  // Stop and reset the current sound
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
}
function showImage() {
  document.getElementById("popup").style.display = "flex";
}

function hideImage() {
  document.getElementById("popup").style.display = "none";
}
