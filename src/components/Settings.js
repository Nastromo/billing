import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import Insurances from './Insurances';
import FeeMaintenance from './FeeMaintenance';
// import SubLinks from './SubLinks';
import Cpts from './Cpts';
// import Cats from './Cats';



export class Settings extends Component {

    render() {
        return (
            <div>
                
                <Switch>
                    {/* <Route exact path="/account/settings/cpts" component={Cpts} /> */}
                    {/* <Route exact path="/account/settings/insurances" component={Insurances} /> */}
                    {/* <Route exact path="/account/settings/fee" component={FeeMaintenance} /> */}
                    {/* <Route exact path="/account/settings/categories" component={Cats} /> */}
                    
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Settings))
