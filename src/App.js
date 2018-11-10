import React, { Component } from 'react';
import './App.css';

class App extends Component {
  initMap() {
    let map = new window.google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
  }

  loadScript() {
    let scriptElement = this.createMapS();
    let scriptsOnPage = document.getElementsByTagName('script');
    let script = scriptsOnPage[0];
    console.log(scriptsOnPage);
    script.parentNode.insertBefore(scriptElement, scriptElement[0]);
    window.initMap = this.initMap;
  }

  createMapS() {
    let mapScript = document.createElement('script');
    const API_KEY = 'AIzaSyDfbkIRQznf-1DUdSQ0AQzSGWSfZgTi8s4';
    mapScript.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
    mapScript.async = true;
    mapScript.defer = true;
    return mapScript;
  }

  render() {
    this.loadScript();
    return (
      <div className="App" id="map">
      </div>
    );
  }
}

export default App;
