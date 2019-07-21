import React, { Component } from 'react';
import { connect } from 'react-redux';




export class InsTable extends Component {


    render() {
        return (
            <div className="title-table">
                <p id="rrr">Ins Code</p>
                <p id="bbb">Ins Name</p>
                <p id="fff">Rel 2 Ins</p>
                <p id="eee">Policy</p>
                <p id="ttt">Primary</p>
                <p>Bill</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(InsTable)
