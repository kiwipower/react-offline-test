import * as React from "react";
import { shallow } from "enzyme";
import Dashboard from "../index";

describe("<Dashboard />", () => {
  const component = shallow(<Dashboard />);

  it("should display loading", () => {
    expect(component.type()).not.toEqual(null);
  });

  it("should render", () => {
    expect(component).toMatchSnapshot();
  });
});
