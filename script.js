// --- 1. MUSIC PLAYER CODE ---
const playlist = [
   { title: "Love You Still", src: "song1.mp3"},
  { title: "Rewrite The Stars", src: "song.mp3" },
  { title: "Helplessly By Tatiana", src: "song2.mp3" },
  { title: "It's You By Ali gate'", src: "song3.mp3" },
  { title: "You Meant To Tell Me", src: "song4.mp3"},
  { title: "Tatata By Nyasha David", src: "song5.mp3"}
];

let currentSongIndex = 0;
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
const musicIcon = document.getElementById('musicIcon');
const songTitle = document.getElementById('songTitle');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let isPlaying = false;

function loadSong(index) {
  bgMusic.src = playlist[index].src;
  songTitle.textContent = playlist[index].title;
}

function playAudio() {
  bgMusic.play().then(() => {
    isPlaying = true;
    musicIcon.textContent = '🎶';
    musicToggle.classList.add('playing');
  }).catch((err) => {
    console.log("Audio play blocked: ", err);
  });
}

function pauseAudio() {
  bgMusic.pause();
  isPlaying = false;
  musicIcon.textContent = '🎵';
  musicToggle.classList.remove('playing');
}

nextBtn.addEventListener('click', () => {
  currentSongIndex = (currentSongIndex + 1) % playlist.length;
  loadSong(currentSongIndex);
  playAudio();
});

prevBtn.addEventListener('click', () => {
  currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
  loadSong(currentSongIndex);
  playAudio();
});

bgMusic.addEventListener('ended', () => {
  currentSongIndex = (currentSongIndex + 1) % playlist.length;
  loadSong(currentSongIndex);
  playAudio();
});

const envelope = document.getElementById('envelope');
envelope.addEventListener('click', () => {
  envelope.classList.toggle('open');
  if (!isPlaying) {
    playAudio();
  }
});

musicToggle.addEventListener('click', () => {
  if (isPlaying) {
    pauseAudio();
  } else {
    playAudio();
  }
});

loadSong(currentSongIndex);


// --- 2. REASONS / SURPRISE GENERATOR CODE (AT THE BOTTOM) ---
const reasons = [
  "Your smile instantly brightens up even my worst days. 😊",
  "How intelligent you act towards certain situations.",
  "That cute laugh of yours that I can never get enough of. ❤️",
  "You're not just my girlfriend—you're my absolute best friend❤️.",
  "Every moment spent with you always feels like time well spent.",
  "You make the simple, ordinary moments feel like something special.",
  "I love how supportive you are of everything I do.",
  "The way you care so deeply about the people you love is inspiring.",
  "You have this amazing ability to make me feel at peace no matter how chaotic life gets.",
  "Your warmth and kindness make the whole world a softer, happier place.",
  "Even when you don't realize it, your presence alone makes everything better.",
  "I love the way your mind works and how passionate you get about the things you care about.",
  "You understand me in a way nobody else ever could.",
  "Just having you in my corner makes me want to be the best version of myself."
];

let reasonIndex = 0;
const reasonDisplay = document.getElementById('reasonText');
const nextReasonBtn = document.getElementById('nextReasonBtn');

if (nextReasonBtn && reasonDisplay) {
  nextReasonBtn.addEventListener('click', () => {
    reasonDisplay.style.opacity = '0';
    
    setTimeout(() => {
      reasonDisplay.textContent = reasons[reasonIndex];
      reasonDisplay.style.opacity = '1';
      reasonIndex = (reasonIndex + 1) % reasons.length;
    }, 300);
  });
}
// Giant Heart Tap Notification
const giantHeart = document.getElementById('giantHeart');
const lovePopup = document.getElementById('lovePopup');

if (giantHeart && lovePopup) {
  let popupTimer;
  
  giantHeart.addEventListener('click', () => {
    // Add pop animation effect
    giantHeart.style.transform = 'scale(1.35)';
    setTimeout(() => {
      giantHeart.style.transform = 'scale(1)';
    }, 200);

    // Show the love message popup
    lovePopup.classList.add('show');

    // Clear any existing timer so it doesn't fade out too fast if tapped multiple times
    clearTimeout(popupTimer);

    // Hide the message after 3 seconds
    popupTimer = setTimeout(() => {
      lovePopup.classList.remove('show');
    }, 5000);
  });
}
