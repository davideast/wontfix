import {Component} from 'angular2/core';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

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

  constructor() {}

}
