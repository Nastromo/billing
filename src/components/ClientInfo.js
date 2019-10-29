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
                            <p className="poin-tt ggbol">Value</p>
                            <p className="poin-tt ggbol">Value</p>
                        </div>


                        <div className="mar-riuy">
                            <p className="poin-tt">Street:</p>
                            <p className="poin-tt">City:</p>
                        </div>
                        <div className="mar-riuy">
                            <p className="poin-tt ggbol">Value</p>
                            <p className="poin-tt ggbol">Value</p>
                        </div>


                        <div className="mar-riuy">
                            <p className="poin-tt">State:</p>
                            <p className="poin-tt">Zip Id:</p>
                        </div>
                        <div className="mar-riuy margjj">
                            <p className="poin-tt ggbol">Value</p>
                            <p className="poin-tt ggbol">Value</p>
                        </div>
                    </div>
                </div>

                <div className="gert">
                    <h3>TOTAL AMOUNT (by client):</h3>
                    <h2>{`$20 000`}</h2>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ClientInfo)
