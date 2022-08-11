import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components/HeroCard";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  
  const {q = ''} = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q
  });
  
  const onSearchSubmit = (e) => {
    e.preventDefault();
    if(searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`);

  }

  return (
    <div>
        <h1>Search</h1>
        <hr/>
        <div className="row">
          <div className="col-5">
              <h4>Searching</h4>
              <hr/>
              <form onSubmit={ onSearchSubmit }>
                <input 
                  type="text" 
                  placeholder="Search"
                  className="form-control"
                  name="searchText"
                  autoComplete="off"
                  value={searchText}
                  onChange={onInputChange}
                />
                <button className="btn btn-outline-primary mt-1">
                  Search
                </button>
              </form>
          </div>

          <div className="col-7">
              <h4>Results</h4>
              <hr/>

              <div className="alert alert-primary">
                Search a hero
              </div>

              <div className="alert alert-danger">
                No hero with <b>{ q }</b>
              </div>
              {
                heroes.map(hero =>(
                  <HeroCard key={hero.id} {...hero} />
                ))
              }
          </div>
        </div>
    </div>
  )
}