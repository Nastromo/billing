import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropDown from './DropDown';



export class Fee extends Component {
    constructor(props) {
        super(props);
        this.opt = [`opt1`, `opt2`, `opt3`];
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
                    </div>
                    <div>
                        <p className="tit">Test</p>
                        <input className="simple-input ww12" type="text" />
                    </div>
                </div>

                <div className="dio-loi mar-t1">
                    <div className="cpt-btn">Add CPT</div>
                    <input className="simple-input" type="text" placeholder="Quest nj fee" />
                </div>

                <div className="code-des mar22-r">
                    <p id="cptCode" className="code-iz">CPT Code</p>
                    <p id="descr" className="code-iz">Description</p>
                    <p id="expect" className="code-iz">Expected</p>
                    <p id="feeAm" className="code-iz">Fee Amount</p>
                    <p id="unit" className="code-iz">Units</p>
                    <p id="modife" className="code-iz">Modifier</p>
                </div>

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

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Fee)
