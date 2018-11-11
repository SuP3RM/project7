import React from 'react';
import Map from './Map';

class List extends React.Component {
  render() {

    const locations = this.props.locations;
    return (
      <div id="list">
        <h2>Locations</h2>
        <input type="text" />
        <ol>
          {locations.map(loc => (
            <li key={loc.venue.id}>
              <div>
                <h2>Name: {loc.venue.name}</h2>
                <p>Address: {loc.venue.location.address}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default List;
