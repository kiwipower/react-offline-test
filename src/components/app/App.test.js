import React from 'react';
import { shallow } from 'enzyme';
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import App from './App';
import reducer, {initialState} from "../../store/reducer";

const productionTypes =  [
  { fuel: 'biomass', perc: 3.6 },
  { fuel: 'wind', perc: 6 },
  { fuel: 'solar', perc: 0.3 },
];

const composeEnhancers = composeWithDevTools({});
const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));

const defaultProps = { productionTypes, store };

describe('App', () => {
  test('should render correctly', () => {
    const component = shallow(<App {...defaultProps}/>);
    expect(component).toMatchSnapshot();
  });
});
