import { Result, Spin } from 'antd'
import 'antd/dist/antd.css'
import fetch from 'node-fetch'
import React, { Component } from 'react'
import Moment from 'react-moment'
import '../Styles/styles.css'
import FuelPerc from './FuelPerc'

interface EnergyMixProps {}

export interface EnergyMixState {
  error?: any
  isLoaded: boolean
  data?: Data
}

export interface Data {
  from: string
  to: string
  generationmix: FuelPercTotal[]
}

interface FuelPercTotal {
  fuel: string
  perc: number
}

class EnergyMixDashboard extends Component<EnergyMixProps, EnergyMixState> {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: true,
      data: undefined,
    }
  }

  componentDidMount() {
    fetch('https://api.carbonintensity.org.uk/generation')
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            data: result.data,
          })
        },
        error => {
          this.setState({
            isLoaded: true,
            error,
          })
        }
      )
  }

  render() {
    const { isLoaded, error, data } = this.state
    const generationMix: FuelPercTotal[] =
      data !== undefined ? data.generationmix : null

    if (error) {
      return <Result status='error' title='Error' subTitle={error.message} />
    } else if (!isLoaded) {
      return <Spin size='large' />
    } else {
      return (
        <>
          <Period
            startTime={data ? data.from : null}
            endTime={data ? data.to : null}
          />
          <div className='dashboard'>
            {generationMix !== null &&
              generationMix.map((item: FuelPercTotal, index: number) => {
                return (
                  <FuelPerc
                    key={`${index}-${name}`}
                    name={item.fuel}
                    perc={item.perc}
                  />
                )
              })}
          </div>
        </>
      )
    }
  }
}

export default EnergyMixDashboard

interface PeriodProps {
  startTime: string
  endTime: string
}

export const Period: React.FC<PeriodProps> = ({ startTime, endTime }) => {
  return (
    <h3 className='left-align-title no-margin'>
      Setelment period: &nbsp;
      <Moment format='DD-MM-YYYY LT'>{startTime}</Moment>&nbsp;-&nbsp;
      <Moment format='LT'>{endTime}</Moment>
    </h3>
  )
}
