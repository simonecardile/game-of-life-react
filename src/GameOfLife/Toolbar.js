import React from "react";
import ReactDOM from "react-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export class Toolbar extends React.Component {
  render() {
    return (
      <Row className="text-center mt-3 mb-3">
        <Col>
          <Button
            as="input"
            type="button"
            variant="primary"
            onClick={this.props.startStop}
            value={
              this.props.evolution ? "Stop Reproducing" : "Start Reproducing"
            }
          />
        </Col>
        <Col>
          <Button
            as="input"
            type="button"
            variant="secondary"
            onClick={this.props.reset}
            value="Reset World"
          />
        </Col>
        <Col>
          <Button
            as="input"
            type="button"
            variant="secondary"
            onClick={this.props.toggleSettings}
            value="Setting"
          />
        </Col>
      </Row>
    );
  }
}

export default Toolbar;
