document.addEventListener('DOMContentLoaded',function(){
let bulb = document.getElementById('demo-bulb');
let bulbLine = document.getElementById('line');
let dragging = false;

bulb.addEventListener('click',()=>{
bulb.classList.toggle('clicked');
bulbLine.classList.toggle('clicked');
})

const handleDrag =()=>{
try{
bulbLine.addEventListener('dragenter',(event)=>{
event.preventDefault();
dragging = true;
console.log('Element dragged!');
})
}
catch(error){
console.log(`Error`,error);
}

}
handleDrag();

});
