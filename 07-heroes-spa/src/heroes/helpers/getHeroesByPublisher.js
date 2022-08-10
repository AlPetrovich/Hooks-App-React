import { heroes } from "../data/heroes";

export const getHeroesByPublisher = ( publisher ) => {
    //agrego una validacion 
    const validPublishers = ['DC Comics', 'Marvel Comics'];
    
    if (!validPublishers.includes(publisher)) {
        throw new Error('Invalid publisher');
    }
    //filtro
    return heroes.filter(hero => hero.publisher === publisher);
}
