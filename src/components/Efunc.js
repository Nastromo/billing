import React, { Component } from 'react'
import { connect } from 'react-redux'
import Paymentslist from './Paymentslist';
import ClientInfo from './ClientInfo';
// import DatePicker from './DatePicker';



export class Efunc extends Component {
    render() {
        return (
            <div className="main-div">
            <h2>Payments:</h2>
                {/* <DatePicker /> */}
                <div className="flex al-it-start">
                    <Paymentslist />
                    <ClientInfo />
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Efunc)
