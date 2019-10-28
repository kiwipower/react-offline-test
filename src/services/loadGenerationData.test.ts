
import loadGenerationData from "./loadGenerationData";
import exampleResponse from '../../example_api_response.json';

describe('API response test', () => {
    beforeEach(() => {
        fetchMock.resetMocks()
    })

    it('should return a result', async () => {
        fetchMock.mockResponseOnce(JSON.stringify(exampleResponse));
        const apiResponse = await loadGenerationData();
        expect(fetchMock.mock.calls.length).toEqual(1)
        expect(apiResponse.data.from).toBe('2019-08-12T12:30Z');
    });


});

