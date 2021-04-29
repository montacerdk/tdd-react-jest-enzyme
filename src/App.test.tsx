import { configure, shallow, ShallowWrapper } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import App from "./App";

configure({ adapter: new Adapter() });

describe("App Component", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test("renders counter page title", () => {
    // console.log(wrapper.debug());
    expect(wrapper.find("h1").text()).toContain("This is a counter app.");
  });

  test("renders a button with increment text", () => {
    expect(wrapper.find("#increment-button").text()).toBe("Increment");
  });

  test("renders the initial value of a state in a div", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });
});
