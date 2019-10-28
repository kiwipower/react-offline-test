import React from 'react';

import Nav from './components/shared/Nav';
import GenerationPercentageChart from "./components/GenerationPercentageChart";
import GenerationDataProvider from './store/GenerationData/Provider';

export default function App() {
    return (
        <div>
            <Nav />
            <div className="container">
                <div className="my-2 p-2">
                    <GenerationDataProvider>
                        <GenerationPercentageChart />
                    </GenerationDataProvider>
                </div>
            </div>
        </div>
    )
}
