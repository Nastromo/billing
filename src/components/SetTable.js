import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from "react-table";
import '../table.css';
import { showCode } from '../store/actions/Cpt';



export class SetTable extends Component {
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
                Header: 'Price',
                accessor: 'price',
            }
        ];
    }

    handleRowClick = (state, rowInfo, column, instance) => {
        if (rowInfo) {
            return {
                onClick: (e, handleOriginal) => this.props.showCode(rowInfo.index),
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
            <div>
                <p className="red-p-t">{`TOTAL: $${this.props.price}`}</p>
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
            </div>

        )
    }

    render() {
        if (this.props.isLoading) return this.renderList([], `Loading list...`);
        if (this.props.isErrored) return this.renderList([], `Error occurred...`);
        return this.renderList(this.props.list, `This test doesn't have any elements. Please contact admin!`);
    }
}

const mapStateToProps = (state) => ({
    selected: state.specimenSelected,
    isLoading: state.pendingLoading,
    isErrored: state.pendingErrored,
    list: [],
    price: 1500
})

const mapDispatchToProps = dispatch => ({
    showCode: (index) => dispatch(showCode(index)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SetTable)
