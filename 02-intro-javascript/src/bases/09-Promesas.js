import { getHeroeById } from "./bases/08-imp-exp";

// const promesa= new Promise((resolve,reject)=>{
//     setTimeout(()=>{

//         const p1=getHeroeById(2);
//         resolve(p1);
//         //reject("No se pudo encontrar el error");
//         //resolve();
//     },2000)
// });

// promesa.then(elementos=>{
//     console.log('heroe',elementos);
// })
// .catch(err=> console.warn(err));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p1 = getHeroeById(id);
      p1 ? resolve(p1) : reject("No encontramos el heroe");
    }, 2000);
  });
};

getHeroeByIdAsync(1)
  .then(console.log)
  .catch(console.warn);
