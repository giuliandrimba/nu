![nu](public/images/nu.png)

Starter boilerplate for new projects

__Includes:__
  * LiveReload
  * CommonJS
  * Javascript
  * Javascript ES6
  * CoffeeScript
  * CSS
  * Stylus
  * HTML
  * Jade
  * React/JSX
  * Sprite generation
  * Image optimization

__Structure:__

````bash
nakedapp
├── README.md
├── package.json
├── .gitignore
├── Makefile
├── LICENSE
├── public
│    ├─── images
│    │    └── icons.png
│    ├─── app.js
│    ├─── index.html
│    └─── app.css
│── src
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
│    │   └── views
│    └── templates
│    │   ├── comp
│        └── views
└── build
    ├── tasks
    │   ├── browserify.js
    │   ├── build.js
    │   ├── clean.js
    │   ├── images.js
    │   ├── server.js
    │   ├── sprites.js
    │   ├── styles.js
    │   └── watch.js
    ├── config.json
    └── gulpfile.json
````

## Javascript

You can use coffeescript, ES6 and React/JSX in the same project.

#### Dependency management

All your files import path are relative to the `src` folder:
``` javascript
var myLib = require("scripts/shared/lib/myLib");
```

You can load your templates the same way you load the Javascript files:
``` javascript
var Tmpl = require("templates/views/layout.jade");
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

#### React/JSX

Yes, you can write React HTML methods using JSX too:
``` javascript
export default React.createClass({
  render(): any {
    return <div>
      Yay!
    </div>;
  }
});
```

You can even mix all these features and have some files written in coffeescript, es6 and es5 syntax... what a mess!

## Stylesheets

At the moment, this boilerplate only supports [Stylus](http://learnboost.github.io/stylus/) and CSS (as stylus support plain CSS).

The CSS entry point is the `src/styles/app/styl`, all your styles must be linked to this file:

#### Dependency management
All your files import path are relative to the `styles` folder:
> app.styl

``` stylus
@import "shared/reset.styl";
```
#### Plain CSS support
Stylus support the plain CSS syntax!

## Templates
You can use [Jade](http://jade-lang.com/) or regular HTML as templates, and import them in your scripts:

> Using Jade

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
A `sprites.styl` file will be generated at `src/styles/shared/sprites.styl`, containing all the information about the icons.

> Loading an icon:

``` stylus
.my-icon
 sprite($icon_name)
```

## Setup

__Install dependencies:__

` make`

__Watch:__

` make w`
  
  > Open http://localhost:3000

__Build:__

` make b`

__Config:__

You can change some config options at `build/config.json`
