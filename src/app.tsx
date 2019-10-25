import React from 'react';

import Nav from './components/Nav';
import PercentageChart from "./components/PercentageChart";

export default function App() {
    return (
        <div>
            <Nav />

            <div className="container">

                <div className="my-2 p-2">
                    <PercentageChart />
                </div>
            </div>

        </div>
    )
}
