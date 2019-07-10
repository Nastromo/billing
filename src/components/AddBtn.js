import React, { Component } from 'react';
import { connect } from 'react-redux';



export class AddBtn extends Component {
    

    render() {
        let isAdded = false;
        const diagCode = this.props.raw.original.code;
        const chosenDiags = JSON.parse(this.props.chosenDiags ? this.props.chosenDiags : "[]");
        for (let i = 0; i < chosenDiags.length; i++) {
            if (diagCode === chosenDiags[i].code) {
                isAdded = true;
            }
        }
        
        return (
            <div className={isAdded ? "fle-ge-b added-b" : "fle-ge-b" }>
                { isAdded ? "added" : "add" }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    chosenDiags: state.chosenCpt.diagnosis
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(AddBtn)
