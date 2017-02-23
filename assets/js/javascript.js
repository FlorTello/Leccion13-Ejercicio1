var enviar = document.getElementById("mostrarDatos");
var result = document.getElementById("result");

enviar.onclick = function(){
 	var nombre = document.getElementById("textNombre").value;
 	var apellido = document.getElementById("textApellidos").value;
 	var dni = document.getElementById("textDNI").value;
 	var direccion = document.getElementById("textDireccion").value;
 	
 	if(nombre != '' && apellido != "" && dni != ""  && direccion != ""){
 		var mostrar = "<ul><li>Nombre: "+ nombre + "</li>"+
	 				  "<li>Apellidos: "+ apellido +"</li>"+
	 				  "<li>DNI: "+ dni + "</li>"+
	 				  "<li>Dirección: "+ direccion + "</li></ul>";
 		result.innerHTML=mostrar;
 	}

 }

/* function mostrarDatos(){
 	var nombre = document.getElementById("textNombre").value;
 	var apellido = document.getElementById("textApellidos").value;
 	var dni = document.getElementById("textDNI").value;
 	var direccion = document.getElementById("textDireccion").value;
 	
 	if(nombre != '' && apellido != "" && dni != ""  && direccion != ""){
 		var mostrar = "<ul><li>Nombre: "+ nombre + "</li>"+
	 				  "<li>Apellidos: "+ apellido +"</li>"+
	 				  "<li>DNI: "+ dni + "</li>"+
	 				  "<li>Dirección: "+ direccion + "</li></ul>";
 		result.innerHTML=mostrar;
 	}

 }*/


