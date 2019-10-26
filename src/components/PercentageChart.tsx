
import React, { useState, useEffect, Fragment } from 'react'

import loadGeneratorData, { GenerationmixData } from '../utils/loadGeneratorData';
import config from '../config';
import handleError from '../utils/handleError';

import DateSpanViewer from "./DateSpanViewer";
import GenerationMixItem from "./GenerationMixItem";
import Loading from "./Loading";

const loadingImg = require('../img/loading.svg');

export default function PercentageChart() {

    const [loading, setLoading] = useState(false);
    const [percentageData, setPercentageData] = useState<GenerationmixData | null>(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        if (loading) {
            return;
        }
        setLoading(true);
        try {
            const response = await loadGeneratorData();
            if (response) {
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
        } catch (error) {
            setErrorMessage(error);
            handleError(error);
        }
        setLoading(false);
    }

    const refreshData = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        loadData();
    };

    const renderContent = () => {
        if (loading) {
            return (<Loading />);
        }
    
        if (errorMessage !== '') {
            return (
                <div className="alert alert-danger">
                    {errorMessage}
                </div>
            );
        }

        if (percentageData === null) {
            return null;
        }

        return (
            <Fragment>
                <div className=" card date-container">
                    <DateSpanViewer 
                        from={percentageData.data.from}
                        to={percentageData.data.to} />
                </div>
                <div className="bar-chart">
                    {percentageData.data.generationmix.map((gdata, i) => {
                        const key = `data-${i}`;
                        const color = config.barColors[i];
                        return (<GenerationMixItem key={key}
                                    gdata={gdata} color={color} />)
                    })}
                </div>
            </Fragment>
        );
    }

    return (
        <div>
            <div className="row my-4 justify-content-center">
                <a className="btn btn-outline-primary" href="" onClick={refreshData}>
                    Refresh Data
                </a>
            </div>
            {renderContent()}
        </div>
    )
}
