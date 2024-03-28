import React from "react";
import Logo from "../images/secondCareersLogo.png";
import { PiEnvelopeSimpleOpenThin } from "react-icons/pi";
function ForgetPassword() {
  return (
    <div className="container-fluid ps-md-0">
      <div className="row g-0">
        <div className="d-none d-md-flex col-md-4 col-lg-5 forget-password-bg-image"></div>
        <div className="col-md-8 col-lg-7">
          <nav class="navbar navbar-light bg-white header-nav">
            <div className="container mt-4">
              <a className="navbar-brand" href="#">
                <img src={Logo} alt="No Logo" width="270" height="40" />
              </a>
            </div>
          </nav>
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-6 mx-auto">
                  <h4 className="login-heading text-center mb-5">
                    Forget your password?
                  </h4>
                  <form className="">
                    <div className="input-group mb-3 login-form">
                      <span
                        class="login-input-group-text input-group-text border border-0"
                        id="basic-addon1"
                      >
                        <PiEnvelopeSimpleOpenThin className="fs-3" />
                      </span>
                      <input
                        type="email"
                        class="form-control login-input border border-0 rounded-3"
                        placeholder="Email ID"
                        aria-label="email"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <label className="mb-3 text-secondary">
                      Confirm your email address and we'll send the instructions.
                    </label>

                    <div className="d-grid mt-3">
                      <button
                        className="btn btn-lg  btn-login  fw-bold mb-2"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                  <div className="text-center mt-5">
                    Already have an account?
                    <label className="brand-color ms-1 signup-link">
                      Sign in
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
