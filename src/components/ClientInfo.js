import React, { Component } from 'react'
import { connect } from 'react-redux'




export class ClientInfo extends Component {
    render() {
        return (
            <div className="width100">
                <div className="bor-da">
                    <p className="titt-sec">Client Information</p>
                    <div className="flex ju-btw">

                        <div className="mar-riuy">
                            <p className="poin-tt">E-mail:</p>
                            <p className="poin-tt">Phone:</p>

                        </div>
                        <div className="mar-riuy">
                            <p className="poin-tt ggbol">{this.props.eclient.email}</p>
                            <p className="poin-tt ggbol">{this.props.eclient.phone}</p>
                        </div>


                        <div className="mar-riuy">
                            <p className="poin-tt">Name:</p>
                            <p className="poin-tt">Street:</p>
                        </div>
                        <div className="mar-riuy">
                            <p className="poin-tt ggbol">{this.props.eclient.name}</p>
                            <p className="poin-tt ggbol">{this.props.eclient.street}</p>
                        </div>


                        <div className="mar-riuy">
                            <p className="poin-tt">State:</p>
                            <p className="poin-tt">Zip:</p>
                        </div>
                        <div className="mar-riuy margjj">
                            <p className="poin-tt ggbol">{this.props.eclient.state}</p>
                            <p className="poin-tt ggbol">{this.props.eclient.zip}</p>
                        </div>
                    </div>
                </div>

                <div className="gert">
                    <div className="flex margirrrwe">
                        <p><strong>Test:</strong> {this.props.payment.testTitle}</p>
                        <p><strong>QTY:</strong> {this.props.payment.qty}</p>
                        <p><strong>TOTAL:</strong> ${this.props.payment.amount}</p>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    payment: state.payment,
    eclient: state.eclient
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ClientInfo)
