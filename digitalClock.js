// digitalClock.js
document.addEventListener('DOMContentLoaded', function () {
    const digitalClockContainer = document.getElementById('digitalClockContainer');
    const hourBox = document.getElementById('hourBox');
    const minuteBox = document.getElementById('minuteBox');
    const secondBox = document.getElementById('secondBox');
    const periodBox = document.getElementById('periodBox');
    const format24Button = document.createElement('button'); // Create format buttons
    const format12Button = document.createElement('button');
  
    format24Button.textContent = '24-Hour Format';
    format12Button.textContent = '12-Hour Format';
  
    // Append buttons to the format-buttons div
    const formatButtons = document.createElement('div');
    formatButtons.classList.add('format-buttons');
    formatButtons.appendChild(format24Button);
    formatButtons.appendChild(format12Button);
    digitalClockContainer.appendChild(formatButtons);
  
    function updateDigitalClock() {
      const now = new Date();
  
      let hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
  
      if (format24Button.classList.contains('active')) {
        // 24-hour format
        hourBox.textContent = hours;
        periodBox.style.display = 'none';
      } else {
        // 12-hour format
        const period = hours >= 12 ? 'PM' : 'AM';
        hours = (hours % 12) || 12;
        hours = hours.toString().padStart(2, '0');
        
        hourBox.textContent = hours;
        periodBox.textContent = period;
        periodBox.style.display = 'inline-block';
      }
  
      minuteBox.textContent = minutes;
      secondBox.textContent = seconds;
    }
  
    function setFormat(format) {
      if (format === '24') {
        format24Button.classList.add('active');
        format12Button.classList.remove('active');
      } else {
        format12Button.classList.add('active');
        format24Button.classList.remove('active');
      }
  
      updateDigitalClock();
    }
  
    // Add click events to the format buttons
    format24Button.addEventListener('click', function () {
      setFormat('24');
    });
  
    format12Button.addEventListener('click', function () {
      setFormat('12');
    });
  
    // Update the clock every second
    setInterval(updateDigitalClock, 1000);
  
    // Initial call to display the clock immediately
    updateDigitalClock();
  });
  