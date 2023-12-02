const days = document.getElementById('days'); // Assuming you're using a class or an ID
const hours = document.getElementById('hours'); // Assuming you're using a class or an ID
const minutes = document.getElementById('minutes'); // Assuming you're using a class or an ID
const seconds = document.getElementById('seconds'); // Assuming you're using a class or an ID

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 1 ${currentYear + 1} 00:00:00`);

// Update Countdown Time
function updateCountdown() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.textContent = d;
    hours.textContent = h < 10 ? '0' + h : h;
    minutes.textContent = m < 10 ? '0' + m : m;
    seconds.textContent = s < 10 ? '0' + s : s;
}

setInterval(updateCountdown, 1000);
