export default {
  template: /*html*/ `
<footer>
  <div class="social-networks">
    <nn-icon glyph="twitter" />
    <nn-icon glyph="facebook" />
    <nn-icon glyph="linkedin" />
  </div>
  <div class="bend">
    <address>
      <div class="container">
        <a class="mail" href="#">support@drlogic.com</a>
        <a class="phone" href="#">020 3642 6540</a>
        <p>Exmouth House 3-11 Pine Street London EC1R 0JH</p>
        <hr />
        <div class="lenker">
          <img class="image-resposive logo exponentiale" :src="getZapp('img/drlogic/logos/footer/exponentiale.png')" />
          <img class="image-resposive logo apple" :src="getZapp('img/drlogic/logos/footer/apple.png')" />
          <img class="image-resposive logo google" :src="getZapp('img/drlogic/logos/footer/google.png')" />
          <img class="image-resposive logo casper" :src="getZapp('img/drlogic/logos/footer/casper.png')" />
          <img class="image-resposive logo meraki" :src="getZapp('img/drlogic/logos/footer/meraki.png')" />
        </div>
        <hr />
        <small>© Copyright 2016 Dr Logic. All rights reserved.</small>
        <small>Dr Logic is a registered trademark of Doctor Logic Ltd.</small>
        <small>Registered in England and Wales. Company no. 4947299. VAT no. 848448189.</small>
        <a class="terms" href="#">
          <p>Terms &amp; Conditions&nbsp;</p>
          <nn-icon glyph="book" />
        </a>
      </div>
    </address>
  </div>
</footer>
`,
  methods: {
    getZapp(path) {
      return `/assets/${path}`
    },
  },
}