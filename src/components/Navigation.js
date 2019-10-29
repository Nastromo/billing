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
            case `/account/review`:
                this.setActive(this.review);
                break;
            case `/account/insurances`:
                this.setActive(this.option2);
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
                this.setActive(this.review);
                break;
            case `option2`:
                this.setActive(this.option2);
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
                            innerRef={el => this.review = el}
                            className="menu-active"
                            to="/account/review">Bill Review</Link> */}
                        <Link
                            id="option2"
                            onClick={this.handleClick}
                            innerRef={el => this.option2 = el}
                            className="menu-active"
                            to="/account/efunc">E-func</Link>

                    </div>

                    <div className="work-info">
                        {/* <Link
                            id="sett"
                            onClick={this.handleClick}
                            innerRef={el => this.pending = el}
                            to="/account/settings/fee">Settings</Link> */}
                        <div className="drop-sub-menu">
                            <Link to="/account/settings/fee">Fee Maintenance</Link>
                            <Link to="/account/settings/insurances">Insurances</Link>
                            <Link to="/account/settings/cpts">CPTs</Link>
                            <Link to="/account/settings/categories">Billing Categories</Link>

                        </div>
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
