document.addEventListener('DOMContentLoaded', function() {
    var parametros = {
        edge: 'left',
        inDuration: 600,
        outDuration: 800,
        preventScrolling: true,
        onOpenStart: function() { l.style.visibility = 'hidden'; },
        onCloseEnd: function() { l.style.visibility = 'visible'; }
    };
    var l = document.getElementById('brandlogo');
    var componente = document.querySelectorAll('.sidenav');
    var m = M.Sidenav.init(componente, parametros);
});

