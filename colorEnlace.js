document.addEventListener("DOMContentLoaded", function() {
    // Obtener la posición activa almacenada en sessionStorage
    var activeLinkIndex = sessionStorage.getItem('activeLinkIndex');
  
    // Aplicar el estilo activo si existe
    if (activeLinkIndex !== null) {
      var enlaces = document.querySelectorAll('.enlaceCambio');
      if (activeLinkIndex >= 0 && activeLinkIndex < enlaces.length) {
        enlaces[activeLinkIndex].classList.add('active');
      }
    }
  });
  
  function cambiarColor(enlace) {
    // Desactivar todos los enlaces
    var enlaces = document.querySelectorAll('.enlaceCambio');
    for (var i = 0; i < enlaces.length; i++) {
      enlaces[i].classList.remove('active');
    }
  
    // Activar el enlace actual
    enlace.classList.add('active');
  
    // Almacenar la posición activa en sessionStorage
    var enlacesArray = Array.from(enlaces);
    var activeLinkIndex = enlacesArray.indexOf(enlace);
    sessionStorage.setItem('activeLinkIndex', activeLinkIndex);
  
    // Redirigir a la nueva página
    window.location.href = enlace.href;
  }
  