
const persona={
    nombre:"Tony",
    apellido:"Stark",
    edad:45,
    direccion:{
        ciudad:"New York",
        zip: 2132132133,
        lat:33.3232,
        lng:11.23233
    }
};

//console.table(persona);
console.log(persona); 

//Muy mal estamos haciendo copia por referencia!!!
//Si quiero clon lo mas facil es copiar y hacer un obj nuevo
//esto apunta un espacio en memoria nuevo.
//const persona2= persona;
const persona2={...persona}; //clonando y no asignando referencia
persona2.nombre="Peter"; //tengo un falso +

console.log(persona2)
console.log(persona); 