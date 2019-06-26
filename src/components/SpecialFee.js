import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropDown from './DropDown';




export class SpecialFee extends Component {
    constructor(props) {
        super(props);
        this.opt = [`opt1`, `opt2`, `opt3`];
    }


    render() {
        return (
            <div className="wid300">
                <div className="spe-set">
                    Special Fee Setup
                </div>
                <div className="bor-15-p">
                    <div className="fl-in-d">
                        <div>
                            <p className="tit">City</p>
                            <input className="simple-input sm-hex" type="text" />
                        </div>

                        <div>
                            <p className="tit">State</p>
                            <input className="simple-input sm-hex" type="text" />
                        </div>

                        <div>
                            <p className="tit">Zip</p>
                            <input className="simple-input sm-hex" type="text" />
                        </div>
                    </div>
                    <div className="fl-in-d centrr">
                        <div className="pp200">
                            <DropDown
                                option={this.props.billSchedule}
                                status={this.props.isScheOpen}
                                menu={this.opt}
                                id="special" />
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

export default connect(mapStateToProps, mapDispatchToProps)(SpecialFee)
