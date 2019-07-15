import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropDown from './DropDown';
import { getTests, setTest, getCpts, setCpt, changeDesc, changeUnit, changeModif, delCpt, saveCpts } from '../store/actions/Fee';




export class Fee extends Component {
    constructor(props) {
        super(props);
        this.opt = [`Insurance - Medicare`, `Insurance - Other`, `Patient`, `Client`];
        this.fee = [`1`, `2`, `3`, `4`, `5`, `6`];
    }

    setDrop = (option) => {
        switch (option) {
            case `Insurance - Medicare`:
                return <div></div>
            case `Insurance - Other`:
                return (
                    <div className="wid250x">
                        <p className="tit">Fee Schedule</p>
                        <DropDown
                            option={this.props.feeSchedule}
                            status={this.props.isFeeOpen}
                            menu={this.fee}
                            id="feeSchedule" />
                        <p className="red-p-t">{this.props.feeSchedule}</p>
                    </div>
                )
            case `Patient`:
                return (
                    <div className="wid250x">
                        <p className="tit">Client</p>
                        <input
                            className="simple-input ww12"
                            type="text"
                            placeholder="enter client name" />
                        <p className="red-p-t">{this.props.chosenClient ? this.props.client : `Global`}</p>
                    </div>
                )
            case `Client`:
                return (
                    <div className="wid250x">
                        <p className="tit">Client</p>
                        <input
                            className="simple-input ww12"
                            type="text"
                            placeholder="enter client name" />
                        <p className="red-p-t">{this.props.chosenClient ? this.props.client : `Global`}</p>
                    </div>
                )
            default: break;
        }
    }

    returnTests = () => {
        const list = this.props.testList;
        return list.map((item, i) => {
            return (
                <p key={i} id={i} onClick={this.props.setTest} className="test-row-r">{`${item.code} ${item.description}`}</p>
            )
        })
    }

    setTest = (option) => {
        if (option !== `Client`) {
            return (
                <div className="relative">
                    <p className="tit">Test</p>
                    <input className="simple-input ww12" value={this.props.testInput} onChange={this.props.getTests} />
                    {this.props.isTestLoading ? <div className="loading-drop">Loading...</div> : null}
                    {this.props.testList.length > 0 ?
                        <div className="height-ert4">
                            {this.returnTests()}
                        </div> : null}
                </div>
            )
        } else {
            return (
                <div>
                    <p className="tit">Order Set</p>
                    <input className="simple-input ww12" type="text" />
                </div>
            )
        }
    }

    returnCpts = () => {
        const list = this.props.cptList;
        return list.map((item, i) => {
            return (
                <p key={i} id={i} onClick={this.props.setCpt} className="test-row-r">{`${item.code} ${item.description}`}</p>
            )
        })
    }

    showCpt = (option) => {
        if (option === `Insurance - Medicare` || option === `Insurance - Other`) {
            return (
                <div>
                    <div className="dio-loi mar-t1 relative">
                        <div className="fle-ggf">
                            <input className="simple-input wi-ggd"
                                placeholder="cpt search"
                                value={this.props.cptCode}
                                onChange={this.props.getCpts} />
                            {this.props.isCptLoading ? <div className="loading-drop sshrn">Loading...</div> : null}
                            <div className="cpt-btn">Add CPT</div>
                        </div>
                        <input className="simple-input" type="text" placeholder="Quest nj fee" />
                    </div>
                    <div className="abs-cpt-l">
                        {this.props.cptList.length > 0 ? this.returnCpts() : null}
                    </div>
                </div>
            )
        }
    }

