import { Progress } from 'antd'
import 'antd/dist/antd.css'
import React from 'react'

interface FuelPercProps {
  name: string
  perc: number
}

const FuelPerc: React.FC<FuelPercProps> = ({ name, perc }) => {
  return (
    <div className='fuel-perc'>
      <Progress type='dashboard' percent={perc} />
      <h3 className='no-margin'>{name}</h3>
    </div>
  )
}

export default FuelPerc
