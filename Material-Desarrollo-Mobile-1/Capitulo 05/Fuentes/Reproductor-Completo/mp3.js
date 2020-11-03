document.addEventListener("DOMContentLoaded", function() { 
    var rep = document.getElementById("reproductor"); 
    var i = document.getElementById("vmeter"); 
    
        rep.addEventListener("play", function() { 
        i.setAttribute("src", "images/bar-on.gif");
        })

        rep.addEventListener("ended", function() { 
        i.setAttribute("src", "images/bar-off.gif");
        })

        rep.addEventListener("pause", function() { 
            i.setAttribute("src", "images/bar-off.gif");
            })
    
})