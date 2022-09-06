import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

const OrganizationRegistration = () => {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);

  return (
    <>
      <Container>
        <h3 className="text-center" style={{ marginTop: "8rem" }}>
          Organization Registration
        </h3>
        <div className="row d-flex justify-content-center align-items-center">
          {success && (
            <div class="alert alert-success" role="alert">
              Registration Successful!
            </div>
          )}
          <div className="col-md-10 col-sm-10 my-5">
            <form
              name="personal-registration"
              data-netlify="true"
              method="POST"
              action="/organization-registration/?success=true"
            >
              <input
                type="hidden"
                name="form-name"
                value="personal-registration"
              />

              <label>Name</label>
              <input
                className="form-control"
                type="text"
                placeholder=""
                name="name"
                required
              />
              <label>Address</label>
              <input
                className="form-control"
                type="text"
                placeholder=""
                name="address"
                required
              />
              <label>Phone</label>
              <input
                className="form-control"
                type="text"
                placeholder=""
                name="phone"
                required
              />
              <label>Email</label>
              <input
                className="form-control"
                type="email"
                placeholder=""
                name="email"
                required
              />
              <label>Website</label>
              <input
                className="form-control"
                type="text"
                placeholder=""
                name="website"
              />
              <label>Contact Person</label>
              <input
                className="form-control"
                type="text"
                placeholder=""
                name="contact-person"
                required
              />
              <label>Sponsor</label>
              <select className="form-control" type="text" name="sponsor">
                <option value="-">-</option>
                <option value="Principal Sponsor $65,000">
                  Principal Sponsor $65,000
                </option>
                <option value="Platinum Sponsors- $ 45,000">
                  Platinum Sponsors- $ 45,000
                </option>
                <option value="Gold Sponsors - $35,000">
                  Gold Sponsors - $35,000
                </option>
                <option value="Silver Sponsors - $25,000">
                  Silver Sponsors - $25,000
                </option>
                <option value="Bronze Sponsors - $15,000">
                  Bronze Sponsors - $15,000
                </option>
              </select>
              <label>Delegates</label>
              <select className="form-control" type="text" name="delegates">
                <option value="-">-</option>
                <option value="VVIP Delegates - $10,000">
                  VVIP Delegates - $10,000
                </option>
                <option value="VIP Delegates - $2,500">
                  VIP Delegates - $2,500
                </option>
                <option value="Official Delegates -  $1,500">
                  Official Delegates - $1,500
                </option>
              </select>
              <label>Exhibition</label>
              <select className="form-control" type="text" name="exhibition">
                <option value="-">-</option>
                <option value="Space $350 - 750 per Sqm2">
                  Space $350 - 750 per Sqm2
                </option>
              </select>
              <label>Other Sponsorship</label>
              <select
                className="form-control"
                type="text"
                name="other-sponsorship"
              >
                <option value="-">-</option>
                <option value="Tea brake & Lunch">Tea brake & Lunch</option>
                <option value="Bags and writing material ">
                  Bags and writing material{" "}
                </option>
                <option value="Gala & wine nights">Gala & wine nights</option>
              </select>
              <label>How did you hear about us</label>
              <input className="form-control" type="text" name="hear" />
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OrganizationRegistration;
