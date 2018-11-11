import React from 'react';
import Map from './Map';
import List from './List';
import * as LocationsAPI from '../api/Locations';

class Content extends React.Component {
  state = {
    locations: [],
    query: ''
  };
  componentDidMount() {
    LocationsAPI.getLocations().then(resp => this.setState({locations:resp})
    );
  }

  handleClickEvent = (location) => {
    for (let i = 0; i < window.markers.length; i++) {
      if (location.venue.id === window.markers[i].title) {
        let content = this.prepareContent(location);
        window.infoWindow.setContent(content);
        window.infoWindow.open(window.mapObject, window.markers[i]);
      }
    }
  }

  prepareContent = location => {
    return `<div>
    <p className="title">
      Name: <a href="#">${location.venue.name}</a>
    </p>
    <p>Address: ${location.venue.location.address}</p>
  </div>`;
  };

  handleTextChange = query => {
    this.setState({query});
  }

  render() {
    console.log(this.state.locations);

    return (
      <div className="content">
        <List
          locations={this.state.locations}
          showInfoContent={this.handleClickEvent}
          queryString = {this.state.query}
          handleChange = {this.handleTextChange}
         />
        <Map
          locations={this.state.locations}
          prepareContent={this.prepareContent}
        />
      </div>
    );
  }
}

export default Content;
