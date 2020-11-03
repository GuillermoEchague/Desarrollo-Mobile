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


});