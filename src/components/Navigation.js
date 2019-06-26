import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';




export class Navigation extends Component {
    setActive = (element) => {
        const activeNavItem = document.getElementsByClassName('menu-active');
        if (activeNavItem.length > 0) activeNavItem[0].classList.remove(`menu-active`);
        if (element) element.classList.add(`menu-active`);
    }

    componentDidMount() {
        switch (this.props.location.pathname) {
            case `/account/fee`:
                this.setActive(this.pending);
                break;
            case `/account/insurances`:
                this.setActive(this.processing);
                break;
            case `/account/cpts`:
                this.setActive(this.cpt);
                break;
            default: break;
        }
    }

    handleClick = (e) => {
        switch (e.currentTarget.id) {
            case `option1`:
                this.setActive(this.pending);
                break;
            case `option2`:
                this.setActive(this.processing);
                break;
            case `option3`:
                this.setActive(this.cpt);
                break;
            default: break;
        }
    }

    handleExit = () => {
        this.props.history.push(`/`);
    }

    render() {
        return (
            <div className="white-back">
                <div className="main-nav">
                    <div className="main-categories">
                        <p className="logo-text">Billing</p>
                        {/* <Link
                            id="option1"
                            onClick={this.handleClick}
                            innerRef={el => this.pending = el}
                            className="menu-active"
                            to="/account/fee">Fee Maintenance</Link>
                        <Link
                            id="option2"
                            onClick={this.handleClick}
                            innerRef={el => this.processing = el}
                            to="/account/insurances">Insurances</Link>
                        <Link
                            id="option3"
                            onClick={this.handleClick}
                            innerRef={el => this.cpt = el}
                            to="/account/cpts">CPTs</Link> */}
                    </div>

                    <div className="work-info">
                        <Link
                            id="option1"
                            onClick={this.handleClick}
                            innerRef={el => this.pending = el}
                            to="/account/fee">Settings</Link>
                        <Link to="/">Log out</Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({


})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navigation))
