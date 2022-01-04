const personajes=["Goku","Vegeta","Trunks"];
const [ , , p3]= personajes;
console.log(p3)

const retornaArreglo=()=>{
  return ["ABC",123];
}

const [letras, numeros]=retornaArreglo();
console.log(letras, numeros);

//Tarea
//1. el primer valor del arreglo se llamara nombre
//2. Se llamara setNombre
const uState= (valor)=>{
  return [valor,()=>{
    console.log("Hola mundo")
  }];
}

const [nombre, setNombre]= uState("Goku");
console.log(nombre);
setNombre();