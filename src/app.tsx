import React from 'react'
import EnergyMixDashboard from './Components/EnergyMixDashboard'
import './Styles/styles.css'

export const App = () => {
  return (
    <div className='page'>
      <h2 className='brand no-margin'>
        KiWi<span className='slim-text'>POWER</span>
      </h2>
      <h1 className='title no-margin'>UK Energy Mix</h1>
      <EnergyMixDashboard />
    </div>
  )
}
