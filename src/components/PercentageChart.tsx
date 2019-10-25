
import React, { useState, useEffect } from 'react'

import loadGeneratorData, { GenerationmixData } from '../utils/loadGeneratorData';

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
        const data = await loadGeneratorData();
        if (data !== null) {
            setPercentageData(data);
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

    return (
        <div>
            <p>
                from: {percentageData.data.from}
            </p>
            <p>
                to: {percentageData.data.to}
            </p>
            <p>
                data
            </p>
            <div>
                {percentageData.data.generationmix.map((gdata, i) => {
                    const key = `data-${i}`;
                    return (
                        <div key={key} id={key} className="generator-item">
                            <p>fule: {gdata.fuel}</p>
                            <p>%: {gdata.perc}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
