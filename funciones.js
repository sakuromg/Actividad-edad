function verificarEdad() {
    let edad = document.getElementById("edad").value;

    if (edad.trim() === "") {
        alert("Por favor, ingresa tu edad");
    }
    else if (isNaN(Number(edad)) || Number(edad) < 0) {
        alert("Ingresa una edad válida");
    }
    else if (Number(edad) >= 18) {
        alert("Eres mayor de edad");
    }
    else {
        alert("Eres menor de edad");
    }
}