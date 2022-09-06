import React from "react";
import { Container } from "react-bootstrap";

const HomePage = () => {
  return (
    <>
      <div className="top" style={{ marginTop: "7rem" }}>
        <div className="home-image">
          <h2 className="display-4">Security</h2>
        </div>
      </div>
      <div>
        <Container></Container>
      </div>
    </>
  );
};

export default HomePage;
