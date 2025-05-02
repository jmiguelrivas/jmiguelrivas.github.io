export default {
  template: /*html*/ `
<section class="call-us" :class="color">
  <div class="container">
    <nn-fila break="md">
      <nn-pilar size="50%">
        <h2>Need some Mac help?</h2>
        <p>Please drop us a line or pick up the phone and invite us round for a coffee.</p>
        <p>We’re always happy to chat.</p>
        <a class="btn btn-default white" href="#">Contact Us</a>
        <small>or Get in Touch With Us<a class="phone" href="#">020 3642 6540</a></small>
      </nn-pilar>
      <nn-pilar size="50%">
        <img class="preview" src="img/mac-help.png" />
      </nn-pilar>
    </nn-fila>
  </div>
</section>
`,
  props: {
    color: {
      type: String,
      default: '',
    },
  },
}