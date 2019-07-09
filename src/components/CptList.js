import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from "react-table";
import '../table.css';
import { setCpt } from '../store/actions/Cpt';
import { setCreateMode } from '../store/actions/Create';



export class CptList extends Component {
    initColumns = () => {
        return [
            {
                Header: 'Code',
                accessor: 'code',
                style: {
                    textAlign: 'left',
                }
            },
            {
                Header: 'Description',
                accessor: 'description',
            },
            {
                Header: 'Modifier',
                accessor: 'modifier',
            },
            {
                Header: 'Fee',
                accessor: 'fee',
            }
        ];
    }

    handleRowClick = (state, rowInfo, column, instance) => {
        if (rowInfo) {
            return {
                onClick: (e, handleOriginal) => this.props.setCpt(rowInfo.index),
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

    setCreateMode = () => {
        this.props.setCreateMode(true);
    }

    renderList = (list, text) => {
        list.forEach(row => row.fullName = `${row.name} ${row.lastName}`);
        return (
            <div className="content-table">
                <button onClick={this.setCreateMode} className="btn-cpt-cre">Create</button>
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
    selected: state.selectedCpt,
    isLoading: state.cptLoading,
    isErrored: state.cptErrored,
    list: state.cpt,
})

const mapDispatchToProps = dispatch => ({
    setCpt: (index) => dispatch(setCpt(index)),
    setCreateMode: (bool) => dispatch(setCreateMode(bool)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CptList)
