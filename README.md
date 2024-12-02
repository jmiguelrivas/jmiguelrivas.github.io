# How to run

to run brave bypassing CORS restrictions:
```bash
brave-browser --args --user-data-dir="$HOME/brave-dev-data" --disable-web-security "file:///home/beemo/projects/miguel-rivas.github.io/2025/index.html"
```

## 2025

this project is trying to push the following boundaries

### As open source as the code can be

`Vue`, `React` and `Angular` has been replace with `Web Components`, because of this you are gonna be able to see the full structure when you inspect the elements in the website.

### No preprocesor of any kind
`Sass`, `Less`, `Jade/Pug`, `HAML` because there is also no local server (`Webpack`). `Sass` and `Less` are now just using `CSS Variables` and `CSS Nesting`.

loop before with `Sass`:
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
    $size: "#{math.div(nth($value, 1), nth($value, 2)) * 100}%)";

    &.#{$class} {
      flex-basis: unquote($size);
      max-width: unquote($size);
    }
  }
}
```

and the `CSS output` would be something like this:

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

now with `CSS` the loop was rethinked:

```css
nn-pilar {
  --size: 0;
  flex-basis: var(--size);
  max-width: var(--size);

  /* I tried to avoid extra calc if the final value is an integer */
  &.n1d20 { --size: 5%; }
  &.n1d19 { --size: calc(1/19*100%); }
  &.n1d18 { --size: calc(1/18*100%); }
  &.n1d17 { --size: calc(1/17*100%); }
  &.n1d16 { --size: calc(1/16*100%); }
  &.n1d15 { --size: calc(1/15*100%); }
```

### Integration of more languages in our every day

Now you are gonna be able to see the inclusion of new dictionaries not just english into the every day components:

```
nn-container [en] -> nn-caja [es]
nn-row [en] -> nn-fila [es]
nn-column [en] -> nn-pilar [es]
```

Ideally I would like to see more `Esperanto` in the future since it was created to be international, but at the moment I have found words in Esperanto to be either similar to what we have or more complicated to remember `class [en] -> klasso [eo]`

These are the dictionaries I'm considering:
- Portuguese
- Galician
- Catalan
- Spanish
- Italian
- Esperanto
- Romanina
- French

I'm trying to avoid languages that are attached to a different alphabets like `Russian:Cyrillic` since the transliteration could change according to the language that is making the translation. for example, you are gonna find the singer `Жанна Фриске` in Spotify the following ways:
- Жанна Фриске
- Zhanna Friske
- Jeanna Friske
- Janna Friske

Also, trying to avoid special characters in the naming, things like:
- Acute
- Grave
- Dieresis
- Tilde
- Circumflex
- Anti-circumflex
- Cedilla
- Superior Ring

At the moment that you remove one of these simbols you could change the meaning of the word. For Example `Papá` [Father] -> `Papa` [`Potato` or `Pope`]

I feel that some inspiration came from `Emojicode` were they are experimenting with using images to represent code. For example in order to have a keyword `new` to create a new element you would use 🆕 and now you don't need to worry about using `new` as a name for a variable. Ideally in the future I would like something like this but with character that were designed and implemented for every day development use.

I feel that it's pretty interesting how the are separating the writing language from the code and now people from all over the world they could explain the code in a different way. For example, you have a grid icon to represent and array. some people could say `array` others could say `grid` and others could go with `matrix` it would be adapted to the region where you are.

### The integration of new icons
something that I would like to see more is the used of complex writing systems (like Kanjis) as icons. For example instead of having a bird from `fontawesome` I would have something like `鸟` from chinese simplified (if you are close enough you are gonna be able to see the siloutte of the bird embedded in the character). but this is still just an idea it does require some training for people who are not familiar with these characters to see what they visually represent.