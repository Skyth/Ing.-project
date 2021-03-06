/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ingida',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV['simple-auth'] = {
    authorizer: 'authorizer:custom',
    crossOriginWhitelist: ['http://admin.ingida.ru'],
    routeAfterAuthentication: '/companies'
    // tokenPropertyName: 'token',
    // authorizationPrefix: 'Token ',
    // authorizationHeaderName: 'Authorization'
  };

  // ENV['simple-auth-token'] = {
  //   serverTokenEndpoint: '/api-token-auth/',
  //   identificationField: 'username',
  //   passwordField: 'password',
  //   tokenPropertyName: 'token',
  //   authorizationPrefix: 'Token ',
  //   authorizationHeaderName: 'Authorization',
  //   headers: {
  //   },
  // };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
