import * as React from "react";
import { shallow } from "enzyme";
import ErrorBanner from "./ErrorBanner";

describe("<ErrorBanner />", () => {
  it("should render", () => {
    const component = shallow(<ErrorBanner className="test-class" />);
    const expectedResult =
      "We currently don't have access to uk energy generation data. Please hit the refresh button or try again later. Thanks";
    expect(component.find(".test-class__title").text()).toContain(
      expectedResult
    );
  });
});
