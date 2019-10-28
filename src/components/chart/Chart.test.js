import React from 'react';
import { shallow } from 'enzyme';

import { Chart } from './Chart';

const productionTypes =  [
  { fuel: 'biomass', perc: 3.6 },
  { fuel: 'wind', perc: 6 },
  { fuel: 'solar', perc: 0.3 },
];

const defaultProps = { productionTypes };

describe('Chart', () => {
  test('should render correctly', () => {
    const component = shallow(<Chart {...defaultProps}/>);
    expect(component).toMatchSnapshot();
  });

  test('Should have a \\"Chart\\" class', () => {
    const wrapper = shallow(<Chart {...defaultProps}/>);
    expect(wrapper.hasClass('Chart')).toBe(true);
  });
});
