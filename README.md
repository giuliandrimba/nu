![nu](public/images/nu.png)

Starter boilerplate for new projects

__Includes:__
  * LiveReload
  * CommonJS
  * Javascript
  * Javascript ES6
  * CoffeeScript
  * Stylus
  * HTML
  * Jade
  * React/JSX
  * Sprite generation
  * Image optimization

__Setup:__

` make`

__Watch:__

` make w`
  
  > Open http://localhost:3000

__Build:__

` make b`

__Config:__

You can change some config options at `build/config.json`

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
