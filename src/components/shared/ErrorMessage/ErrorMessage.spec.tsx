import * as React from "react";
import { shallow } from "enzyme";
import ErrorMessage from "./ErrorMessage";

describe("<ErrorMessage />", () => {
  it("should not render", () => {
    const component = shallow(<ErrorMessage error="" />);
    expect(component.type()).toEqual(null);
  });

  it("should  render", () => {
    const component = shallow(<ErrorMessage error="something went wrong" />);
    expect(component.type()).not.toEqual(null);
  });

  it("should clear error on button click", () => {
    const component = shallow(<ErrorMessage error="something went wrong" />);
    expect(component.type()).not.toEqual(null);
    component
      .find("button")
      .at(0)
      .simulate("click");
    expect(component.type()).toEqual(null);
  });
});
