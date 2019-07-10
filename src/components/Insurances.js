import React, { Component } from 'react';
import { connect } from 'react-redux';
import InsList from './InsList';
import InsSettings from './InsSettings';
import { getInsurances } from '../store/actions/Ins';



export class Insurances extends Component {
    componentDidMount() {
        this.props.getInsurances();
    }    

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

const mapDispatchToProps = dispatch => ({
    getInsurances: () => dispatch(getInsurances())
})

export default connect(mapStateToProps, mapDispatchToProps)(Insurances)
