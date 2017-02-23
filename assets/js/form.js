
var result = document.getElementById("result");

function mostrarDatos(){
 	var nombre = document.getElementById("textNombre").value;
 	var apellido = document.getElementById("textApellidos").value;
 	var dni = document.getElementById("textDNI").value;
 	var direccion = document.getElementById("textDireccion").value;
 	
 		var mostrar = "<ul><li>Nombre: "+ nombre + "</li>"+
	 				  "<li>Apellidos: "+ apellido +"</li>"+
	 				  "<li>DNI: "+ dni + "</li>"+
	 				  "<li>Dirección: "+ direccion + "</li></ul>";
 		result.innerHTML=mostrar;
 	
 }


