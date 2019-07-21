import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewDropDown from './NewDropDown';



export class InfoBoxAddress extends Component {
    constructor(props) {
        super(props);
        this.usstates = [`AL`, `AK`, `AZ`, `AR`, `CA`, `CO`, `CT`, `DE`, `FL`, `GA`, `HI`, `ID`, `IL`, `IN`, `IA`, `KS`, `KY`, `LA`, `ME`, `MD`, `MA`, `MI`, `MN`, `MS`, `MO`, `MT`, `NE`, `NV`, `NH`, `NJ`, `NM`, `NY`, `NC`, `ND`, `OH`, `OK`, `OR`, `PA`, `RI`, `SC`, `SD`, `TN`, `TX`, `UT`, `VT`, `VA`, `WA`, `WV`, `WI`, `WY`];
    }

    render() {
        return (
            <div className="bas33ghd">
                <div className="gery-tr">
                    Patinet Address
                </div>
                <div className="fle-66-33">
                    <div className="d66">
                        <div>
                            <p className="sma-te-we">Street</p>
                            <input className="wii100wi" />
                        </div>
                        <div className="flex">
                            <div id="mar50h" className="basde50">
                                <p className="sma-te-we">Zip</p>
                                <input className="wii100wi" />
                            </div>
                            <div className="basde50">
                                <p className="sma-te-we">Phone</p>
                                <input className="wii100wi" />
                            </div>
                        </div>
                    </div>
                    <div className="d33">
                        <div>
                            <p className="sma-te-we">City</p>
                            <input className="wii100wi" />
                        </div>
                        <div>
                            <p className="sma-te-we">State</p>
                            <NewDropDown
                                id="usstates"
                                actionType="SET_BILL_DROP_OPTION"
                                height="30px"
                                status={this.props.isOpenStates}
                                menu={this.usstates}
                                option={this.props.optionStates} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isOpenStates: state.newDDStatus.usstates,
    // optionStates: state.chosenBill.state,
    optionStates: {}.state,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(InfoBoxAddress)
