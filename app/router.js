import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('tasklist');
  this.route('about');

  this.route('actions', function() {
    this.route('add');
    this.route('remove', {path: 'remove/:uuid'});
    this.route('toggle');
  });
});

export default Router;
