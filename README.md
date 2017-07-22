# font-awesome-base64

Font Awesome icons compiled with base64 embedded font to CSS instead of link to font files.

## About

This compilation uses original LESS from font-awesome package and a little custom hack to replace `@font-face` settings and embed font with `data-uri`.

Only WOFF fonts are included to minify the compiled CSS at most as possible and because WOFF is basically OTF/TTF with metadata and compression supported by all major browsers.

IE compatibility is not a concern. For a compatibility reference see the link:

[Can I use - WOFF](http://caniuse.com/#search=woff)

## Install

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/font-awesome-base64"/>
```

### NPM

`npm i -S font-awesome-base64`

### Yarn

`yarn add font-awesome-base64`

### Snipacks

`snipacks add unpkg fa.css font-awesome-base64`

## Files

If you download the package using NPM or Yarn, you need to use `index.css` file.

It also includes an `index.json` file containing a list of all icons available.
