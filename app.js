document.addEventListener('DOMContentLoaded',function(){
    let bulb = document.getElementById('demo-bulb');
    let bulbLine = document.getElementById('line');
    let startY = 0;
    let initialHeight = 0;
    let dragging = false;
    if(bulb){
      bulb.addEventListener('click',()=>{
        bulb.classList.toggle('clicked');
        bulbLine.classList.toggle('clicked');
      })
    }

    if (bulbLine) {
      bulbLine.addEventListener('mousedown', (event) => {
        console.log(startY,initialHeight,dragging,'before')
        startY = event.clientY;
        initialHeight = parseInt(window.getComputedStyle(bulbLine).height, 10);
        dragging = true;
        console.log(startY,initialHeight,dragging,'after')
      });
    }
    document.addEventListener('mousemove', (event) => {
      if (dragging) {
        const currentY = event.clientY;
        const deltaY = currentY - startY;
        const newHeight = initialHeight + deltaY;
        if (newHeight > 0) {
          bulbLine.style.height = `${newHeight}px`;
        }
      }
    });
    document.addEventListener('mouseup', () => {
      if (dragging) {
        dragging = false;
      }
    });

});
