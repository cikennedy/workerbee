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

  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      showingInfoWindow: false,
      activeMarker: {},
    };
  }

  getMarkers = () => {
    axios
      .get("/api/jobs")
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
    Geocode.fromAddress(this.state.address, i) .then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.state.locations.map((location) => {
            return (
              <AnyReactComponent
                item
                key={location._id}
                text={location.category}
                lng={87.6298}
              />
            );
          })}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
