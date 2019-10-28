import React, {
    FunctionComponent, useReducer,
} from 'react';

import GenerationDataContext, { reducer, initState } from './Context';

const GenerationDataProvider: FunctionComponent<{}> = (props) => {

    const [state, dispatch] = useReducer(reducer, initState);

    const val = { state, dispatch };

    return (
        <GenerationDataContext.Provider value={val}>
            {props.children}
        </GenerationDataContext.Provider>
    );
};

export default GenerationDataProvider;
