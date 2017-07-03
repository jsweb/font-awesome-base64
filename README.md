# font-awesome-base64

Font Awesome icons compiled with base64 embedded font to CSS instead of link to font files.

## About

This compilation uses the original LESS from font-awesome package and a little custom hack to replace `@font-face` settings and embed font with `data-uri`.

Only WOFF fonts are included to minify the compiled CSS at most as possible and because WOFF is basically OTF/TTF with metadata and compression supported by all major browsers.

IE compatibility is not a concern. For a compatibility reference see the link:

[Can I use - WOFF](http://caniuse.com/#search=woff)

## Install

### NPM

`npm i -S font-awesome-base64`

### Yarn

`yarn add font-awesome-base64`

### Snipacks

`snipacks add unpkg fa.css font-awesome-base64`

### Bower

`bower i -S font-awesome-base64`
