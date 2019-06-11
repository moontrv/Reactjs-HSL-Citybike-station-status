import React from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import L from 'leaflet';

const MapStation = (props) => {
    const position = props.providerState.currentStation[1];
    return (
        <LeafletMap center={position} zoom={props.providerState.zoom} >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <div className = "blinking">
                <Marker position={position}>
                    <Tooltip>{props.providerState.currentStation[0]}</Tooltip>
                </Marker>
            </div>
            
            {props.providerState.stations.map((item) => {
                let spanStyle = "number-icon";
                let barStyle = "progress-bar";
                if (item.bikesAvailable > 3) {
                    spanStyle = "number-icon green-span";
                    barStyle = "progress-bar bg-success";
                } else if (item.bikesAvailable <= 3 && item.bikesAvailable > 0) {
                    spanStyle = "number-icon orange-span";
                    barStyle = "progress-bar bg-warning";
                } else {
                    spanStyle = "number-icon red-span";
                    barStyle = "progress-bar bg-danger";
                }
                let bikeNumberSpan = `<span>${item.bikesAvailable}</span>`;
                let numberIcon = L.divIcon({
                    className: spanStyle,
                    iconSize: [25, 25],
                    iconAnchor: [10, 10],
                    popupAnchor: [3, -40],
                    html: bikeNumberSpan
                });
                let percent_avail = item.bikesAvailable / (item.bikesAvailable + item.spacesAvailable) * 100;

                return (
                    <Marker key={item.stationId} position={[item.lat, item.lon]} icon={numberIcon}>
                        <Popup>
                            <div className="row">
                                <div className="col-sm-2">
                                    <img className="bike-image" src="https://img.icons8.com/ios/50/000000/tricycle.png" alt="Bike" />
                                </div>
                                <div className="col-sm-10">
                                    <span>{item.name}</span> <br />
                                    <span>{item.stationId}</span>
                                </div>
                            </div>
                            <span className="">Bike available at the station: ({item.bikesAvailable} / {item.bikesAvailable + item.spacesAvailable})</span> <br />
                            <div className="progress">
                                <div className={barStyle} role="progressbar" style={{ width: `${percent_avail + "%"}` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </Popup>
                        <Tooltip>{item.name}</Tooltip>
                    </Marker>
                );
            })}
        </LeafletMap>
    );
}

export default MapStation;