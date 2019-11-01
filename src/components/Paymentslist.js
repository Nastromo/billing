import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from "react-table";
import '../table.css';
import { showIns, setCreateMode } from '../store/actions/Ins';



export class PaymentsList extends Component {
    initColumns = () => {
        return [
            {
                Header: 'Name',
                accessor: 'firstName',
            },
            {
                Header: 'Test',
                accessor: 'test',
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
                accessor: 'paymentDate',
            },
        ];
    }

    handleRowClick = (state, rowInfo, column, instance) => {
        if (rowInfo) {
            return {
                onClick: (e, handleOriginal) => this.props.showIns(rowInfo.index),
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

    renderList = (list, text) => {
        return (
            <div className="bas30 mar-to10">
                <ReactTable
                    data={list}
                    getTdProps={this.handleRowClick}
                    columns={this.initColumns()}
                    resizable={false}
                    filterable={true}
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
    selected: state.insSelected,
    isLoading: state.insLoading,
    isErrored: state.insErrored,
    list: [],
})

const mapDispatchToProps = dispatch => ({
    showIns: (index) => dispatch(showIns(index)),
    setCreateMode: () => dispatch(setCreateMode())
})

export default connect(mapStateToProps, mapDispatchToProps)(PaymentsList)
