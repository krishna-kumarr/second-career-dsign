import React from "react";
import Logo from "../images/secondCareersLogo.png";
import google from "../images/google.png";
import linkedin from "../images/linkedin.png";
import apple from "../images/apple.png";
import {  FaEye } from "react-icons/fa";

const ProfessionalSignUp = () => {
  return (
    <div className="container-fluid ps-md-0">
      <div className="row g-0">
        <div className="d-none d-md-flex col-md-4 col-lg-5 professional-bg-image"></div>
        <div className="col-md-8 col-lg-7">
          <nav class="navbar navbar-light bg-white header-nav">
            <div className="container">
              <a className="navbar-brand" href="#">
                <img src={Logo} alt="No Logo" width="270" height="40" />
              </a>
            </div>
          </nav>
          <div className="login d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                  <h4 className="login-heading">
                    Create Account                   
                  </h4>                                    
                  <form class="row">
                  <div class="col-md-6 mt-3">
                      <label for="email" class="form-label">
                        First Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="email"                        
                        required
                      />
                      <div class="valid-feedback">Looks good!</div>
                    </div>
                    <div class="col-md-6 mt-3">
                      <label for="dateOfBirth" class="form-label">
                        Last Name <span className="text-danger">*</span>
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

                    <div class="col-md-12 mt-2">
                      <label for="dateOfBirth" class="form-label">
                        Email ID <span className="text-danger">*</span>
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
                    <div class="col-md-6 mt-2">
                      <label for="firstName" class="form-label">
                        Mobile Number <span className="text-danger">*</span>
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
                    <div class="col-md-6 mt-2">
                      <label for="LastName" class="form-label">
                        Date of Birth <span className="text-danger">*</span>
                      </label>
                      <div class="input-group">
                        <input
                          type="date"
                          class="form-control border-end-0"                          
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                        />                        
                      </div>
                      <div class="valid-feedback">Looks good!</div>
                    </div>
                    <div class="col-md-6 mt-2">
                      <label for="email" class="form-label">
                        Country <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="email"                        
                        required
                      />
                      <div class="valid-feedback">Looks good!</div>
                    </div>
                    <div class="col-md-6 mt-2">
                      <label for="dateOfBirth" class="form-label">
                        City <span className="text-danger">*</span>
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
                    <div class="col-md-6 mt-2 ">
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
                          <FaEye className="visible-eye"/>
                        </span>
                      </div>
                      <div class="valid-feedback">Looks good!</div>
                    </div>
                    <div class="col-md-6 mt-2">
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
                          <FaEye className="visible-eye"/>
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
                    <div class="d-grid mt-2">
                      <button className="btn btn-brand-background-color button-bold-text btn-lg text-white ">
                        Create Account
                      </button>
                    </div>
                  
                  </form>
                  <div class="card my-4 position-relative">
                    <span class="position-absolute top-0 start-50 translate-middle bg-white p-2">
                      OR
                      <span class="visually-hidden">unread messages</span>
                    </span>
                  </div>
                  <div class="d-flex justify-content-evenly social-signup">
                    <div class="card w-25">
                      <div class="card-body text-center">
                        <img
                          src={google}
                          width={30}
                          height={30}
                          className="img-responsive"
                        />
                      </div>
                    </div>
                    <div class="card w-25">
                      <div class="card-body text-center">
                        <img
                          src={linkedin}
                          width={30}
                          height={30}
                          className="img-responsive"
                        />
                      </div>
                    </div>
                    <div class="card w-25">
                      <div class="card-body text-center">
                        <img
                          src={apple}
                          width={30}
                          height={30}
                          className="img-responsive"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-5">
                      Already have an account ? <label className="brand-color"> Sign In</label>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSignUp;
