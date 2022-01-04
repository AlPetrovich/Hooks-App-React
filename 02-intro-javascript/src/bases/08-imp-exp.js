//import heroes, {owners} from '../data/heroes';

import heroes from '../data/heroes';

//console.log(owners);

export const getHeroeById=(id)=> heroes.find(el=> el.id === id);

// const usuario= getHeroeById(2);
// const {id,name,owner}=usuario;
// console.log(id,name,owner);

export const getHeoresByOwner=(owner)=> heroes.filter(el=> el.owner===owner);

// const heroesDC= getHeoresByOwner("DC");
// console.log(heroesDC);

