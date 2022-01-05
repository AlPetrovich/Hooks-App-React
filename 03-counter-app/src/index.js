import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
//import PrimeraApp from './PrimeraApp';
import './index.css';


const divContenedor= document.querySelector("#root")

//ReactDOM.render(<PrimeraApp saludo='Hola, soy goku' />, divContenedor)
ReactDOM.render(<CounterApp />, divContenedor);

