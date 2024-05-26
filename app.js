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

    document.addEventListener('dragstart',(event)=>{
    let selectedElement = event.target.id
    console.log(`Element ${selectedElement} dragged!`);
    event.preventDefault();
})
}
catch(error){
console.log(`Error`,error);
}

}
handleDrag();

});
