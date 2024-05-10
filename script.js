// Countdown timer
function updateCountdown() {
    const launchDate = new Date("2024-06-01").getTime();
    const now = new Date().getTime();
    const distance = launchDate - now;
  
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.getElementById("days").innerText = formatTime(days);
    document.getElementById("hours").innerText = formatTime(hours);
    document.getElementById("minutes").innerText = formatTime(minutes);
    document.getElementById("seconds").innerText = formatTime(seconds);
  }
  
  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
  
  updateCountdown();
  setInterval(updateCountdown, 1000);
  
  document.getElementById("discordButton").addEventListener("click", function() {
    window.location.href = "https://discord.gg/mYEKWYZNxQ"; // Replace with your Discord server invite link
  });
  
  document.getElementById("learnMoreButton").addEventListener("click", function() {
    window.location.href = "learn_more.html"; // Replace with the URL of the page you want to link to
  });
  