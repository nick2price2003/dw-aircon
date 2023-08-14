import Header from "@/components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFan,
  faWind,
  faFire,
  faTemperatureHalf,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="hero" class="hero">
          <img src="assets/hero.png" alt="" data-aos="fade-in" />
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2 data-aos="fade-up" data-aos-delay="100">
                  49 Years Experience Providing HVAC Solutions
                </h2>
                <p data-aos="fade-up" data-aos-delay="200">
                  Your Trusted Team for Air Conditioning and Heating Excellence
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="clients" class="clients">
          <div class="container" data-aos="fade-up">
            <div class="row align-items-xl-center gy-4">
              <div class="col-xl-3 col-md-3 col-6 client-logo">
                <img src="assets/register.png" class="img-fluid" alt="" />
              </div>
              <div class="col-xl-9 col-md-9 col-6 client-text">
                <h2>Ducimus rerum libero reprehenderit cumque</h2>
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
        <section id="about" class="about">
          <div class="container" data-aos="fade-up" data-aos-delay="100">
            <div class="row align-items-xl-center gy-5">
              <div class="col-xl-5 content">
                <h3>About Us</h3>
                <h2>Ducimus rerum libero reprehenderit cumque</h2>
                <p>
                  Ipsa sint sit. Quis ducimus tempore dolores impedit et dolor
                  cumque alias maxime. Enim reiciendis minus et rerum hic non.
                  Dicta quas cum quia maiores iure. Quidem nulla qui assumenda
                  incidunt voluptatem tempora deleniti soluta.
                </p>
              </div>

              <div class="col-xl-7">
                <div class="row gy-4 icon-boxes">
                  <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
                    <div class="icon-box">
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

                  <div class="col-md-6" data-aos="fade-up" data-aos-delay="300">
                    <div class="icon-box">
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

                  <div class="col-md-6" data-aos="fade-up" data-aos-delay="400">
                    <div class="icon-box">
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

                  <div class="col-md-6" data-aos="fade-up" data-aos-delay="500">
                    <div class="icon-box">
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
        <section id="services" className="services">

      <div class="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-6 " data-aos="fade-up" data-aos-delay="100">
            <div className="service-item d-flex">
              <div className="icon flex-shrink-0"><i class="bi bi-briefcase"></i></div>
              <div>
                <h4 className="title"><a href="services-details.html" className="stretched-link">Lorem Ipsum</a></h4>
                <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
              </div>
            </div>
          </div>
          

          <div className="col-lg-6 " data-aos="fade-up" data-aos-delay="200">
            <div className="service-item d-flex">
              <div className="icon flex-shrink-0"><i className="bi bi-card-checklist"></i></div>
              <div>
                <h4 className="title"><a href="services-details.html" className="stretched-link">Dolor Sitema</a></h4>
                <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 " data-aos="fade-up" data-aos-delay="300">
            <div className="service-item d-flex">
              <div className="icon flex-shrink-0"><i className="bi bi-bar-chart"></i></div>
              <div>
                <h4 className="title"><a href="services-details.html" className="stretched-link">Sed ut perspiciatis</a></h4>
                <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 " data-aos="fade-up" data-aos-delay="400">
            <div className="service-item d-flex">
              <div className="icon flex-shrink-0"><i class="bi bi-binoculars"></i></div>
              <div>
                <h4 class="title"><a href="services-details.html" class="stretched-link">Magni Dolores</a></h4>
                <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              </div>
            </div>
          </div>

          <div class="col-lg-6 " data-aos="fade-up" data-aos-delay="500">
            <div class="service-item d-flex">
              <div class="icon flex-shrink-0"><i class="bi bi-brightness-high"></i></div>
              <div>
                <h4 class="title"><a href="services-details.html" class="stretched-link">Nemo Enim</a></h4>
                <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
              </div>
            </div>
          </div>

          <div class="col-lg-6 " data-aos="fade-up" data-aos-delay="600">
            <div class="service-item d-flex">
              <div class="icon flex-shrink-0"><i class="bi bi-calendar4-week"></i></div>
              <div>
                <h4 class="title"><a href="services-details.html" class="stretched-link">Eiusmod Tempor</a></h4>
                <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
      </main>
    </>
  );
}
