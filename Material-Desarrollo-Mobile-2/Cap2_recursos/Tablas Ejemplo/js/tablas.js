// btnstriped btnhighl btncenter btnresponse
var tbl = document.getElementById('tablaejemplo');
var btns = document.getElementById('btnstriped');
var btnh = document.getElementById('btnhighl');
var btnc = document.getElementById('btncenter');
var btnr = document.getElementById('btnresponse');

btns.addEventListener("click", function() {
    tbl.classList.toggle('striped');
    btns.classList.toogle('white');
})

btnh.addEventListener("click", function() {
    tbl.classList.toggle('highlight');
})

btnc.addEventListener("click", function() {
    tbl.classList.toggle('centered');
})

btnr.addEventListener("click", function() {
    tbl.classList.toggle('responsive-table');
})