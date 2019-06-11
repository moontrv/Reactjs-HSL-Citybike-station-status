import React, { Component } from 'react';
import SearchBar from '../SearchBar';
import MapStation from '../MapStation';
import StationListForMap from '../StationListForMap';
import { Consumer } from '../Context';

export default class Mainpage extends Component {

    render() {
        return (
            <Consumer>
                {({ actions, providerState }) => (
                    <div className="m-pt30">
                        <SearchBar />
                        <div className="row m-mt10">
                            <div className="col-md-3 d-sm-none d-none d-md-block">
                                {providerState.loaded ? <StationListForMap providerState={providerState} actions={actions} /> : null }
                            </div>
                            <div className="col-md-9 col-sm-12">
                                {providerState.loaded ? <MapStation providerState={providerState} /> : null }                 
                            </div>
                        </div>                                               
                    </div>
                    )
                }
            </Consumer>
        );
    }
}