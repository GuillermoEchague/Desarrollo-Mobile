document.addEventListener('DOMContentLoaded', function() {
  //Inicializo Tooltip
  var elementos = document.querySelectorAll('.tooltipped');
  var opciones = 'enterDelay: 200, exitDelay: 100; position: top';
  var instancia = M.Tooltip.init(elementos, opciones);
  
  //Inicializo Imágenes
  var elem = document.querySelectorAll('.materialboxed');
  var opcionesimg = "overlayActive: true";
  var instance = M.Materialbox.init(elem, opcionesimg);

});