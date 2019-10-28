import React from 'react';
import { shallow } from 'enzyme';

import DateSpanViewer from './DateSpanViewer';

describe('<DateSpanViewer />', () => {

    const renderComponent = () => (<DateSpanViewer from="2019-08-12T12:30Z" to="2019-08-12T13:00Z" />);

    it('renders without error', async () => {
        const component = shallow(renderComponent());
        expect(component).toMatchSnapshot();
    });

    it('date format working correctly', () => {
        const component = shallow(renderComponent());
        const fromHour = component
            .find('.date-container__item').at(0)
            .find('span').text()
        expect(fromHour).toBe('13:30'); //BTZ
    })

});