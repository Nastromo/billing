import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropDown from './DropDown';
import { setName, setAddress, setCity, setState, setZip, setPhone, setNeic, setProvider, setRequest, setNotes, createIns, updateIns } from '../store/actions/Ins';




export class InsSettings extends Component {
    constructor(props) {
        super(props);
        this.billSchedule = [`opt1`, `opt2`, `opt3`];
        this.testCat = [`opt1`, `opt2`, `opt3`];
    }

    setName = (e) => {
        this.props.setName(e.target.value);
    }

    setAddress = (e) => {
        this.props.setAddress(e.target.value);
    }

    setCity = (e) => {
        this.props.setCity(e.target.value);
    }

    setState = (e) => {
        this.props.setState(e.target.value);
    }

    setZip = (e) => {
        this.props.setZip(e.target.value);
    }

    setPhone = (e) => {
        this.props.setPhone(e.target.value);
    }

    setNeic = (e) => {
        this.props.setNeic(e.target.value);
    }

    setProvider = (e) => {
        this.props.setProvider(e.target.value);
    }

    setRequest = (e) => {
        this.props.setRequest(e.target.value);
    }

    setNotes = (e) => {
        this.props.setNotes(e.target.value);
    }

    createIns = () => {
        console.log(this.props.ins)
        this.props.createIns(this.props.ins);
    }

    updateIns = () => {
        this.props.updateIns(this.props.ins);
    }


    render() {
        return (
            <div className="edit-ins">
                <div className="fle-ins">
                    <div className="audit-btn">View Audit</div>
                    {this.props.ins.isDeleted ? <div className="inactive">Inactive</div> : null}
                </div>

                <div className="fl-in-d starre">
                    <div className="mar-rigew">
                        <p className="tit">Company name</p>
                        <input className="simple-input sm-he" value={this.props.ins.companyName ? this.props.ins.companyName : ""} onChange={this.setName} />
                    </div>

                    <div>
                        <p className="tit">Address</p>
                        <input className="simple-input sm-he" value={this.props.ins.address ? this.props.ins.address : ""} onChange={this.setAddress} />
                    </div>
                </div>

                <div className="fl-in-d">
                    <div>
                        <p className="tit">City</p>
                        <input className="simple-input sm-he" value={this.props.ins.city ? this.props.ins.city : ""} onChange={this.setCity} />
                    </div>

                    <div>
                        <p className="tit">State</p>
                        <input className="simple-input sm-he" value={this.props.ins.state ? this.props.ins.state : ""} onChange={this.setState} />
                    </div>

                    <div>
                        <p className="tit">Zip</p>
                        <input className="simple-input sm-he" value={this.props.ins.zip ? this.props.ins.zip : ""} onChange={this.setZip} />
                    </div>

                    <div>
                        <p className="tit">Phone</p>
                        <input className="simple-input sm-he" value={this.props.ins.phone ? this.props.ins.phone : ""} onChange={this.setPhone} />
                    </div>
                </div>

                <div className="fl-in-d">
                    <div>
                        <p className="tit">NEIC #</p>
                        <input className="simple-input sm-he" value={this.props.ins.neic ? this.props.ins.neic : ""} onChange={this.setNeic} />
                    </div>

                    <div>
                        <p className="tit">Provider</p>
                        <input className="simple-input sm-he" value={this.props.ins.provider ? this.props.ins.provider : ""} onChange={this.setProvider} />
                    </div>

                    <div className="pp200">
                        <p className="tit">Bill Schedule</p>
                        <DropDown
                            option={this.props.ins.billSchedule}
                            status={this.props.isScheOpen}
                            menu={this.billSchedule}
                            id="billSched" />
                    </div>

                    <div className="pp200">
                        <p className="tit">Test Category</p>
                        <DropDown
                            option={this.props.ins.testCategory}
                            status={this.props.isCatOpen}
                            menu={this.testCat}
                            id="testCategory" />
                    </div>
                </div>

                <div className="fl-in-d">
                    <div>
                        <p className="tit">Request Code</p>
                        <input className="simple-input sm-he" value={this.props.ins.requestCode ? this.props.ins.requestCode : ""} onChange={this.setRequest} />
                    </div>

                    <div className="widd">
                        <p className="tit">Notes</p>
                        <input className="simple-input sm-he widd" value={this.props.ins.notes ? this.props.ins.notes : ""} onChange={this.setNotes} />
                    </div>
                </div>
                {this.props.isCreateMode ? <div onClick={this.createIns} className="audit-btn widd orangee">Create</div> : <div onClick={this.updateIns} className="audit-btn widd">Update</div>}
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ins: state.chosenIns,
    isCreateMode: state.insCreateMode,
    billSched: state.dropdownOption.billSched,
    isScheOpen: state.dropdownStatus.billSched,
    testCategory: state.dropdownOption.testCategory,
    isCatOpen: state.dropdownStatus.testCategory,
})

const mapDispatchToProps = dispatch => ({
    setName: (text) => dispatch(setName(text)),
    setAddress: (text) => dispatch(setAddress(text)),
    setCity: (text) => dispatch(setCity(text)),
    setState: (text) => dispatch(setState(text)),
    setZip: (text) => dispatch(setZip(text)),
    setPhone: (text) => dispatch(setPhone(text)),
    setNeic: (text) => dispatch(setNeic(text)),
    setProvider: (text) => dispatch(setProvider(text)),
    setRequest: (text) => dispatch(setRequest(text)),
    setNotes: (text) => dispatch(setNotes(text)),
    createIns: (obj) => dispatch(createIns(obj)),
    updateIns: (obj) => dispatch(updateIns(obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(InsSettings)
