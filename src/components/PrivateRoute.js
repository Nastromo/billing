import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import LineSpinner from './LineSpinner';
import Cpts from './Cpts';
import Navigation from './Navigation';
import Insurances from './Insurances';
import FeeMaintenance from './FeeMaintenance';
import SubLinks from './SubLinks';




export class PrivateRoute extends Component {


    render() {
        if (this.props.isLoading) return <LineSpinner />

        return (
            <div>
                <Navigation />
                <SubLinks />
                <Switch>
                    <Route exact path="/account/cpts" component={Cpts} />
                    <Route exact path="/account/insurances" component={Insurances} />
                    <Route exact path="/account/fee" component={FeeMaintenance} />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PrivateRoute))

