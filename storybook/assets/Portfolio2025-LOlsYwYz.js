import{j as n,M as r}from"./index-D9NIEVmZ.js";import{useMDXComponents as l}from"./index-8T3f0AJ5.js";import"./iframe-CgdxMJxS.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function s(i){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Documentation/Portfolio 2025"}),`
`,n.jsx(e.h1,{id:"portfolio-2025",children:"Portfolio 2025"}),`
`,n.jsx(e.h2,{id:"experiments",children:"Experiments"}),`
`,n.jsx(e.p,{children:"This project aims to push the following boundaries:"}),`
`,n.jsx(e.h3,{id:"built-for-readability-and-exploration",children:"Built for Readability and Exploration"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Vue"}),", ",n.jsx(e.code,{children:"React"}),", and ",n.jsx(e.code,{children:"Angular"})," have been replaced with ",n.jsx(e.code,{children:"Web Components"}),". Because of this, you will be able to see the full structure when inspecting elements on the website."]}),`
`,n.jsx(e.h3,{id:"no-preprocessor-of-any-kind",children:"No preprocessor of any kind"}),`
`,n.jsxs(e.p,{children:["Technologies like ",n.jsx(e.code,{children:"Sass"}),", ",n.jsx(e.code,{children:"Less"}),", ",n.jsx(e.code,{children:"Jade/Pug"}),", and ",n.jsx(e.code,{children:"HAML"})," are not used, as there is also no local server (",n.jsx(e.code,{children:"Webpack"}),"). Instead, ",n.jsx(e.code,{children:"CSS Variables"})," and ",n.jsx(e.code,{children:"CSS Nesting"})," replace ",n.jsx(e.code,{children:"Sass"})," and ",n.jsx(e.code,{children:"Less"})," functionalities."]}),`
`,n.jsx(e.h4,{id:"looping-in-sass-vs-css",children:"Looping in Sass vs. CSS"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Sass Loop Example:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`$css-width: (
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
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"CSS Output Example:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`nn-column.n1d20 {
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
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Rewritten CSS Approach:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`nn-pilar {
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
`})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["At some point I would like to include ",n.jsx(e.strong,{children:"CSS custom functions"}),", ",n.jsx(e.strong,{children:"attrs()"})," and ",n.jsx(e.strong,{children:"mixins"})," but at this point they still on draft state."]}),`
`]}),`
`,n.jsx(e.h3,{id:"integration-of-multiple-languages",children:"Integration of Multiple Languages"}),`
`,n.jsx(e.p,{children:"This project introduces new dictionaries beyond just English for everyday components:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`nn-container [en] -> nn-caja [es]
nn-row [en] -> nn-fila [es]
nn-column [en] -> nn-pilar [es]
`})}),`
`,n.jsx(e.p,{children:"Ideally, Esperanto could be included in the future since it was created to be an international language. However, many Esperanto words either resemble existing ones or are more complex to remember. For example:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"class"})," [English] → ",n.jsx(e.code,{children:"klasso"})," [Esperanto]"]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Dictionaries Considered:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Portuguese"}),`
`,n.jsx(e.li,{children:"Galician"}),`
`,n.jsx(e.li,{children:"Catalan"}),`
`,n.jsx(e.li,{children:"Spanish"}),`
`,n.jsx(e.li,{children:"Italian"}),`
`,n.jsx(e.li,{children:"Esperanto"}),`
`,n.jsx(e.li,{children:"Romanian"}),`
`,n.jsx(e.li,{children:"French"}),`
`]}),`
`,n.jsxs(e.p,{children:["Languages using different alphabets, like ",n.jsx(e.code,{children:"Russian: Cyrillic"}),", are avoided due to transliteration inconsistencies. For example, the singer ",n.jsx(e.code,{children:"Жанна Фриске"})," appears on Spotify in multiple ways:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Жанна Фриске"}),`
`,n.jsx(e.li,{children:"Zhanna Friske"}),`
`,n.jsx(e.li,{children:"Jeanna Friske"}),`
`,n.jsx(e.li,{children:"Janna Friske"}),`
`]}),`
`,n.jsx(e.p,{children:"Additionally, special characters such as:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Acute (á)"}),`
`,n.jsx(e.li,{children:"Grave (à)"}),`
`,n.jsx(e.li,{children:"Dieresis (ä)"}),`
`,n.jsx(e.li,{children:"Tilde (ñ)"}),`
`,n.jsx(e.li,{children:"Circumflex (ê)"}),`
`,n.jsx(e.li,{children:"Anti-circumflex (ȭ)"}),`
`,n.jsx(e.li,{children:"Cedilla (ç)"}),`
`,n.jsx(e.li,{children:"Superior Ring (å)"}),`
`]}),`
`,n.jsx(e.p,{children:"are avoided, as removing them can change word meanings. Example:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Papá"})," [Father] → ",n.jsx(e.code,{children:"Papa"})," [Potato or Pope]"]}),`
`]}),`
`,n.jsx(e.h2,{id:"updates-20250418",children:"Updates (2025/04/18)"}),`
`,n.jsxs(e.p,{children:["I've added the first modular React app ",n.jsx(e.a,{href:"https://jmiguelrivas.github.io/calendar/calendar.html",rel:"nofollow",children:"Calendar App"}),". To maintain modularity, Babel now runs directly in the browser. While not ideal for performance, this approach keeps the setup isolated from the rest of the application, which doesn’t require Babel. It also allows the use of JSX syntax, making the code easier to read and understand on GitHub for other developers."]}),`
`,n.jsx(e.h2,{id:"updates-20250430",children:"Updates (2025/04/30)"}),`
`,n.jsx(e.p,{children:"Added storybook and migrated documentation to it."}),`
`,n.jsx(e.h2,{id:"updates-20250503",children:"Updates (2025/05/03)"}),`
`,n.jsx(e.p,{children:"Working in the integration of unit test and github actions to run tests every commit."})]})}function h(i={}){const{wrapper:e}={...l(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{h as default};
