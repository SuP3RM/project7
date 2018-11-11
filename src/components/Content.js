import React from 'react';
import Map from './Map';
import List from './List';

class Content extends React.Component {
  render() {
      return (
        <div className="content">
          <List />
          <Map />
        </div>
      );
  }
}

export default Content;
