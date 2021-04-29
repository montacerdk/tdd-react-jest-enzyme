import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { configure, shallow } from "enzyme";

import App from "./App";

configure({ adapter: new Adapter() });

describe("App Component", () => {
  test("renders learn react link", () => {
    const wrapper = shallow(<App />);
    // console.log(wrapper.debug());
    expect(wrapper.find("h1").text()).toContain("This is a counter app.");
  });
});
