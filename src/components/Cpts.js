import React, { Component } from 'react';
import { connect } from 'react-redux';
import CptList from './CptList';
import EditCpt from './EditCpt';
import CptDesc from './CptDesc';
import { getCpt } from '../store/actions/Cpt';
import { getDiagnosis } from '../store/actions/Diagnosis';



export class Cpts extends Component {
    componentDidMount() {
        this.props.getCpt();
        this.props.getDiagnosis();
    }

    render() {
        return (
            <div className="fle-cols">
                <CptList />
                <EditCpt />
                <CptDesc />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => ({
    getCpt: () => dispatch(getCpt()),
    getDiagnosis: () => dispatch(getDiagnosis()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cpts)
