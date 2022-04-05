/* Aplicacion para guardas datos en la tabla*/
// Declaracion de variables
var Nombre, Apellido, Telefono, Email, Direccion, Nota, Fecha;
var Tabla = document.getElementById("Tabla_Datos_Personales");
var Btn_Guardar = document.getElementById("Btn_Enviar")
var Contador = 1;
//console.log("Java Script Funcionando")

Btn_Guardar.addEventListener("click",Agregar_A_Tabla)

function Agregar_A_Tabla(){

    Nombre = document.getElementById("Nombre").value;
    Apellido = document.getElementById("Apellido").value;
    Telefono = document.getElementById("Telefono").value;
    Email = document.getElementById("Email").value;
    Direccion = document.getElementById("Direccion").value;
    Fecha = document.getElementById("Fecha").value;
    Nota = document.getElementById("Nota").value;
    Direccion = document.getElementById("Direccion").value;

    console.log(Nombre);
    console.log(Apellido);
    console.log(Telefono);
    console.log(Email);
    console.log(Fecha);
    console.log(Nota);
    console.log(Direccion);

    var Fila = Tabla.insertRow (Contador);
    var Celda_1 = Fila.insertCell(0);
    var Celda_2 = Fila.insertCell(1);
    var Celda_3 = Fila.insertCell(2);
    var Celda_4 = Fila.insertCell(3);
    var Celda_5 = Fila.insertCell(4);
    var Celda_6 = Fila.insertCell(5);
    var Celda_7 = Fila.insertCell(6);
    var Celda_8 = Fila.insertCell(7);

    Celda_1.innerHTML = Nombre;
    Celda_2.innerHTML = Apellido;
    Celda_3.innerHTML = Telefono;
    Celda_4.innerHTML = Email;
    Celda_5.innerHTML = Direccion;
    Celda_6.innerHTML = Fecha;
    Celda_7.innerHTML = Nota;
    Celda_8.innerHTML = '<button class="Btn_Danger" onclick="Eliminar_Fila(this)">Eliminar</button>';

    Contador++;

}