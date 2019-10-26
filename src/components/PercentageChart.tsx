
import React, { useState, useEffect } from 'react'
import { format, parseISO } from 'date-fns';

import loadGeneratorData, { GenerationmixData } from '../utils/loadGeneratorData';
import config from '../config';
import { toCapitalize } from "../utils/textUtils";

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

    const refreshData = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // e.preventDefault();
        loadData();
    };

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
            <div className="row my-4 justify-content-center">
                <a className="btn btn-outline-primary" href="" onClick={refreshData}>
                    Refresh Data
                </a>
            </div>
            <div className=" card date-container">
                <div className="card-body">
                    <div className="row justify-content-center">
                        <div className="col-sm-2 date-container__item">
                            {format(fromParsed, 'dd-MM-yyy')}
                            <span>{format(fromParsed, 'HH:mm')}</span>
                        </div>
                        <div className="col-sm-2 date-container__item">
                            {format(toParsed, 'dd-MM-yyy')}
                            <span>{format(toParsed, 'HH:mm')}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bar-chart">
                {percentageData.data.generationmix.map((gdata, i) => {
                    const key = `data-${i}`;
                    const style = {
                        width: gdata.perc + '%',
                        backgroundColor: config.barColors[i],
                    }
                    return (
                        <div key={key} id={key} className="chart-item row">
                            <div className="col-sm-2 chart-item__label">
                                {toCapitalize(gdata.fuel)} 
                            </div>
                            <div className="col-sm-1 chart-item__perc">
                                <span>({gdata.perc}%)</span>
                            </div>
                            <div className="col-sm-9">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" 
                                            style={style} 
                                            aria-valuenow={gdata.perc} 
                                            aria-valuemin={0} 
                                            aria-valuemax={100}>
                                            
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
