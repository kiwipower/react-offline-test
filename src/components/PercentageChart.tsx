
import React, { useState, useEffect } from 'react'
import { format, parseISO } from 'date-fns';

import loadGeneratorData, { GenerationmixData } from '../utils/loadGeneratorData';
import config from '../config';

export default function PercentageChart() {

    const [loading, setLoading] = useState(false);
    const [percentageData, setPercentageData] = useState<GenerationmixData | null>(null);

    useEffect(() => {
        loadData();
        return () => {
            
        };
    }, [])

    const loadData = async () => {
        if (loading) {
            return;
        }
        setLoading(true);
        const response = await loadGeneratorData();
        if (response !== null) {
            const newData: GenerationmixData = {
                data: {
                    ...response.data,
                    generationmix: response.data.generationmix.sort((a, b) => {
                        return a.perc < b.perc ? 1 : -1;
                    })
                }
            };
            setPercentageData(newData);
        }
        setLoading(false);
    }

    if (loading) {
        return (
            <p>
                Loading please wait...
            </p>
        )
    }

    if (percentageData === null) {
        return (<div>no data</div>);
    }

    const dateFormat = 'dd-MM-yyy HH.mm';
    const fromParsed =  parseISO(percentageData.data.from);
    const toParsed =  parseISO(percentageData.data.to);

    return (
        <div>
            <div className="date-container">
                <div className="date-container__item">
                    {format(fromParsed, 'dd-MM-yyy')}
                    <span>{format(fromParsed, 'HH:mm')}</span>
                </div>
                <div className="date-container__item">
                    {format(toParsed, 'dd-MM-yyy')}
                    <span>{format(toParsed, 'HH:mm')}</span>
                </div>
            </div>
            <div className="bar-chart row">
                {percentageData.data.generationmix.map((gdata, i) => {
                    const key = `data-${i}`;
                    const style = {
                        height: gdata.perc + '%',
                        backgroundColor: config.barColors[i],
                    }
                    return (
                        <div key={key} id={key} className="chart-item col col-xs-4">
                            <div className="chart-item__bar">
                                <div className="chart-item__bar-line" style={style}></div>
                            </div>
                            <div className="chart-item__label">
                                <span>{gdata.fuel}</span>
                                % {gdata.perc}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
