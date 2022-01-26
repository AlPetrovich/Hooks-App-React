import { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();
    //console.log(location.search)
    const { q = ''} = queryString.parse(location.search);
   

    const [value, handleInputChange ] = useForm({
        searchText: q,
    });
    const { searchText } = value;

    
    const heroesFilted = useMemo(()=> getHeroesByName(q), [ q ]); //el retorno (resultado) de la funcion se memoriza + dependencia
   
    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${ searchText }`);
    }

  return (
      
        <div>
            <h1>Busquedas</h1>
            <hr></hr>


            <div className="row">
                <div className="col-5">
                    <h4>Buscar</h4>
                    <hr></hr>

                    <form onSubmit={ handleSearch }>
                        <input  
                        type="text"
                        placeholder="Buscar un heroe"
                        className="form-control"
                        name="searchText"
                        autoComplete="off"
                        onChange={ handleInputChange }
                        value={ searchText }
                        ></input>

                        <button 
                        className="btn btn-outline-primary mt-1"
                        type="submit"
                        >
                            Buscar...
                        </button>

                        
                    </form>
                </div>
                <div 
                className="col-7"
                >
                    <h4>Resultados</h4>
                    <hr></hr>
                    {
                        ( q === '')    
                            ? <div className="alert alert-info">Buscar un heroe</div>
                            :(heroesFilted.length === 0) 
                            && <div className="alert alert-danger"> No hay resultado: {searchText} </div>
                    }
                    {
                        heroesFilted.map(hero=>(
                            <HeroCard  
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }

                </div>
            </div>
        </div>

    );
};