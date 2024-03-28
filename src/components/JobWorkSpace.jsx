import React from "react";
import JobFilter from "./JobFilter";
import JobDescription from "./JobDescription";
import JobCard from "./JobCard";
import Logo from "../images/company.png";
import { FaSave } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";

const JobWorkSpace = () => {
  return (
    <div className="container-fluid ">
      <div class="row mt-1 setting-row-height overflow-hidden">

        <div class="col-lg-2 col-md-2 d-none d-md-inline h-100 overflow-scroll">
          <div class="card w-100 border-0 rounded-4 mb-3">
            <div class="card-body">
              <JobFilter />
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-4 h-100 overflow-scroll">
          <div className="d-flex justify-content-between p-2 align-items-center">
            <div className="col">
              <label className="filter-results">Showing : 1275 filtered results</label>
            </div>
            <div className="col">
              <select class="form-select border-0 outline-none" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div class="card w-100 mt-3 rounded-4 border-0">
            <div class="card-body">
              <JobCard />
            </div>
          </div>
          <div class="card w-100 mt-3 rounded-4 border-0">
            <div class="card-body">
              <JobCard />
            </div>
          </div>
          <div class="card w-100 mt-3 rounded-4 border-0">
            <div class="card-body">
              <JobCard />
            </div>
          </div>
          <div class="card w-100 mt-3 rounded-4 border-0">
            <div class="card-body">
              <JobCard />
            </div>
          </div>
          <div class="card w-100 mt-3 rounded-4 border-0">
            <div class="card-body">
              <JobCard />
            </div>
          </div>
          <div class="card w-100 mt-3 rounded-4 border-0">
            <div class="card-body">
              <JobCard />
            </div>
          </div>
          <div class="card w-100 mt-3 rounded-4 border-0">
            <div class="card-body">
              <JobCard />
            </div>
          </div>
          <div class="card w-100 mt-3 rounded-4 border-0">
            <div class="card-body">
              <JobCard />
            </div>
          </div>
          <div class="card w-100 mt-3 rounded-4 border-0">
            <div class="card-body">
              <JobCard />
            </div>
          </div>
          <div class="card w-100 mt-3 rounded-4 border-0">
            <div class="card-body">
              <JobCard />
            </div>
          </div>
          <div className="w-100 mt-3">

            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    4
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    5
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    6
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    7
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    8
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    9
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    10
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>

          </div>
        </div>

        <div class="d-none d-md-inline col-md-6 col-lg-6 h-100 overflow-scroll">
          <div class="card w-100 border-0 bg-transparent mb-3">
            <div class="card-body p-0">
              <div className="col-12 sticky-top JobDescription-sticky-top-height bg-white rounded-4">
                <div class="d-flex align-items-center my-2">
                  <div class="flex-shrink-0 ms-2">
                    <img src={Logo} alt="..." width={52} height={52} />
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h3 className="job-heading">Data Quality Manager</h3>
                    <p className="job-posted-on m-0">Posted on 22 Mar 2024</p>
                  </div>
                </div>
                <div class="d-flex">
                  <div class="me-auto ms-5 p-2">
                    <button className="btn btn-brand-color text-white ms-3">Apply Now</button>
                  </div>
                  <div class="p-2">
                    <button type="button" class="btn btn-outline-secondary">
                      <FaSave /> Save
                    </button>
                  </div>
                  <div class="p-2">
                    <button type="button" class="btn btn-outline-secondary">
                      <FaShare /> Share
                    </button>
                  </div>
                </div>
              </div>

              <JobDescription />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobWorkSpace;
