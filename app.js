document.addEventListener('DOMContentLoaded',function(){
    let bulb = document.getElementById('demo-bulb');
    let bulbLine = document.getElementById('line');
    if(bulb){
      bulb.addEventListener('click',()=>{
        bulb.classList.toggle('clicked');
        bulbLine.classList.toggle('clicked');

      })
    }

});
