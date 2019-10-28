import { Action } from 'redux';

export interface ProductionType {
    fuel: string;
    perc: number;
}

export interface LoadingState {
    productionTypes: boolean;
}

export interface ApplicationState {
    loading: LoadingState;
    productionTypes: ProductionType[];
}

export interface LoadProductionTypesRequest extends Action {
    type: 'loadProductionTypesRequest';
}

export interface LoadProductionTypesSuccess extends Action {
    type: 'loadProductionTypesSuccess';
    productionTypes: ProductionType[];
}

export interface LoadProductionTypesError extends Action {
    type: 'loadProductionTypesError';
}

export type ApplicationAction =
    | LoadProductionTypesRequest
    | LoadProductionTypesSuccess
    | LoadProductionTypesError;
