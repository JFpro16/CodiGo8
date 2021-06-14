let números = [4,6,8,12];

let sumatoriaNúmeros = números.reduce((sumatoria, elementoActual) => {
    return sumatoria + elementoActual;
}, 0);

console.log(`Suma Total: ${sumatoriaNúmeros}`);