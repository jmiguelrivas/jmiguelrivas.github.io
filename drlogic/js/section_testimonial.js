import Footer from './component_footer.js'
import CallUs from './component_call-us.js'

export default {
  components: {
    Footer,
    CallUs,
  },
  template: /*html*/ `
<nn-scroll-area nn-color="royal-purple">
  <section id="testimonial">
    <section class="intro">
      <div class="container">
        <h1>People love our Mac support</h1>
        <p>We’re really lucky to be working with some amazing clients, some who joined us when they were just starting out. We work with Architects, PR companies, Fashion Designers, Landscape Designers, Marketing agencies and even a cookery school. Big or small, if you’ve decided you need better Mac IT support for your business, why not get in touch?</p>
        <div class="animation-intro">
          <div class="relative-box"><img class="image-resposive jumping" :src="getZapp('img/drlogic/testimonial/jumping.png')" /><img class="image-resposive hands" :src="getZapp('img/drlogic/testimonial/hands.png')" /></div>
        </div>
      </div>
    </section>
    <section class="body">
      <div class="bend">
        <div class="container">
          <div class="copywrite">
            <h2>Creative, Entrepreneurial Customers</h2>
            <p>Don’t just take our word for it, take a look at what our lovely clients have to say.</p>
            <p>You can also read our 5* reviews on the Apple Consultants Network.</p><a class="btn btn-primary cyan apple-reviews" href="#"><span>Reviews</span></a>
          </div>
          <template v-for="(story, storyIndex) in clientsStories">
            <article class="speech-ballon active" :class="[story.color, story.tail + '-tail']" :key="storyIndex">
              <div class="preview">
                <button class="open-pixel-modal">
                  <img class="logo" :src="getZapp(['img/drlogic/clients/', story.image, '.png'].join(''))" /></button>
              </div>
              <div class="pixel-modal">
                <button class="fa fa-times close-pixel-modal" type="button"></button>
                <div class="pixel-modal-body">
                  <img class="logo-min" :src="getZapp(['img/drlogic/clients/', story.image, '.png'].join(''))" />
                  <div class="fix-text">
                    <template v-for="(paragraph, paragraphIndex) in story.paragraphs">
                      <p :key="paragraphIndex">{{ paragraph }}</p>
                    </template>
                    <small>{{ story.ending }}</small>
                  </div>
                </div>
              </div>
            </article>
          </template>
        </div>
      </div>
    </section>
    <CallUs color="purple" />
    <Footer />
  </section>
</nn-scroll-area>
`,
  methods: {
    getZapp(path) {
      return `/assets/${path}`
    },
  },
  data: () => ({
    clientsStories: [{
        image: 'logo-06',
        tail: 'left',
        color: 'yellow',

        paragraphs: [
          'Insanity Artists was established in 2003 and has become the UKs largest live agency exclusively representing DJ and PA talent from the areas of music, fashion, television and radio. Their clients include: Shayne Ward, Sarah Harding, Gareth Gates & 5ive.',
          'At Insanity, we use Macs pretty much across the board to run our business. Our clients have high expectations and when you’re working internationally, you can’t afford to have email go down, or a laptop out of action – it could mean losing a vital booking – or worse a client.',
          'We’d had a support company on a contract before, but we weren’t getting what we needed, so we approached Dr Logic.',
          'From the beginning, it was a different approach. The team came in and took the time to really understand our set-up and where we were having issues. They got a support contract up and running really quickly and picked up on a few things we hadn’t thought of doing. Sounds simple, but it’s made a big difference to how our IT runs. Day-to-day, when there’s a problem – it just gets sorted.',
          'Someone’s on site regularly, so they tend to spot issues before they happen. And we know that as our business grows and we need to upgrade, Dr Logic will work with us.',
          'It’s better than my own Doctor!',
        ],
        ending: 'Matt Wynter, Insanity Artists',
      },
      {
        image: 'logo-07',
        tail: 'right',
        color: 'purple',

        paragraphs: [
          'Denton Corker Marshall is an Australian architectural practice, with four international offices and an outstanding portfolio of design-led, critically acclaimed projects.',
          'We have relied on Dr Logic since 2012 to provide IT support for our mixed Mac/PC network and remote office. We have been very pleased with their service, which extended on one memorable occasion to the small hours of the morning when everything went wrong with a critical deadline. A bit of IT magic saved the day when we needed it most.',
        ],
        ending: 'Stephen Quinlan, Managing Partner, Denton Corker Marshall',
      },
      {
        image: 'logo-09',
        tail: 'left',
        color: 'gray',

        paragraphs: [],
        ending: '',
      },
      {
        image: 'logo-10',
        tail: 'right',
        color: 'red',

        paragraphs: [],
        ending: '',
      },
      {
        image: 'logo-01',
        tail: 'left',
        color: 'cyan',

        paragraphs: [
          'I set up The Underground Cookery School in 2003 and about three months later started using Dr Logic.',
          'Dr Logic are always there when needed, respond quickly and get the job done.',
          'To us they’re the fifth emergency service, or even the older brother we never had!',
        ],
        ending: 'Matt Kemp. Founder, Underground Cookery School',
      },
      {
        image: 'marcus',
        tail: 'right',
        color: 'orange',

        paragraphs: [
          'Marcus Barnett has developed an international reputation for making gardens and landscapes for private and public clients at home and abroad. Established in 2004, they are one of the leading garden and landscape design practices in the UK and have won three Gold Medals at the RHS Chelsea Flower Show.',
          'We started working with Dr Logic back in 2009, when we approached them for some advice about moving from PC to Mac. From the beginning, we’ve always found the team easy to work with and they’ve got to know us and how we like to work. They have a first-rate understanding of Macs and have always given us expert advice when we have needed to upgrade our systems.',
          'Most recently, Dr Logic has helped us with putting together a comprehensive disaster recovery plan and delivering the solutions to ensure business continuity in the event of a major incident.',
          'We consider Dr Logic to be a vital partner in the running of our business.',
        ],
        ending: 'Marcus Barnett',
      },
      {
        image: 'logo-03',
        tail: 'left',
        color: 'lightgreen',

        paragraphs: [],
        ending: '',
      },
      {
        image: 'logo-04',
        tail: 'left',
        color: 'green',

        paragraphs: [],
        ending: '',
      },
      {
        image: 'logo-02',
        tail: 'right',
        color: 'blue',

        paragraphs: [],
        ending: '',
      },
      {
        image: 'logo-08',
        tail: 'left',
        color: 'black',

        paragraphs: [
          'Generation Safe is a niche award-winning international business specialising as Visioneers in behavioural and organisational cultural transformation.',
          'They work with large organisations where the financial, reputational or health and safety risks are high and the consequences of poor performance are potentially very serious. Their head of communications Mat Rumbelow explains that our customers often need to implement rapid organisational change in environments that are difficult, complex and political.',
          'We’ve always used Macs because we like how easy they are to use. Indeed our founder has been using Macs since the original Mac Classic was first launched in 1990. However it is not just their ease of use that inspires us. It is also their scalability and interactivity with other key business systems which allows us to be creative and focus on our business, solving our clients needs without the technology getting in the way. It is this unique combination of hardware and software as a holistic ecosystem that makes them perfect for growing international businesses such as ourselves.',
          'Back in 2013, we approached our local Apple store to help us to rethink our system architecture and mail server, as we wanted a new combination of simplicity and security. We also wanted to form a long term relationship with a IT service provider who really understood what service meant. They recommended Dr. Logic who since then have provided a fantastic service for us.',
          'Roman Marszalek and his team provide first class service with speed of response second to none. They really listened to our needs and helped interpret those into a series of technical solutions which provide us completely what we require in both mail, connectivity with a new dedicated leased line and building in security and ease of use from the ground up. More recently, we asked for their advice on how to set up a secure way to support workplace collaboration and file sharing across sites. Dr Logic has designed a solution for us, which is currently being implemented.',
          'We know that IT is pivotal to the success of our business; we can’t afford to have downtime. Having a specialist team on hand means we don’t have to worry if there are problems as we have excellent backup solutions in place when things go wrong.',
          'The team at Dr Logic and Roman especially have taken the time to understand our business and that relationship that really works for us. We cannot speak highly enough of the work they do.',
        ],
        ending: 'Generation Safe Limited',
      },
      {
        image: 'fortis',
        tail: 'right',
        color: 'lightblue',

        paragraphs: [
          'Fortis Pharma Group (includes, Novus Pharma Consulting and Fortis Pharma Communications) was established in 2012 and provides innovative business solutions and communications expertise for companies operating in global pharmaceutical, medical device and biotech industries.',
          'We started working with Dr Logic in 2013, when we needed help with setting up a new Mac mini server and getting our team set-up for remote working from home and abroad. We needed to upgrade our network to support this, which they organised for us. They also trained us on how to manage the server and access.',
          'Since then we’ve relied upon Dr Logic’s expertise to keep our IT running as it should. The team are always on hand to resolve issues and they recently helped us with an office move.',
        ],
        ending: 'Matt Stanton, Managing Partner',
      },
      {
        image: 'equities',
        tail: 'left',
        color: 'lavanda',

        paragraphs: [],
        ending: '',
      },
    ],
  }),
}