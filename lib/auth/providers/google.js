module.exports = function (strategy) {
  Object.assign(strategy, {
    _scheme: 'oauth2',
    authorization_endpoint: 'https://accounts.google.com/o/oauth2/auth',
    userinfo_endpoint: 'https://www.googleapis.com/oauth2/v3/userinfo',
    scope: ['openid', 'profile', 'email']
  })
}