document.addEventListener('DOMContentLoaded',function(){
    let link = document.getElementById('point');
    let bulbStyles = {
      a:'custom-icons',
      b:'clicked'
    }
    if(link){
      link.addEventListener('click',()=>{
       handleColorState();
      })
    }
   const handleColorState=()=>{
    link.classList.toggle('clicked'); 
  }

});
