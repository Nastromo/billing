import React, { Component } from 'react';
import { connect } from 'react-redux';
import Fee from './Fee';
import FeeSetup from './FeeSetup';




export class FeeMaintenance extends Component {
    

    render() {
        return (
            <div className="two-pa-fac">
                <Fee />
                <FeeSetup />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(FeeMaintenance)
