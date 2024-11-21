// Seleccionar los elementos del formulario
const nombreInput = document.getElementById("nombre");
const apellidoInput = document.getElementById("apellido");
const saludo = document.getElementById("saludo");
const labelNombre = document.getElementById("labelNombre");
const labelApellido = document.getElementById("labelApellido");

function validarCampo(input, label) {
  const valor = input.value.trim();

  const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,}$/;

  if (!regex.test(valor) || valor.replace(/\s/g, "").length < 2) {
    label.classList.add("error");
    input.classList.add("error");
    return false;
  } else {
    label.classList.remove("error");
    input.classList.remove("error");
    return true;
  }
}

nombreInput.addEventListener("input", () => {
  saludo.textContent = "Usted está tipeando...";
  validarCampo(nombreInput, labelNombre);
  actualizarSaludo();
});

apellidoInput.addEventListener("input", () => {
  saludo.textContent = "Usted está tipeando...";
  validarCampo(apellidoInput, labelApellido);
  actualizarSaludo();
});

nombreInput.addEventListener("blur", () => {
  if (!validarCampo(nombreInput, labelNombre)) {
    saludo.textContent = "Error: Nombre inválido.";
  } else {
    saludo.textContent = "";
  }
});

apellidoInput.addEventListener("blur", () => {
  if (!validarCampo(apellidoInput, labelApellido)) {
    saludo.textContent = "Error: Apellido inválido.";
  } else {
    saludo.textContent = "";
  }
});

function actualizarSaludo() {
  if (
    validarCampo(nombreInput, labelNombre) &&
    validarCampo(apellidoInput, labelApellido)
  ) {
    const nombre = nombreInput.value.trim().toUpperCase();
    const apellido = apellidoInput.value.trim().toUpperCase();
    saludo.textContent = `Hola ${nombre} ${apellido}`;
  } else if (
    !nombreInput.value.trim() ||
    !apellidoInput.value.trim()
  ) {
    saludo.textContent = "Usted está tipeando...";
  }
}