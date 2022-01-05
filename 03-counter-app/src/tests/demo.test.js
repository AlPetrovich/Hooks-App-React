describe('Pruebas en el archivo demo.test.js',()=>{
    test("Strings iguales",()=>{
        //1. inicializacion
       const mensaje='Hola Mundo';
       //2. estimulo
       const mensaje2=`Hola Mundo`;
       //3. Observar comportamiento
       expect( mensaje ).toBe(mensaje2); //===
    
    })
})