import ApiError from "../../services/ApiError";
import loadGenerationData from '../../services/loadGenerationData';
import { GenerationData } from "./Models";

export interface GetGenerationDataSuccess {
    type: '@gendata/getGenerationDataSuccess';
    payload: GenerationData;
}

export interface GetGenerationDataFail {
    type: '@gendata/getGenerationDataFail';
    payload: ApiError;
}

export const getGenerationData = async (): Promise<GenerationDataActionType> => {
    try {
        const response = await loadGenerationData();
        if (response) {
            return {
                type: '@gendata/getGenerationDataSuccess',
                payload: response.data
            }
        }
    } catch (error) {
        return {
            type: '@gendata/getGenerationDataFail',
            payload: error
        };
    }
}

type GenerationDataActionType = GetGenerationDataSuccess
    | GetGenerationDataFail;

export default GenerationDataActionType;