import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from "react-table";
import '../table.css';
import { getPayments, showClientData } from '../store/actions/EPayments';



export class PaymentsList extends Component {
    componentDidMount() {
        this.props.getPayments();
    }

    initColumns = () => {
        return [
            {
                Header: 'Name',
                accessor: 'clientName',
            },
            {
                Header: 'Test',
                accessor: 'testTitle',
            },
            {
                Header: 'Amount, $',
                accessor: 'amount',
            },
            {
                Header: 'Qty',
                accessor: 'qty',
            },
            {
                Header: 'Date',
                accessor: 'date',
            },
        ];
    }

    handleRowClick = (state, rowInfo, column, instance) => {
        if (rowInfo) {
            return {
                onClick: (e, handleOriginal) => this.props.showClientData(rowInfo.index),
                style: {
                    fontWeight: rowInfo.index === this.props.selected ? '700' : '600',
                    color: rowInfo.index === this.props.selected ? '#1ab394' : '#4e4e4e',
                    background: rowInfo.index === this.props.selected ? '#e2fff9' : '',
                }
            }
        } else {
            return {}
        }
    }

    handleCreate = () => {
        this.props.setCreateMode();
    }

    filterCaseInsensitive = (filter, row) => {
        const id = filter.pivotId || filter.id;
        return (
            row[id] !== undefined ?
                String(row[id].toLowerCase()).startsWith(filter.value.toLowerCase())
            :
                true
        );
    }

    renderList = (list, text) => {
        return (
            <div className="bas30 mar-to10">
                <ReactTable
                    data={list}
                    getTdProps={this.handleRowClick}
                    columns={this.initColumns()}
                    resizable={false}
                    filterable={true}
                    defaultFilterMethod={this.filterCaseInsensitive}
                    defaultPageSize={13}
                    noDataText={text}
                />
            </div>
        )
    }

    render() {
        if (this.props.isLoading) return this.renderList([], `Loading list...`);
        if (this.props.isErrored) return this.renderList([], `Error occurred...`);
        return this.renderList(this.props.list, `No any payments...`);
    }
}

const mapStateToProps = (state) => ({
    selected: state.paymentSelected,
    isLoading: state.insLoading,
    isErrored: state.insErrored,
    list: state.epayments,
})

const mapDispatchToProps = dispatch => ({
    showClientData: (index) => dispatch(showClientData(index)),
    getPayments: () => dispatch(getPayments())
})

export default connect(mapStateToProps, mapDispatchToProps)(PaymentsList)
