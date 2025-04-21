import Footer from './component_footer.js'

export default {
  components: {
    Footer,
  },
  template: /*html*/ `
<nn-scroll-area nn-color="royal-purple">
  <section id="contact">
    <section class="intro">
      <div class="container">
        <h1>Get in touch for Mac support</h1>
        <div class="row">
          <div class="col-md-6">
            <p>There’s no such thing as a typical client, so we don’t offer a one-size-fits-all IT solution. Much of what we do has evolved around the needs of our clients and by getting to know how they like to work with us.</p>
          </div>
          <div class="col-md-6">
            <p>To find out how we can help you improve the way your business operates and to take the aches and pains out of IT support, please drop Dr Logic a line or pick up the phone.</p>
          </div>
        </div>
      </div>
      <div class="animation-intro">
        <img class="plane p01" :src="getZapp('img/drlogic/contact/plane1.png')" width="100" />
        <img class="plane p02" :src="getZapp('img/drlogic/contact/plane2.png')" width="100" />
        <img class="plane p03" :src="getZapp('img/drlogic/contact/plane3.png')" width="100" />
        <img class="plane p04" :src="getZapp('img/drlogic/contact/plane4.png')" width="100" />
        <img class="plane p05" :src="getZapp('img/drlogic/contact/plane5.png')" width="100" />
        <img class="plane p06" :src="getZapp('img/drlogic/contact/plane6.png')" width="100" />
      </div>
    </section>
    <section class="body" id="main">
      <div class="bend">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <address>
                <p>
                  <a class="smooth phone" href="#">
                    <span>020 3642 6540</span>
                    <img :src="getZapp('img/drlogic/contact/phone.png')" />
                  </a>
                </p>
                <p>
                  <a class="smooth mail" href="#">
                    <img :src="getZapp('img/drlogic/contact/mail.png')" />
                    <span>hello@drlogic.com</span>
                  </a>
                </p>
                <p>
                  <a class="smooth" href="#">
                    <img :src="getZapp('img/drlogic/contact/sign.png')" />
                    <strong>London</strong>
                    <small>Exmouth House, 3-11 Pine Street London EC1R 0JH</small>
                  </a>
                </p>
              </address>
            </div>
            <div class="col-md-6">
              <form data-toggle="validator" role="form">
                <legend>Send us a message</legend>
                <div class="form-group">
                  <nn-icon glyph="user" />
                  <input class="form-control" type="text" placeholder="Full name*" required="required" data-error="Fill this field" />
                </div>
                <div class="form-group">
                  <nn-icon glyph="building-o" />
                  <input class="form-control" type="text" placeholder="Company Name*" required="required" data-error="Fill this field" />
                </div>
                <div class="form-group">
                  <nn-icon glyph="envelope" />
                  <input class="form-control" type="email" placeholder="Email Address*" required="required" data-error="Fill this field" />
                </div>
                <div class="form-group">
                  <nn-icon glyph="phone" />
                  <input class="form-control" type="tel" placeholder="Phone Number" data-error="Fill this field" />
                </div>
                <div class="form-group txt-area">
                  <nn-icon glyph="pencil" />
                  <textarea class="form-control" placeholder="Your Message*" required="required" data-error="Fill this field" />
                </div>
                <button class="btn btn-primary orange" type="Submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="location">
      <h2>Where to find us</h2>
      <section id="map">
        <aside class="overlay">
          <img :src="getZapp('img/drlogic/map-logo.png')" width="60" />
          <br />
          <span class="point" />
        </aside>
      </section>
    </section>
    <Footer />
  </section>
</nn-scroll-area>
`,
  methods: {
    getZapp(path) {
      return `/assets/${path}`
    },
  },
}