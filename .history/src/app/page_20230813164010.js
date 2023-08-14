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
          49 Years Experience Providing <br> HVAC Solutions
        </h2>
        <p data-aos="fade-up" data-aos-delay="100">
          Your Trusted Team for Air Conditioning and Heating Excellence
        </p>
      </div>
      <div class="col-lg-4">
        <div class="callback-box">
          <h3>Request a Callback</h3>
          <form action="submit_callback.php" method="post">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" required />

            <button type="submit">Submit</button>
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
                  Ipsa sint sit. Quis ducimus tempore dolores impedit et dolor
                  cumque alias maxime. Enim reiciendis minus et rerum hic non.
                  Dicta quas cum quia maiores iure. Quidem nulla qui assumenda
                  incidunt voluptatem tempora deleniti soluta.
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
                      <h3>Eius provident</h3>
                      <p>
                        Magni repellendus vel ullam hic officia accusantium ipsa
                        dolor omnis dolor voluptatem
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
                      </i>{" "}
                      <h3>Rerum aperiam</h3>
                      <p>
                        Autem saepe animi et aut aspernatur culpa facere. Rerum
                        saepe rerum voluptates quia
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
                      <h3>Veniam omnis</h3>
                      <p>
                        Omnis perferendis molestias culpa sed. Recusandae quas
                        possimus. Quod consequatur corrupti
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
                      <h3>Delares sapiente</h3>
                      <p>
                        Sint et dolor voluptas minus possimus nostrum.
                        Reiciendis commodi eligendi omnis quideme lorenda
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="callback" className="callback">
          <div className="container" data-aos="fade-up">
            <div className="row align-items-xl-center gy-4">
              <div className="col-12 callback-text">
                <h2>Request a Callback</h2>
                <form class="row ms-auto">
                  <div class="col">
                    <input class="form-control mr-sm-2" type="search" />
                  </div>
                  <div class="col-auto">
                    <button
                      class="btn btn-outline-light my-2 my-sm-0"
                      type="submit"
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="services">
          <div className="container section-title" data-aos="fade-up">
            <h2>Services</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
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
                  <div>
                    <h4 className="title">
                      <span className="stretched-link">Lorem Ipsum</span>
                    </h4>
                    <p className="description pr-2">
                      Voluptatum deleniti atque corrupti quos dolores et quas
                      molestias excepturi sint occaecati cupiditate non
                      provident
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
                  <div>
                    <h4 className="title">
                      <span className="stretched-link">Lorem Ipsum</span>
                    </h4>
                    <p className="description pr-2">
                      Voluptatum deleniti atque corrupti quos dolores et quas
                      molestias excepturi sint occaecati cupiditate non
                      provident
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
                  <div>
                    <h4 className="title">
                      <span className="stretched-link">Lorem Ipsum</span>
                    </h4>
                    <p className="description pr-2">
                      Voluptatum deleniti atque corrupti quos dolores et quas
                      molestias excepturi sint occaecati cupiditate non
                      provident
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
                  <div>
                    <h4 className="title">
                      <span className="stretched-link">Lorem Ipsum</span>
                    </h4>
                    <p className="description pr-2">
                      Voluptatum deleniti atque corrupti quos dolores et quas
                      molestias excepturi sint occaecati cupiditate non
                      provident
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
                  <div>
                    <h4 className="title">
                      <span className="stretched-link">Lorem Ipsum</span>
                    </h4>
                    <p className="description pr-2">
                      Voluptatum deleniti atque corrupti quos dolores et quas
                      molestias excepturi sint occaecati cupiditate non
                      provident
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
                  <div>
                    <h4 className="title">
                      <span className="stretched-link">Lorem Ipsum</span>
                    </h4>
                    <p className="description pr-2">
                      Voluptatum deleniti atque corrupti quos dolores et quas
                      molestias excepturi sint occaecati cupiditate non
                      provident
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="contact">
          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
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
                      <p>New York, NY 535022</p>
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
                {/* <form
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
                </form> */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
