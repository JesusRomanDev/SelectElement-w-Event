document.addEventListener('DOMContentLoaded', () => {
    console.log('Cargado correctamente');
    const selectElemento = document.querySelector('.barra');
    selectElemento.addEventListener('change', (e) => console.log(e.target.value))
    const boton = document.querySelector('.boton');
    boton.addEventListener('click', () => console.log(selectElemento))
})