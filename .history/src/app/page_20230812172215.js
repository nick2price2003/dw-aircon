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
            <div class="col-lg-10">
              <h2 data-aos="fade-up" data-aos-delay="100">49 Years Experience Providing HVAC Solutions</h2>
              <p data-aos="fade-up" data-aos-delay="200">We are team of talented designers making websites with Bootstrap</p>
            </div>
          </div>
        </div>

        </section>
      </main>
    </>
  )
}
