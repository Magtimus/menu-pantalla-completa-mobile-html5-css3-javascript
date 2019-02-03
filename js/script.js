var menu = document.getElementById('container-menu');
var cerrar = document.getElementById('cerrar');
var item = document.getElementById('item');

function mostrar(){
    menu.style.padding = '26px 26px 200vw 200vw';
    cerrar.style.display = 'block';
    item.style.display = 'flex';
}

function ocultar(){
    menu.style.padding = '26px 26px 52px 52px';
    cerrar.style.display = 'none';
    item.style.display = 'none';
}