import React from "react";

const Footer = () => {
  return (
    <div className="bg-light">
      <div className="p-3">
        <div className="text-center">
          <h6>
            &copy; Copyright {new Date().getFullYear()} Institute of Industrial
            Security & Safety of Nigeria - All Rights Reserved
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
