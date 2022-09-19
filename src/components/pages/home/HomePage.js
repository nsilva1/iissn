import React from "react";
import { Container } from "react-bootstrap";
import BecomeMember from "./BecomeMember";
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
      <div className="p-5" style={{ backgroundColor: "#f5f5f5" }}>
        <Container>
          <Services />
        </Container>
      </div>
      <div className="p-3">
        <Container>
          <ShortAbout />
        </Container>
      </div>
      <div className="p-5" style={{ backgroundColor: "#f5f5f5" }}>
        <UpcomingEvents />
      </div>
      <div className="bg-success">
        <BecomeMember />
      </div>
    </>
  );
};

export default HomePage;
