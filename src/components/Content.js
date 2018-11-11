import React from 'react';
import Map from './Map';
import List from './List';
import * as LocationsAPI from '../api/Locations';

class Content extends React.Component {
  state = {
    locations: []
  };
  componentDidMount() {
    console.log("data");
    LocationsAPI.getLocations().then(resp => this.setState({ locations: resp })
    );
  }
  render() {
    console.log("this.state.locations");

    return (
      <div className="content">
        <List locations={this.state.locations} />
        <Map locations={this.state.locations} />
      </div>
    );
  }
}

export default Content;
