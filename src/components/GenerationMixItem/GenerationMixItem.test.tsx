import React from 'react';
import { shallow } from 'enzyme';

import GenerationMixItem from './GenerationMixItem';

describe('<GenerationMixItem />', () => {

    const renderComponent = () => (<GenerationMixItem gdata={{
        "fuel": "gas",
        "perc": 46.5
    }} color="tomato" />);

    it('renders without error', async () => {
        const component = shallow(renderComponent());
        expect(component).toMatchSnapshot();
    });

});