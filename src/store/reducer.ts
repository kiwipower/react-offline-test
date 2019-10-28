import { ApplicationState, ApplicationAction } from './types';

export const initialState: ApplicationState = {
    loading: {
        productionTypes: false,
    },
    productionTypes: [],
};

const reducer = (state = initialState, action: ApplicationAction) => {
    switch (action.type) {
        case 'loadProductionTypesRequest':
            return {
                ...state,
                loading: {
                    productionTypes: true,
                }
            };

        case 'loadProductionTypesSuccess':
            return {
                ...state,
                productionTypes: action.productionTypes,
                loading: {
                    productionTypes: false
                }
            };

        case 'loadProductionTypesError':
            return {
                ...state,
                loading: {
                    productionTypes: false
                }
            };

        default:
            return {
                ...state
            }
    }
};

export default reducer;
