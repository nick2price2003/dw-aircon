"use client";
import React, { useEffect } from "react";
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
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <main>
        <section id="hero" class="hero">
          <img src="assets/hero.png" alt="" />
          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <h2 data-aos="fade-up" data-aos-delay="60">
                  49 Years Experience Providing <br /> HVAC Solutions
                </h2>
                <p data-aos="fade-up" data-aos-delay="100">
                  Your Trusted Team for Air Conditioning and Heating Excellence
                </p>
              </div>
              <div class="col-lg-4">
                <div class="callback-box bg-light p-4">
                  <h3 class="mb-3">Request a Callback</h3>
                  <form action="submit_callback.php" method="post">
                      <label for="name" class="form-label mb-3">
                        Name:
                      </label>
                      <input
                        type="text"
                        class="form-control mb-3"
                        id="name"
                        name="name"
                        required
                      />

                    <div class="mb-3">
                      <label for="phone" class="form-label">
                        Phone Number:
                      </label>
                      <input
                        type="tel"
                        class="form-control"
                        id="phone"
                        name="phone"
                        required
                      />
                    </div>

                    <button type="submit" class="btn btn-primary btn-submit">
                      Submit
                    </button>
                  </form>
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
                  Being an F Gas Register Certified Engineer signifies top-tier
                  proficiency in refrigeration, air conditioning, and heat pump
                  systems. This credential reflects safety commitment, technical
                  excellence, and eco-friendly practices. Clients benefit from
                  updated expertise and adherence to industry standards,
                  ensuring efficient, environmentally-conscious HVAC solutions.
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
                  every project we undertake. As a distinguished F Gas Register
                  Certified Engineer, we have honed our expertise over the
                  decades, ensuring that each endeavor is marked by precision
                  and innovation. Recognizing the individuality of each
                  property, we approach every challenge with a dedication to
                  tailored solutions, a trait that sets us apart. Our
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
                        Our unwavering commitment to guaranteed quality ensures
                        exceptional results & client satisfaction every time.
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
                        Benefit from our accommodating and flexible appointment
                        times for your convenience.
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
                  <div class="icon flex-shrink-0">
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
                <div class="icon flex-shrink-0">
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
                <div class="icon flex-shrink-0">
                    <i>
                      <FontAwesomeIcon icon={faTemperatureHalf} />
                    </i>
                  </div>
                  <div>
                    <h4 className="title">
                      <span className="stretched-link">Emergency Repairs</span>
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
                <div class="icon flex-shrink-0">
                    <i>
                      <FontAwesomeIcon icon={faTemperatureHalf} />
                    </i>
                  </div>
                  <div>
                    <h4 className="title">
                      <span className="stretched-link">Consultations</span>
                    </h4>
                    <p className="description pr-2">
                      Advising clients on the best heating and cooling solutions
                      based on their needs and budget
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
                <div class="icon flex-shrink-0">
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
                <div class="icon flex-shrink-0">
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
        <section id="stats" class="stats">
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
                      data-aos-delay="200"
                    >
                      <i>
                        <FontAwesomeIcon icon={faLocationDot} />
                      </i>{" "}
                      <h3>Address</h3>
                      <p>A108 Adam Street</p>
                      <p>London, N2 4SS</p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div
                      className="info-item"
                      data-aos="fade"
                      data-aos-delay="300"
                    >
                      <i>
                        <FontAwesomeIcon icon={faPhone} />
                      </i>{" "}
                      <h3>Call Us</h3>
                      <p>+1 5589 55488 55</p>
                      <p>+1 6678 254445 41</p>
                    </div>
                  </div>

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
                      <p>info@example.com</p>
                      <p>contact@example.com</p>
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
                      <h3>Open Hours</h3>
                      <p>Monday - Friday</p>
                      <p>9:00AM - 05:00PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <form
                  action="forms/contact.php"
                  method="post"
                  className="php-email-form"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        required
                      />
                    </div>

                    <div className="col-md-6 ">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
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

                    <div className="col-md-12">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Quote</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>

                    <div className="col-md-12">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="6"
                        placeholder="Message"
                        required
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
    </>
  );
}
