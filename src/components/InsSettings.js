import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropDown from './DropDown';




export class InsSettings extends Component {
    constructor(props) {
        super(props);
        this.billSchedule = [];
        this.testCat = [];
    }

    render() {
        return (
            <div className="edit-ins">
                <div className="fle-ins">
                    <div className="audit-btn">View Audit</div>
                    <div className="inactive">Inactive</div>
                </div>

                <div className="fl-in-d">
                    <div>
                        <p className="tit">ID</p>
                        <input className="simple-input sm-he" type="text" />
                    </div>

                    <div>
                        <p className="tit">Company name</p>
                        <input className="simple-input sm-he" type="text" />
                    </div>

                    <div>
                        <p className="tit">Address</p>
                        <input className="simple-input sm-he" type="text" />
                    </div>
                </div>

                <div className="fl-in-d">
                    <div>
                        <p className="tit">City</p>
                        <input className="simple-input sm-he" type="text" />
                    </div>

                    <div>
                        <p className="tit">State</p>
                        <input className="simple-input sm-he" type="text" />
                    </div>

                    <div>
                        <p className="tit">Zip</p>
                        <input className="simple-input sm-he" type="text" />
                    </div>

                    <div>
                        <p className="tit">Phone</p>
                        <input className="simple-input sm-he" type="text" />
                    </div>
                </div>

                <div className="fl-in-d">
                    <div>
                        <p className="tit">NEIC #</p>
                        <input className="simple-input sm-he" type="text" />
                    </div>

                    <div>
                        <p className="tit">Provider</p>
                        <input className="simple-input sm-he" type="text" />
                    </div>

                    <div className="pp200">
                        <p className="tit">Bill Schedule</p>
                        <DropDown
                            option={this.props.billSchedule}
                            status={this.props.isScheOpen}
                            menu={this.billSchedule}
                            id="billSchedule" />
                    </div>

                    <div className="pp200">
                        <p className="tit">Test Category</p>
                        <DropDown
                            option={this.props.testCat}
                            status={this.props.isCatOpen}
                            menu={this.testCat}
                            id="testCat" />
                    </div>
                </div>

                <div className="fl-in-d">
                    <div>
                        <p className="tit">Quest Code</p>
                        <input className="simple-input sm-he" type="text" />
                    </div>

                    <div className="widd">
                        <p className="tit">Notes</p>
                        <input className="simple-input sm-he widd" type="text" />
                    </div>
                </div>
                <div className="audit-btn widd">Save</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(InsSettings)
