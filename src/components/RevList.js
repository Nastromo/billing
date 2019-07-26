import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from "react-table";
import '../table.css';
import { showRev } from '../store/actions/Reviews';
import NewDropDown from './NewDropDown';
import { getInstumTypes } from '../store/actions/Instrums';


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

    componentDidMount() {
        this.props.getInstumTypes();
    }

    renderList = (list, text) => {
        return (
            <div className="content-table wide-t">
                <div className="flex sp-btw mar-bot-10">
                    <div className="dhjko">
                        <p className="sma-te-we">Date range:</p>
                        <input className="hei30o" placeholder="mm/dd/yyyy" ref={el => this.start = el } />
                        <input className="hei30o" placeholder="mm/dd/yyyy" ref={el => this.end = el } />
                    </div>
                    <div className="dhjko">
                        <p className="sma-te-we">Ins #:</p>
                        <input className="hei30o" ref={el => this.ins = el } />
                    </div>
                    <div className="dhjko">
                        <p className="sma-te-we">Instrument type:</p>
                        <NewDropDown
                            id="instrumentsBill"
                            actionType="SET_INSTURM_DROP_OPTION"
                            height="30px"
                            status={this.props.isOpenInstrum}
                            menu={this.props.instrums ? this.props.instrums : []}
                            option={this.props.optionInstrum} />
                    </div>
                    
                </div>
                <ReactTable
                    data={list}
                    getTdProps={this.handleRowClick}
                    columns={this.initColumns()}
                    resizable={false}
                    filterable={false}
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

    isOpenInstrum: state.newDDStatus.instrumentsBill,
    optionInstrum: state.newDDOption.instrumentsBill,
    instrums: state.instrums,
})

const mapDispatchToProps = dispatch => ({
    showRev: (index) => dispatch(showRev(index)),
    getInstumTypes: (text) => dispatch(getInstumTypes(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RevList)
