import { getPrefix } from '../../0_global/js/global.js'
import { compressText } from '../../0_global/js/nano/spirit.js'

const readme = `
<h2>Portfolio 2025</h2>

<blockquote>
  This project embraces open-source principles, multilingual integration, and the innovative use of CSS and writing systems to push the boundaries of web development.
</blockquote>

<h3>
  As Open Source as Possible
</h3>

<p>
  <em>Vue</em>, <em>React</em>, and <em>Angular</em> have been replaced with <em>Web Components</em>. Because of this, you will be able to see the full structure when inspecting elements on the website.
</p>

<h3>
No Preprocessor of Any Kind
</h3>

<p>
  Technologies like <em>Sass</em>, <em>Less</em>, <em>Jade/Pug</em>, and <em>HAML</em> are not used, as there is also no local server (<em>Webpack</em>). Instead, <em>CSS Variables</em> and <em>CSS Nesting</em> replace <em>Sass</em> and <em>Less</em> functionalities.
</p>

<h4>
Looping in Sass vs. CSS
</h4>

<p>
  Sass Loop Example:
</p>

<nn-code>${compressText(`
$css-width: (
  (1, 20),
  (1, 19),
  (1, 18),
  (1, 17),
  (1, 16),
);

@function fraction-2-class($fraction) {
  $numerator: nth($fraction, 1);
  $denominator: nth($fraction, 2);
  @return "n#{$numerator}d#{$denominator}";
}

nn-column {
  @each $value in $css-width {
    $class: fraction-2-class($value);
    $size: "#{math.div(nth($value, 1), nth($value, 2)) * 100}%";

    &.#{$class} {
      flex-basis: unquote($size);
      max-width: unquote($size);
    }
  }
}
`)}
</nn-code>

<p>
  <strong>
    CSS Output Example:
  </strong>
</p>

<nn-code>${compressText(`
nn-column.n1d20 {
  flex-basis: 5%;
  max-width: 5%;
}
nn-column.n1d19 {
  flex-basis: 5.263157895%;
  max-width: 5.263157895%;
}
nn-column.n1d18 {
  flex-basis: 5.555555556%;
  max-width: 5.555555556%;
}
nn-column.n1d17 {
  flex-basis: 5.882352941%;
  max-width: 5.882352941%;
}
nn-column.n1d16 {
  flex-basis: 6.25%;
  max-width: 6.25%;
}
`)}
</nn-code>

<p>
  Rewritten CSS Approach:
</p>

<nn-code>
${compressText(`
nn-pilar {
  --size: 0;
  flex-basis: var(--size);
  max-width: var(--size);

  /* Avoid extra calculations when the final value is an integer */
  &.n1d20 { --size: 5%; }
  &.n1d19 { --size: calc(1/19*100%); }
  &.n1d18 { --size: calc(1/18*100%); }
  &.n1d17 { --size: calc(1/17*100%); }
  &.n1d16 { --size: calc(1/16*100%); }
  &.n1d15 { --size: calc(1/15*100%); }
}
`)}
</nn-code>

<h3>
  Integration of Multiple Languages
</h3>

<p>
  This project introduces new dictionaries beyond just English for everyday components:
</p>

<nn-code>
${compressText(`
nn-container [en] -> nn-caja [es]
nn-row [en] -> nn-fila [es]
nn-column [en] -> nn-pilar [es]
`)}
</nn-code>

<p>
  Ideally, Esperanto could be included in the future since it was created to be an international language. However, many Esperanto words either resemble existing ones or are more complex to remember. For example:
</p>

<nn-code>
${compressText(`class [English] -> klasso [Esperanto]`)}
</nn-code>

<p>
  Languages using different alphabets, like <em>Russian: Cyrillic</em>, are avoided due to transliteration inconsistencies. Also, special marks such as:
</p>

<ul>
  <li>Acute (á)</li>
  <li>Grave (à)</li>
  <li>Dieresis (ä)</li>
  <li>Tilde (ñ)</li>
  <li>Circumflex (ê)</li>
  <li>Anti-circumflex/Caron/Háček (č)</li>
  <li>Cedilla (ç)</li>
  <li>Superior Ring (å)</li>
</ul>

<h3>
  The integration of new icons (Pending)
</h3>

<p>
  Something that I would like to see more is the used of complex writing systems (like Kanjis) as icons.
</p>

<p>
  For example instead of having a bird from <em>fontawesome</em> I would have something like <em>鸟</em> from chinese simplified (if you look close enough you are gonna be able to see the siloutte of the bird embedded in the character).
</p>

<div class="bird-icon-preview">鸟</div>

<p>
  but this is still just an idea it does require some training for people who are not familiar with these characters to see what they visually represent.
</p>

<p>
  This approach could allow for better adaptability to different regions while maintaining universal comprehension.
</p>
`

const trees = Array.from(
  { length: 200 },
  (_, i) => `<img src="./img/tree.svg" class="tree t${i + 1}"></img>`
).join('')

const banner = 'SPOKANE,WA'
  .split('')
  .map((l, i) => `<span class="letter letter-${i + 1}">${l}</span>`)
  .join('')

const template = `
  <mr-mountain class="mountain-01">
    <div class="banner">
      ${banner}
    </div>
    ${trees}
    <mr-palumba direction="left"></mr-palumba>
  </mr-mountain>

  <div class="buildings-02">
   <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
  
  <div class="buildings-01">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>

  
  <div class="content">
    <h1>
      Miguel Rivas
    </h1>
    <h2>
      Frontend Developer
    </h2>
    <p>Passionate frontend developer with a strong focus on building custom web applications mostly using Vue2 and Vue3 with deep knowledge about Web Components.</p>
    <p>With years of experience across various industries, I've contributed to UI libraries, optimized performance, and collaborated closely with cross functional teams to deliver seamless user experiences. My expertise includes modern frontend frameworks, component-driven development, and testing methodologies using tools like Storybook and Vitest.</p>
    <button class="btn show-dialog-btn sunglow" data-color="hsl(47deg, 100%, 57%)">Research behind this website</button>
  </div>

  <dialog>
    <nn-desplazador>
      <nn-caja padding="4">
        ${readme}
      </nn-caja>
    </nn-desplazador>

    <footer>
      <a class="btn shamrock" data-color="hsl(149deg, 61%, 51%)" href="https://github.com/jmiguelrivas/jmiguelrivas.github.io" target="_blank">Check this project in Github</a>
      <button autofocus class="btn sunglow hide-dialog-btn" data-color="hsl(47deg, 100%, 57%)">Close Dialog</button>
    </footer>
  </dialog>
`
const data = {
  attrs: [],
}

class Header extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = template

    const dialog = this.querySelector('dialog')
    const showButton = this.querySelector('.show-dialog-btn')
    const closeButton = this.querySelector('.hide-dialog-btn')

    showButton.addEventListener('click', () => {
      dialog.showModal()
    })
    closeButton.addEventListener('click', () => {
      dialog.close()
    })
  }
}

window.customElements.define(getPrefix('header'), Header)

export { data }
