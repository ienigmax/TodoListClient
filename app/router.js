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
    this.route('add', {path: 'add/:title/:content'});
    this.route('remove', {path: 'remove/:uuid'});
    this.route('toggle', {path: 'toggle/:uuid/:status'});
    this.route('edit', {path: 'edit/:uuid/:title/:content'});
  });
});

export default Router;
