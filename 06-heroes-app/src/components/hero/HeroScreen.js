import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";
import { heroImges } from "../helpers/heroImages";

//import batman from '../../assets/heroes/dc-batman.jpg';
//const heroImages = require.context('../../assets/heroes', true);


export const HeroScreen = () => {

  const { heroId } = useParams();
  const navigate = useNavigate();

  const handleReturn = () => {
     navigate(-1); //navega a la pagina anterior
  }

  const hero = useMemo( ()=> getHeroById(heroId), [ heroId ]);
  
  if(!hero){
    return <Navigate to='/'></Navigate>
  }

  //desestructurar todo del hero
  const{
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  }= hero;

  //const imagePath = `/assets/heroes/${ id }.jpg`;

  return(
    <div className="row mt-5">
       <div className="col-4">
         <img 
         //src={ imagePath } //desde public/assets
         src = { heroImges(`./${ id }.jpg`) }
         alt={ superhero } 
         className="img-thumbnail animate__animated animate__fadeInLeft">

         </img>
       </div>
       <div className="col-8">
          <h3>{ superhero }</h3>

          <ul className="list-group list-group-flush animate__animated animate__fadeIn">
              <li className="list-group-item"><b>Alter ego:</b>{ alter_ego }</li>
              <li className="list-group-item"><b>Publisher:</b>{ publisher }</li>
              <li className="list-group-item"><b>first_appearance</b>{ first_appearance }</li>
          </ul>

          <h5 className=" mt-3">Characters</h5>
          <p>{ characters }</p>
      
          <button 
            className="btn btn-outline-info"
            onClick={ handleReturn }
          >
            Regresar
          </button>
       </div>
    </div>
  );
};
