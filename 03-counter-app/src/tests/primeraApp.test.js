import Enzyme from 'enzyme';
import PrimeraApp from "../PrimeraApp";
import { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {createSerializer} from 'enzyme-to-json';
Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer( createSerializer({mode: 'deep'}));

describe('Prueba en <PrimeraApp />', () => {
    // test('Debe de mostrar el mensaje "Hola, soy goku"', () => {
    //     const saludo= 'Hola, soy goku';
    //     const { getByText }= render(<PrimeraApp saludo={saludo}/>)
    //     expect(getByText(saludo) ).toBeInTheDocument();
    // });
    test('debe de mostrar <PrimeraApp/> correctamente', () => {
        const saludo="Hola, soy goku";
        const wrapper= shallow(<PrimeraApp saludo={ saludo }/>)

        expect(wrapper).toMatchSnapshot();
    });
    test('Debe mostrar el subtitulo enviado por props', () => {
        const saludo="Hola, soy goku";
        const subTitulo='Soy un subtitulo';
        const wrapper= shallow(
        <PrimeraApp 
            saludo={ saludo }
            subtitulo={ subTitulo }
        />
        );

        const textoParrafo= wrapper.find('p').text();
        //console.log(textoParrafo);
        expect(textoParrafo).toBe(subTitulo);

    })
    
})
