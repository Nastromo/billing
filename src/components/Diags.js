import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchInput from './SearchInput';



export class Diags extends Component {


    render() {
        return (
            <div className="width100 mar20p">
                <p className="sma-te-we">Diagnoses</p>
                <SearchInput
                    id="diagnoses"
                    type="text"
                    view="search-input"
                    url="diagnoses"
                    isLoading={this.props.isLoadDiags}
                    searchQuery={this.props.searchDiags}
                    searchResults={this.props.diagnoses} />
                    <div className="title-table">
                    <p id="q">Code</p>
                    <p id="a">Description</p>
                </div>
                {/* {
                    this.props.ins.map((item, i) => {
                        return (
                            <div key={i} className="flex mar-gk-d">
                                <p className="rowuu">{`item.name`}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Diags)
