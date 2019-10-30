import * as React from "react";
import { shallow } from "enzyme";
import DateViewer from "../../shared/DateViewer/DateViewer";

describe("<DateViewer />", () => {
  it("should display chart date", () => {
    const component = shallow(
      <DateViewer
        from={"2019-10-30T23:00Z"}
        to={"2019-10-30T23:30Z"}
        className="chart-header"
      />
    );
    const expectedResult =
      "Data from october 30, 11:00pm to october 30, 11:30pm";
    expect(component.find(".title").text()).toEqual(expectedResult);
  });
});
