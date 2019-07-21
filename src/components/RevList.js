import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from "react-table";
import '../table.css';
import { showRev } from '../store/actions/Reviews';



export class RevList extends Component {
    initColumns = () => {
        return [
            {
                Header: 'Accession',
                accessor: 'accessionId',
            },
            {
                Header: 'Patient Name',
                accessor: 'patientName',
            },
            {
                Header: 'Ins #',
                accessor: 'ins',
            },
            {
                Header: 'Insurance Name',
                accessor: 'insuranceName',
            },
            {
                Header: 'Policy Id',
                accessor: 'feeSchedule',
            }
        ];
    }

    handleRowClick = (state, rowInfo, column, instance) => {
        if (rowInfo) {
            return {
                onClick: (e, handleOriginal) => this.props.showRev(rowInfo.index),
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
            <div className="content-table wide-t">
                {/* <div onClick={this.handleCreate} className="create">Create</div> */}
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
        return this.renderList(this.props.list, `No any bills...`);
    }
}

const mapStateToProps = (state) => ({
    selected: state.revSelected,
    list: state.review,
})

const mapDispatchToProps = dispatch => ({
    showRev: (index) => dispatch(showRev(index)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RevList)
