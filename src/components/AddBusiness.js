import { Component, Fragment } from "react";
import { connect } from "react-redux";
import { addBusiness } from "../redux/action";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import {
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import Map from "./Maps"

class AddBusiness extends Component {
  state = {
    open: false,
    name: "",
    description: "",
    address: "",
    hours: "",
    location: { lat: 0, lng: 0 },
  };

  toggleDialog = () => this.setState({ open: !this.state.open });

  handleChange = (e) => {
    const newState = { ...this.state };
    newState[e.target.id] = e.target.value;
    this.setState(newState);
  };

  handleAddressChange = (e) => {
    this.setState({ address: e.target.value });
    // Update location based on address (you'll need to implement geocoding)
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...this.state };
    payload.id = Date.now();

    this.props.addBusiness(payload);
    this.setState({
      name: "",
      description: "",
      address: "",
      hours: "",
      location: { lat: 0, lng: 0 },
    });
  };

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.address !== this.state.address) {
    }
  }

  geocodeAddress = (address) => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: address }, (results, status) => {
      if (status === "OK") {
        const location = results[0].geometry.location;
        this.setState({
          businessLocation: { lat: location.lat(), lng: location.lng() },
        });
      } else {
        console.error(
          "Geocode was not successful for the following reason: " + status
        );
      }
    });
  };

  render() {
    // const { businessName, description, address, operatingHours, location } =
    //   this.state;
    const { businessLocation } = this.state;
    return (
      <Fragment>
        <div style={{ textAlign: "center" }}>
          <h1>Add Business:</h1>
          <Button
            variant="contained"
            className="add-business"
            onClick={this.toggleDialog}
          >
            Add Business
          </Button>
        </div>
        <div>
          <Dialog open={this.state.open} onClose={this.toggleDialog}>
            <DialogTitle>Add New Business</DialogTitle>
            <DialogContent>
              <form
                onSubmit={this.handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "350px",
                }}
              >
                <TextField
                  id="name"
                  name="Name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  required
                />
                <TextField
                  id="description"
                  placeholder="Business Description"
                  value={this.state.description}
                  onChange={this.handleChange}
                  required
                />
                <TextField
                  id="address"
                  placeholder="Business Address"
                  value={this.state.address}
                  onChange={this.handleChange}
                  required
                />
                <TextField
                  id="hours"
                  placeholder="Business Hours"
                  value={this.state.hours}
                  onChange={this.handleChange}
                  required
                />

                <br />
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
                
              </form>
              <Map business={this.state} />
            </DialogContent>
          </Dialog>
        </div>
      </Fragment>
    );
  }
}
const mapToDispatchToProps = {
  addBusiness,
};

export default connect(null, mapToDispatchToProps)(AddBusiness);
