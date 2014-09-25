nu
==

Starter boilerplate for Gulp

__Includes:__
  * LiveReload
  * Browserify
  * PullDown
  * CoffeeScript
  * Stylus
  * Jade

__Setup:__

` make s`

__Watch:__

` make s`

__Build:__

` make b`

__Install client-side libs:__
  > It uses PullDown to download the libs from CDNJS.

`make i l jquery`

__Structure:__

````bash
nakedapp
├── README.md
├── package.json
├── Makefile
├── LICENSE
├── public
│   ├── img
│   ├── scripts
│   ├───├── app.js
│       └── vendors.js
│── src
│    ├── app
│    │   ├── app.coffee
│    │   ├── app.coffee
│    │   ├── lib
│    │   ├── models
│    │   └── views
│    ├── styles
│    │   └── app.styl
│    └── templates
│        └── app.jade
└── build
    ├── tasks
    │   ├── browserify.js
    │   ├── clean.js
    │   ├── images.js
    │   ├── scripts.js
    │   ├── server.js
    │   ├── styles.js
    │   └── watch.js
    ├── util
    │   ├── bundleLogger.js
    │   └── handleErrors.js
    ├── config.json
    └── gulpfile.json
````

