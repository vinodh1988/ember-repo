import EmberRouter from '@ember/routing/router';
import config from 'firstdemo/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('about');
  this.route('contact', { path: '/reach-us' }, function() {
    this.route('location',  {path:'/:location'});
  });
  this.route('people', { path: '/key-people' });
});
