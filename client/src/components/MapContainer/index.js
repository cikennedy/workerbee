import React, { Component } from "react";
import GoogleMapReact, { InfoWindow, Marker } from "google-map-react";
import Geocode from "react-geocode";
import axios from "axios";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const API_KEY = process.env.API_KEY;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 41.8781,
      lng: 87.6298,
    },
    zoom: 11,
  };
    state = {
      locations: [],
      showingInfoWindow: false,
      activeMarker: {},
    };


  getMarker = (id) => {
    const location = this.state.locations.find(location => location.id === id)
    axios
      .get("/api/jobs" + id)({
        job_title: location.job_title,
        address: location.address
      })
      .then((res) =>
        this.setState({
          locations: res.data,
        })
      )
      .catch(() =>
        this.setState({
          locations: [],
        })
      );
  };

  componentDidMount = () => {
    // Google Geocoder
    Geocode.setApiKey(API_KEY);
    Geocode.setLanguage("en");

    // set this as US
    Geocode.setRegion("us");

    // Get latitude & longitude from address
    Geocode.fromAddress({ address: this.state.address} ), (results, status) => {
      if (status === 'OK') {  
        this.setState({
          centerMarker: results[0].geometry.location,
          markerName: results[0].formatted_address
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    };
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key : API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.state.locations.map((location) => {
            return (
              <AnyReactComponent
                item
                key={location._id}
                text={location.address}
                position={this.state.centerMarker}
                // onClick={this.onMarkerClick}
                // name={this.state.markerName}
              />
            );
          })}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
