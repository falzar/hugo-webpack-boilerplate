# hugo-webpack-boilerplate
> [Hugo](https://gohugo.io) and [Webpack](https://webpack.js.org/) boilerplate.

## Install
`npm install hugo-webpack-boilerplate`

## Usage
We all love [Hugo](https://gohugo.io), but it is cumbersome to use anything beyond simple HTML, CSS, and JavaScript. What about LESS/SASS, ES6, minification, tree-shaking, or asset revving? Sure, you can roll your own, but these are all things [Webpack](https://webpack.js.org/) was designed for.

Given Webpack typically takes a JavaScript file as entry point, but Hugo generates mostly HTML, it is quite complicated to come up with a useful workflow. This repository is an attempt to bind Hugo and Webpack together, giving Webpack full power over the files generated by Hugo. You can continue to use Hugo as you normally would, but enjoy the additional benefits of Webpack.

I initially planned to release this module as Hugo theme. However, this module does not contain any layout-related files, and merely binds Hugo and Webpack together. Therefore, I decided to convert it to a NPM module instead.

After installing, place the assets you want to process with Webpack (think LESS/SASS, ES6/JavaScript, images) in the `static-src/` folder (not `static/`). `static/` is only for resources that do not need any processing (think PDFs). If you are using a theme, Webpack will also look for assets in `themes/default/static-src`, so I recommend symlinking your current theme as `theme/default`.

The module exposes two commands you might find useful:
* `hugo-webpack` - proxies to `webpack`. Additional options are allowed.
* `hugo-webpack-server` - proxies to `webpack-dev-server`. Additional options are allowed.

In the scripts entry of your `package.json`, you can leverage the above commands as follows:
```json
"scripts": {
  "hugo"           : "hugo",
  "hugo:watch"     : "npm run hugo -- --watch",
  "webpack"        : "hugo-webpack -p",
  "webpack-server" : "hugo-webpack-server -d",

  "build" : "npm run hugo && npm run webpack",
  "watch" : "npm run hugo:watch & npm run webpack-server"
}
```

Over time, there will be live examples showing you how to use exactly use this repository. Until then, please take a look at the examples below.

### Example 1
This example considers a simple HTML file, a SASS stylesheet, image, and ES6 JavaScript file. The assets should all live under `static-src/`, so for example, the image should be located at `static-src/img/example.jpg`. Note the usage of `~` (tilde), which will make sure Webpack can find the assets.

Run `npm run build`, and Webpack will take all these assets, [`optimize-minimize`](https://webpack.js.org/guides/production-build/) them, and put them in the `public/` folder. Alternatively, you can run `npm run watch` to start the local development server.

#### Input
`layouts/index.html`
```html
<!doctype html>
<link rel="stylesheet" href="~scss/style.scss" />
<title>This is an example</title>
<img src="~img/example.jpg" />
<script src="~js/script.js"></script>
```

#### Output
`public/index.html`
```html
<!doctype html>
<link rel="stylesheet" href="/css/style.hash.css" />
<title>This is an example</title>
<img src="/img/example.hash.jpg" />
<script src="/js/script.hash.js"></script>
```

## FAQ
* Why is there no reference to `/js/bundle.js`?

Webpack will save any referenced JavaScript assets separately (under `/js/script.hash.js`), but due to the way Webpack works a `/js/bundle.js` will also be generated. This file is not referenced anywhere, and is useless. It is safe to remove this file from the publish directory if you wish.

* Why is there a `.tmp/` folder?

This is a side-effect of [postcss-easysprites](https://www.npmjs.com/package/postcss-easysprites). There is an outstanding [issue](https://github.com/glebmachine/postcss-easysprites/issues/10), but as of now, feel free to ignore this directory.

* I’m getting UnCSS errors, like `Could not load script: "file:///~js/script.js"`?

UnCSS attempts to load scripts from disk, which will not work if they are referenced by `~`. The error is however non-blocking, and the UnCSS output is still useful. Just note that any selectors dynamically added will not be in the resulting stylesheet.

* The watching task causes Webpack to continuously reload?

There is a [bug in watchpack](https://github.com/webpack/watchpack/issues/25) causing the watcher to reload the same files over and over until the files settle. Apart from being an inconvenience, it does not affect your bundles.

* Can I use configure or add custom Webpack loaders or plugins?

Right now, no, there is no way to do this. Feel free to submit an issue or PR if you’d like to see any additions.

## Changelog
See the [CHANGELOG](./CHANGELOG.md) for a list of changes.

## License
    The MIT License (MIT)

    Copyright (c) 2017 Mark van Seventer

    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
    the Software, and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
    FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
    COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
    IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.