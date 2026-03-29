let activeSounds = [];
let dingClickCount = 0;

// Track how many times the code was entered
let codeAttempts = 0;

// Track if Lessons was clicked on the sorry page
let lessonsClicked = false;

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

// Unlock logic with multi-step sequence
function unlockSite() {
  const input = document.getElementById("entryCode")?.value || "";

  if (input === "2437") {
    codeAttempts++;

    // FIRST TIME entering 2437 → do nothing
    if (codeAttempts === 1) {
      return;
    }

    // SECOND TIME entering 2437 → show sorry page
    if (codeAttempts === 2) {
      document.getElementById("typing-ui").style.display = "none";

      const sorryPage = document.createElement("div");
      sorryPage.id = "sorry-page";
      sorryPage.innerHTML = `
        <div class="top-bar">
          <span class="nav-link" onclick="lessonsPress()">Lessons</span>
          <span class="nav-link">Login</span>
          <span class="nav-link" onclick="consultPress()">Consult an Admin</span>
          <span class="nav-link">Sign Up</span>
        </div>

        <p class="cover-message">Sorry, Typing School USA is currently unavailable.
        Please email customer support for extra information. You can email us at: support@typingschoolusa.com</p>
        <button class="back-button" onclick="goBack()">Go Back</button>
      `;
      document.body.appendChild(sorryPage);
    }

  } else {
    alert("Incorrect code.");
  }
}

// Go back to typing UI
function goBack() {
  const sorryPage = document.getElementById("sorry-page");
  if (sorryPage) sorryPage.remove();
  document.getElementById("typing-ui").style.display = "block";

  // Reset sequence
  lessonsClicked = false;
  codeAttempts = 0;
}

// When Lessons is clicked on the sorry page
function lessonsPress() {
  lessonsClicked = true;
}

// When Consult an Admin is clicked
function consultPress() {
  if (lessonsClicked) {
    // Only unlock if Lessons was clicked first
    const sorryPage = document.getElementById("sorry-page");
    if (sorryPage) sorryPage.remove();
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
// Weighted list for the mystery button
const mysterySounds = [
  "troll1.mp3",
  "papa.mp3",
  "laugh3.mp3",
  "charkirk.mp3",
  "charkirk.mp3",
  "charkirk.mp3" // appears multiple times = higher chance
];

function playMystery() {
  const randomIndex = Math.floor(Math.random() * mysterySounds.length);
  const chosenSound = mysterySounds[randomIndex];
  playSound(chosenSound);
}
let wspeedCount = 0;

function trackWspeed() {
  wspeedCount++;

  if (wspeedCount === 15) {
    document.getElementById("bathroomBtn").style.display = "block";
  }
}
