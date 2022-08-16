# @jsweb/font-awesome-base64 ![NPM Package](https://github.com/jsweb/font-awesome-base64/workflows/NPM%20Package/badge.svg)

Font Awesome icons compiled with WOFF2 base64 embedded font to CSS instead of link to font files.

## Font Awesome Free

Only free icons are included and you can see them at Fontawesome icons index:

https://fontawesome.com/search?m=free&s=solid%2Cregular%2Cbrands

## About

This compilation uses the original files from the Font Awesome package and a little magic through a custom build using PostCSS to embed the font files in CSS as base64 strings.

Only WOFF2 fonts are included to minify the compiled CSS at most as possible, and because WOFF2 is supported by all modern major browsers.

Web projects are the target. Especially mobile web view apps and PWA with offline capabilities, caching the CSS icons lib easily.

IE compatibility is not a concern (it is dead, accept it). For a compatibility reference see the link:

[Can I use - WOFF2](http://caniuse.com/#search=woff2)

## Install

### NPM

`npm i -S @jsweb/font-awesome-base64`

### Yarn

`yarn add @jsweb/font-awesome-base64`

### PNPM

`pnpm add @jsweb/font-awesome-base64`

## Files

CSS compilations in this package:

- `fa-all.css`: Full lib (547 KB)
- `fa-base.css`: Font Awesome base classes (79 KB)
- `fa-brands.css`: Web font for brand icons (156 KB)
- `fa-regular.css`: Web font for regular icons (33 KB)
- `fa-solid.css`: Web font for solid icons (203 KB)

## Usage

You can just use the entire lib compiled in `fa-all.css`, it is the main file exported by the package.

If you are using a build tool for CSS compilation, just import the file in your CSS, like this:

```css
@import '@jsweb/font-awesome-base64/fa-all.css';
```

If you prefer to link the file from the CDN source, you can do it like this:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/@jsweb/font-awesome-base64/fa-all.css"
/>
```

If you don't need the entire lib or want to use any variant separately, you need to import/link the variant itself AND the `fa-base.css`.

Like this:

```css
@import '@jsweb/font-awesome-base64/fa-solid.css';
@import '@jsweb/font-awesome-base64/fa-base.css';
```

Or:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/@jsweb/font-awesome-base64/fa-solid.css"
/>
<link
  rel="stylesheet"
  href="https://unpkg.com/@jsweb/font-awesome-base64/fa-base.css"
/>
```

## Version

You can check the version of the Font Awesome package by looking into the comments at the beginning of the compiled files or just browsing the lib on CDN: https://unpkg.com/@jsweb/font-awesome-base64
