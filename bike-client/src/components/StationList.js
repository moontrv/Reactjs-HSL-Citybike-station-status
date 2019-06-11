import React, { Component } from 'react';
import { Consumer } from './Context';

class StationList extends Component {

    render() {
        return (
            <Consumer>
                {({ actions, providerState }) => (
                    <table className="table table-bordered table-striped ">
                        <thead>
                            <tr>
                                <th>Station name</th>
                                <th>Station Id</th>
                                <th>Bikes Available</th>
                                <th>Spaces Available</th>
                            </tr>
                        </thead>
                        <tbody>
                            {providerState.stations.map((item) => {
                                return (
                                    <tr key={item.stationId}>
                                        <td>{item.name}</td>
                                        <td>{item.stationId}</td>
                                        <td>{item.bikesAvailable}</td>
                                        <td>{item.spacesAvailable}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                )}
            </Consumer>
        );
    }
}

export default StationList;

