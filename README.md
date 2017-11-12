# Devoff
* This project is a project for a scholar course.
* The goald is to start the development of a little app in React and Redux.

# Implementation

* As in my internship, I havn't reinventing the wheel, so I've started from a
template.
* I wish use JHipster, but actually the development is in alpha.

## create-redux-app
* This application is generated thanks to the npm package `create-redux-app`,
advise in the official documentation
(https://reactjs.org/docs/installation.html)
* Please see file README.md (official README generated by `create-redux-app`)


## Login-flow and Saga-login-flow templates
* This project is build from `creat-react-app` v 1.4.1.
* Project is inspired by https://github.com/mxstbr/login-flow/ (see the branch
    redux-thunx), then is inspired from
    https://react.rocks/example/saga-login-flow. Some code is copied
from projects (see commit history). The code pasted in our project is
modified to be adapted with `creat-ract-app` v 1.4.1 (see commit history).
* ServiceWorker and AppCache are not used here, contrary to Login-flow.
* You could read https://github.com/mxstbr/login-flow/blob/master/README.md

### Update of the template
* To use this template with current `create-react-app`, I've updated the code.
It was a little bit hard. React Router 4 is a complete rewrite. The most
most difficult was to find a solution to manage the authentification (see
commit history). Also, include postcss into code generated by `create-react-app`
was a little bit tricky (see section below).

### postcss.config.js
* As they say in https://github.com/postcss/postcss#webpack simply create a file
with content below doesn't work for postcss-import. Works with plubin
autoprefixer, but not with other. Works if we remove `ident: 'postcss'` (l.174).

* onImport: function (files) founded at
    https://github.com/mxstbr/login-flow/blob/master/makewebpackconfig.js
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
## Redux-saga vs Redux-thunx
* I use redux-saga even if:
    * redux-saga it's less downloaded than;
        redux-thunx (635,982 vs 2,286,269 downloads in the last month)
    * redux-thunx is explained on the official redux documentation
        (https://redux.js.org/docs/advanced/AsyncActions.html)

* Advantages to use redux-saga:
    * More updated (maybe hundreds commits the last year, while the last commit
        of redux-thunks was on juanuary 2017).
    * « Contrary to redux thunk, you don't end up in callback hell, you can test
        your asynchronous flows easily and your actions stay pure. »: =>
        Maybe redux-saga is better to understand how react and redux work for a
        newbie because the code isn't mix.
    * On https://react.rocks,
        (saga-login-flow](https://react.rocks/example/saga-login-flow)
        is pined as « Well Tested », contrary to
        [login-flow](https://react.rocks/example/login-flow)

## TypeScript vs Flow
I've hesitated between TypeScript and Flow:
* Flow could be added very simply and Facebook use React + Flow + flux.
* TypeScript needs adaptation of the code, contratry to flow.
* TypeScript is more popular (actually, no trend record at
https://insights.stackoverflow.com/trends contrary to TypeScript).
* Flow have less features (https://github.com/niieani/typescript-vs-flowtype)

## Create-react-app typescript
* Microsoft have edited a create-react-app script bundle with TypeScript.
See https://github.com/wmonk/create-react-app-typescript.
* This script is actually maintained at
    https://github.com/wmonk/create-react-app-typescript. This script is
up-to-date with the official
https://github.com/facebookincubator/create-react-app, but the typescript
version is not the last one (from september, v 2.5.3)
* There is also https://github.com/lwd-technology/react-app-rewire-typescript
    but he cannot integrate ts-jest.
* Actually, there is a pull request to add TypeScript in the official
    `create-react-app`
    (https://github.com/facebookincubator/create-react-app/pull/2815)
* See also
    * https://www.typescriptlang.org/docs/handbook/jsx.html
    * https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html
    * https://www.gitbook.com/book/charleslbryant/hello-react-and-typescript/details

### TypeScript configuration for this project
* **To works, you must absolutly modify a file:**
    * In file `./node_modules/@types/react/index.d.ts`, under
    `interface AnchorHTMLAttributes<T> extends HTMLAttributes<T> {` (actually
    line 2603) property `disabled? boolean;`.
    * Otherwise cause
    "`error TS2339: Property 'disabled' does not exist on type 'DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>'.
    `"

## Know problems
* In src/index.tsx, I added `tslint:disable:jsx-no-lambda`. See
    https://github.com/palantir/tslint-react why it's not good.
    * In console cause error
        `Warning: Cannot update during an existing state transition
        (such as within `render` or another component's constructor).
        Render methods should be a pure function of props and state;
        constructor side-effects are an anti-pattern, but can be moved to
        \`componentWillMount\`.`
* In function loginFlow at src/sagas/index.ts, there is an unknown bug.
* To avoid the mandatory to modify `./node_modules/@types/react/index.d.ts`,
    (see above) change `<a />` to `<button />` and fix the problem with
    `<button />`.

## See also
* https://react.rocks/
* https://react.rocks/example/saga-login-flow
* https://react.rocks/example/login-flow
* https://github.com/sotojuan/saga-login-flow/ (especially the README.md)
* https://github.com/mxstbr/login-flow (especially the README.md)
* redux-logger displays lot of useful and understandable informations in the
    console.
