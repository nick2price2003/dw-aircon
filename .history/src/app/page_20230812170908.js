import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <main>
      <section id="hero" class="hero">

        <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in" />

        <div class="container">
          <div class="row">
            <div class="col-lg-10">
              <h2 data-aos="fade-up" data-aos-delay="100">Welcome to Our Website</h2>
              <p data-aos="fade-up" data-aos-delay="200">We are team of talented designers making websites with Bootstrap</p>
            </div>
          </div>
        </div>
        </div>

        </section>
      </main>
    </>
  )
}