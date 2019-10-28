import React from 'react';
import { shallow } from 'enzyme';

import { PowerSource } from './PowerSource';

const defaultProps = {fuel: 'biomass', perc: 55.9};

describe('PowerSource', () => {
  test('should render correctly', () => {
    const component = shallow(<PowerSource {...defaultProps}/>);
    expect(component).toMatchSnapshot();
  });

  test('Should have a \\"PowerSource\\" class', () => {
    const wrapper = shallow(<PowerSource {...defaultProps}/>);
    expect(wrapper.hasClass('PowerSource')).toBe(true);
  });
});
