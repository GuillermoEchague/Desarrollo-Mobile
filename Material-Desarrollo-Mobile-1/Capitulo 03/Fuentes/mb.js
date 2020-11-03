document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var options = "inDuration: 300, outDuration: 600";
    var instances = M.Materialbox.init(elems, options);
  });

