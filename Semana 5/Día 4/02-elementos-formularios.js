let inputNombre = document.getElementById('inputNombre');
let selectPaís = document.getElementById('selectPaís');
let btnProcesar = document.getElementById('btnProcesar');
let btnValidar = document.getElementById('btnValidar');
btnProcesar.onclick = () = > {
    console.log(inputNombre.value);
    console.log(selectPaís.value);
};

btnProcesar.onclick = () = > {
    let nombre = inputNombre.value;
    let país = selectPaís.value;

    if (nombre === '') {
        inputNombre.classList.add('input-error');
    }else {
        inputNombre.classList.add('input-error')
    }
    
};

