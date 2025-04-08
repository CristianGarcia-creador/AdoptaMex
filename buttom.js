// Obtén una referencia al botón usando su ID
const boton = document.getElementById('adopt-btn');

// Define la URL a la que deseas redirigir
const urlDestino = 'file:///C:/Users/vic_m/Desktop/pagina%20huellitas/contacto.html'; // Cambia esto por la URL deseada

// Define una función que se ejecutará cuando se haga clic en el botón
function redireccionar() {
    window.location.href = urlDestino;
}

// Asocia la función al evento de clic del botón
boton.addEventListener('click', redireccionar)