import React from "react";
import Logo from "../images/secondCareersLogo.png";
import Recruiter from "../images/recruiter.jpg";
import Professionals from "../images/professionals.jpg";
import { FaArrowAltCircleRight } from "react-icons/fa";

const RoleSelectors = () => {
  return (
    <div className="container-fluid ps-md-0">
      <div className="row g-0">
        <div className="d-none d-md-flex col-md-4 col-lg-5 role-selectors-bg-image"></div>
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
                <div className="col-md-10 col-lg-9 mx-auto">
                  <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                      <div class="card h-100">
                        <img
                          src={Professionals}
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="card-body">
                          <h5 class="card-title">Professional</h5>
                          <p class="card-text role-selection-description">
                            Empowering Experienced semi-retired or retired
                            Professionals with Fulfilling Opportunities – CXOs,
                            HR Professionals; Finance Professionals, Sales &
                            Marketing Professionals, Tech Experts, and Board
                          </p>
                        </div>
                        
                      </div>
                    </div>
                    <div class="col">
                      <div class="card h-100">
                        <img src={Recruiter} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <h5 class="card-title">Employer</h5>
                          <p class="card-text role-selection-description">
                            Enabling enterprises, start-ups, and NGOs to find
                            well-screened experienced talent from a pool of
                            well-qualified semi-retired or retired professionals
                          </p>
                        </div>
                        <div class="card-footer border-0">
                          <button
                            type="button"
                            class="btn btn-primary w-100 sign-up-buttons"
                          >
                            Sign up
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card h-100">
                        <img src={Recruiter} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <h5 class="card-title">Partner</h5>
                          <p class="card-text role-selection-description">
                          Engaging platform for Recruiting firms, Skills Development  Firms, and Coaching Firms to partner
                          </p>
                        </div>
                        <div class="card-footer border-0">
                          <button
                            type="button"
                            class="btn btn-primary  w-100 sign-up-buttons"
                          >
                            Sign up
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-5 mb-3">
                    Already have an account ?
                    <label className="brand-color signInLink">Sign In</label>
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

export default RoleSelectors;
