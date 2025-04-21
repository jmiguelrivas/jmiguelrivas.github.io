import Footer from './component_footer.js'
import CallUs from './component_call-us.js'

export default {
  components: {
    Footer,
    CallUs,
  },
  template: /*html*/ `
<nn-scroll-area nn-color="royal-purple">
  <section id="about-us">
    <section class="intro">
      <div class="container">
        <h1>Meet our team of Mac IT experts</h1>
        <div class="row">
          <div class="column">
            <p>In 1986, Dr Logic got his hands on his first Mac and so began a lifelong obsession with Apple. In 2003 he started Dr Logic and over time, gathered together like-minded techies who wanted to do cool stuff with IT.</p>
            <p>Dr Logic has built a reputation for helping creative companies with all things Mac-related. And for being that little bit different. We’re based in Clerkenwell and we support companies across London.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="body">
      <div class="bend">
        <div class="animation-intro"><img class="image-resposive base" :src="getZapp('img/drlogic/about-us/base.png')" /><img class="image-resposive manager" :src="getZapp('img/drlogic/about-us/manager.png')" /></div>
        <div class="container">
          <div class="copywrite">
            <h2>Did we mention highly qualified?</h2>
            <p>We’re members of the lovely Apple Consultants Network, a community of professional service providers specialising in both Apple and third-party solutions. Our senior staff are Apple & Casper certified technicians and Dr Logic is a member of the Service Desk Institute. Last but not least, we are also Meraki and Google Apps for Work certified partners.</p>
          </div>
          <template v-for="(person, personIndex) in team">
            <article class="people" :key="personIndex" :class="person.color"><img :src="getZapp('img/drlogic/us/random.jpg')" width="250" />
              <div class="description">
                <h3 v-html="person.name"></h3>
                <h4 v-html="person.title"></h4>
                <div class="main">
                  <p v-html="person.experience"></p><small>Joined Dr Logic in {{ person.joined }}</small>
                </div>
              </div>
              <div class="sub-description">
                <hr />
                <p>
                  <nn-icon glyph="desktop"><strong>First Device:&nbsp;</strong></nn-icon>{{ person.device }}
                </p>
                <p>
                  <nn-icon glyph="music"><strong>First Record:&nbsp;</strong></nn-icon>{{ person.record }}
                </p>
              </div>
            </article>
          </template>
        </div>
      </div>
    </section>
    <CallUs color="yellow" />
    <Footer />
  </section>
</nn-scroll-area>
`,
  data: () => ({
    team: [{
        color: 'red',
        name: 'Anna Yamashita',
        title: 'Founder',
        experience: 'Apple-Certified Support Professional',
        joined: '2003',
        device: 'Apple ][',
        record: 'Bobby Brown - Don’t be Cruel',
      },
      {
        color: 'cyan',
        name: 'Marco Pires',
        title: 'Senior Support Engineer',
        experience: 'Apple ACTC, Cisco CMNA, JAMF CCA, JAMF CMA.',
        joined: '2016',
        device: 'Amiga 500',
        record: 'Led Zeppelin - Led Zeppelin III',
      },
      {
        color: 'purple',
        name: 'Karina Gonzalez',
        title: 'Marketing & Operations Manager',
        experience: 'Contract Publishing & Marketing.',
        joined: '2015',
        device: 'Mac Classic',
        record: 'Duran Duran - Rio',
      },
      {
        color: 'blue',
        name: 'Tatiana Kosovo',
        title: 'Support Engineer',
        device: 'iMac DV Indigo',
        record: 'Do the bartman 7” Vinyl',
        experience: 'Apple-Certified Support Professional.',
        joined: '2012',
      },
      {
        color: 'green',
        name: 'Marcela Markaj',
        title: 'First Line Support',
        device: 'White iBook G3',
        record: "Oasis - (What's the Story) Morning Glory?",
        experience: 'Worked at Apple, Music & Mac, then technician for Higher Educations colleges.',
        joined: '2013',
      },
      {
        color: 'orange',
        name: 'Tiago Martes',
        title: 'Office Manager',
        device: 'Sony PSP',
        record: 'Madness - It’s Madness',
        experience: 'University of Sheffield History Graduate.',
        joined: '2016',
      },
    ],
  }),
  methods: {
    getZapp(path) {
      return `/assets/${path}`
    },
    cursorXY(e) {
      let dw =
        $(window).width() ||
        document.width ||
        document.documentElement.clientWidth ||
        document.innerWidth ||
        window.innerWidth ||
        screen.width

      let cy = e.clientY
      let fobj = ['#about-us img.base', '#about-us img.manager']
      let pointX = 0
      if (dw < 500) {
        pointX = 75
      }
      $(fobj[0]).css({
        left: pointX + cy * 0.009,
      }) $(fobj[1]).css({
        left: 200 + cy * -0.05,
      })
    },
  }, // mounted() { // window.addEventListener('mousemove', this.cursorXY) window.addEventListener('resize', this.cursorXY) // }, // beforeDestroy() { // window.removeEventListener('mousemove', this.cursorXY) window.removeEventListener('resize', this.cursorXY) // }, }