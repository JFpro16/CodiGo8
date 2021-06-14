let linkGoogle = document.getElementById('linkGoogle')
let divCuadrado = document.getElementById('divCuadrado')
let selectPaís =  document.getElementsById('selectPaís')

let paises = [
    { id: 12343, nombre: "Perú", },
    { id: 12, nombre: "México", },
    { id: 13, nombre: "China", },
    { id: 19, nombre: "Argentina", },
  ]
linkGoogle.onclick = (e) => {
    e.preventDefault();
    console.log()
};

divCuadrado.onclick = () => {
    console.log('Click divcuadrado');
    console.log(e);
};