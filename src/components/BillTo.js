import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewDropDown from './NewDropDown';
import SearchInput from './SearchInput';
import InsTable from './InsTable';




export class BillTo extends Component {
    constructor(props) {
        super(props);
        this.billTo = [`Insurance`, `Opt1`, `Opt2`];
    }

    returnComments = () => {
        const list = JSON.parse(this.props.bill.comments ? this.props.bill.comments : "[]");
        return list.map((item, i) => {
            return (
                <div key={i} className="flex align-center">
                    <p className="item-row">{item}</p>
                    <div id={i} onClick={this.delComment} className="delete-sml"></div>
                </div>
            )
        });
    }

    handleEnter = (e) => {
        if (e.keyCode === 13) {
            // this.props.addComment();
        }
    }

    render() {
        return (
            <div className="flex">
                <div className="bas50">
                    <p className="sma-te-we">Bill To</p>
                    <div style={{ width: '250px' }}>
                        <NewDropDown
                            id="billTo"
                            actionType="SET_BILL_DROP_OPTION"
                            height="30px"
                            status={this.props.isOpenBill}
                            menu={this.billTo}
                            option={this.props.optionBill} />
                    </div>
                    <p className="sma-te-we">Insurances</p>
                    <SearchInput
                        id="insurances"
                        type="text"
                        view="search-input"
                        url="get-ins"
                        isLoading={this.props.isLoadingIns}
                        searchQuery={this.props.searchQueryIns}
                        searchResults={this.props.ins} />
                    <InsTable />
                </div>
                <div className="bas50">
                    <p className="sma-te-we">Comments</p>
                    <input className="search-input" onKeyDown={this.handleEnter} />
                    {this.returnComments()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    bill: { comments: `["asdfasdf", "asdfasdfefvf"]` },
    isOpenBill: state.newDDStatus.billTo,
    // optionStates: state.chosenBill.billTo,
    optionBill: {}.billTo,

    isLoadingIns: state.searchLoading.insurances,
    searchQueryIns: state.searchQuery.insurances,
    ins: state.searchResults.insurances,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(BillTo)
