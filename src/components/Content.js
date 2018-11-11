import React from 'react';
import Map from './Map';
import List from './List';
import * as LocationsAPI from '../api/Locations';

class Content extends React.Component {
  state = {
    locations: []
  };

  componentDidMount() {
    console.log("DATA");
    LocationsAPI.getLocations().then(resp => this.setState({locations:resp})
    );
  }

  handleClickEvent(location) {
    for (let i = 0; i < window.markers.length; i++) {
      if (location.venue.id === window.markers[i].title) {
        window.infoWindow.open(window.mapObject, window.markers[i]);
      }
    }
  }

  render() {
    console.log(this.state.locations);

    return (
      <div className="content">
        <List
          locations={this.state.locations}
          showInfoContent={this.handleClickEvent}
         />
        <Map locations={this.state.locations} />
      </div>
    );
  }
}

export default Content;
