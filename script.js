// Target Date: February 22, 2026
const targetDate = new Date('February 22, 2026 00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        document.getElementById('countdown').innerHTML = "<h2 class='section-title'>WE ARE LIVE!</h2>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days.toString().padStart(2, '0');
    document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
}

// Update every second
setInterval(updateCountdown, 1000);
updateCountdown();

// Copy IP Functionality
function copyIP() {
    const ipText = document.getElementById('server-ip').innerText;
    const tooltip = document.getElementById('copy-tooltip');

    navigator.clipboard.writeText(ipText).then(() => {
        tooltip.classList.add('show');
        
        setTimeout(() => {
            tooltip.classList.remove('show');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
