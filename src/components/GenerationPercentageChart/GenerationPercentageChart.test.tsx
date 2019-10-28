import React from 'react';
import { shallow } from 'enzyme';

import GenerationPercentageChart from './GenerationPercentageChart';

describe('<GenerationPercentageChart />', () => {

    const renderComponent = () => (<GenerationPercentageChart />);

    it('renders without error', async () => {
        const component = shallow(renderComponent());
        expect(component).toMatchSnapshot();
    });

});