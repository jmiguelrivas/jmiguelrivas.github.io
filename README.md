# How to Run

To run Brave while bypassing CORS restrictions:
```bash
brave-browser --args --user-data-dir="$HOME/brave-dev-data" --disable-web-security "file:///home/beemo/projects/miguel-rivas.github.io/2025/index.html"
```

## 2025

This project aims to push the following boundaries:

### As Open Source as Possible

`Vue`, `React`, and `Angular` have been replaced with `Web Components`. Because of this, you will be able to see the full structure when inspecting elements on the website.

### No Preprocessor of Any Kind

Technologies like `Sass`, `Less`, `Jade/Pug`, and `HAML` are not used, as there is also no local server (`Webpack`). Instead, `CSS Variables` and `CSS Nesting` replace `Sass` and `Less` functionalities.

#### Looping in Sass vs. CSS

**Sass Loop Example:**
```scss
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
```

**CSS Output Example:**
```css
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
```

**Rewritten CSS Approach:**
```css
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
```

### Integration of Multiple Languages

This project introduces new dictionaries beyond just English for everyday components:

```
nn-container [en] -> nn-caja [es]
nn-row [en] -> nn-fila [es]
nn-column [en] -> nn-pilar [es]
```

Ideally, Esperanto could be included in the future since it was created to be an international language. However, many Esperanto words either resemble existing ones or are more complex to remember. For example:
- `class` [English] -> `klasso` [Esperanto]

**Dictionaries Considered:**
- Portuguese
- Galician
- Catalan
- Spanish
- Italian
- Esperanto
- Romanian
- French

Languages using different alphabets, like `Russian: Cyrillic`, are avoided due to transliteration inconsistencies. For example, the singer `Жанна Фриске` appears on Spotify in multiple ways:
- Жанна Фриске
- Zhanna Friske
- Jeanna Friske
- Janna Friske

Additionally, special characters such as:
- Acute (á)
- Grave (à)
- Dieresis (ä)
- Tilde (ñ)
- Circumflex (ê)
- Anti-circumflex (ȭ)
- Cedilla (ç)
- Superior Ring (å)

are avoided, as removing them can change word meanings. Example:
- `Papá` [Father] -> `Papa` [Potato or Pope]

### The integration of new icons

Something that I would like to see more is the used of complex writing systems (like Kanjis) as icons.

For example instead of having a bird from `fontawesome` I would have something like `鸟` from chinese simplified (if you are close enough you are gonna be able to see the siloutte of the bird embedded in the character). but this is still just an idea it does require some training for people who are not familiar with these characters to see what they visually represent.

This approach could allow for better adaptability to different regions while maintaining universal comprehension.

---

This project embraces open-source principles, multilingual integration, and the innovative use of CSS and writing systems to push the boundaries of web development.