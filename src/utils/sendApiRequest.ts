import config from "../config";
import logError from './logError';

const sendApiRequest = async <T>(path: string, data?: any): Promise<T> => {
    const resp = await fetch(config.apiUri + path, {
        headers: new Headers({
            'Accept':'application/json'
        }),
    });
    if (resp.status === 200) {
        const jsonData = await resp.json();
        if (!jsonData.data) {
            if (jsonData.error) {
                logError(jsonData.error);
            }
        }
        return jsonData as T;
    }
    throw 'Data fetch error';
};

export default sendApiRequest;
