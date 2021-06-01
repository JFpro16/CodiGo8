function bpd(dni, parametro2) {

    let respuesta = "Jorge";
    parametro2(respuesta);
    
}

bpd("1234567", function (nombre) {
    console.log(`Resultado: ${nombre}`);
})

let saludar = function () {
    console.log("Aea")
}

saludar();

const gn = (callback) => {
    fetch("https://reqres.in/api/users").then((peticion) => {
      return peticion.json();
    }).then(data => {
      let nombres = data.data.map(obj => obj.first_name);
      callback(nombres);
    })
};


