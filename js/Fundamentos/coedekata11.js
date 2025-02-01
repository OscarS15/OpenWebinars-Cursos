let inputName = document.querySelector(".nombre");
let buttonSaluda = document.querySelector(".test");

buttonSaluda.addEventListener("click", function(event) {
    if(inputName.value != ""){
        alert("Buenasss "+inputName.value);
        inputName.value = "";
    }
});