    showTable = (option) => {

        if (option === `Insurance - Medicare` || option === `Insurance - Other`) {
            return (
                <div>
                    <div className="code-des mar22-r">
                        <p id="cptCode" className="code-iz">CPT Code</p>
                        <p id="descr" className="code-iz">Description</p>
                        <p id="expect" className="code-iz">Expected</p>
                        <p id="feeAm" className="code-iz">Fee Amount</p>
                        <p id="unit" className="code-iz">Units</p>
                        <p id="modife" className="code-iz">Modifier</p>
                    </div>
                    <div className="hee150">
                        {this.props.imfeesList.map((item, i) => {
                            return (
                                <div key={i} className="code-des mar22-r back-y">
                                    <p id="cptCode" className="code-iz">{item.cptCode}</p>
                                    <input className="simple-input shrink" id={i} value={item.testDescription ? item.testDescription : ""} onChange={this.props.changeDesc} />
                                    <p id="expect" className="code-iz">{item.expected}</p>
                                    <p id="feeAm" className="code-iz">{item.feeAmount}</p>
                                    <input className="simple-input shrink" id={i} value={item.units ? item.units : ""} placeholder="Units" onChange={this.props.changeUnit} />
                                    <input className="simple-input shrink" id={i} value={item.modifier ? item.modifier : ""} placeholder="Modifier" onChange={this.props.changeModif} />
                                    <div onClick={this.props.delCpt} id={i} className="delete-sml"></div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        } else if (option === `Patient`) {
            return (
                <div className="code-des mar22-r">
                    <p id="cptCode" className="code-iz">Test Code</p>
                    <p id="descr" className="code-iz">Description</p>
                    <p id="feeAm" className="code-iz">Fee Amount</p>
                </div>
            )
        } else {
            return (
                <div className="code-des mar22-r">
                    <p id="cptCode" className="code-iz">Order Code</p>
                    <p id="descr" className="code-iz">Description</p>
                    <p id="feeAm" className="code-iz">Fee Amount</p>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="fee-de">
                <div className="dio-loi">
                    <div className="wid250x">
                        <p className="tit">Bill Schedule</p>
                        <DropDown
                            option={this.props.billSchedule}
                            status={this.props.isScheOpen}
                            menu={this.opt}
                            id="billSchedule" />
                        <p className="red-p-t">{this.props.billSchedule}</p>
                    </div>
                    {this.setDrop(this.props.billSchedule)}
                    {this.setTest(this.props.billSchedule)}
                </div>

                {this.showCpt(this.props.billSchedule)}
                {this.showTable(this.props.billSchedule)}



                <div className="worn">
                    <p className="tit">Comments</p>
                    <textarea
                        className="gross-other"
                        ref={el => this.comment = el}
                        value={this.props.comment}
                        onChange={this.handleChange}>
                    </textarea>
                </div>

                <div className="fle-ins">
                    <div onClick={this.save} className="audit-btn">Save</div>
                    <div className="audt-u">View Audit</div>
                </div>
            </div>
        )
    }

    save = () => {
        if (this.props.chosenTest.description && this.props.imfeesList.length > 0) {
            this.props.saveCpts();
        }
    }
}

const mapStateToProps = (state) => ({
    billSchedule: state.dropdownOption.billSchedule,
    isScheOpen: state.dropdownStatus.billSchedule,
    feeSchedule: state.dropdownOption.feeSchedule,
    isFeeOpen: state.dropdownStatus.feeSchedule,
    chosenClient: state.chosenClient,
    chosenTest: state.test,
    imfeesList: state.imfeesList,
    isTestLoading: state.isTestLoading,
    testInput: state.testInput,
    testList: state.testList,
    cptCode: state.cptCode,
    cptList: state.cptList,
    isCptLoading: state.isCptLoading,
})

const mapDispatchToProps = dispatch => ({
    getTests: (text) => dispatch(getTests(text)),
    setTest: (e) => dispatch(setTest(e)),
    getCpts: (e) => dispatch(getCpts(e)),
    setCpt: (e) => dispatch(setCpt(e)),
    changeDesc: (e) => dispatch(changeDesc(e)),
    changeUnit: (e) => dispatch(changeUnit(e)),
    changeModif: (e) => dispatch(changeModif(e)),
    delCpt: (e) => dispatch(delCpt(e)),
    saveCpts: () => dispatch(saveCpts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Fee)
