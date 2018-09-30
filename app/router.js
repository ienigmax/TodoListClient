import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('tasks', function() {
    this.route('add', {path: 'add'});
    this.route('remove', {path: 'remove/:task_uuid'});
    this.route('toggle', {path: ':task_uuid/:task_status'});
  });
  this.route('login');
});

export default Router;
