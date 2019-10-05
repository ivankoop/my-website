import React from 'react';

import Layout from '../components/Layout';

import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            Passionate self-taught developer, 24 years old.
            <br />
            Experienced with a wide range of frontend & backend technologies,
            <br /> specialized on native ios and android development.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Full Stack Developer</h3>
              <div className="subheading mb-3">The Silver Logic</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Oct 2019 - Present </span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Full Stack Developer</h3>
              <div className="subheading mb-3">MUV</div>
              <p>
                Leading the frontend development of all the management software
                in the company. <br />
                Designing frontend architecture and foundation core. <br />
                Introducing (unit,integration) tests and continous integration.
                <br />
                Working with some backend microservices using nodejs, mongodb
                and apache kafka.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Feb 2019 - Oct 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Full Stack & Mobile Developer Contractor</h3>
              <div className="subheading mb-3">Independent Contractor</div>
              <h5>Clients</h5>
              <ul>
                <li>Click SA (MUV)</li>
                <li>Finantech SA</li>
                <li>Grupo Tobiano SRL</li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2018 - Feb 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Full Stack & Mobile Developer</h3>
              <div className="subheading mb-3">Teixidó & Co</div>
              <ul>
                <li>
                  Led the development and adoption of React for a big News
                  website.
                </li>
                <li>Developed & maintained android (java) - ios (Swift).</li>
                <li>Developed & maintained back-end - front-end.</li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2016 - July 2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Mobile Developer</h3>
              <div className="subheading mb-3">
                Digital Media Company / POPS
              </div>
              <ul>
                <li>Led the development of an android app using java.</li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">March 2016 - May 2016 </span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Freelance Full Stack Developer</h3>
              <div className="subheading mb-3">Self employed</div>
              <ul>
                <li>
                  Full Stack development for a mechanical company, using ajax,
                  php & mysql.
                </li>
                <li>Small 2d html5 video games using phaserjs.</li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Oct 2015 - Mar 2016 </span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Junior Frontend & Mobile Developer</h3>
              <div className="subheading mb-3">
                Digital Media Company / Noollab
              </div>
              <ul>
                <li>
                  Web development of small landing sites using php & mysql.
                </li>
                <li>Mobile development of an hybrid app using sencha touch.</li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Feb 2015 - Oct 2015</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Self Taught</h3>
              <div className="subheading mb-3">Software Development</div>
              <div>
                Frontend - Backend - Native Mobile Development / IOS - Android
              </div>
              <p>GPA: 3.23</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Feb 2014 - present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Catholic University of Asunción Paraguay</h3>
              <div className="subheading mb-3">Computer Science</div>
              <div>Algorithms & Data Structures</div>
              <p>GPA: 3.83</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Feb 2014 - April 2016</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">
                International High School of Asunción Paraguay
              </h3>
              <div className="subheading mb-3">
                Degree in business administration
              </div>
              <p>GPA: 4.21</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">March 1999 - Dec 2013</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-angular"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-php"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-java"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-python"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-android"></i>
            </li>

            <li className="list-inline-item">
              <i className="fab fa-gulp"></i>
            </li>

            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Languages</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Spanish / speak - read - write
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              English / speak - read - write
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a developer I love to be with my Family and my
            dogs,
            <br />
            play videogames and go out with my friends,
            <br />
            some weekends I prefer to code small scripts just for fun and
            <br />
            pentesting websites & apps just for curiosity. Reported some
            vulnerabilities.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="certs"
      >
        <div className="w-100">
          <h2 className="mb-5">Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <a
                href="https://courses.edx.org/certificates/c032836401624fb8bb961ddc2bbb3c0a"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-li fa fa-certificate text-warning"></i>
                React Router and Redux - Microsoft Certification
              </a>
            </li>
            <li>
              <a
                href="https://courses.edx.org/certificates/942095c1a18b413fa30cfa273a5d0657"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-li fa fa-certificate text-warning"></i>
                Data Science With R - HarvardX Certification
              </a>
            </li>
            <li>
              <a
                href="https://courses.edx.org/certificates/ffbc662f31aa4053a1329069a297f437"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-li fa fa-certificate text-warning"></i>
                Introduction to ReactJs - Microsoft Certification
              </a>
            </li>
            <li>
              <a
                href="https://www.testdome.com/cert/aek2kr6z2e"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-li fa fa-certificate text-warning"></i>
                HTML/CSS, JS and SQL - TestDome Certification
              </a>
            </li>
            <li>
              <a
                href="https://www.testdome.com/cert/56ttdj7sjj"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-li fa fa-certificate text-warning"></i>
                Javascript top 10% Score - TestDome Certification
              </a>
            </li>
            <li>
              <a
                href="https://www.testdome.com/cert/zswuzeb1xc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-li fa fa-certificate text-warning"></i>
                PHP - TestDome Certification
              </a>
            </li>
            <li>
              <a
                href="https://www.testdome.com/cert/unskv5sxcw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-li fa fa-certificate text-warning"></i>
                Java - TestDome Certification
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
