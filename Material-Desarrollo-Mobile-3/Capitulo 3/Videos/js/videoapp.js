var n;
var a;
var video;
var listado;
var estado;
let d = document;
let remotevideo = d.getElementById('remotevideo');
let coverframe = d.getElementById('coverframe');
let listavideos = d.getElementById('listavideos');
let titulo = d.getElementById('titulo');
let vdf = d.getElementById('vdf');
const cursoPython = 'js/videocurso.json'; //RUTA Y NOMBRE DEL ARCHIVO JSON

//CARGO EL ARCHIVO JSON QUE OFICIA DE PLAYLIST
function cargarListaDeReproduccion(lista) {
    var ldr = new XMLHttpRequest();
    ldr.open('GET', lista, true);
    ldr.send();
    ldr.onreadystatechange = function() {
        if (ldr.readyState == 4 && ldr.status == 200) {
            video = JSON.parse(ldr.responseText);
            n = 0;
            listado = "<ul class='collection scrollable'>";
            for (let v of video) {
                listado += "<li class='collection-item avatar grey-text' id='" + n + "'>"
                listado += "<i class='material-icons circle red waves-effect waves-light " + v.boton + "' onclick='reproduzcoVideo(" + n + ")'>play_arrow</i> "
                listado += "<span class='title'>" + v.titulo + "</span>"
                listado += "<p>" + v.desc + "</p>"
                listado += "</li>";
                n++;
            }
            listado += '</ul>';
            listavideos.innerHTML = listado;
        }
    }
}

cargarListaDeReproduccion(cursoPython);

function reproduzcoVideo(id) {
    a = id;
    if (video[id].url == '...') { /* Si no hay un video cargado mediante la URL, aprovecho el ítem 'MSJ' para decirle al usuario para qué fecha estimada se publicará dicho video */
        alert(video[id].msj);
    } else { /* Preparo el elemento <video>, cargo el contenido, ajusto su ancho al del dispositivo pongo autoplay, visualizo el video y oculto la imagen que uso como portada general. */
        remotevideo.controls = true;
        remotevideo.src = video[id].url;
        remotevideo.type = 'video/mp4';
        remotevideo.width = coverframe.width;
        remotevideo.autoplay = true;
        remotevideo.classList.remove('hide');
        coverframe.classList.add('hide');
    }
}

window.addEventListener('resize', function() {
    ajustoAnchoDeVideo();
})

remotevideo.onended = function() {
    estado = '';
    document.getElementById(a).classList.add('grey');
    document.getElementById(a).classList.add('darken-4');
    reproduzcoVideo(a + 1);
    ajustoAnchoDeVideo();
}

remotevideo.onpause = function() {
    estado = 'paused';
}

remotevideo.onplay = function() {
    estado = 'playing';
}

function ajustoAnchoDeVideo() {
    ancho = document.body.clientWidth;
    remotevideo.width = ancho;
    coverframe.width = ancho;
}