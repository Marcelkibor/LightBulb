document.addEventListener('DOMContentLoaded', function() {
    let bulb = document.getElementById('demo-bulb');
    let bulbLine = document.getElementById('line');
    let dragging = false;
    let startY = 0;
    let initialHeight = bulbLine.offsetHeight;
  
    bulb.addEventListener('click', () => {
      bulb.classList.toggle('clicked');
      bulbLine.classList.toggle('clicked');
    });
  
    bulb.addEventListener('dragstart', (event) => {
      dragging = true;
      startY = event.clientY;
      initialHeight = bulbLine.offsetHeight;
    });
  
    document.addEventListener('dragover', (event) => {
      event.preventDefault();
      if (dragging) {
        let currentY = event.clientY;
        let newHeight = Math.max(50, initialHeight + (currentY - startY));
        bulbLine.style.height = newHeight + 'px';
      }
    });
  
    document.addEventListener('dragend', (event) => {
      dragging = false;
    });
  });
