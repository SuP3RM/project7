import React from 'react';
import Map from './Map';
import List from './List';
import * as LocationsAPI from '../api/Locations';

class Content extends React.Component {
  componentDidMount (){
    LocationsAPI.getLocations().then => console.log("resp", resp);
  }

  render() {
    console.log("RESPONSE");
    return (
      <div className="content">
        <List />
        <Map />
      </div>
    );
  }
}

export default Content;
