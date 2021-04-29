import { configure, shallow, ShallowWrapper } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import App from "./App";

configure({ adapter: new Adapter() });

describe("App Component", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should render counter page title", () => {
    console.log(wrapper.debug());
    expect(wrapper.find("h1").text()).toContain("This is a counter app.");
  });

  it("should render a button with increment text", () => {
    expect(wrapper.find("#increment-button").text()).toBe("Increment");
  });

  it("should render the initial value of a state in a div", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  it("should simulate the click event of increment button", () => {
    wrapper.find("#increment-button").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
  });
});
