import React, { Component } from 'react';
import { connect } from 'react-redux';
import InsList from './InsList';
import InsSettings from './InsSettings';



export class Insurances extends Component {
    

    render() {
        return (
            <div className="fle-cols">
                <InsList />
                <InsSettings />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Insurances)
