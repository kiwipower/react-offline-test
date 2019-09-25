import { mount } from 'enzyme'
import React from 'react'
import EnergyMixDashboard, { Data } from './EnergyMixDashboard'

const data: Data = {
  from: '2019-08-12T12:30Z',
  to: '2019-08-12T13:00Z',
  generationmix: [
    {
      fuel: 'biomass',
      perc: 4.8,
    },
    {
      fuel: 'coal',
      perc: 2.5,
    },
    {
      fuel: 'imports',
      perc: 8.7,
    },
    {
      fuel: 'gas',
      perc: 46.5,
    },
    {
      fuel: 'nuclear',
      perc: 16.1,
    },
    {
      fuel: 'other',
      perc: 0.3,
    },
    {
      fuel: 'hydro',
      perc: 0.9,
    },
    {
      fuel: 'solar',
      perc: 14.6,
    },
    {
      fuel: 'wind',
      perc: 5.6,
    },
  ],
}

describe('Dashboard', () => {
  it('should render error message when there is no data provided', () => {
    const component = mount(<EnergyMixDashboard />)
    component.setState({
      isLoaded: true,
      data: undefined,
      error: { message: 'Failed to fetch' },
    })
    expect(component).toMatchSnapshot()
  })
})

describe('Dashboard', () => {
  it('should render EnergyMixDashboard when there is data provided', () => {
    const component = mount(<EnergyMixDashboard />)
    component.setState({
      isLoaded: true,
      data: data,
      error: null,
    })
    expect(component).toMatchSnapshot()
  })
})

describe('Dashboard', () => {
  it('should render spinner if data is not loaded', () => {
    const component = mount(<EnergyMixDashboard />)
    component.setState({
      isLoaded: false,
      data: data,
      error: null,
    })
    expect(component).toMatchSnapshot()
  })
})
