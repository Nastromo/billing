import React, { Component } from 'react';
import { connect } from 'react-redux';



export class EditCpt extends Component {


    render() {
        return (
            <div className="edit-cpt">
                <div className="status-pa">
                    <button className="btn-cpt">View Audit</button>
                    <p className="inactive">CPT CODE IS INACTIVE</p>
                    <button className="btn-cpt">Activate</button>
                </div>
                <div className="fle-inputs">
                    <div>
                        <p className="lit-p">Code</p>
                        <input className="sm-input" />
                    </div>
                    <div>
                        <p className="lit-p">Description</p>
                        <input className="sm-input" />
                    </div>
                </div>
                <div className="fle-inputs">
                    <div>
                        <p className="lit-p">Modifier</p>
                        <input className="sm-input" />
                    </div>
                    <div>
                        <p className="lit-p">$ Fee</p>
                        <input className="sm-input" />
                    </div>
                </div>

                <dir className="code-des">
                    <div id="code-i"><p className="lit-p">Code</p></div>
                    <div><p className="lit-p">Description</p></div>
                </dir>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(EditCpt)
