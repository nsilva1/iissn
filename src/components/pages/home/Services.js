import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="p-3">
      <Row className="justify-content-sm-center">
        <Col sm={4} xs={12} className="my-2">
          <Card bg="primary" text="white">
            <Card.Body>
              <Card.Title>
                <Link
                  to="/membership"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Become A Member
                </Link>
              </Card.Title>
              <Card.Text>Get all info on joining the institute.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4} xs={12} className="my-2">
          <Card bg="primary" text="white">
            <Card.Body>
              <Card.Title>
                <Link
                  to="/courses"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Distance Learning
                </Link>
              </Card.Title>
              <Card.Text>
                Learn at your pace, Apply for a course today
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4} xs={12} className="my-2">
          <Card bg="primary" text="white">
            <Card.Body>
              <Card.Title>
                <Link
                  to="/calendar"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Training Calendar
                </Link>
              </Card.Title>
              <Card.Text>View our latest training calendar</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Services;
