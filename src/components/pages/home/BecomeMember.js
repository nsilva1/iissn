import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const BecomeMember = () => {
  return (
    <>
      <Row>
        <Col>
          <div className="p-5">
            <div className="h1 text-center text-white">
              Ready To Become a Member?
              <Link to="/" className=" btn btn-outline-light m-3">
                APPLY NOW
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default BecomeMember;
