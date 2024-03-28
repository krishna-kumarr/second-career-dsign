import React from "react";

const FilterMethods = () => {
  return (
    <div className="container-fluid dashboard-menus-container">
      <div class="row mt-5 pt-4 py-2">
        <div class="col-lg-6">
          <ul class="nav justify-content-around bg-white m-1 rounded-2 select-category">
            <li class="nav-item border-bottom border-4 border-warning">
              <a class="nav-link active " aria-current="page" href="#">
                All
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Recommended
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Applied
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Saved
              </a>
            </li>
          </ul>
        </div>

        <div class="col-lg-6">
          <div class="d-flex m-1">            
              <input
                class="form-control form-control-lg w-75 searchInput border-0"
                type="text"
                placeholder="Search company, title"
                aria-label="default input example"
              />
              <button type="button" class="btn btn-lg btn-brand-color w-25 ms-3">
                Search
              </button>
            </div>
           
          </div>
        </div>
      </div>
    
  );
};

export default FilterMethods;
