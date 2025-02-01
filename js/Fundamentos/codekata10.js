document.querySelector(".test").addEventListener("click", function(event){
    event.stopPropagation();//evitamos que los eventos se crucen
    alert("Click en el boton");
});

/*document.addEventListener("contextmenu", function(event){
    event.preventDefault();
    alert("menu contextual esta intervenido");
});*/

window.addEventListener("click", function(event){
    console.log("Hemos hecho click en la ventana de la web");
});