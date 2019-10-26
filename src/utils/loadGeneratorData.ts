import config from "../config";
import handleError from './handleError';

export interface GeneratorPercentageItem {
    fuel: string;
    perc: number;
}

export interface GenerationmixData {
    data: {
        from: string;
        to: string;
        generationmix: GeneratorPercentageItem[];
    }
}

export default async () => {
    try {
        const resp = await fetch(config.apiUri);
        if (resp.status === 200) {
            return await resp.json() as GenerationmixData;
        }
    } catch (error) {
        handleError(error);
        return null;
    }
};
