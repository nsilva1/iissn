import React from "react";
import Carousel from "react-bootstrap/Carousel";
import carousel1 from "../../images/carousel1.jpg";
import carousel2 from "../../images/carousel2.jpg";
import carousel3 from "../../images/carousel3.jpg";
import carousel4 from "../../images/carousel4.jpg";

const TopCarousel = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            src={carousel1}
            className="d-block w-100 carousel-image"
            alt="Slide 1"
            style={{ filter: "brightness(0.5)" }}
          />
          <Carousel.Caption>
            <h3>Welcome to IISSN</h3>
            <p>
              Our mission is to develop the profession and practice of
              Industrial Security & Safety to be among the best in the world.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={carousel2}
            className="d-block w-100 carousel-image"
            alt="Slide 2"
          />

          <Carousel.Caption>
            <h3>Safety begins with "YOU"</h3>
            <p>
              At IISSN, we believe in the culture of safety first, and it begins
              with you.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={carousel3}
            className="d-block w-100 carousel-image"
            alt="Slide 3"
          />

          <Carousel.Caption>
            <h3>Equip yourself today with the right safety course</h3>
            <p>
              Join our online community of students that are learning from the
              comfort of their homes and offices
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={carousel4}
            className="d-block w-100 carousel-image"
            alt="Slide 4"
            style={{ filter: "brightness(0.5)" }}
          />

          <Carousel.Caption>
            <h3>Choose from a wide array of Programs/Courses</h3>
            <p>
              Enroll in our distance learning to start a fresh path in your
              career.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default TopCarousel;
