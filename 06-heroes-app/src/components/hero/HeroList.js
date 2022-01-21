import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";


export const HeroList = ({publisher}) => {

    console.log(publisher)

    const heroes = getHeroesByPublisher( publisher );

  return(
      <>
        <h1>HeroList - {publisher} </h1>

        <ul>
            {
                heroes.map( (hero) =>(
                    <li key={hero.id}>
                        { hero.superhero }
                    </li>
                ))
            }
        </ul>
      </>
  )
};
