import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const JobDescription = () => {
  return (
    <>
    <div className="p-4 bg-white mt-2 rounded-4">
      <div>
        <h5>About Company</h5>
        <p className="job-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          labore. Dolor iusto cum doloribus accusamus natus numquam a temporibus
          explicabo sequi, fugiat doloremque consequuntur obcaecati officia
          harum magnam aut non ipsum dolorem dignissimos! Numquam magni odio
          temporibus mollitia quas totam, quisquam quis recusandae iusto odit
          magnam iste, velit beatae, ea aut quam est fugit! Cum facere libero
          enim in! Delectus.
        </p>
      </div>
      <div class="d-flex justify-content-around mt-4">
        <label className="fs-6 company-details-icon">
          <FaRegCalendarAlt className="me-2 text-success" />
          Non-for-Profit / NGO
        </label>
        <label className="fs-6 company-details-icon">
          <FaRegCalendarAlt className="me-2 text-warning" />
          Social Sector
        </label>
        <label className="fs-6 company-details-icon">
          <FaRegCalendarAlt className="me-2 text-primary" />
          https://www.2ndcareers.com/
        </label>
      </div>
      <div className="mt-4">
        <h5>Job Summary</h5>
        <p className="job-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          labore. Dolor iusto cum doloribus accusamus natus numquam a temporibus
          explicabo sequi, fugiat doloremque consequuntur obcaecati officia
          harum magnam aut non ipsum dolorem dignissimos! Numquam magni odio
          temporibus mollitia quas totam, quisquam quis recusandae iusto odit
          magnam iste, velit beatae, ea aut quam est fugit! Cum facere libero
          enim in! Delectus.
        </p>
        <p className="job-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          labore. Dolor iusto cum doloribus accusamus natus numquam a temporibus
          explicabo sequi, fugiat doloremque consequuntur obcaecati officia
          harum magnam aut non ipsum dolorem dignissimos! Numquam magni odio
          temporibus mollitia quas totam, quisquam quis recusandae iusto odit
          magnam iste, velit beatae, ea aut quam est fugit! Cum facere libero
          enim in! Delectus.
        </p>
      </div>
      <div className="mt-4">
        <h5>Responsibilities</h5>
        <ul className="dashboard-responsibility-ul">
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
        </ul>
      </div>
      <div className="mt-4">
        <h5>Skills / Competencies</h5>
        <p className="job-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          labore. Dolor iusto cum doloribus accusamus natus numquam a temporibus
          explicabo sequi, fugiat doloremque consequuntur obcaecati officia
          harum magnam aut non ipsum dolorem dignissimos! Numquam magni odio
          temporibus mollitia quas totam, quisquam quis recusandae iusto odit
          magnam iste, velit beatae, ea aut quam est fugit! Cum facere libero
          enim in! Delectus.
        </p>
        <ul className="ms-5 dashboard-skills-ul">
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
        </ul>
        <div class="d-flex justify-content-around mt-4 dashboard-job-post-icons">
          <label className="fs-6">
            <FaRegCalendarAlt className="me-2 text-success" />
            Volunteer
          </label>
          <label className="fs-6">
            <FaRegCalendarAlt className="me-2 text-warning" />
            Full Time
          </label>
          <label className="fs-6">
            <FaRegCalendarAlt className="me-2 text-primary" />
            12hrs/week
          </label>
        </div>
      </div>
      <div className="mt-4">
        <h5>Additional Informations</h5>
        <ul className="ms-5 dashboard-additional-information-ul mt-4">
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
        </ul>
        <p className="job-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          labore. Dolor iusto cum doloribus accusamus natus numquam a temporibus
          explicabo sequi, fugiat doloremque consequuntur obcaecati officia
          harum magnam aut non ipsum dolorem dignissimos! Numquam magni odio
          temporibus mollitia quas totam, quisquam quis recusandae iusto odit
          magnam iste, velit beatae, ea aut quam est fugit! Cum facere libero
          enim in! Delectus.
        </p>

      </div>
      </div>
    </>
  );
};

export default JobDescription;
