import React, { Component } from 'react';
import { connect } from 'react-redux';
import SpecialFee from './SpecialFee';
import DeleteFee from './DeleteFee';
import SpecialFeeReport from './SpecialFeeReport';



export class FeeSetup extends Component {
    

    render() {
        return (
            <div>
                <SpecialFee />
                <DeleteFee />
                <SpecialFeeReport />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(FeeSetup)
