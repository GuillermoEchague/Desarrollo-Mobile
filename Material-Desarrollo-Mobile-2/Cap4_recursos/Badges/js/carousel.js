document.addEventListener('DOMContentLoaded', function() {

    var el = document.getElementById("imagenesCarousel");
    var opciones = "duration: 200, indicators: true, dist: -100";
    var instancia = M.Carousel.init(el, opciones);

    function encenderCarrousel() {
        instancia.next();
    }

    document.getElementById("btnfotos").addEventListener("click", function() {
        setInterval(encenderCarrousel, 3000)
    })

    var coll = document.querySelectorAll('.collapsible');
    var efectos = "accordion: true, inDuration: 400, outDuration: 400";
    var inst = M.Collapsible.init(coll, efectos);
});