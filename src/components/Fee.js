import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropDown from './DropDown';




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
                            placeholder="enter client id or client name" />
                        <p className="red-p-t">{this.props.chosenClient ? this.props.client : `Global`}</p>
                    </div>
                )
            case `Client`:
                return (
                    <div></div>
                )
            default: break;
        }
    }

    setTest = (option) => {
        if (option !== `Client`) {
            return (
                <div>
                    <p className="tit">Test</p>
                    <input className="simple-input ww12" type="text" />
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

    showCpt = (option) => {
        if (option === `Insurance - Medicare` || option === `Insurance - Other`) {
            return (
                <div className="dio-loi mar-t1">
                    <div className="fle-ggf">
                        <input className="simple-input wi-ggd" type="text" placeholder="cpt search" />
                        <div className="cpt-btn">Add CPT</div>
                    </div>
                    <input className="simple-input" type="text" placeholder="Quest nj fee" />
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
                    {this.props.cptsList.map((item, i) => {
                        return (
                            <div key={i} className="code-des mar22-r back-y">
                                <p id="cptCode" className="code-iz">{item.cpt}</p>
                                <input className="simple-input shrink" value={item.desc} type="text" placeholder="Description" />
                                <p id="expect" className="code-iz">{item.expect}</p>
                                <p id="feeAm" className="code-iz">{item.fee}</p>
                                <input className="simple-input shrink" value={item.fee} type="text" placeholder="Fee amount" />
                                <input className="simple-input shrink" value={item.mod} type="text" placeholder="Modifier" />
                            </div>
                        )
                    })}
                </div>
            )
        } else {
            return (
                <div className="code-des mar22-r">
                    <p id="cptCode" className="code-iz">CPT Code</p>
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
                    <div className="audit-btn">Save</div>
                    <div className="audt-u">View Audit</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    billSchedule: state.dropdownOption.billSchedule,
    isScheOpen: state.dropdownStatus.billSchedule,
    feeSchedule: state.dropdownOption.feeSchedule,
    isFeeOpen: state.dropdownStatus.feeSchedule,
    chosenClient: state.chosenClient,
    cptsList: [{
        cpt: `cpt`,
        desc: `desc desc desc`,
        expect: `expect`,
        fee: 23,
        mod: `modifier`
    }],
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Fee)
