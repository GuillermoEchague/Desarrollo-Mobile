var bp = document.getElementById("btnPreguntar");
var tc = document.getElementById("textoConsulta");
var ep = document.getElementById("btnEnviarPregunta");
var msj = document.getElementById("mensajeExcedido");
var caracteres;

bp.addEventListener("click", function() {
    var elemModal = document.querySelectorAll('.modal');
    var opciones = 'preventScrolling: true, inDuration: 500, outDuration: 300, startingTop: 50%';
    M.Modal.init(elemModal, opciones);
    tc.focus();
})

ep.addEventListener("click", function() {
    
    if (caracteres.textLength > 200) {
        alert('Excedido de caracteres: ' + caracteres);
    }
})

tc.addEventListener("input", function() {
    caracteres = tc.textLength;
    if (caracteres > 200) {
        msj.innerHTML = 'Excede caracteres: <strong>' + caracteres + '<strong>';
        ep.classList.add("disabled");
    } else {
        msj.textContent = '';
        ep.classList.remove("disabled");
    }
})