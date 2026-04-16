const timeEl = document.querySelector('[data-testid="test-user-time"]');

function updateTime() {
  timeEl.textContent = Date.now();
}

// initial render
updateTime();

// update every second
setInterval(updateTime, 1000);