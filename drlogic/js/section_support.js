import Footer from './component_footer.js'
import CallUs from './component_call-us.js'

export default {
  components: {
    Footer,
    CallUs,
  },
  template: /*html*/ `
<nn-scroll-area nn-color="royal-purple">
  <section id="services">
    <section class="intro">
      <div class="container">
        <h1>Dedicated Mac IT Support for Businesses</h1>
        <p>We supply dedicated Mac IT support and with your account manager, we'll provide on-site support or training to keep your business running smoothly.</p>
      </div>
      <div class="animation-intro">
        <div class="relative-box">
          <img class="base" :src="getZapp('img/drlogic/services/services-01.png')" />
          <img class="front" :src="getZapp('img/drlogic/services/services-02.png')" />
          <img class="man-globe globe" :src="getZapp('img/drlogic/services/globe.png')" />
          <img class="woman-globe globe" :src="getZapp('img/drlogic/services/globe.png')" />
          <span class="dot" />
        </div>
      </div>
    </section>
    <section class="body">
      <div class="bend">
        <section id="contract">
          <div class="container">
            <div class="copywrite">
              <h2>How does it work?</h2>
              <p>By working with Dr Logic on a contract basis, we get to know your business and proactively manage your IT for you. You’ll have a dedicated account manager who will get to know your set-up and your team. They’ll make regular visits to your office to make sure everything is working as it should and to provide on-site support or training. Twice a year, we carry out client review meetings to discuss your IT set up and make recommendations on key areas you might want to consider upgrading.</p>
              <button class="btn btn-primary green" id="tips">What’s included?</button>
              <div class="highlight">
                <p>We charge a fixed monthly fee for each person in your company, which then gives you unlimited support 9am to 6pm, Monday to Friday. This covers all the user’s computers, iPhones, iPads, and includes market-leading anti-virus protection, documentation management and domain name records.</p>
              </div>
            </div>
          </div>
          <template v-for="(item, itemIndex) in products">
            <section class="service" :key="sec + itemIndex">
              <div class="container">
                <div class="row">
                  <div class="col-md-6 img">
                    <img :src="getZapp(['img/drlogic/',services, '/',item.img,'.png'].join(''))" />
                  </div>
                  <div class="col-md-6 text">
                    <h3>{{ item.title }}</h3>
                    <template v-for="(pa, paIndex) in item.body">
                      <p :key="paIndex">{{ pa }}</p>
                    </template>
                  </div>
                </div>
              </div>
            </section>
          </template>
          <section class="infogram">
            <article class="textDesktop">
              <div class="txt-box">
                <h3>{{ infogram[0].title }}</h3>
                <p>{{ infogram[0].body }}</p>
              </div>
            </article>
            <div class="container">
              <template v-for="(item, itemIndex) in infogram">
                <article :class="'sec'+itemIndex" :key="'sec'+itemIndex">
                  <div class="image-box"><span class="number" :class="'n'+itemIndex">
                      {{ itemIndex }}.</span>
                    <img :src="getZapp('img/drlogic/services/'+item.img+'.png')" />
                  </div>
                  <div class="txt-box">
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.body }}</p>
                  </div>
                </article>
              </template>
            </div>
          </section>
        </section>
      </div>
    </section>
    <CallUs color="orange" />
    <Footer />
  </section>
</nn-scroll-area>
`,
  data: () => ({
    products: [{
        title: "Dedicated Account Manager",
        img: "contract-service-01",
        body: [
          "Your account manager normally carries out your site visits and attends planning meetings. They’ll get to know you, your staff and your set up and you’ll have a single point of contact who senior personnel can liaise with.",
        ],
      },
      {
        title: "Support, monitoring & maintenance",
        img: "contract-service-02",
        body: [
          "We believe that being on site regularly is an essential part of managing your IT. We talk to your staff and get to hear about niggles that might not otherwise get raised. But, most day-to-day support issues can be resolved over the phone, or by remote session.",
          "We use remote software to monitor your computers and servers 24/7. This automatically alerts us if there are any issues, such as disk space, or harmful software is downloaded. To keep your systems optimal, we run software and operating system updates, check storage and networking equipment (hard drives, servers, routers) and make sure that backups are running.",
        ],
      },
      {
        title: "Planning",
        img: "contract-service-03",
        body: [
          "By working together, we’ll keep up to speed with your business plans. We can then help you anticipate what investment might be needed, new hardware or software, or staff training. We also support you with business continuity & disaster recovery planning.",
        ],
      },
      {
        title: "Client Portal",
        img: "contract-service-04",
        body: [
          "The Dr Logic portal gives an overview of all the support requests from your organisation: incidents, issues, sales, invoices etc. giving you a company-wide view of what’s happening, real-time. You’ll also be able to access IT Glue which we use to document your set-up: hardware, software, subscriptions and serial numbers. And finally, you can view monthly reports to see where we’ve spent our time on support.",
        ],
      },
    ],

    infogram: [{
        title: "Getting started",
        body: "We follow a three-step process to start working with new clients.",
        img: "start-contract",
      },
      {
        title: "Discovery",
        body: "We’ll look at your current IT setup, talk through your requirements and discuss whether we think anything needs to be fixed or improved.",
        img: "contract-info-01",
      },
      {
        title: "Foundation",
        body: "We work with you to fix any issues raised during discovery. We then Install remote monitoring software and ensure everything is running as it should.",
        img: "contract-info-02",
      },
      {
        title: "Go Live",
        body: "Once foundation is complete - we’re ready to go.",
        img: "contract-info-03",
        link: "Contact us to start",
      },
    ],
  }),
  methods: {
    getZapp(path) {
      return `/assets/${path}`
    },
  },
}