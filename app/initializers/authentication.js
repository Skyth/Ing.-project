import CustomAuthenticator from 'ingida/authenticators/custom';
import CustomAuthorizer from 'ingida/authorizers/custom';

export default {
  name:       'authentication',
  before:     'simple-auth',
  initialize: function(container) {
  	container.register('authenticator:custom', CustomAuthenticator);
  	container.register('authorizer:custom', CustomAuthorizer);
  }
};