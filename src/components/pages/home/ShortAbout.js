import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import camera from "../../images/camera.jpg";

const ShortAbout = () => {
  return (
    <>
      <Row>
        <Col xs={12} md={6}>
          <div className="">
            <h1 className="display-5 fw-bold mt-3" style={{ color: "#002147" }}>
              About IISSN
            </h1>
            <h5 className="mt-3" style={{ color: "#002147" }}>
              The Institute was registered in Nigeria in July 1999, as a Public
              Trust Institute with Incorporated Board of Trustees.
            </h5>
            <p className="mt-3 lead" style={{ color: "#002147" }}>
              By virtue of its incorporation, the Institute is an independent
              Public Trust and a self-regulatory professional organization
              opened to all who want to make a career in industrial security and
              safety.
            </p>
            <Link to="/about" className="btn btn-warning">
              READ MORE
            </Link>
          </div>
        </Col>
        <Col md={6} className="about-image">
          <img src={camera} alt="Industrial Security" width="100%" />
        </Col>
      </Row>
    </>
  );
};

export default ShortAbout;
