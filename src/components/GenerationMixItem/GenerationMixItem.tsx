import React from 'react'

import { GeneratorPercentageItem } from '../../services/GenerationData'

interface GenerationMixItemProps {
    gdata: GeneratorPercentageItem;
    color: string;
}

export default function GenerationMixItem(props: GenerationMixItemProps) {
    
    const style = {
        width: props.gdata.perc + '%',
        backgroundColor: props.color,
    }

    return (
        <div className="chart-item row">
        <div className="col-sm-2 chart-item__label">
            {props.gdata.fuel} 
        </div>
        <div className="col-sm-1 chart-item__perc">
            <span>({props.gdata.perc}%)</span>
        </div>
        <div className="col-sm-9">
            <div className="progress">
                <div className="progress-bar" role="progressbar" 
                        style={style} 
                        aria-valuenow={props.gdata.perc} 
                        aria-valuemin={0} 
                        aria-valuemax={100}>
                        
                </div>
            </div>
        </div>
        
    </div>
    )
}
