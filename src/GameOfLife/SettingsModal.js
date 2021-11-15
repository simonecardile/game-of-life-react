import React from "react";
import ReactDOM from "react-dom";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import SettingsForm from "./SettingsForm.js";

export class SettingsModal extends React.Component {
  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        size="lg"
        centered
        id="settingsForm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SettingsForm
            rows={this.props.rows}
            cols={this.props.cols}
            evolutionSpeed={this.props.evolutionSpeed}
            onChange={this.props.changeSetting}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close Settings</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SettingsModal;
