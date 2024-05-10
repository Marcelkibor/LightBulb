function drag(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}

document.addEventListener("dragover", function(event) {
    event.preventDefault();
});

document.addEventListener("drop", function(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text/plain");
    var draggedElement = document.getElementById(data);
    var container = document.querySelector(".container");
    var containerRect = container.getBoundingClientRect();

    var offsetY = event.clientY - containerRect.top;
    var maxOffsetY = containerRect.height - draggedElement.clientHeight;
    var newY = Math.min(maxOffsetY, Math.max(0, offsetY));

    draggedElement.style.bottom = (containerRect.height - newY) + "px";
});
