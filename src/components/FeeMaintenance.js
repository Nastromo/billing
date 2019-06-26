import React, { Component } from 'react';
import { connect } from 'react-redux';
import Fee from './Fee';
import FeeSetup from './FeeSetup';
import TestTable from './TestTable';
import SetTable from './SetTable';



export class FeeMaintenance extends Component {
    

    render() {
        return (
            <div className="two-pa-fac">
                <Fee />
                {this.props.isTest ? <TestTable /> : <SetTable />}
                <FeeSetup />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isTest: false
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(FeeMaintenance)
