import  { heroes } from '../data/heroes';

export const getHeroesByPublisher = (publisher) =>{
    //validacion
    const validPublisher = ['DC Comics', 'Marvel Comics'];
    if(!validPublisher.includes(publisher)){
        throw new Error('Invalid publisher :(');
    }
    //lo que vale
    return heroes.filter(hero => hero.publisher === publisher)

}