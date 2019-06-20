import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropDown from './DropDown';



export class SpecialFeeReport extends Component {
    constructor(props) {
        super(props);
        this.opt = [`opt1`, `opt2`, `opt3`];
    }

    render() {
        return (
            <div className="wid300 mar-15t">
                <div className="spe-set">
                    Special Fee report
                </div>
                <div className="bor-15-p">
                    <div className="fl-in-d centrr">
                        <div className="pp200">
                            <DropDown
                                option={this.props.billSchedule}
                                status={this.props.isScheOpen}
                                menu={this.opt}
                                id="billSchedule" />
                        </div>
                        <div className="cpt-btn">Submit</div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SpecialFeeReport)
