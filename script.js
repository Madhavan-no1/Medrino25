// script.js
const countdown = document.getElementById('countdown');
const eventDate = new Date('2025-02-28T09:00:00'); // Correct date format: YYYY-MM-DD

function updateCountdown() {
    const now = new Date();
    const timeLeft = eventDate - now;

    // If the event date is in the future
    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        // If the event date has passed
        countdown.innerHTML = "Event has started!";
    }
}

// Update the countdown every second
const interval = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call to display the timer immediately