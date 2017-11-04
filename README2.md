## Login-flow

* This project is build from `creat-react-app` v 1.4.1.
* Project inspired by https://github.com/mxstbr/login-flow/. Some code is copied
from this project (see commit history). The code pasted in our project is
modified to be adapted with `creat-ract-app` v 1.4.1 (see commit history).
* ServiceWorker and AppCache are not used here, contrary to Login-flow.
* You could read https://github.com/mxstbr/login-flow/blob/master/README.md

## postcss.config.js


* As they say in https://github.com/postcss/postcss#webpack simply create a file
with content below doesn't work for postcss-import. Works with plubin
autoprefixer, but not with other. Works if we remove `ident: 'postcss'` (l.174).

* onImport: function (files) founded at https://github.com/mxstbr/login-flow/blob/master/makewebpackconfig.js


```javascript
'use strict';

const autoprefixer = require('autoprefixer');
module.exports = {
  plugins: [
      require('postcss-import')({ // Import all the css files...
              onImport: function (files) {
                  console.log(files);
                  files.forEach(this.addDependency); // ...and add dependecies from the main.css files to the other css files...
              }.bind(this) // ...so they get hot–reloaded when something changes...
      }),
      require('postcss-simple-vars')(), // ...then replace the variables...
      require('postcss-focus')(), // ...add a :focus to ever :hover...
      require('postcss-flexbugs-fixes'),
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9', // React doesn't support IE8 anyway
        ],
        flexbox: 'no-2009',
      }),
      require('postcss-reporter')({ // This plugin makes sure we get warnings in the console
              clearMessages: true
      }),
  ]
}
```
