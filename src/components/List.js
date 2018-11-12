import React from 'react';
//import Map from './Map';

class List extends React.Component {
  render() {
    // list locations
    const locations = this.props.locations;
    return ( <
      nav role = "navigation" >
      <
      div id = "menuToggle" >

      <
      input type = "checkbox" / >

      <
      span > < /span> <
      span > < /span> <
      span > < /span>

      <
      ul id = "menu" >
      <
      div id = "list" >
      <
      h2 > Locations < /h2> <
      p > {
        this.props.queryString
      } < /p> <
      input id = "filterbar"
      type = "text"
      value = {
        this.props.queryString
      }
      onChange = {
        e => this.props.handleChange(e.target.value)
      }
      /> <
      ol > {
        locations.map(loc => ( <
          li key = {
            loc.venue.id
          } >
          <
          div >
          <
          p className = "title" > Place: {
            " "
          } <
          button href = "#"
          onClick = {
            () => this.props.showInfoContent(loc)
          } > {
            loc.venue.name
          } < /button > <
          /p> <
          p > Address: {
            loc.venue.location.address
          } < /p> <
          /div> <
          /li>
        ))
      } < /ol> <
      /div> <
      /ul> <
      /div> <
      /nav>
    );
  }
}

export default List;
