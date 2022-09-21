import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import about from "../../images/about.jpg";

const About = () => {
  return (
    <>
      <div style={{ marginTop: "6.6rem" }}>
        <div className="about-header" style={{ height: "12rem" }}>
          <div className="d-flex justify-content-center align-items-center">
            <h1
              className="text-white about-header-text"
              style={{ marginTop: "5rem" }}
            >
              ABOUT US
            </h1>
          </div>
        </div>
        <div className="about-body">
          <Container>
            <Row className="pt-5 mb-5">
              <Col xs={12} md={6}>
                <h3>INCORPORATION AND STATUS OF IISSN</h3>
                <p className="lead">
                  The Institute was registered in Nigeria in July 1999, as a
                  Public Trust Institute with Incorporated Board of Trustees.
                </p>
                <p className="lead">
                  By virtue of its incorporation, the Institute is an
                  independent Public Trust and a self-regulatory professional
                  organization opened to all who want to make a career in
                  industrial security and safety.
                </p>
                <h3>OUR MISSION</h3>
                <p className="lead">
                  To develop the profession and practice of Industrial Security
                  and Safety to be among the best in the world
                </p>
              </Col>
              <Col xs={12} md={6}>
                <img
                //   className="about-image"
                  src={about}
                  alt="Team Training"
                  width="100%"
                />
              </Col>
            </Row>
            <h3>OUR POLICY DRIVE</h3>
            <p className="lead">
              To nurture and develop dynamic and effective Industrial Security
              and Safety Services and Practice through training, certification,
              recognition, supervision and discipline of industrial security
              personnel and organizations.
            </p>

            <h3>OUR SCOPE</h3>
            <p className="lead">
              To help regulate, control and standardize professional practice of
              industrial security and safety in Nigeria.
            </p>

            <h3>OUR PROSPECTS</h3>
            <p className="lead">
              Our prospects comprise those who are or aspiring to be
              environmental scientists, ER personnel, fire fighters, food
              microbiologists, food processors, food regulators, general health
              practitioners, haulage and logistics personnel, house-keepers,
              agriculturists, aerodrome safety and security personnel, business
              administrators, chemical handlers, computer operators/ users,
              software designers and managers, veterinary professionals,
              engineers, environmental litigators, human resource personnel,
              hygienists, Industrial psychologists, Janitors, Legislators,
              Managers, Occupational nurses, Office assistants, Auditors,
              Operations and maintenance staff, Paramedics, Pharmacists, policy
              analysts, political strategists, public health analysts, Risk
              assessors and insurers, HSEQ representatives, safety inspectors,
              Secretaries, Security operatives, sociologists, sound engineers,
              technicians, Trade unionists, Warehouse operators, waste
              management practitioners, wildlife scientists, zoologists,
              Lecturers, Researchers on environment, health and safety and
              security; and even High Schools. Our prospects cover everyone
              seeking for higher ground in the safety and security profession 
              irrespective of academic bias, professional discipline and
              workplace engagement.
            </p>

            <h3>OUR MANDATE</h3>
            <p className="lead">
              To regulate, standardize, train, certify and maintain ethics in
              the industry.
            </p>

            <h3>OUR POLICY THRUST</h3>
            <p className="lead">
              The Institute nurtures and develops dynamic and total quality
              industrial security and safety services and practice in Nigeria
              through training, examination, certification, supervision and
              management of industrial security in organizations.
            </p>
          </Container>
        </div>
      </div>
    </>
  );
};

export default About;
