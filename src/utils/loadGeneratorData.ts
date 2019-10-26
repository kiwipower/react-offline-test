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

const loadGeneratorsData = async () => {
    const resp = await fetch(config.apiUri, {
        headers: new Headers({
            'Accept':'application/json'
        }),
    });
    if (resp.status === 200) {
        const jsonData = await resp.json();
        if (!jsonData.data) {
            if (jsonData.error) {
                handleError(jsonData.error);
            }
            throw 'Data response error';
        }
        return jsonData as GenerationmixData;
    }
    throw 'Data fetch error';
};

export default loadGeneratorsData;
