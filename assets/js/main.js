const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

console.log("hola mundo")
$(document).ready(function () {
    $("#botonenviar").on("click", function () {
        var text = $(this).text();
        alert("El Mensaje fue enviado correctamente...");
    })

    let titulojq1 = $("#tex1")
    let titulojq2 = $("#tex2")
    
       
    titulojq1.click(function () {
      titulojq1.addClass("text-danger")
    })
    titulojq2.click(function () {
      titulojq2.addClass("text-danger")
    })

    let Contactojq = $("#titulo")
    let formulariojq = $("#formulario")

    Contactojq.click(function () {
        $(formulariojq).fadeToggle()
    })


});