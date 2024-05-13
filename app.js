document.addEventListener("DOMContentLoaded", function() {
    var bulb = document.getElementById("bulb");
    bulb.addEventListener("click", function() {
        externalFunction();
    });
});

function externalFunction() {
    console.log("External function called!");
    // Add your desired functionality here
}
