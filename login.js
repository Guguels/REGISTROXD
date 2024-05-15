document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); // Evita que el formulario se envíe de manera predeterminada
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Aquí puedes realizar la validación del usuario y la contraseña
    // Por ahora, solo imprimimos los valores
    console.log("Usuario:", username);
    console.log("Contraseña:", password);
    
    // Lógica de autenticación (puedes hacer una petición AJAX aquí)
    
    // Redirigir a la página después de iniciar sesión
    window.location.href = "tarea12.html"; // Cambia "pagina_despues_de_login.html" por la URL de la página a la que quieres redirigir
  });
  