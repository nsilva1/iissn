import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const UpcomingEvents = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div>
              <div
                className="posts-header h3 mt-5"
                style={{ color: "#002147" }}
              >
                Latest News
              </div>
              <div
                className="posts-content p-5 mt-3"
                style={{ backgroundColor: "white" }}
              >
                No Posts Available
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div>
              <div
                className="events-header h3 mt-5"
                style={{ color: "#002147" }}
              >
                Upcoming Events
              </div>
              <div
                className="events-content p-5 mt-3"
                style={{ backgroundColor: "white" }}
              >
                No Events Available
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UpcomingEvents;
