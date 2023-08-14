import Header from '@/components/Header'

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
              <h2 data-aos="fade-up" data-aos-delay="100">49 Years Experience Providing HVAC Solutions</h2>
              <p data-aos="fade-up" data-aos-delay="200">Your Trusted Team for Air Conditioning and Heating Excellence</p>
            </div>
          </div>
        </div>
        </section>
        <section id="clients" className="clients">

      <div className="container-fluid" data-aos="fade-up">

        <div className="row gy-4">

          <div className="col-xl-2 col-md-3 col-6 client-logo">
            <img src="assets/register.png" class="img-fluid" alt="" />
          </div>

          <div className="col-xl-2 col-md-3 col-6 client-logo">
            <img src="assets/register.png" class="img-fluid" alt="" />
          </div>

          <div class="col-xl-2 col-md-3 col-6 client-logo">
            <img src="assets/register.png" class="img-fluid" alt="" />
          </div>
        </div>

      </div>

    </section>
      </main>
    </>
  )
}
