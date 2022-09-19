import React from "react";
import { Container } from "react-bootstrap";
import Services from "./Services";
import ShortAbout from "./ShortAbout";
import TopCarousel from "./TopCarousel";
import UpcomingEvents from "./UpcomingEvents";

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
      <div style={{ backgroundColor: "#f5f5f5" }}>
        <UpcomingEvents />
      </div>
    </>
  );
};

export default HomePage;
