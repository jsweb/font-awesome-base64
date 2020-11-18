# @jsweb/font-awesome-base64 ![NPM Package](https://github.com/jsweb/font-awesome-base64/workflows/NPM%20Package/badge.svg)

Font Awesome icons compiled with base64 embedded font to CSS instead of link to font files.

## Font Awesome Free 5.15.1

Only free icons are included and you can see them at Fontawesome icons index:

https://fontawesome.com/icons?d=gallery&s=brands,regular,solid&m=free

## About

This compilation uses original files from fontawesome package and a little custom build hack with LESS to replace `@font-face src url` settings and embed font with `data-uri`.

Only WOFF2 fonts are included to minify the compiled CSS at most as possible and because WOFF2 is supported by all modern major browsers.

Web projects are the target. Specially PWA with offline capabilities, caching the CSS icons lib easy.

IE compatibility is not a concern. For a compatibility reference see the link:

[Can I use - WOFF2](http://caniuse.com/#search=woff2)

## Install

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/@jsweb/font-awesome-base64" />
```

### NPM

`npm i -S @jsweb/font-awesome-base64`

### Yarn

`yarn add @jsweb/font-awesome-base64`

## Files

If you download the package using NPM or Yarn, you must use files as follows:

- `dist/fa-base.css`: Fontawesome base icon classes (~57 kB)
- `dist/fa-brands.css`: Web font for brand icons (~103 kB)
- `dist/fa-regular.css`: Web font for regular icons (~19 kB)
- `dist/fa-solid.css`: Web font for solid icons (~106 kB)
- `dist/fa-all.css`: All above (~340 kB)
