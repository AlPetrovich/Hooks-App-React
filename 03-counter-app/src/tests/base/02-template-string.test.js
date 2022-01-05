import { getSaludo } from "../../base/02-template-string";
import '@testing-library/jest-dom';

describe('Pruebas en 02-template-string.js', () => {

    test('getSaludo debe retornar hola Alexis', () => {
        const nombre= 'Alexis';
        const saludo= getSaludo(nombre);
        expect(saludo).toBe('Hola '+ nombre);
    })
    //getSaludo debe retornar Hola Carlos por defecto
    test('getSaludo debe retornar Hola Carlos por defecto',()=>{
        const saludo=getSaludo();
        expect(saludo).toBe('Hola Carlos');
    })
    
})
