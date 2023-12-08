// ResumeComponent.jsx
import React from "react";
import "./ResumeComponent.css";
import Image from "next/image";

const ResumeComponent = () => {
  return (
    <div id="main-container">
      <div id="resume-content">
        <span id="name">HASSAN SHEHZAD</span>
        <span id="job-title">BACKEND DEVELOPER</span>
      </div>
      <div id="work-and-details">
        <div id="details-div">
          <div id="resume-description-div">
            <span id="profile-heading">PROFILE</span>
            <span id="profile-description">
              Self-taught Backend Developer skilled in JavaScript, Node.js, and
              SQL. Led the development of an extensive project built with Node.js and Next.js,
              overseeing backend,
              database design and deployment. Advancing into DevOps for more
              efficient and automated software builds. Fluent in both English
              and Urdu, enhancing team communication.
            </span>
          </div>
          <div id="contact-div">
            <span id="contact-heading">CONTACT</span>
            <div id="social-icons-div">
              <div id="icons-div">
                <Image src="/email.svg" width={9.6} height={7} alt="email" />
                <Image src="/phone.svg" width={9.6} height={7} alt="email" />
                <Image src="/location.svg" width={9.6} height={7} alt="email" />
                <Image src="/github.svg" width={9.6} height={7} alt="email" />
              </div>
              <div id="icons-text-div">
                <a href="mailto:hassan.khatri005@gmail.com" id="email-link">
                  hassan.khatri005@gmail.com
                </a>
                <a href="tel:+923313218400" id="phone-link">
                  +92 331 3218400
                </a>
                <span id="icon-text">Karachi, Pakistan</span>
                <a
                  href="https://github.com/hassan1oct"
                  target="_blank"
                  id="github-profile-link"
                >
                  github.com/hassan1oct
                </a>
              </div>
            </div>
          </div>
          <div id="skills-div">
            <span id="skills-heading">SKILLS</span>
            <div id="hard-skills-div">
              <span id="hard-skills-heading">Hard Skills</span>
              <ul id="hard-skills-list">
                <li id="hard-skills-list-text">JavaScript</li>
                <li id="hard-skills-list-text">Node.js</li>
                <li id="hard-skills-list-text">Express.js</li>
                <li id="hard-skills-list-text">Linux</li>
                <li id="hard-skills-list-text">Git</li>
                <li id="hard-skills-list-text">PostgresSQL</li>
                <li id="hard-skills-list-text">Sequelize</li>
                <li id="hard-skills-list-text">Nginx</li>
              </ul>
            </div>
            <div id="hard-skills-div">
              <span id="soft-skills-heading">Soft Skills</span>
              <ul id="hard-skills-list">
                <li id="hard-skills-list-text">Leadership</li>
                <li id="hard-skills-list-text">Communication</li>
                <li id="hard-skills-list-text">Problem-Solving</li>
                <li id="hard-skills-list-text"> Adaptability</li>
              </ul>
            </div>
          </div>
          <div id="interest-div">
            <span id="interest-heading">INTERESTS</span>
            <ul id="hard-skills-list">
              <li id="hard-skills-list-text">Music</li>
              <li id="hard-skills-list-text">Chess</li>
              <li id="hard-skills-list-text">Table Tennis</li>
              <li id="hard-skills-list-text">Astronomy</li>
            </ul>
          </div>
        </div>
        <div id="work-div">
          <span id="work-experience-heading">WORK EXPERIENCE</span>
          <div id="work-experience-div">
            <span id="job-title-heading">Team Lead</span>
            <span id="company-name">Intech Ventures</span>
            <span id="job-duration">June 2023 - November 2023</span>
            <ul id="job-description">
              <li id="job-duration-text">
                Managed the recruitment of a specialized team of a developers
                and designers, driving project Dhoondhley (
                <a
                  href="https://dhoondhley.pk"
                  target="_blank"
                  id="Dhoondhley-link"
                >
                  https://dhoondhley.pk
                </a>
                ) from an inception to deployment. (website may be closed)
              </li>
              <li id="job-duration-text">
                Led the{" "}
                <a
                  href="https://dhoondhley.pk"
                  target="_blank"
                  id="Dhoondhley-url"
                >
                  Dhoondhley
                </a>{" "}
                project, designing the database architecture and coding the
                entire backend in Node.js, using best practices.
              </li>
              <li id="job-duration-text">
                Administered the configuration and deployment of the project on
                Microsoft Azure VM, ensuring regular database backups and system
                reliability.
              </li>
              <li id="job-duration-text">
                Organized interviews and scheduled meetings with partners,
                contributing to smooth project operations.
              </li>
            </ul>
          </div>
          <div id="work-experience-div">
            <span id="job-title-heading">Node.js Developer</span>
            <span id="company-name">Internative Labs LLC</span>
            <span id="job-duration">February 2023 - April 2023</span>
            <ul id="job-description">
              <li id="job-duration-text">
                Developed Zenith Novels, a digital platform for writers and
                readers, featuring subscriptions and author earnings.
              </li>
              <li id="job-duration-text">
                Built a stock management application from scratch, implementing
                OAuth and Stripe for secure transactions.
              </li>
              <li id="job-duration-text">
                Contributed to an e-commerce website development, focusing on a
                flawless user experience with EJS.
              </li>
            </ul>
          </div>
          <div id="work-experience-div">
            <span id="job-title-heading">Node.js Intern</span>
            <span id="company-name">Inaequo Solutions</span>
            <span id="job-duration">October 2022 - February 2023</span>
            <ul id="job-description">
              <li id="job-duration-text">
                Enhanced coding skills working on inRetail, a Node.js and
                TypeScript app for inventory management.
              </li>
              <li id="job-duration-text">
                Assumed full responsibility for inRetail development, advancing
                the app under the team leads mentorship.
              </li>
            </ul>
          </div>
          <div id="education-div">
            <span id="education-heading">EDUCATION</span>
            <div id="education-description-main-div">
              <div id="education-description">
                <span id="education-text">A-Levels</span>
                <span id="education-text">Computer Science</span>
                <span id="education-text">Highbrow College</span>
                <span id="education-text">September 2020 - June 2022</span>
              </div>
              <div id="education-description">
                <span id="education-text">O-Levels</span>
                <span id="education-text"> Pre-Engineering</span>
                <span id="education-text">St. Patricks High School</span>
                <span id="education-text">August 2014 - June 2020</span>
              </div>
            </div>
          </div>
          <div id="repo-link">
            Designed and developed this resume with Next.js; view the source
            code on{" "}
            <a
              href="https://github.com/hassan1oct/hassan-resume"
              target="_blank"
              id="repo-link-git"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeComponent;
