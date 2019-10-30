import * as React from "react";
import { shallow } from "enzyme";
import LoadingSpinner from "./LoadingSpinner";

describe("<LoadingSpinner", () => {
  it("should show loading", () => {
    const component = shallow(<LoadingSpinner isLoading={false} />);
    expect(component.type()).toEqual(null);
  });

  it("should nnot show loading", () => {
    const component = shallow(<LoadingSpinner isLoading={true} />);
    expect(component.type()).not.toEqual(null);
  });
});
