import React from 'react';
import Map from './Map';

class List extends React.Component {
  render() {
    // list locations
    const locations = this.props.locations;
    return (
      <div id="list">
        <h2>Locations</h2>
        <input type="text" />
        <ol>
          {locations.map(loc => (
            <li key={loc.venue.id}>
              <div>
                <p className="title">
                  Name: <a href="#">{loc.venue.name}</a>
                </p>
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
