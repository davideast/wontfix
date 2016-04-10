import {Component} from 'angular2/core';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {AngularFire} from 'angularfire2';
import {Router} from 'angular2/router';

@Component({
  selector: 'login-form',
  templateUrl: 'app/login-form/login-form.html',
  styleUrls: ['app/login-form/login-form.css'],
  providers: [],
  directives: [
    MD_CARD_DIRECTIVES,
    MdToolbar,
    MdButton,
  ],
  pipes: []
})
export class LoginForm {

  constructor(public af: AngularFire, private _router: Router) {
    this.af.auth.subscribe(auth => {
      if(auth) {
        this._router.navigateByUrl('repo-list');        
      }
    });
  }
  
  login() {
    this.af.auth.login()
      .then(auth => console.log(auth))
      .catch(err => console.error(err));
  }

}
