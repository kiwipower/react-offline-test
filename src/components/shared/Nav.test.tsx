import React from 'react';
import { shallow } from 'enzyme';

import Nav from './Nav';

describe('<Nav />', () => {

    const renderComponent = () => (<Nav />);

    it('renders without error', async () => {
        const component = shallow(renderComponent());
    });

});