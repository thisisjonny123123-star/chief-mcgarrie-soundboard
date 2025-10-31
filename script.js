let activeSounds = [];
let dingClickCount = 0;

// Play sound
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

// Unlock logic → show Sorry page
function unlockSite() {
  const input = document.getElementById("entryCode")?.value || "";
  if (input === "2437") {
    document.getElementById("typing-ui").style.display = "none";

    const sorryPage = document.createElement("div");
    sorryPage.id = "sorry-page";
    sorryPage.innerHTML = `
      <div class="top-bar">
        <span class="nav-link" onclick="revealSoundboard()">Lessons</span>
        <span class="nav-link">Login</span>
        <span class="nav-link">Sign Up</span>
        <span class="nav-link">Consult an Admin</span>
      </div>
      <p class="cover-message">Sorry, Typing School USA is currently unavailable.</p>
      <button class="back-button" onclick="goBack()">Go Back</button>
    `;
    document.body.appendChild(sorryPage);
  } else {
    alert("Incorrect code.");
  }
}

// Go back to typing UI
function goBack() {
  const sorryPage = document.getElementById("sorry-page");
  if (sorryPage) sorryPage.remove();
  document.getElementById("typing-ui").style.display = "block";
}

// Reveal soundboard (only from Sorry page)
function revealSoundboard() {
  const sorryPage = document.getElementById("sorry-page");
  if (sorryPage) {
    sorryPage.remove();
    document.getElementById("soundboard").style.display = "block";
  }
}

// Tommy unlock logic
function playDingAndTrack() {
  playSound('phonetext.mp3');
  dingClickCount++;
  if (dingClickCount === 3) {
    const tommy = document.getElementById("tommy-button");
    if (tommy) tommy.style.display = "block";
    dingClickCount = 0;
  }
}

// Slideshow loop
let currentSlide = 0;
function showNextSlide() {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide, index) => {
    slide.classList.remove("active");
    slide.style.opacity = "0";
  });
  slides[currentSlide].classList.add("active");
  slides[currentSlide].style.opacity = "1";
  currentSlide = (currentSlide + 1) % slides.length;
}
setInterval(showNextSlide, 5000);
