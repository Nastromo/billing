import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewDropDown from './NewDropDown';



export class InfoBoxPatient extends Component {
    constructor(props) {
        super(props);
        this.genders = [`Male`, `Female`, `Unknown`];
    }

    render() {
        return (
            <div className="bas33ghd">
                <div className="gery-tr">
                    Patinet Information
                </div>
                <div className="fle-66-33">
                    <div className="d66">
                        <div>
                            <p className="sma-te-we">Last Name</p>
                            <input className="wii100wi" />
                        </div>
                        <div className="flex">
                            <div id="mar50h" className="basde50">
                                <p className="sma-te-we">Middle Name</p>
                                <input className="wii100wi" />
                            </div>
                            <div className="basde50">
                                <p className="sma-te-we">DOB</p>
                                <input className="wii100wi" />
                            </div>
                        </div>
                    </div>
                    <div className="d33">
                        <div>
                            <p className="sma-te-we">First Name</p>
                            <input className="wii100wi" />
                        </div>
                        <div>
                            <p className="sma-te-we">Gender</p>
                            <NewDropDown
                                id="genders"
                                actionType="SET_BILL_DROP_OPTION"
                                height="30px"
                                status={this.props.isOpenGender}
                                menu={this.genders}
                                option={this.props.optionGender} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isOpenGender: state.newDDStatus.genders,
    // optionGender: state.chosenBill.patientGender || state.newDDOption.genders,
    optionGender: {}.patientGender,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(InfoBoxPatient)
