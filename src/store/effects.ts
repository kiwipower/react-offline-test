import { ThunkAction } from 'redux-thunk';

import { ApplicationState, ApplicationAction } from './types';
import { loadProductionTypesRequest, loadProductionTypesSuccess, loadProductionTypesError } from './actions';
import { getGeneration } from '../services/generationMixService';

type Effect = ThunkAction<any, ApplicationState, any, ApplicationAction>;

export const loadProductionTypes = (): Effect => (dispatch) => {
    dispatch(loadProductionTypesRequest());
    return getGeneration()
        .then(productionTypes => {
            dispatch(loadProductionTypesSuccess(productionTypes))
        })
        .catch(() => dispatch(loadProductionTypesError()));
};
