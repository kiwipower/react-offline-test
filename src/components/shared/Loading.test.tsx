import React from 'react';
import { shallow } from 'enzyme';

import Loading from './Loading';

describe('<Loading />', () => {

    const renderComponent = () => (<Loading />);

    it('renders without error', async () => {
        const component = shallow(renderComponent());
    });

});