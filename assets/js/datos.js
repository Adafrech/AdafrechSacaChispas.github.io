const form = document.getElementById('contact-form');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const mensajeInput = document.getElementById('mensaje');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const datosFormulario = {
    nombre: nombreInput.value,
    email: emailInput.value,
    mensaje: mensajeInput.value
  };


  localStorage.setItem('formularioContacto', JSON.stringify(datosFormulario));


  nombreInput.value = '';
  emailInput.value = '';
  mensajeInput.value = '';

  alert('Los datos del formulario han sido almacenados correctamente.');
});