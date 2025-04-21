import Footer from './component_footer.js'
import CallUs from './component_call-us.js'

export default {
  components: {
    Footer,
    CallUs,
  },
  template: /*html*/ `
<nn-scroll-area nn-color="royal-purple">
  <section id="other-services">
    <section class="intro">
      <div class="container">
        <h1>Vital IT services for business</h1>
        <div class="row">
          <div class="column">
            <p>When business grow, their needs change. Unless you’re a tech aficionado, chances are you might not be up to speed on the latest developments in business technology. That’s where Dr Logic can help; we’ve done the research, so you don’t have to.</p>
            <p>We’ve been working with like-minded creative businesses for over 12 years, so we have first-hand experience about what works well for different organisations. Why not get in touch for some impartial advice?</p>
          </div>
        </div>
      </div>
      <div class="animation-intro">
        <div class="relative-box">
          <img class="head-mobile" :src="getZapp('img/drlogic/o-services/animation.png')" width="40" />
          <img class="e01" :src="getZapp('img/drlogic/o-services/intro-02.png')" width="40" />
          <img class="e02" :src="getZapp('img/drlogic/o-services/intro-03.png')" width="110" />
          <img class="e03" :src="getZapp('img/drlogic/o-services/intro-04.png')" width="70" />
          <img class="e04" :src="getZapp('img/drlogic/o-services/intro-05.png')" width="170" />
          <img class="e05" :src="getZapp('img/drlogic/o-services/intro-06.png')" width="220" />
          <img class="e06" :src="getZapp('img/drlogic/o-services/intro-07.png')" width="130" />
          <img class="e07" :src="getZapp('img/drlogic/o-services/intro-08.png')" width="70" />
          <img class="e08" :src="getZapp('img/drlogic/o-services/intro-09.png')" width="150" />
        </div>
      </div>
    </section>
    <section class="body">
      <div class="bend">
        <div class="container">
          <div class="copywrite"></div>
          <section class="strategy">
            <div class="row">
              <div class="col-sm-4">
                <img :src="getZapp('img/drlogic/o-services/meeting.png')" />
              </div>
              <div class="col-sm-8">
                <h3>Consulting without complexity</h3>
                <p>If the mere mention of consultancy fills you with dread, Dr Logic guarantees a pain-free consultation. Talk to us about your issue and your budget and we’ll look at your business with you and provide tailored advice on the right IT solutions. We specialise in working with SME’s in creative industries and have a raft of experience in many sectors including PR, Architects, Engineering, Finance, Design and Advertising. No nasty surprises, no unrealistic recommendations. Just common sense from the Doctor.</p>
              </div>
            </div>
          </section>
        </div>
        <section class="diagram">
          <div class="container">
            <h3>What can Dr Logic do for you?</h3>
            <p>Dr Logic can help your business, by offering impartial advice on a whole range of IT and support services. We work with trusted partners, but can also recommend and implement solutions from across the marketplace to meet your needs.</p>
            <div class="diagram-contain">
              <img class="logo" :src="getZapp('img/drlogic//o-services/diagram/logo.png')" />
              <img class="broadband" :src="getZapp('img/drlogic//o-services/diagram/broadband.png')" />
              <img class="devices" :src="getZapp('img/drlogic//o-services/diagram/devices.png')" />
              <img class="email" :src="getZapp('img/drlogic//o-services/diagram/email.png')" />
              <img class="hosting" :src="getZapp('img/drlogic//o-services/diagram/hosting.png')" />
              <img class="networking" :src="getZapp('img/drlogic//o-services/diagram/networking.png')" />
              <img class="software" :src="getZapp('img/drlogic//o-services/diagram/software.png')" />
              <img class="storage" :src="getZapp('img/drlogic//o-services/diagram/storage.png')" />
              <img class="wireless" :src="getZapp('img/drlogic//o-services/diagram/wireless.png')" />
              <img class="backup" :src="getZapp('img/drlogic//o-services/diagram/backup.png')" />
            </div>
          </div>
        </section>
      </div>
    </section>
    <CallUs color="olive" />
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