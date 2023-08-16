'use client'

import React, { useEffect, useState } from "react";
import { HydrationProvider, Client } from "react-hydration-provider";
import Header from "@/components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFan,
  faWind,
  faFire,
  faTemperatureHalf,
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "@/components/Footer";

export default function Home() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    window.scroll(0, 0);
  });

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
          <HydrationProvider>

      <Client>
        <Header />
        <main>
          <section id="hero" className="hero">
            <img src="assets/hero.png" alt="" />
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <h2 data-aos="fade-up" data-aos-delay="60">
                    49 Years Experience Providing <br /> HVAC Solutions
                  </h2>
                  <p data-aos="fade-up" data-aos-delay="100">
                    Your Trusted Team for Air Conditioning and Heating
                    Excellence
                  </p>
                </div>
                <div className="col-lg-4">
                  <div className="callback-box bg-light p-4">
                    <h3 className="mb-3">Request a Callback</h3>
                    <div>
                      <form
                        name="dw-callback"
                        method="POST"
                        netlify="true"
                        netlify-honeypot="bot-field"
                      >
                                            <input type="hidden" name="form-name" value="messageForm" />
                        <label htmlFor="fullname" className="form-label mb-3">
                          Name:
                        </label>
                        <input
                          type="text"
                          className="form-control mb-3"
                          id="fullname"
                          name="fullname"
                          placeholder="Name"
                          required
                        ></input>

                        <label
                          htmlFor="phonenumber"
                          className="form-label mb-3"
                        >
                          Phone Number:
                        </label>
                        <input
                          type="tel"
                          className="form-control mb-3"
                          id="phonenumber"
                          name="phonenumber"
                          placeholder="Phone Number"
                          required
                        ></input>

                        <button
                          type="submit"
                          className="btn btn-primary btn-submit"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="clients" className="clients">
            <div className="container" data-aos="fade-up">
              <div className="row align-items-xl-center gy-4">
                <div className="col-xl-3 col-md-3 col-6 client-logo">
                  <img src="assets/register.png" className="img-fluid" alt="" />
                </div>
                <div className="col-xl-8 col-md-8 col-6 client-text">
                  <h2>F Gas Register Certified Engineer</h2>
                  <p>
                    Being an F Gas Register Certified Engineer signifies
                    top-tier proficiency in refrigeration, air conditioning, and
                    heat pump systems. This credential reflects safety
                    commitment, technical excellence, and eco-friendly
                    practices. Clients benefit from updated expertise and
                    adherence to industry standards, ensuring efficient,
                    environmentally-conscious HVAC solutions.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="about" className="about">
            <div className="container" data-aos="fade-up" data-aos-delay="100">
              <div className="row align-items-xl-center gy-5">
                <div className="col-xl-5 content">
                  <h2>About Us</h2>
                  <p>
                    Boasting an impressive 49 years of unwavering experience in
                    the field, our commitment to excellence shines through in
                    every project we undertake. As a distinguished F Gas
                    Register Certified Engineer, we have honed our expertise
                    over the decades, ensuring that each endeavor is marked by
                    precision and innovation. Recognizing the individuality of
                    each property, we approach every challenge with a dedication
                    to tailored solutions, a trait that sets us apart. Our
                    specialization in internal water cooled air conditioning
                    remains unparalleled, and our bespoke installation service,
                    shaped by years of practice, is offered at a price that
                    reflects both our competitive spirit and our uncompromising
                    quality.
                  </p>
                </div>

                <div className="col-xl-7">
                  <div className="row gy-4 icon-boxes">
                    <div
                      className="col-md-6"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <div className="icon-box">
                        <i>
                          <FontAwesomeIcon icon={faFan} />
                        </i>
                        <h3>Guarenteed Quality</h3>
                        <p>
                          Our unwavering commitment to guaranteed quality
                          ensures exceptional results & client satisfaction
                          every time.
                        </p>
                      </div>
                    </div>

                    <div
                      className="col-md-6"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <div className="icon-box">
                        <i>
                          <FontAwesomeIcon icon={faWind} />
                        </i>
                        <h3>An all-round service</h3>
                        <p>
                          Experience our comprehensive all-round service for
                          seamless solutions from start to finish.
                        </p>
                      </div>
                    </div>

                    <div
                      className="col-md-6"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      <div className="icon-box">
                        <i>
                          <FontAwesomeIcon icon={faFire} />
                        </i>{" "}
                        <h3>Flexible appointments</h3>
                        <p>
                          Benefit from our accommodating and flexible
                          appointment times for your convenience.
                        </p>
                      </div>
                    </div>

                    <div
                      className="col-md-6"
                      data-aos="fade-up"
                      data-aos-delay="500"
                    >
                      <div className="icon-box">
                        <i>
                          <FontAwesomeIcon icon={faTemperatureHalf} />
                        </i>{" "}
                        <h3>Free Site Survey</h3>
                        <p>
                          Utilise our free on-site survey for tailored planning
                          and accurate solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="services" className="services">
            <div className="container section-title" data-aos="fade-up">
              <h2>Services</h2>
              <p>
                Explore a selection of our provided services that exemplify our
                expertise.
              </p>
            </div>

            <div className="container">
              <div className="row gy-4">
                <div
                  className="col-lg-6 "
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="service-item d-flex">
                    <div className="icon flex-shrink-0">
                      <i>
                        <FontAwesomeIcon icon={faTemperatureHalf} />
                      </i>
                    </div>
                    <div>
                      <h4 className="title">
                        <span className="stretched-link">installation</span>
                      </h4>
                      <p className="description pr-2">
                        Installation: Installing new air conditioning systems,
                        including ductwork and any necessary electrical work
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-6 "
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="service-item d-flex">
                    <div className="icon flex-shrink-0">
                      <i>
                        <FontAwesomeIcon icon={faTemperatureHalf} />
                      </i>
                    </div>
                    <div>
                      <h4 className="title">
                        <span className="stretched-link">Maintenance</span>
                      </h4>
                      <p className="description pr-2">
                        Regular check-ups and cleaning of air conditioning units
                        to ensure optimal performance and energy efficiency
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-6 "
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="service-item d-flex">
                    <div className="icon flex-shrink-0">
                      <i>
                        <FontAwesomeIcon icon={faTemperatureHalf} />
                      </i>
                    </div>
                    <div>
                      <h4 className="title">
                        <span className="stretched-link">
                          Emergency Repairs
                        </span>
                      </h4>
                      <p className="description pr-2">
                        Providing 24/7 assistance for urgent heating or cooling
                        system failures
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-6 "
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="service-item d-flex">
                    <div className="icon flex-shrink-0">
                      <i>
                        <FontAwesomeIcon icon={faTemperatureHalf} />
                      </i>
                    </div>
                    <div>
                      <h4 className="title">
                        <span className="stretched-link">Consultations</span>
                      </h4>
                      <p className="description pr-2">
                        Advising clients on the best heating and cooling
                        solutions based on their needs and budget
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-6 "
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <div className="service-item d-flex">
                    <div className="icon flex-shrink-0">
                      <i>
                        <FontAwesomeIcon icon={faTemperatureHalf} />
                      </i>
                    </div>
                    <div>
                      <h4 className="title">
                        <span className="stretched-link">
                          Air Filter Replacement
                        </span>
                      </h4>
                      <p className="description pr-2">
                        Changing or cleaning air filters to maintain indoor air
                        quality and system efficiency
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-6 "
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <div className="service-item d-flex">
                    <div className="icon flex-shrink-0">
                      <i>
                        <FontAwesomeIcon icon={faTemperatureHalf} />
                      </i>
                    </div>
                    <div>
                      <h4 className="title">
                        <span className="stretched-link">
                          Thermostat Installation and Calibration
                        </span>
                      </h4>
                      <p className="description pr-2">
                        Setting up and ensuring accurate temperature control
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="stats" className="stats">
            <img src="assets/2.jpg" alt="" data-aos="fade-in" />
          </section>
          <section id="contact" className="contact">
            <div className="container section-title" data-aos="fade-up">
              <h2>Contact</h2>
              <p>Any questions or need a quote? Get in contact below.</p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
              <div className="row gy-4">
                <div className="col-lg-6">
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <div
                        className="info-item"
                        data-aos="fade"
                        data-aos-delay="400"
                      >
                        <i>
                          <FontAwesomeIcon icon={faEnvelope} />
                        </i>{" "}
                        <h3>Email Us</h3>
                        <p>info@dw-aircon.co.uk</p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div
                        className="info-item"
                        data-aos="fade"
                        data-aos-delay="500"
                      >
                        <i>
                          <FontAwesomeIcon icon={faClock} />
                        </i>{" "}
                        <h3>Opening Hours</h3>
                        <p>9:00AM - 6:00PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <form
                    className="php-email-form"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    name="dw-contact"
                    method="POST"
                    netlify="true"
                    netlify-honeypot="bot-field"
                  >
                    <div className="row gy-4">
                      <div className="col-md-6">
                        <input
                          type="text"
                          name="fullname"
                          className="form-control"
                          value={fullname}
                          onChange={(e) => {
                            setFullname(e.target.value);
                          }}  
                          placeholder="Name"
                          required
                        />
                      </div>

                      <div className="col-md-6 ">
                        <input
                          type="email"
                          className="form-control"
                          name="emailAdd"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}  
                          placeholder="Email Address"
                          required
                        />
                      </div>

                      <div className="col-md-12">
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          placeholder="Subject"
                          required
                        />
                      </div>

                      {/*  <div className="col-md-12">
                      <select
                        className="form-select"
                        aria-label="Default select"
                      >
                        <option selected>Quote</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div> */}

                      <div className="col-md-12">
                        <textarea
                          className="form-control"
                          name="message"
                          rows="6"
                          placeholder="Message"
                          required
                          value={message}
                          onChange={(e) => {
                            setMessage(e.target.value);
                          }}  

                        ></textarea>
                      </div>

                      <div className="col-md-12 text-center">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">
                          Your message has been sent. Thank you!
                        </div>

                        <button type="submit">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </Client>
      </HydrationProvider>
    </>
  );
}
