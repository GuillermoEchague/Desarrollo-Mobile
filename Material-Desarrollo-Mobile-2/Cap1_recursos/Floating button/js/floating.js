document.addEventListener("DOMContentLoaded", function() {
    var b1 = document.getElementById("desactivarbtn");
    var b2 = document.getElementById("activarbtn");
    var sb = document.getElementById("soyunboton");
    
    b1.addEventListener("click", function() {
        sb.classList.add("disabled");
    })

    b2.addEventListener("click", function() {
        sb.classList.remove("disabled");
    })
})
