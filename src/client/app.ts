import {bootstrap} from 'angular2/platform/browser';
import {WontfixApp} from './app/wontfix';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {
  FIREBASE_PROVIDERS, 
  defaultFirebase, AngularFire, 
  firebaseAuthConfig, 
  AuthProviders,
  AuthMethods
} from 'angularfire2';

bootstrap(WontfixApp, [
  FIREBASE_PROVIDERS,
  defaultFirebase('https://wontfix.firebaseio.com'),
  ROUTER_PROVIDERS,
  firebaseAuthConfig({
    provider: AuthProviders.Github,
    method: AuthMethods.Redirect
  })
]);
