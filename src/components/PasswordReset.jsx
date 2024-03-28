import React from "react";
import Logo from "../images/secondCareersLogo.png";


import { PiEnvelopeSimpleOpenThin } from "react-icons/pi";
import { CiLock } from "react-icons/ci";

import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

function PasswordReset() {
  return (
    <div className="container-fluid ps-md-0">
      <div className="row g-0">
        <div className="d-none d-md-flex col-md-4 col-lg-5 reset-password-bg-image"></div>
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
                    Change your Password
                  </h4>
                  <form>
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
                    <label className="mb-3 text-danger">Please enter an email address.</label>

                    <div className="input-group mb-3 login-form ">
                      <span
                        class="login-input-group-text input-group-text border border-0"
                        id="basic-addon1"
                      >
                        <CiLock className="fs-3" />
                      </span>

                      <input
                        type="password"
                        className="form-control login-input border-start-0 border-top-0 border-bottom-0 rounded-3"
                        id="floatingPassword"
                        placeholder="New Password"
                      />

                      <span class="login-input-group-text input-group-text border-end-0 border-top-0 border-bottom-0">
                        <BsFillEyeSlashFill className="fs-3 visible-eye" />
                      </span>
                    </div>
                    <label className="mb-3 text-danger">Please enter  password.</label>
                    <div className="input-group mb-3 login-form ">
                      <span
                        class="login-input-group-text input-group-text border border-0"
                        id="basic-addon1"
                      >
                        <CiLock className="fs-3" />
                      </span>

                      <input
                        type="password"
                        className="form-control login-input border-start-0 border-top-0 border-bottom-0 rounded-3"
                        id="floatingPassword"
                        placeholder="Confirm Password"
                      />

                      <span class="login-input-group-text input-group-text border-end-0 border-top-0 border-bottom-0">
                        <BsFillEyeSlashFill className="fs-3 visible-eye" />
                      </span>
                    </div>
                    <label className="mb-3 text-danger">Please enter  your password.</label>

                    <div className="d-grid mt-3">
                      <button
                        className="btn btn-lg  btn-login  fw-bold mb-2"
                        type="submit"
                      >
                        Reset Password
                      </button>
                     
                    </div>
                  </form>

                  

                  

                 
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordReset;
