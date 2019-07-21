import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfoBoxPatient from './InfoBoxPatient';
import InfoBoxAddress from './InfoBoxAddress';
import InfoBoxBilling from './InfoBoxBilling';




export class RegularInfo extends Component {
    

    render() {
        return (
            <div className="flex-dif">
                <InfoBoxPatient />
                <InfoBoxAddress />
                <InfoBoxBilling />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(RegularInfo)
