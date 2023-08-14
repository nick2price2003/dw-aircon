import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <main>
      <section id="hero" class="hero">

        <img src="assets/hero.png" alt="" data-aos="fade-in" />

        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <h2 data-aos="fade-up" data-aos-delay="100">49 Years Experience Providing HVAC Solutions</h2>
              <p data-aos="fade-up" data-aos-delay="200">Your Trusted Team for Air Conditioning and Heating Excellence</p>
            </div>
          </div>
        </div>
        </section>
        <section id="clients" class="clients">

      <div class="container-fluid" data-aos="fade-up">

        <div class="row gy-4">

          <div class="col-xl-2 col-md-3 col-6 client-logo">
            <img src="assets/img/clients/client-1.png" class="img-fluid" alt="">
          </div>

          <div class="col-xl-2 col-md-3 col-6 client-logo">
            <img src="assets/img/clients/client-2.png" class="img-fluid" alt="">
          </div><!-- End Client Item -->

          <div class="col-xl-2 col-md-3 col-6 client-logo">
            <img src="assets/img/clients/client-3.png" class="img-fluid" alt="">
          </div><!-- End Client Item -->

          <div class="col-xl-2 col-md-3 col-6 client-logo">
            <img src="assets/img/clients/client-4.png" class="img-fluid" alt="">
          </div><!-- End Client Item -->

          <div class="col-xl-2 col-md-3 col-6 client-logo">
            <img src="assets/img/clients/client-5.png" class="img-fluid" alt="">
          </div><!-- End Client Item -->

          <div class="col-xl-2 col-md-3 col-6 client-logo">
            <img src="assets/img/clients/client-6.png" class="img-fluid" alt="">
          </div><!-- End Client Item -->

        </div>

      </div>

    </section>
      </main>
    </>
  )
}
