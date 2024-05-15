function generarCorreo() {
  var nombre = document.getElementById("nombre").value;
  var apellidos = document.getElementById("apellidos").value;
  var fechaNacimiento = document.getElementById("fechaNacimiento").value;
  
  // Obtener las iniciales de los nombres y apellidos
  var iniciales = nombre.split(" ").map(function(word) {
      return word.charAt(0);
  }).join("");
  
  // Obtener las dos últimas letras del segundo apellido
  var penultimaLetraSegundoApellido = apellidos.split(" ")[1].slice(-2, -1);
  var antepenultimaLetraSegundoApellido = apellidos.split(" ")[1].slice(-3, -2);
  
  // Obtener las tres últimas letras del primer apellido
  var ultimasTresLetrasPrimerApellido = apellidos.split(" ")[0].slice(-3);
  
  // Obtener los dos últimos dígitos del año de nacimiento
  var ultimoAnoDigitos = fechaNacimiento.split("-")[0].slice(-2);
  
  // Obtener el día de nacimiento
  var diaNacimiento = fechaNacimiento.split("-")[2];
  
  // Obtener el mes de nacimiento
  var mesNacimiento = fechaNacimiento.split("-")[1];
  
  // Calcular el dominio del correo
  var dominio = (new Date().getFullYear() - new Date(fechaNacimiento).getFullYear()) < 20 ? "@gmail.com" : "@gmail.com";
  
  // Generar el correo
  var correo = iniciales.toLowerCase() + penultimaLetraSegundoApellido + antepenultimaLetraSegundoApellido + ultimasTresLetrasPrimerApellido + ultimoAnoDigitos + diaNacimiento + mesNacimiento + dominio;
  
  // Mostrar el correo generado
  document.getElementById("resultadoCorreo").innerHTML = "Correo generado: " + correo;
}



