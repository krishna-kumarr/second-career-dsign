import React from "react";
import Logo from "../images/secondCareersLogo.png";
import Recruiter from "../images/recruiter.jpg";
import Professionals from "../images/professionals.jpg";
import { FaArrowAltCircleRight, FaCalendarAlt, FaEye } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const RecruiterSignUp = () => {
  return (
    <div className="container-fluid ps-md-0">
    <div className="row g-0">
      <div className="d-none d-md-flex col-md-4 col-lg-5 role-selectors-bg-image"></div>
      <div className="col-md-8 col-lg-7">
        <nav class="navbar navbar-light bg-white header-nav">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={Logo} alt="No Logo" width="200" height="30" />
            </a>
          </div>
        </nav>
        <div className="login d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-md-9 col-lg-8 mx-auto">
                <h4 className="login-heading">
                  Create Account - <label className="brand-color"> Recruiter</label>
                </h4>

                <div class="d-grid mt-4">
                  <button className="btn btn-linkedin button-bold-text btn-lg text-white ">
                    <FaLinkedinIn /> Sign in with Linkedin
                  </button>
                </div>
                <div class="card my-4 position-relative">
                  <span class="position-absolute top-0 start-50 translate-middle bg-white p-2">
                    OR
                    <span class="visually-hidden">unread messages</span>
                  </span>
                </div>
                <form class="row mt-4">
                  <div class="col-md-6">
                    <label for="firstName" class="form-label">
                      Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="firstName"
                      value=""
                      required
                    />
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                  <div class="col-md-6">
                    <label for="LastName" class="form-label">
                      Name of your Organization <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="firstName"
                      value=""
                      required
                    />
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                  <div class="col-md-6">
                    <label for="LastName" class="form-label">
                      Website <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="firstName"
                      value=""
                      required
                    />
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                  <div class="col-md-6">
                    <label for="LastName" class="form-label">
                      Designation <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="firstName"
                      value=""
                      required
                    />
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                  <div class="col-md-6 mt-4">
                    <label for="email" class="form-label">
                      Official Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="email"
                      value=""
                      required
                    />
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                  <div class="col-md-6 mt-4">
                    <label for="dateOfBirth" class="form-label">
                      Mobile Number <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="dateOfBirth"
                      value=""
                      required
                    />
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                  <div class="col-md-6 mt-4">
                    <label for="mobileNumber" class="form-label">
                      Password <span className="text-danger">*</span>
                    </label>
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control border-end-0"
                        placeholder=""
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <span class="input-group-text bg-white" id="basic-addon2">
                        <FaEye />
                      </span>
                    </div>
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                  <div class="col-md-6 mt-4">
                    <label for="validationCustom02" class="form-label">
                      Confirm Password <span className="text-danger">*</span>
                    </label>
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control border-end-0"
                        placeholder=""
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <span class="input-group-text bg-white" id="basic-addon2">
                        <FaEye />
                      </span>
                    </div>
                    <div class="valid-feedback text-danger">Looks good!</div>
                  </div>
                  <div class="col-12 mt-4">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="invalidCheck"
                        required
                      />
                      <label class="form-check-label" for="invalidCheck">
                      I agree to all the <a href="#">Terms</a> and <a href="#">Privacy policy</a>
                      </label>
                      <div class="invalid-feedback">
                        You must agree before submitting.
                      </div>
                    </div>
                  </div>
                  <div class="d-grid mt-4">
                    <button className="btn btn-brand-background-color button-bold-text btn-lg text-white ">
                      Create Account
                    </button>
                  </div>
                  <div className="text-center mt-5">
                    Already have an account ? <label className="brand-color">Sign In</label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default RecruiterSignUp