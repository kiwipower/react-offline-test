import { GenerationDataResponse } from "./GenerationData";
import sendApiRequest from "../utils/sendApiRequest";

const loadGenerationData = async (): Promise<GenerationDataResponse | undefined> => {
    const generationData = await sendApiRequest<GenerationDataResponse>('generation');
    if (!generationData) {
        return;
    }

    if (generationData.error) {
        throw new Error(generationData.error.message);
    }

    if (!generationData.data) {
        return;
    }

    return generationData;
};

export default loadGenerationData;
