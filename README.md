NU
==

Starter boilerplate for new projects

__Includes:__
  * BrowserSync
  * CommonJS
  * Javascript
  * Javascript ES6
  * CSS
  * Stylus
  * HTML
  * Jade
  * Handlebars
  * Sprite generation
  * Image optimization
  * Semver tag
  * Locale

__Structure:__

````bash
nakedapp
├── README.md
├── package.json
├── .gitignore
├── LICENSE
├── gulpfile.js
├── public
│    ├─── images
│    │    └── icons.png
│    │    └── sprite.svg
│    ├─── app.js
│    ├─── index.html
│    └─── app.css
│── src
│    ├── audio
│    ├── data
│    ├── fonts
│    ├── images
│    │   └── icons
│    ├── scripts
│    │   ├── models
│    │   ├── shared
│    │   │   ├── comp
│    │   │   └── lib
│    │   ├── views
│    │   └── app.js
│    ├── styles
│    │   ├── shared
│    │   │   └── comp
│    │   │   └── spritesheets
│    │   └── views
│    └── templates
│        ├── comp
│        └── views
│        └── index.html
└── build
    ├── tasks
    └── config.json
````

## Javascript

#### Dependency management

All your files import path are relative to the `src` folder:
``` javascript
var myLib = require("scripts/shared/lib/myLib");
```

You can load your templates the same way you load the Javascript files:
``` javascript
var Tmpl = require("templates/views/layout.hbs");
```

#### ES6

All the ES6 features are avaliable using the [Babel](https://babeljs.io/) pre-compiler.

That means that you can import your files...
``` javascript
import * as myLib from "scripts/shared/lib/myLib";
```

...And export your methods using the ES6 syntax:
``` javascript
export function myMethod(x, y) {
  return x + y;
}
```

All the ES6 code will be converted to ES5 syntax and CJS pattern.

## Stylesheets

At the moment, this boilerplate only supports [Stylus](http://learnboost.github.io/stylus/) and CSS (as stylus support plain CSS).

The CSS entry point is the `src/styles/app/styl`, all your styles must be linked to this file:

#### Nib
You can import [Nib](http://nibstyl.us/) to use its features/mixins.

``` stylus
@import "nib"
```

#### Dependency management
All your files import path are relative to the `styles` folder:
> app.styl

``` stylus
@import "shared/reset.styl";
```
#### Plain CSS support
Stylus support the plain CSS syntax!

## Templates
You can use [Jade](http://jade-lang.com/), [Handlebars](http://handlebarsjs.com/), or regular HTML as templates, and import them in your scripts:

> Using Jade or Handlebars

``` jade
.layout
 h1 Hello World!
```

``` javascript
var tmpl = require("templates/views/layout.jade")
console.log(tmpl()); // <div class='layout'><h1>Hello World!</h1></div>
```

and yes, you can use the ES6 import syntax to load the templates:
``` javascript
import * as tmpl from "templates/views/layout.jade"
console.log(tmpl()); // <div class='layout'><h1>Hello World!</h1></div>
```

> Using HTML

``` html
<div class='layout'>
 <h1>Hello World!</h1>
</div>
```

``` javascript
var tmpl = require("templates/views/layout.html")
console.log(tmpl); // <div class='layout'><h1>Hello World!</h1></div>
```

## Spritesheet
All the `.png` files inside the `src/images/icons` folder will be assembled as one image at `public/images/icons.png`.

#### CSS
A `icons.styl` file will be generated at `src/styles/shared/icons.styl`, containing all the information about the icons.

> Loading an icon:

``` stylus
.my-icon
 sprite($icon_name)
```

## SVG spritesheet
All the `.svg` files inside the `src/images/icons` folder will be assembled as one SVG at `public/images/sprite.svg`.

#### CSS
A `sprite.styl` file will be generated at `src/styles/shared/spritesheets/sprite.styl`, containing all the information about the sprites.

## Semver
Every time you run `npm run build:<dev|prod>` a minor bump will be added to the version. If you want to have control of the bump, you can run:

`npm run bump:<major|patch|minor>`

Also, a html tag will be added on the top of the page with the project version and build time.
> It will be removed if you run the production build

## Setup

__Install dependencies:__

` npm install`

__Watch:__

` npm run watch`
  
  > Open http://localhost:3000

__Build:__

` npm run build:dev`

or 

` npm run build:prod`

__Config:__

You can change some config options at `build/config.json`
