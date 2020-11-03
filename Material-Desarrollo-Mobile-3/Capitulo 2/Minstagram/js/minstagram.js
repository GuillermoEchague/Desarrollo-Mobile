// Inicializar la ventana modal de efectos
var ventanaModal = document.querySelectorAll('.modal');
var opciones = 'inDuration: 2500, outDuration: 590';
var instancia1 = M.Modal.init(ventanaModal, opciones);
const mipreloader = document.getElementById('cargando');
const camera = document.getElementById('camera');
const miframe = document.getElementById('mi-frame');

// Con esto disparo la cámara y la ventana modal para capturar fotos
var bc = document.getElementById('inicioCamara');
bc.onclick = function() {
        // console.log('Hice clic para sacar una foto...');
        camera.click();
        // console.log('Se activó camera.click()');
        camera.addEventListener('change', function(e) {
            // console.log('Entré a cambio de estado de camera');
            if (e.target.files[0] != '') {
                // console.log('e.target.files[0] ya es un objeto.');
                mipreloader.classList.remove('hide');
                // console.log('Removí la clase hide de MIPRELOADER. Debería verse.');
                var fotografia = URL.createObjectURL(e.target.files[0]);
                // console.log('Cree la variable fotografía con el objeto e.target...');
                setTimeout(() => {
                    // console.log('Se ejecutó setTimeOut...');
                    var newframe =  "<div class='card z-depth-1'>"
                        newframe += "    <div class='card-image'>"
                        newframe += "       <input type='file' accept='image/*' capture='camera' user id='camera' class='hide'/>"
                        newframe += "       <img src='" + fotografia + "' id='mi-imagen'>"
                        newframe += "       <a class='btn-floating halfway-fab btn-large waves-effect waves-light red darken-3 modal-trigger' href='#modal1'><i class='material-icons'>palette</i></a>"
                        newframe += "    </div>"
                        newframe += "    <div class='card-content'>"
                        newframe += "    <a class='btn-flat btn-medium waves-effect waves-blue white' href='#'><i id='corazon' class='material-icons'>favorite_border</i></a>"
                        newframe += "    <a class='btn-flat btn-medium waves-effect waves-blue white' href='#'><i id='mensaje' class='material-icons'>chat</i></a>"
                        newframe += "       <p class='left-align'>Aquí publicamos un texto copado que 'ROMPA LA INTERNÉ'!</p>"
                        newframe += "    </div>"
                        newframe += "</div>";
                        // console.log('Armé la variable newframe');
                        var f = document.getElementById('mi-frame');
                        // console.log('Creé la variable F con el valor de mi-frame.')
                        f.innerHTML = newframe;
                        // console.log('Escribí el innerHTML con la variable newframe.')
                        mipreloader.classList.add('hide');
                        miframe.classList.remove('hide');
                }, 1000);    
            }
        });
}

//Aplicar filtros a mi imagen
function seleccionoFiltro(f) {
    var i = document.getElementById('mi-imagen');
    var filtro;
    switch (f) {
        case 'Borroso':
            filtro = 'filtro-borroso';
            break;
        case 'Sepia 99':
            filtro = 'filtro-mil899';
            break;
        case 'Gris 26':
            filtro = 'filtro-milnueve26';
            break;
        case 'Nega 33':
            filtro = 'filtro-negativo33';
            break;
        case 'Clar 75':
            filtro = 'filtro-los70s';
            break;
        default:
            filtro = '';
            break;
    }
    i.className = ''; //Remueve todas las clases que haya
    i.className = filtro; //Le aplico el filtro
    document.getElementById('btnAplicar').click();
}