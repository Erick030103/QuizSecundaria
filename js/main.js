'use strict'

$(document).on('click', '#boton1', function(){
  var primerAnio = '<i class="fas fa-arrow-left"></i>\
  <h1 class="contenedor__titulo">Primer año de Secundaria</h1>\
  <h3 class="contenedor__elegir">Pulsa el botón para comenzar</h3>';

  $("#contenedor").html(primerAnio);
  $("body").css("background", "var(--bodyprimero)");
});

$(document).on('click', '#boton2', function(){
  var segundoAnio = '<h1 class="contenedor__titulo">Segundo Año de secundaria</h1>\
  <h3 class="contenedor__elegir">Pulsa el botón para comenzar</h3>\
  <i class="fas fa-chevron-left"></i>';

  $("#contenedor").html(segundoAnio);
  $("body").css("background", "var(--bodysegundo)");
});

$(document).on('click', '#boton3', function(){
  var tercerAnio = '<h1 class="contenedor__titulo">¿Tercer Año de Secundaria</h1>\
  <h3 class="contenedor__elegir">Pulsa el boton para comenzar</h3>\
  ';

  $("#contenedor").html(tercerAnio);
  $("body").css("background", "var(--bodytercero)");
});
/*
function paginaPrincipal() {
  var paginaAnios = '<h1>¿Serás bastante bueno?</h1>\
  <h3>¡Elige tu grado y a comenzar!</h3>\
  <div class="botones-anios">\
    <input id="boton1" class="boton__anio--select" type="button" value="1 año">\
    <input id="boton2" class="boton__anio--select" type="button" value="2 año">\
    <input id="boton3" class="boton__anio--select" type="button" value="3 año">\
  </div>\
  <h5>A COMENZAR</h5>';

  $("#contenedor").html(paginaAnios);
}
*/