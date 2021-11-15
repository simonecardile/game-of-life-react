import React from "react";
import ReactDOM from "react-dom";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export class SettingsForm extends React.Component {
  render() {
    return (
      <Form id="settingsForm">
        <Row>
          <Col md={6} className="mb-2">
            <Form.Group>
              <Form.Label>Rows</Form.Label>
              <Form.Control
                type="number"
                step="1"
                min="1"
                name="rows"
                value={this.props.rows}
                onChange={this.props.onChange}
              />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-2">
            <Form.Group>
              <Form.Label>Cols</Form.Label>
              <Form.Control
                type="number"
                step="1"
                min="1"
                name="cols"
                value={this.props.cols}
                onChange={this.props.onChange}
              />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-2">
            <Form.Group>
              <Form.Label>Evolution Speed</Form.Label>
              <Form.Control
                type="number"
                step="1"
                min="1"
                name="evolutionSpeed"
                value={this.props.evolutionSpeed}
                onChange={this.props.onChange}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default SettingsForm;
