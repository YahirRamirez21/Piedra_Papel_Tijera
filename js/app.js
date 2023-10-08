const div = document.querySelector("form");
const inputNombre = document.getElementById('nombre');

inputNombre.addEventListener('keyup',() => {
    ChecarVacio();
});

function ChecarVacio() {
    if(inputNombre.value === "") {
        
        div.parentElement.classList.add("nombre");
    }
    
}
