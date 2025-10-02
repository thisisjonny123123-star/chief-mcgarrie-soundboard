let activeSounds = [];
let dingClickCount = 0;

function playSound(file) {
  const audio = new Audio(file);
  audio.volume = 1.0;
  audio.play().catch(() => {});
  activeSounds.push(audio);
}

function stopAllSounds() {
  activeSounds.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
  activeSounds = [];
}

function unlockSite() {
  const input = document.getElementById("entryCode")?.value || "";
  if (input === "2437") {
    document.getElementById("typing-ui").style.display = "none";
    document.getElementById("soundboard").style.display = "block";
  } else {
    alert("Incorrect code.");
  }
}

function playDingAndTrack() {
  playSound('phonetext.mp3');
  dingClickCount++;
  if (dingClickCount === 3) {
    const tommy = document.getElementById("tommy-button");
    if (tommy) tommy.style.display = "block";
    dingClickCount = 0;
  }
}

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
