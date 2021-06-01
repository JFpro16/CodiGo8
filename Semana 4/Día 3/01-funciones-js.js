function tm(n = 5, límite = 10) {
    console.log (`Tabla del ${n}`);
    for (let i = 0; i < límite; i++) {
    console.log(`${n} x ${i} = ${i * n}`);
    }
}

tm(5, 11);
tm(6, 12);
tm(7);
tm(8);

function f(n) {
    let total = 1;
    for (let i = n; i > 0; i--) {
        total = total * i;
    }
    console.log(`Total en Función ${total}`);
    return total;
}

(function c() {
    console.log("Configurando...");
})();




function s(a, b) {
    return a + b;
}

let s78 = 15
console.log(`Sumando 7 y 8 = ${s78}`);

let xd = s(s(1, 2), s(3, 4))
console.log(`Sumando 1, 2, 3 y 4 = ${xd}`)

function p(p1, p2) {
    if (p1 === p2 && p1.length >= 6) {
        return true;
    }
    console.log("Se returna a false");
    return false;
}

let resultado = p("abcdefg", "abcdefg");
console.log(resultado);