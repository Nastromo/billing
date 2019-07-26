import React, { Component } from 'react';
import { connect } from 'react-redux';




export class Fees extends Component {

    render() {
        return (
            <div className="fi700">
                <div className="title-table">
                    <p id="q">Code</p>
                    <p id="a">Description</p>
                    <p id="s">CPT</p>
                    <p id="d">Units</p>
                    <p id="f">Modifier</p>
                    <p id="g">Fee</p>
                    <p id="h">Status</p>
                </div>
                {/* {
                    this.props.ins.map((item, i) => {
                        return (
                            <div key={i} className="flex mar-gk-d">
                                <p className="rowuu">{`item.name`}</p>
                                <input className="hei30o in-100" />
                                <input className="hei30o in-200" />
                                <div className={true ? "green-ch dop-mar" : "display-none"}>&#10004;</div>
                                <div className={true ? "green-ch" : "display-none"}>&#10004;</div>
                                <div className="delete-sml"></div>
                            </div>
                        )
                    })
                } */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Fees)
