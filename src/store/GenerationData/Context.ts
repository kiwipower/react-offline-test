import { createContext } from "react";

import GenerationDataActionType from './Actions';
import { GenerationDataContextState, GenerationData } from './Models';

export const initState: GenerationDataContextState = {
    currentData: null,
    oldDatas: [],
}


interface GenerationDataContextModel {
    state: GenerationDataContextState;
    dispatch: React.Dispatch<GenerationDataActionType>;
}

export const defaultValue: GenerationDataContextModel = {
    state: initState,
    dispatch: () => {},
}

const generationDataContext = createContext<GenerationDataContextModel>(defaultValue);

export const reducer: React.Reducer<GenerationDataContextState, GenerationDataActionType> = (state, action) => {
    switch (action.type) {
        case '@gendata/getGenerationDataSuccess':
            const oldDatas = [
                ...state.oldDatas
            ];
            if (oldDatas.length > 9) {
                oldDatas.pop();
            }
            if (oldDatas.length > 0 && action.payload.from !== oldDatas[0].from) {
                oldDatas.unshift(action.payload);
            }
            return {
                ...state,
                currentData: {
                    ...action.payload,
                    generationmix: action.payload.generationmix.sort((a, b) => {
                        return a.perc < b.perc ? 1 : -1;
                    })
                },
                oldDatas,
            }
        case '@gendata/getGenerationDataFail':
            return {
                ...state,
                lastError: action.payload,
            }
            
        default:
            return initState;
    }
};

export default generationDataContext;