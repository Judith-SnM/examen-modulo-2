const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

console.log("hola mundo")
$(document).ready(function () {
    $("#botonenviar").on("click", function () {
        var text = $(this).text();
        alert("El Mensaje fue enviado correctamente...");
    })

    let tarjetajq1 = $("#card1")
    let tarjetajq2 = $("#card2")
    let tarjetajq3 = $("#card3")
    let tarjetajq4 = $("#card4")
    let texto1 = $("#texto1")
    let texto2 = $("#texto2")
    let texto3 = $("#texto3")
    let texto4 = $("#texto4")
    
    tarjetajq1.dblclick(function () {
      texto1.addClass("text-danger")
    })

    tarjetajq2.dblclick(function () {
      texto2.addClass("text-danger")
    })
    tarjetajq3.dblclick(function () {
      texto3.addClass("text-danger")
    })
    tarjetajq4.dblclick(function () {
      texto4.addClass("text-danger")
    })

    let Contactojq = $("#titulo")
    let formulariojq = $("#formulario")

    Contactojq.click(function () {
        $(formulariojq).fadeToggle()
    })


});