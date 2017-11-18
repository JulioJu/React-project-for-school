import request from './fakeRequest'

let localStorage

// If we're testing, use a local storage polyfill
if (global.process && process.env.NODE_ENV === 'test') {
  localStorage = require('localStorage')
} else {
  // If not, use the browser one
  localStorage = global.window.localStorage
}
console.log('Your local storage is:');
console.log(localStorage);

const auth = {
  /**
  * Logs a user in, returning a promise with `true` when done
  * @param  {string} username The username of the user
  * @param  {string} password The password of the user
  */
  login (username, password) {
    if (auth.loggedIn())
      return Promise.resolve({ authenticated: response.authenticated,
          user: response.user});

    // Post a fake request
    return request.post('/login', {username, password})
      .then(response => {
        // Save token to local storage
        localStorage.token = response.token
        localStorage.userLogged = response.user.username;
        return Promise.resolve({authenticated: response.authenticated,
          user: response.user
        });
      })
  },
  /**
  * Logs the current user out
  */
  logout () {
    return request.post('/logout')
  },
  /**
  * Checks if a user is logged in
  */
  loggedIn () {
    return !!localStorage.token
  },
  /**
  * Retrieve user
  */
  // TODO we see here that JS is very bad. Lot of types checks !
  loggedInUser () {
    let userUndifined = {username: '',
      isFreelance: null
    };
    if (!localStorage.users ||
        !localStorage.userLogged)
      return userUndifined;
    let users = JSON.parse(localStorage.users);
    console.log("Users saved in the BDD are:");
    console.log(users);
    let usernameLogged = localStorage.userLogged;
    console.log("Your user logged is:");
    let userLogged = auth.loggedIn() ?
      {username: usernameLogged,
       isFreelance: users[usernameLogged].isFreelance
      }
      : userUndifined;
    if (typeof userLogged.isFreelance !== "boolean")
      return userUndifined;
    console.log(userLogged);
    return userLogged;
  },
  /**
  * Registers a user and then logs them in
  * @param  {string} username The username of the user
  * @param  {string} password The password of the user
  */
  register (username, password) {
    // Post a fake request
    return request.post('/register', {username, password})
      // Log user in after registering
      .then(() => auth.login(username, password))
  },
  onChange () {}
}

export default auth

// vim: sw=2 ts=2 et:
