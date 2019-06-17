import React, { Component } from 'react';
import { connect } from 'react-redux';
import CptList from './CptList';
import EditCpt from './EditCpt';
import CptDesc from './CptDesc';




export class Cpts extends Component {


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

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Cpts)
