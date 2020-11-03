document.addEventListener('DOMContentLoaded', function() {
  //Inicializo Tooltip
  var elementos = document.querySelectorAll('.tooltipped');
  var opciones = 'enterDelay: 200, exitDelay: 100; position: top';
  var instancia = M.Tooltip.init(elementos, opciones);
  
  //Inicializo Imágenes
  var elem = document.querySelectorAll('.materialboxed');
  var opcionesimg = "overlayActive: true";
  var instance = M.Materialbox.init(elem, opcionesimg);

  //Apartado dedicado a Toast
  var bm = document.getElementById('nav-mobile');
      bm.addEventListener('click', function() {
        var msj = '<h6>El menú no se encuentra disponible</h6>';
        M.toast({html: msj, displayLength: 2000, outDuration: 1000, classes: 'rounded red darken-4'});
      })
});