import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';


class App extends Component {
  initMap() {
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 41.8781, lng: -87.6298},
      zoom: 12
    });
    window.mapObject = map;
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
    const API_KEY = 'AIzaSyCEL036n0NG_bZMe2OnCiOOXsVXdFRA7Uc';
    mapScript.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
    mapScript.async = true;
    mapScript.defer = true;
    return mapScript;
  }

  render() {
    this.loadScript();
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
