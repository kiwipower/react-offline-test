import * as React from "react";
import { shallow } from "enzyme";
import BarchartGraph from "../BarChartGraph";

const generationmix = [
  {
    fuel: "biomass",
    perc: 4.8
  },
  {
    fuel: "coal",
    perc: 2.5
  }
];

describe("<BarchartGraph />", () => {
  it("should not render", () => {
    const component = shallow(<BarchartGraph energy={null} />);
    expect(component.type()).toEqual(null);
  });

  it("should render", () => {
    const energy = {
      generationmix,
      from: "2019-08-12T13:00Z",
      to: "2019-08-12T12:30Z"
    };
    const component = shallow(<BarchartGraph energy={energy} />);
    expect(component).toMatchSnapshot();
  });
});
