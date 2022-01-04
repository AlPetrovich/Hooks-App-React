const nombre="Alexis";
const apellido="Petrovich";

//const nombreCompleto= nombre+ " "+ apellido;
const nombreCompleto=`
${nombre}
${apellido}
${1+1}
 `;
console.log(nombreCompleto);

function getSaludo(nombre){
    return "Hola mundo "+ nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);