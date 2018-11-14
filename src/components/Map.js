import React from 'react';

class Map extends React.Component {
  markers = [];
  addMarkers = locations => {
    if (window.google) {
      let infoWindow = new window.google.maps.InfoWindow();
      for (let i = 0; i < locations.length; i++) {
        let marker = new window.google.maps.Marker({
          position: {
            lat: locations[i].venue.location.lat,
            lng: locations[i].venue.location.lng
          },
          map: window.mapObject,
          title: locations[i].venue.id,
          animation: window.google.maps.Animation.DROP
        });
        marker.addListener("click", () => {
          let content = this.props.prepareContent(locations[i]);
          infoWindow.setContent(content);
          infoWindow.open(window.mapObject, marker);
        });
        this.markers.push(marker);
      }
      window.infoWindow = infoWindow;
      window.markers = this.markers;
    }
  };

  removeMapMarkers = () => {
    for (let i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(null);
    }
  }

  render() {
    this.removeMapMarkers();
    this.addMarkers(this.props.locations);
    return <div role = "application"
    id = "map" / > ;
  }
}

export default Map;
