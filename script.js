// script.js
document.addEventListener('DOMContentLoaded', function () {
    const analogClockContainer = document.getElementById('analogClockContainer');
    const digitalClockContainer = document.getElementById('digitalClockContainer');
    const toggleClockButton = document.getElementById('toggleClock');
  
    toggleClockButton.addEventListener('click', function () {
      // Toggle visibility of analog and digital clock containers
      const isAnalogVisible = analogClockContainer.style.display !== 'none';
      analogClockContainer.style.display = isAnalogVisible ? 'none' : 'block';
      digitalClockContainer.style.display = isAnalogVisible ? 'block' : 'none';
    });
  });
  