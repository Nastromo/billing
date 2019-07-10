import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCptCode, setCptDesc, setCptMod, setCptFee, delDiag, createCpt, updateCpt } from '../store/actions/Cpt';



export class EditCpt extends Component {

    setCptCode = (e) => {
        this.props.setCptCode(e.target.value);
    }

    setCptDesc = (e) => {
        this.props.setCptDesc(e.target.value);
    }

    setCptMod = (e) => {
        this.props.setCptMod(e.target.value);
    }

    setCptFee = (e) => {
        this.props.setCptFee(e.target.value);
    }

    delDiag = (e) => {
        this.props.delDiag(Number(e.target.id));
    }

    showDiagnosis = (diagnosis) => {
        const list = JSON.parse(diagnosis);
        return list.map((item, i) => {
            return (
                <div key={i} className="fle-di-c">
                    <div className="fl-star">
                        <p id="toppo">{item.code}</p>
                        <p>{item.desc}</p>
                    </div>
                    <div id={i} onClick={this.delDiag} className="del-dia">
                        del
                    </div>
                </div>
            )
        });
    }

    handleCreate = () => {
        this.props.createCpt(this.props.cpt);
    }

    handleUpdate = () => {
        this.props.updateCpt(this.props.cpt);
    }

    render() {
        return (
            <div className="column-di edit-cpt">
                <div>
                    <div className="status-pa">
                        <button className="btn-cpt">View Audit</button>
                        {this.props.cpt.isDeleted ? <p className="inactive">CPT CODE IS INACTIVE</p> : null}
                        {this.props.cpt.isDeleted ? <button className="btn-cpt">Activate</button> : null}
                    </div>
                    <div className="fle-inputs">
                        <div>
                            <p className="lit-p">Code</p>
                            <input className="sm-input" value={this.props.cpt.code ? this.props.cpt.code : ""} onChange={this.setCptCode} />
                        </div>
                        <div>
                            <p className="lit-p">Description</p>
                            <input className="sm-input" value={this.props.cpt.description ? this.props.cpt.description : ""} onChange={this.setCptDesc} />
                        </div>
                    </div>
                    <div className="fle-inputs">
                        <div>
                            <p className="lit-p">Modifier</p>
                            <input className="sm-input" value={this.props.cpt.modifier ? this.props.cpt.modifier : ""} onChange={this.setCptMod} />
                        </div>
                        <div>
                            <p className="lit-p">$ Fee</p>
                            <input className="sm-input" value={this.props.cpt.fee ? this.props.cpt.fee : ""} onChange={this.setCptFee} />
                        </div>
                    </div>

                    <dir className="code-des">
                        <div id="code-i"><p className="lit-p">Code</p></div>
                        <div><p className="lit-p">Description</p></div>
                    </dir>
                    {this.showDiagnosis(this.props.cpt.diagnosis ? this.props.cpt.diagnosis : "[]")}
                </div>
                {this.props.create ? <button onClick={this.handleCreate} className="btn-cpt-cret">CREATE</button> :
                    <button onClick={this.handleUpdate} className="btn-cpt-up">UPDATE</button>}

            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    cpt: state.chosenCpt,
    create: state.createMode,
})

const mapDispatchToProps = dispatch => ({
    setCptCode: (text) => dispatch(setCptCode(text)),
    setCptDesc: (text) => dispatch(setCptDesc(text)),
    setCptMod: (text) => dispatch(setCptMod(text)),
    setCptFee: (text) => dispatch(setCptFee(text)),
    delDiag: (index) => dispatch(delDiag(index)),
    createCpt: (obj) => dispatch(createCpt(obj)),
    updateCpt: (obj) => dispatch(updateCpt(obj)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditCpt)
