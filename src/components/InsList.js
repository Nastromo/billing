import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from "react-table";
import '../table.css';
import { showIns } from '../store/actions/Ins';



export class InsList extends Component {
    initColumns = () => {
        return [
            {
                Header: 'ID',
                accessor: 'id',
            },
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Neic',
                accessor: 'neic',
            },
            {
                Header: 'Provider',
                accessor: 'provider',
            },
            {
                Header: 'Free Schedule',
                accessor: 'freeSchedule',
            },
            {
                Header: 'Test Category',
                accessor: 'testCategory',
            }
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

    renderList = (list, text) => {
        list.forEach(row => row.fullName = `${row.name} ${row.lastName}`);
        return (
            <div className="content-table wide-t">
                <div className="create">Create</div>
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
        return this.renderList(this.props.list, `No any codes...`);
    }
}

const mapStateToProps = (state) => ({
    selected: state.insSelected,
    isLoading: state.pendingLoading,
    isErrored: state.pendingErrored,
    list: [],
})

const mapDispatchToProps = dispatch => ({
    showIns: (index) => dispatch(showIns(index)),
})

export default connect(mapStateToProps, mapDispatchToProps)(InsList)
