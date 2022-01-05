import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe('Pruebas en 05-funciones', () => {
   test('getUser debe devolver un objeto', () => {
    const miObj={
        uid: "ABC123",
        username: "El_Papi1502",
    }
    const valorF= getUser();
    expect(valorF).toEqual(miObj);   //toEqual evualua que los obj tengan las mismas propiedades y valores
   })
   test('getUsuarioActivo debe devolver un usuario Activo',()=>{
       const nombre='Alexis';
       const miObj={
        uid: "ABC567",
        username: nombre,
       }
       const valorF=getUsuarioActivo(nombre);
       expect(valorF).toEqual(miObj);
   })
   
    
})
