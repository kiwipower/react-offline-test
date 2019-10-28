
import ApiError from "../../services/ApiError";
export interface GeneratorPercentageItem {
    fuel: string;
    perc: number;
}

export interface GenerationData {
    from: string;
    to: string;
    generationmix: GeneratorPercentageItem[];
}

export interface GenerationDataContextState {
    currentData: GenerationData | null;
    oldDatas: GenerationData[];
    lastError?: ApiError;
}