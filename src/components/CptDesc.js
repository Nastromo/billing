import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from "react-table";
import '../table.css';
import { addDiag } from '../store/actions/Diagnosis';
import AddBtn from './AddBtn';




export class CptDesc extends Component {
    initColumns = () => {
        return [
            {
                Header: 'Code',
                accessor: 'code',
            },
            {
                Header: 'Description',
                accessor: 'description',
            },
            {
                Header: 'Status',
                accessor: 'status',
                Cell: raw => <AddBtn raw={raw} />
            },
        ];
    }

    handleRowClick = (state, rowInfo, column, instance) => {
        if (rowInfo) {
            console.log(rowInfo)
            return {
                onClick: (e, handleOriginal) => this.props.addDiag(rowInfo.original),
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

    renderList = (list, text) => {
        return (
            <div className="content-table">
                <ReactTable
                    data={list}
                    getTdProps={this.handleRowClick}
                    columns={this.initColumns()}
                    resizable={false}
                    filterable={true}
                    defaultPageSize={15}
                    noDataText={text}
                />
            </div>
        )
    }

    render() {
        if (this.props.isLoading) return this.renderList([], `Loading list...`);
        if (this.props.isErrored) return this.renderList([], `Error occurred...`);
        return this.renderList(this.props.list, `No any diagnosis...`);
    }
}

const mapStateToProps = (state) => ({
    selected: state.diagSelected,
    isLoading: state.diagLoading,
    isErrored: state.diagErrored,
    list: state.diags,
})

const mapDispatchToProps = dispatch => ({
    addDiag: (obj) => dispatch(addDiag(obj)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CptDesc)
