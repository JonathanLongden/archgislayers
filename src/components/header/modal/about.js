import React, { Component } from 'react';
// var Modal = require('react-bootstrap-modal');
import { Button, Modal } from 'react-bootstrap';

//import { LinkContainer } from 'react-router-bootstrap';
//import { Link } from 'react-router-dom';


class About extends Component {
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
        About
      </Button>

      <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>GEDMS</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <h1>Administered by the Kalispel Natural Resources Department Kalispel Tribe of Indians </h1>
        <p>This viewer presents a compilation of fish, aquatic habitat, water, terrestrial wildlife and forestry resources information collected in the field by the above organizations within the anadromous blocked area of the Columbia River basin. The purpose of this viewer is to provide relevant fisheries and water quality information for both online analysis and dissemination to management agencies, academia and the general public. Care was taken to ensure the integrity of these datasets, however, should a discrepancy be discovered, we would greatly appreciate a notice to our web master. </p>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
    );
  }
}

export default About;
