function calcularEdad() {
    const hoy = new Date();
    const nacimiento = new Date(document.getElementById("FDN").value);
    const cumpleaños = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate());
    
    let nombre = document.getElementById("Nombre").value
    let edad = hoy.getFullYear() - nacimiento.getFullYear()

    if (cumpleaños > hoy){

        edad = edad-1;

    }

    document.getElementById("resultado").textContent = `Te llamas ${nombre} y tienes ${edad} años`;

}
    



 