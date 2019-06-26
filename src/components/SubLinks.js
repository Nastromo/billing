import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { setActive } from '../store/actions/SetActive';




export class SubLinks extends Component {
    setActive = () => {
        
        this.props.setActive(!this.props.isActive);
    }

    render() {
        const url = this.props.location.pathname;

        return (
            <div className="fle-ma-io">
                <div className="fle-yt">
                    <Link
                        className={url === `/account/fee` ? "box-li box-li-active" : "box-li"}
                        onClick={this.setActive}
                        to="/account/fee">Fee Maintenance</Link>
                    <Link
                        className={url === `/account/insurances` ? "box-li box-li-active" : "box-li"}
                        onClick={this.setActive}
                        to="/account/insurances">Insurances</Link>
                    <Link
                        className={url === `/account/cpts` ? "box-li box-li-active" : "box-li"}
                        onClick={this.setActive}
                        to="/account/cpts">CPTs</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isActive: state.active
})

const mapDispatchToProps = dispatch => ({
    setActive: (bool) => dispatch(setActive(bool)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SubLinks))
