import {bootstrap} from 'angular2/platform/browser';
import {WontfixApp} from './app/wontfix';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire} from 'angularfire2';

bootstrap(WontfixApp, [
  FIREBASE_PROVIDERS,
  defaultFirebase('https://wontfix.firebaseio.com'),
  ROUTER_PROVIDERS
]);
