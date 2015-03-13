![nu](public/images/nu.png)

Starter boilerplate for Gulp

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
