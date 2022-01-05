import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createSerializer } from "enzyme-to-json";
import CounterApp from "../CounterApp";
Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

describe("Pruebas en <CounterApp/>", () => {
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("CounterApp por defecto muestra 10", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("Debe mostrar el valor por defecto de 100", () => {
    const wrapper = shallow(<CounterApp value={100} />);
    const h2Counter = wrapper.find("h2").text().trim();
    //console.log(h2Counter);
    expect(h2Counter).toBe("100");
  });
  test("Debe de incrementar con el boto +1", () => {
    wrapper.find("button").at(0).simulate("click");

    const h2Counter = wrapper.find("h2").text().trim();

    expect(h2Counter).toBe("11");
  });
  test("Debe de decrementar con el boto -1", () => {
    wrapper.find("button").at(2).simulate("click");
    const h2Counter = wrapper.find("h2").text().trim();
    expect(h2Counter).toBe("9");
  });
  test("debe de colocar el valor por defecto con el btn reset", () => {
    //const wrapper = shallow(<CounterApp value={ 105 } />);

    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    const counterText= wrapper.find('h2').text().trim();

    expect(counterText).toBe('10');

  });
});
