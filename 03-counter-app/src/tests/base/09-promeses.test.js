import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas con promesas', () => {
    //el done hace esperar la prueba
    test('getHeroeByIdAsync debe retornar un heroe async', ( done ) => {
        const id=1;
        getHeroeByIdAsync(id)
            .then(heroe =>{

                expect( heroe ).toBe( heroes[0] )
                done(); //siempre se lo llama 

            })
    })
    // test('debe retornar un error si el heroe por id no existe', (done) => {
    //     //done es un callback para indicarle a jest cuando ya terminamos y no esperamos mas resultados de tareas async
    //     const id = 10;
    //     getHeroeByIdAsync( id )
    //         .catch(error =>{
    //             expect(error).toBe('No se pudo encontrar el héroe');
    //             done();
    //         })

    // });
    test('debe de obtener un error si el heroe por id no existe', () => {
        const id = 10;
        return expect(getHeroeByIdAsync(id)).rejects.toMatch('No se pudo encontrar el héroe');
    });
    test('getHeroesByIdAsync debe retornar un héroe async0', ()  => {
        const id = 1;
        return expect(getHeroeByIdAsync(id)).resolves.toBe(heroes[0]);
    });
    
})
