//Funciones en js

const saludar = function saludar(nombre) {
  return `Hola, ${nombre}`;
};

// const saludar2=(nombre)=>{
//     return `Hola, ${nombre}`;
// }

const saludar2 = (nombre) => `Hola, ${nombre}`;

//console.log(saludar("Alexis"));
console.log(saludar);
console.log(saludar2("Goku"));

//**************************** */

//Aca tengo una funcion que retorna un objeto

// const getUser=()=>{
//     return{
//         uid:"ABC123",
//         username:"DonKing"
//     }
// }

//Si quiero retornar el objeto de esta manera es decir
//sin return y llaves, debo encerrarlo entre parentesis!
// const getUser2=()=>
//     ({
//         uid:"ABC123",
//         username:"DonKing"
//     })

//console.log(getUser2());


//Tarea
//funcion flecha
//retorna un objeto implicito
//Pruebas
// function getUsuarioActivo(nombre) {
//   return {
//     uid: "ABC1231",
//     username: nombre,
//   };
// }

//OBJETO IMPLICITO!
const getUsuarioActivo2=(nombre)=>
    ({
        uid: "ABC1231",
        username: nombre,
    });


const usuarioActivo = getUsuarioActivo2("Alexis");
console.log(usuarioActivo);
