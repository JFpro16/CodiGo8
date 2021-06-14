const párrafo1 = document.querySelector('#párrafo1');

console.log(párrafo1.innerText);

párrafo1.innerText = ('Nuevo Texto del Párrafo')

const div1 = document.getElementById('div1')
const div2 = document.getElementById('div2')

div1.innerText = "<a href='www.google.com'>Link a Google</a>";
div2.innerHTML = "<a href='www.google.com'>Link a Google</a>";

const TextoNegrita = document.createElement('strong');

TextoNegrita.innerText = (' Aea')

párrafo1.append(TextoNegrita)

const ListaUsuarios = document.querySelector('#lista-usuarios');

users.array.forEach((usuario) => {
    let liTemporal = document.createElement('li')
    liTemporal.innerText = `${usuario.first_name} ${usuario.last_name}`;
    ListaUsuarios.append(liTemporal);
});