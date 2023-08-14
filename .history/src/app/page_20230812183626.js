import Header from "@/components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFan,
  faWind,
  faAnchor,
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
                      <FontAwesomeIcon
        icon={faFan}
      />
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
                      <FontAwesomeIcon
        icon={faWind}
      />
                      </i>                      <h3>Rerum aperiam</h3>
                      <p>
                        Autem saepe animi et aut aspernatur culpa facere. Rerum
                        saepe rerum voluptates quia
                      </p>
                    </div>
                  </div>

                  <div class="col-md-6" data-aos="fade-up" data-aos-delay="400">
                    <div class="icon-box">
                    <i>
                      <FontAwesomeIcon
        icon={faFire}
      />
                      </i>                      <h3>Veniam omnis</h3>
                      <p>
                        Omnis perferendis molestias culpa sed. Recusandae quas
                        possimus. Quod consequatur corrupti
                      </p>
                    </div>
                  </div>

                  <div class="col-md-6" data-aos="fade-up" data-aos-delay="500">
                    <div class="icon-box">
                      <i class="bi bi-graph-up-arrow"></i>
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
      </main>
    </>
  );
}
