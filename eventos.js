const div = document.getElementById("divButton");
const button = document.getElementById("button");

button.addEventListener("click", function(e) {
    e.stopPropagation();
    alert("Hola!");
})

divButton.addEventListener("click", function() {
    alert("Hola! Soy el div");
});