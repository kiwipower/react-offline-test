import * as React from 'react';
import { connect } from 'react-redux';

import { loadProductionTypes } from '../../store/effects'
import { ApplicationState, ProductionType } from "../../store/types";
import { PowerSource } from "../power-source/PowerSource";
import { Chart } from "../chart/Chart";
import './App.scss';

interface Props {
    dispatch,
    loading,
    productionTypes: ProductionType[]
}

class App extends React.Component<Props, ApplicationState> {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(loadProductionTypes());
    }

    render() {
        const { productionTypes, loading } = this.props;

        if (loading.productionTypes) {
            return <div className="loading" />
        }

        return (
            <div className="App">
                <h1>UK Energy Mix</h1>
                <div className="power-sources">
                    {
                        productionTypes && productionTypes.map ((productionType)=> {
                            return <PowerSource key={productionType.fuel} fuel={productionType.fuel} perc={productionType.perc} />
                        })
                    }
                </div>
                <Chart productionTypes={productionTypes}/>
            </div>
        );
    }
}

const mapStateToProps = ( state: ApplicationState ) => {
    const { productionTypes, loading } = state;
    return {
        productionTypes,
        loading
    }
};

export default connect( mapStateToProps )( App )
