document.addEventListener('DOMContentLoaded',function(){
    let link = document.getElementById('demo-bulb');
    let line = document.getElementById('line');
    let bulbStyles = {
      a:'custom-icons',
      b:'clicked'
    }
    if(link){
      line.addEventListener('click',()=>{
       let res = handleColorState();
       if(res.length==1){
        line.style.backgroundColor="black";
       }
      })
    }
   const handleColorState=()=>{
    link.classList.toggle('clicked');
    if(line){
        line.style.backgroundColor="rgb(228, 131, 4)"
    }
    return link.classList 
  }

});
