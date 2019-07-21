import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchInput from './SearchInput';
import RegularInfo from './RegularInfo';



export class RevSettings extends Component {


    render() {
        return (
            <div className="pad-15-ma">
                <div className="fle-50-r">
                    <div className="bas50r">
                        <div>
                            <p className="sma-te-we">{`Accession ID: ${this.props.rev.accessionId}`}</p>
                            <p className="req-pdf"><Link to="#">Requsition PDF</Link></p>
                        </div>
                        <div>
                            <p className="sma-te-we">{`Collection Date: ${this.props.rev.accessionId}`}</p>
                            <p className="sma-te-we">{`Received Date: ${this.props.rev.accessionId}`}</p>
                        </div>
                        <div>
                            <p className="sma-te-we">{`No previous accessions`}</p>
                        </div>
                    </div>
                    <div className="bas50r">
                        <div className="wii100">
                            <div className="fle-dfpo">
                                <div className="basfr">
                                    <p className="sma-te-we">Client</p>
                                    <SearchInput
                                        id="clients"
                                        type="text"
                                        view="search-input"
                                        url="clients"
                                        isLoading={this.props.isLoadingClients}
                                        searchQuery={this.props.searchQueryClients}
                                        searchResults={this.props.clients} />
                                </div>
                                <div className="basfr">
                                    <p className="sma-te-we">Physician</p>
                                    <SearchInput
                                        id="physicians"
                                        type="text"
                                        view="search-input"
                                        url="physicians"
                                        isLoading={this.props.isLoadingPhysicians}
                                        searchQuery={this.props.searchQueryPhysicians}
                                        searchResults={this.props.physicians} />
                                </div>
                            </div>
                            <div className="fle-dfpo amr-todd">
                                <div>
                                    <p className="sma-te-we">Phone:</p>
                                    <p className="sma-te-we">Fax:</p>
                                </div>
                                <div>
                                    <p className="sma-te-we">Client Address:</p>
                                    <p className="sma-te-we">New York</p>
                                </div>
                                <div>
                                    <p className="sma-te-we">NPI</p>
                                    <p className="sma-te-we">123123123</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <RegularInfo />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    rev: {},

    isLoadingClients: state.searchLoading.clients,
    searchQueryClients: state.searchQuery.clients,
    clients: state.searchResults.clients,

    isLoadingPhysicians: state.searchLoading.physicians,
    searchQueryPhysicians: state.searchQuery.physicians,
    physicians: state.searchResults.physicians,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(RevSettings)
