import React, { Component } from 'react'
import { connect } from 'react-redux'

export class DatePicker extends Component {
    render() {
        return (
            <div>
                <h4>Chose Date:</h4>
                <div className="flex">
                    <input placeholder="from" className="simple-inputuu gap"/>
                    <input placeholder="to" className="simple-inputuu"/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker)
