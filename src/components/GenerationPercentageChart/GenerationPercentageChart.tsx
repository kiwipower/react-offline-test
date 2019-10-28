import React, { 
    useState, useEffect, 
    Fragment, useContext 
} from 'react'

import config from '../../config';

import DateSpanViewer from "../DateSpanViewer";
import GenerationMixItem from "../GenerationMixItem";
import Loading from "../shared/Loading";
import GenerationDataContext from '../../store/GenerationData/Context';
import { getGenerationData } from '../../store/GenerationData/Actions';

export default function GenerationPercentageChart() {

    const [loading, setLoading] = useState(false);
    
    const generationDataContext = useContext(GenerationDataContext);

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        if (loading) {
            return;
        }
        setLoading(true);
        generationDataContext.dispatch(await getGenerationData());
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
    
        if (generationDataContext.state.lastError) {
            return (
                <div className="alert alert-danger">
                    {generationDataContext.state.lastError.message}
                </div>
            );
        }

        const { state: { currentData } } = generationDataContext;

        if (currentData === null) {
            return null;
        }

        return (
            <Fragment>
                <div className=" card date-container">
                    <DateSpanViewer 
                        from={currentData.from}
                        to={currentData.to} />
                </div>
                <div className="bar-chart">
                    {currentData.generationmix.map((gdata, i) => {
                        const key = `data-${i}`;
                        const color = config.barColors[i];
                        return (<GenerationMixItem 
                                    key={key}
                                    gdata={gdata} 
                                    color={color} />)
                    })}
                </div>
            </Fragment>
        );
    }

    return (
        <div>
            <div className="row my-4 justify-content-center">
                <a className={'btn btn-outline-primary ' + loading || ' btn-disabled'} 
                    id="refresh-data-button"
                    href="" onClick={refreshData}>
                    {loading ? 'Loading...' : 'Refresh Data'} 
                </a>
            </div>
            {renderContent()}
        </div>
    )
}
