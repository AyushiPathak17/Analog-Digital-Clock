// analogClock.js
document.addEventListener('DOMContentLoaded', function () {
    const analogClockCanvas = document.getElementById('analogClock');
    const context = analogClockCanvas.getContext('2d');
    const centerX = analogClockCanvas.width / 2;
    const centerY = analogClockCanvas.height / 2;
    const clockRadius = 80;

    function drawClock() {
      // Clear the canvas
      context.clearRect(0, 0, analogClockCanvas.width, analogClockCanvas.height);
  
      // Draw clock circle
      context.beginPath();
      context.arc(centerX, centerY, clockRadius, 0, 2 * Math.PI);
      context.lineWidth = 4;
      context.strokeStyle = '#fff';
      context.stroke();
  
      // Draw clock numbers
      for (let i = 1; i <= 12; i++) {
        const angle = (i - 3) * (Math.PI * 2) / 12;
        const x = centerX + Math.cos(angle) * (clockRadius - 15);
        const y = centerY + Math.sin(angle) * (clockRadius - 15);
        context.font = '14px Arial';
        context.fillStyle = '#fff';
        context.fillText(i, x, y);
      }
  
      // Get current time
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
  
      // Draw hour hand
      const hourAngle = (hours - 3 + minutes / 60) * (Math.PI * 2) / 12;
      drawClockHand(centerX, centerY, hourAngle, clockRadius - 30, 6, '#fff');
  
      // Draw minute hand
      const minuteAngle = (minutes - 15 + seconds / 60) * (Math.PI * 2) / 60;
      drawClockHand(centerX, centerY, minuteAngle, clockRadius - 15, 4, '#fff');
  
      // Draw second hand
      const secondAngle = (seconds - 15) * (Math.PI * 2) / 60;
      drawClockHand(centerX, centerY, secondAngle, clockRadius - 10, 2, '#e74c3c');
    }
  
    function drawClockHand(x, y, angle, length, width, color) {
      const endX = x + Math.cos(angle) * length;
      const endY = y + Math.sin(angle) * length;
  
      context.beginPath();
      context.moveTo(x, y);
      context.lineTo(endX, endY);
      context.lineWidth = width;
      context.strokeStyle = color;
      context.stroke();
    }
  
    function updateAnalogClock() {
      drawClock();
    }
  
    // Initial call to draw the analog clock
    drawClock();
  
    // Call the update function every second
    setInterval(updateAnalogClock, 1000);
  });
  