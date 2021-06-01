function ac(r) {
    function c(n) {
        return n * n;
    }
    r = c(r) * 3.1415;
    return r;
}
let c12 = ac(12);
console.log(`Área de  un Círculo con r=12 = ${c12} `)

/**
 * 
 * @param {String} n 
 * @param {Array} ns 
 */

function bn(n, ns) {
    for (let i = 0; i < n.length; i++){
        if (ns[i] === "nombre") {
            return i;
        }
    }
    return -1;
}

let = names = ["Jorge", "Horge", "Gorje", "George", "NiñoCreisi"];
let posición = bn("Jorge", names);
if (posición >= 0) {
    console.log(`Encontrado en la posición ${posición}`);
} else {
    console.log(`Ups! No se encontró el nombre`)
}