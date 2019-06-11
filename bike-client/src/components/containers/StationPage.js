import React, {Component} from 'react';
import StationList from '../StationList.js';

export default class Mainpage extends Component{

    render(){
        return (
            <div className="m-pt30">
                <StationList />
            </div>
        );
    }
}

