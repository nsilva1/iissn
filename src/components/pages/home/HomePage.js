import React from "react";
import { Container } from "react-bootstrap";
import Services from "./Services";
import ShortAbout from "./ShortAbout";
import TopCarousel from "./TopCarousel";

const HomePage = () => {
  return (
    <>
      <div className="top" style={{ marginTop: "7rem" }}>
        <TopCarousel />
      </div>
      <div>
        <Container>
          <Services />
        </Container>
      </div>
      <div>
        <Container>
          <ShortAbout />
        </Container>
      </div>
    </>
  );
};

export default HomePage;
