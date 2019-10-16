import React, { Component } from 'react'
import { connect } from 'react-redux'
import LegendList from './LegendList';
import CompanyList from './CompanyList';
import TestList from './TestList';



export class Cats extends Component {
    render() {
        return (
            <div className="main-div">
                <h2>Billing Categories</h2>
                <div className="flex">
                    <LegendList />
                    {this.props.test ? <CompanyList /> : null}
                    {this.props.cpt ? <TestList /> : null}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    test: {},
    cpt: {}
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Cats)
