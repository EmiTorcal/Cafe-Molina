// La funcion mira el valor de el scroll en Y, si es mayor a 0 le cambia al header la clase por header2, sino vuelve a la clase header

let encabezado = document.getElementById('encabezado');
let Bt_arriba = document.getElementById('Boton_arriba');


window.addEventListener('scroll', function () {
    let posicion = this.scrollY;
    let windowWidth = window.innerWidth;
    if (posicion > 0 && windowWidth > 910) {
        encabezado.classList.remove('header')
        encabezado.classList.add('header2')

        Bt_arriba.style.display = 'inline-block';

    } else {
        if (posicion > 0 && windowWidth < 910) {
        encabezado.classList.remove('header')
        encabezado.classList.add('header3')

        Bt_arriba.style.display = 'inline-block';

    } else {
        encabezado.classList.remove('header3')
        encabezado.classList.remove('header2')
        encabezado.classList.add('header')
        Bt_arriba.style.display = 'none';
    }}
})