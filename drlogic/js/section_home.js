import Footer from './component_footer.js'
import CallUs from './component_call-us.js'
// import $ from "jquery";

export default {
  components: {
    Footer,
    CallUs,
  },
  template: `
<section id="home">
  <section class="intro home">
    <div class="copywrite">
      <h1>Mac IT support</h1>
      <p>We provide Mac IT support for nice companies who like to do things differently.</p>
      <p>Established in 2003, we’re passionate about all things Apple.</p>
      <p>We have a simple mission: to help our clients to do amazing things with IT.</p>
    </div>
    <img class="table-mobile" src="img/home/table-mobile.png" />
    <div class="animation-intro">
      <div class="office">
        <div class="table"></div>
        <img class="hand01 object back" src="img/home/hand-01.png" />
        <img class="hand02 object back" src="img/home/hand-02.png" />
        <img class="hand03 object front" src="img/home/hand-03.png" />
        <img class="hand04 object back" src="img/home/hand-04.png" />
        <img class="leg object front" src="img/home/leg.png" />
        <img class="guy object front" src="img/home/guy.png" />
        <img class="pc object" src="img/home/computer.png" />
        <img class="folder front object" src="img/home/folder.png" />
        <img class="pointer front object" src="img/home/pointer.png" />
        <img class="head object front" src="img/home/head.png" />
        <img class="head-02 object front" src="img/home/head-02.png" />
      </div>
    </div>
    <div class="lamp-area left">
      <div class="lamp">
        <div class="bulb"></div>
      </div>
    </div>
    <div class="lamp-area right">
      <div class="lamp">
        <div class="bulb"></div>
      </div>
    </div>
    <div class="wireframe"></div>
  </section>
  <section class="body">
    <div class="bend">
      <div class="container">
        <article>
          <div class="contain">
            <img src="img/home/body/it-support.png" />
            <h2>Mac IT support</h2>
            <p>We’ll work in partnership with you to become your own IT department, proactively helping you improve your IT as well as solving day-to-day issues.</p>
          </div>
          <a class="btn btn-primary blue-02" href="about-us.html">Meet our team</a>
        </article>
        <article>
          <div class="contain">
            <img src="img/home/body/it-consulting.png" />
            <h2>IT services for business</h2>
            <p>Dr Logic can help your business, by offering impartial advice on everything from phone systems, data backup and storage to email & web hosting, networking and high-speed broadband.</p>
          </div>
          <a class="btn btn-primary blue-02" href="#">Find out more</a>
        </article>
        <article>
          <div class="contain">
            <img src="img/home/body/it-services.png" />
            <h2>IT projects &amp; consulting</h2>
            <p>Whatever Mac IT issue your business is facing, we’ll work with you to find a realistic and affordable solution.</p>
          </div>
          <a class="btn btn-primary blue-02" href="contact-us.html">Contact Us</a>
        </article>
      </div>
    </div>
  </section>
  <CallUs color="olive" />
  <Footer />
</section>
`,
  methods: {
    // cursorXY(e) {
    // let cx = e.clientX;
    // let cy = e.clientY;
    // let fobj = ["#home .wireframe"];
    // let pointY = -50;
    // $(fobj[0]).css({
    // bottom: pointY + (cy + cx) * 0.01,
    // });
    // },
  },
  // mounted() {
  // window.addEventListener("mousemove", this.cursorXY);
  // window.addEventListener("resize", this.cursorXY);
  // },
  // beforeDestroy() {
  // window.removeEventListener("mousemove", this.cursorXY);
  // window.removeEventListener("resize", this.cursorXY);
  // },
}