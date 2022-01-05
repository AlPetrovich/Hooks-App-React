import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp"
import heroes from "../../data/heroes";

describe('Pruebas en funciones de Heroes', () => {
    test('debe de retornar un heroe por id', () => {
       const id = 1;
       const heroe = getHeroeById(id);
       const heroeData= heroes.find(heroe=> heroe.id===id);
       
       expect(heroe).toEqual(heroeData);
    })
    test('Id inexistente = undefined', () => {
        const id= 20;
        const heroe= getHeroeById(id);
        expect(heroe).toBe(undefined)
    })
    //debe de retornar un arreglo con los heroes de DC
    //to Equal al arreglo filtrado

    //debe de retornar un arreglo con los heroes de Marvel
    //length = 2
    test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => {
        const owner= 'DC';
        const dcHeroes= getHeroesByOwner(owner);

        const heroesData= heroes.filter(h => h.owner===owner);

        expect(dcHeroes).toEqual(heroesData);
    })

    test('Retonar arreglo con heroes de Marvel length=2',()=>{
        const owner='Marvel'
        const marvelHeroes= getHeroesByOwner(owner);
        const long= 2;

        expect(marvelHeroes.length).toBe(long);
    })
    
    
})
