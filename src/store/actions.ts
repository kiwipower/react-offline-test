import { ProductionType, LoadProductionTypesRequest, LoadProductionTypesSuccess, LoadProductionTypesError } from './types';

export const loadProductionTypesRequest = (): LoadProductionTypesRequest => ({
    type: 'loadProductionTypesRequest',
});

export const loadProductionTypesSuccess = (productionTypes: ProductionType[]): LoadProductionTypesSuccess => ({
    type: 'loadProductionTypesSuccess',
    productionTypes,
});

export const loadProductionTypesError = (): LoadProductionTypesError => ({
    type: 'loadProductionTypesError',
});
