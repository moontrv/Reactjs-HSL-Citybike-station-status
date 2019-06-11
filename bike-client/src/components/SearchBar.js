import React, { Component } from 'react';
import { Consumer } from './Context';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event, actions) {
        event.preventDefault();
        actions.getAStation(this.state.value);
    }

    render() {
        return (
            <Consumer>
                { ({ actions, providerState }) => (
                    <React.Fragment>
                        <form className="form-inline" onSubmit={(event) => this.handleSubmit(event, actions)}>
                            <div className="form-group mb-2 m-mr10">
                                <input className="form-control" type="text" placeholder="Search bike station" value={this.state.value} onChange={this.handleChange} />                            
                            </div>
                            <input className="btn btn-primary mb-2 m-mr10" type="submit" value="Search" />
                            <button className="btn btn-primary mb-2" onClick={(e)=>actions.saveHomeStation(e, providerState.currentStation)}>Save</button>
                        </form>                        
                    </React.Fragment>                    
                )} 
            </Consumer>            
        );
    }
}

export default SearchBar;

