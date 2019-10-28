import * as React from 'react';

import './PowerSource.scss';

interface Props {
    fuel: string,
    perc: number
}

export const PowerSource: React.FC<Props> =
    ({ fuel, perc }) => (
        <main className="PowerSource">
            <div><img className={fuel} alt={fuel}/></div>
            <div className="percent">{perc}</div>
            <div className="title">{fuel}</div>
        </main>
    );
