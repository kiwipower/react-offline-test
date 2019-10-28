import * as React from 'react';
import PieChart from 'react-minimal-pie-chart';

import './Chart.scss';
import {ProductionType} from "../../store/types";

interface Props {
    productionTypes: ProductionType[],
}

const COLORS = [
    '#9400D3',
    '#4B0082',
    '#000080',
    '#4B0082',
    '#0000FF',
    '#00FF00',
    '#FFFF00',
    '#FF7F00',
    '#FF0000',
];

export const Chart: React.FC<Props> =
    ({productionTypes}) => (
        <main className="Chart">
            <PieChart
                label={({ data, dataIndex }) =>
                    data[dataIndex].title
                }
                labelPosition={112}
                labelStyle={{
                    fontFamily: 'sans-serif',
                    fontSize: '5px'
                }}
                style={{
                    height: '300px'
                }}
                data={
                    productionTypes && productionTypes.map((productionType, index) => {
                        return {
                            title: productionType.fuel, value: productionType.perc, color: COLORS[index]
                        }
                    })
                }
            />
        </main>
    );
