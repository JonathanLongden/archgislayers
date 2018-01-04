import React, { Component } from 'react';
// var Modal = require('react-bootstrap-modal');
import { Button, Modal } from 'react-bootstrap';

//import { LinkContainer } from 'react-router-bootstrap';
//import { Link } from 'react-router-dom';


class ListOfLayers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }


  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div>
      <Button bsStyle="primary" bsSize="large" onClick={this.open}>
        Lists of Layers
      </Button>

      <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>List of Layers</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>Background Layers</h1>
          <ul>
            <li>Reservations</li>
            <ul>
              <li>Kalispel Reservation Boundary</li>
              <li>Colville Reservation Boundary</li>
            </ul>
            <li>Kalispel ICC Boundary</li>
            <li>Anadromous Blocked Area</li>
            <li>Cities</li>
            <li>Hydrography</li>
            <ul>
              <li>Basins</li>
              <li>Sub-basins</li>
              <li>Watersheds</li>
              <li>WRIA</li>
              <li>NPCC Basins</li>
            </ul>
            <li>UWMEP</li>
            <ul>
              <li>Turnbull NWR Sampling Areas</li>
              <li>Spokeane Sampling Areas</li>
            </ul>
          </ul>
          <h1>Data Layers</h1>
          <ul>
            <li>Water</li>
            <li>Fisheries</li>
            <ul>
              <li>Lake/Reservoir Sites</li>
              <li>Stream Reaches</li>
              <li>WDFW Lake sites (JSAP)</li>
              <li>WDFW Stream Sites (JSAP)</li>
            </ul>
            <li>Aquatic Habitat</li>
            <ul>
              <li>WDFW Lake/Reservior Sites (JSAP)</li>
              <li>Stream Reaches</li>
              <li>Fish Barriers</li>
              <li>Kalispel Reach Statistics</li>
            </ul>
            <li>Forestry</li>
            <ul>
              <li>TFW Sites</li>
              <li>CFI Sites</li>
              <li>Stand Recon</li>
              <li>Timber Cruise</li>
            </ul>
            <li>Wildlife</li>
            <ul>
              <li>UWMEP Sites</li>
              <li>Waterfowl Counts</li>
            </ul>
            <li>Cultural Resources</li>
            <ul>
              <li>Surveyed Area</li>
            </ul>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
    );
  }
}

export default ListOfLayers;
