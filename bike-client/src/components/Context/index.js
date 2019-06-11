import React, { Component } from 'react';
const axios = require('axios');

const BikeStatusContext = React.createContext();

export class Provider extends Component {

  state = {
    //"name": "Merisotilaantori", "stationId": "013",
    currentStation: ["Merisotilaantori", [60.1678703, 24.9755341]],
    loaded: false,
    zoom: 11,
    stations: [
      {
        "stationId": "591",
        "name": "Mellstenintie",
        "bikesAvailable": 16,
        "spacesAvailable": 15,
        "lat": 60.154941,
        "lon": 24.773993,
        "allowDropoff": true
      },
      {
        "stationId": "230",
        "name": "Mäkitorpantie",
        "bikesAvailable": 0,
        "spacesAvailable": 0,
        "lat": 60.22892599719876,
        "lon": 24.96355034325867,
        "allowDropoff": true
      }
    ]
  };

  componentDidMount() {
    var self = this;
    axios.post('http://localhost:5000/stations', {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    })
      .then(function (response) {
        let fetched_data = response.data.data.bikeRentalStations;
        self.setState((prevState, props) => ({
          currentStation: response.data.homestation,
          stations: fetched_data,
          loaded: true,
          zoom: prevState.zoom
        }));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getAStation = (e, from_side_list = null) => {
    var self = this;

    let request_id = null;
    if (!from_side_list) {
      let request_station = this.state.stations.filter(function (item) {
        return item.name === e.charAt(0).toUpperCase() + e.slice(1);
      });
      if (request_station.length > 0) {
        request_id = request_station[0].stationId
      } else {
        return alert("Cannot find this address");
      }
    } else {
      request_id = e;
    }

    axios.post('http://localhost:5000/station', {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request_id)
    })
      .then(function (response) {
        self.setState((prevState, props) => ({
          stations: [...prevState.stations],
          loaded: true,
          currentStation: [response.data.data.bikeRentalStation.name, [response.data.data.bikeRentalStation.lat, response.data.data.bikeRentalStation.lon]],
          zoom: 14
        }));
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  saveHomeStation = (e, value) => {
    e.preventDefault();
    if(!value){
      return false;
    }
    //value.charAt(0).toUpperCase() + value.slice(1)
    axios.post('http://localhost:5000/home-station', {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(value)
    })
      .then(function (response) {
        if(response.status === 200){
          alert("Station " + value[0] + " was saved.");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <BikeStatusContext.Provider value={{
        providerState: this.state,
        actions: {
          getAStation: this.getAStation,
          saveHomeStation: this.saveHomeStation
        }
      }}>
        {this.props.children}
      </BikeStatusContext.Provider>
    );
  }
}

export const Consumer = BikeStatusContext.Consumer;