import React from 'react'
import { format, parseISO } from 'date-fns';

interface DateSpanViewerProps {
    from: string;
    to: string;
}

export default function DateSpanViewer(props: DateSpanViewerProps) {

    if (!props.from) {
        throw "from props is empty";
    }

    if (!props.to) {
        throw "to props is empty";
    }

    const fromParsed =  parseISO(props.from);
    const toParsed =  parseISO(props.to);

    return (
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
    )
}
