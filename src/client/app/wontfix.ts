import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from 'angular2/router';
import {WFRouteConfig} from './routes';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {AngularFire} from 'angularfire2';

@Component({
  selector: 'wontfix-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'app/wontfix.html',
  directives: [
    ROUTER_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdToolbar,
    MdButton,
  ],
  pipes: []
})
@RouteConfig([].concat(WFRouteConfig))
export class WontfixApp {
 
  constructor(private _af: AngularFire, private _router: Router) {
    this._af.auth.subscribe(auth => {
      if (!auth) {
        this._router.navigate( ['Login'] );
      } else {
        this._router.navigate( ['RepoList'] );
      }
    });
  }
  
}
