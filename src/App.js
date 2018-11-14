import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';

// style from Snazzy Maps
// Simple night vision - Stranger Thing
// by beniamino nobile
var styles = [{
    featureType: 'all',
    elementType: 'all',
    stylers: [{
        invert_lightness: true
      },
      {
        saturation: '-9'
      },
      {
        lightness: '0'
      },
      {
        visibility: 'simplified'
      }
    ]
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'all',
    stylers: [{
      weight: '1.00'
    }]
  },
  {
    featureType: 'road.highway',
    elementType: 'all',
    stylers: [{
      weight: '0.49'
    }]
  },
  {
    featureType: 'road.highway',
    elementType: 'labels',
    stylers: [{
        visibility: 'on'
      },
      {
        weight: '0.01'
      },
      {
        lightness: '-7'
      },
      {
        saturation: '-35'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text',
    stylers: [{
      visibility: 'on'
    }]
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.stroke',
    stylers: [{
      visibility: 'off'
    }]
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.icon',
    stylers: [{
      visibility: 'on'
    }]
  }
];

class App extends Component {
  initMap() {
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: {
        lat: 41.8781,
        lng: -87.6298
      },
      zoom: 12,
      styles: styles
    });
    window.mapObject = map;
  }

  loadScript() {
    let scriptElement = this.createMapS();
    let scriptsOnPage = document.getElementsByTagName('script');
    let script = scriptsOnPage[0];
    script.parentNode.insertBefore(scriptElement, script);
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
    return ( <
      div className = 'App' >
      <
      Header / >
      <
      Content / >
      <
      /div>
    );
  }
}

export default App;
