import React, { Component } from 'react';
import { connect } from 'react-redux';
import RevList from './RevList';
import RevSettings from './RevSettings';
import { getReviews } from '../store/actions/Reviews';



export class Review extends Component {
    componentDidMount() {
        // this.props.getReviews();
    }    

    render() {
        return (
            <div className="fle-cols">
                <RevList />
                <RevSettings />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => ({
    getReviews: () => dispatch(getReviews())
})

export default connect(mapStateToProps, mapDispatchToProps)(Review)
