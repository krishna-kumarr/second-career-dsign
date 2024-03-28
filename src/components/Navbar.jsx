import React from "react";
import Logo from "../images/secondCareersLogo.png";
import { FaBell } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";

const Navbar = () => {
  return (
    <nav class="navbar navbar-light bg-white fixed-top navbar-expand-md shadow-sm p-2 justify-content-center navbar-height">
      <div class="container-fluid">
        <a class="navbar-brand d-flex w-50 me-auto " href="#">
          <img src={Logo} alt="No Logo" className="img-responsive logo"  />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsingNavbar3"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">
          <ul class="navbar-nav w-100 justify-content-center">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <b>Home</b>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="//codeply.com">
                Learning
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Community
              </a>
            </li>
          </ul>

          

          <ul class="nav navbar-nav ms-auto w-100 justify-content-end">
            <li class="nav-item">              
              <a class="nav-link" href="#">
                <MdNotificationsActive className="fs-4"/>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle "
                href="#"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  class="rounded-circle me-2"
                />
                George Martin
                
              </a>
              <ul
                class="dropdown-menu dropdown-menu-left"
                aria-labelledby="navbarScrollingDropdown"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    My Profile
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Contact 2nd Careers
                  </a>
                </li>
             
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
