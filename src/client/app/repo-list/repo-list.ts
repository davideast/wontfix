import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RepoService} from './repo-service';
import {Repo, Owner} from '../github-service';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {AngularFire} from 'angularfire2';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from 'angular2/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'repo-list',
  templateUrl: 'app/repo-list/repo-list.html',
  styleUrls: ['app/repo-list/repo-list.css'],
  providers: [RepoService, HTTP_PROVIDERS],
  directives: [
    ROUTER_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdButton,
    MdToolbar
  ],
  pipes: []
})
export class RepoList {
  repos: Observable<Repo[]>;
  constructor(public rs: RepoService) {
    this.repos = rs.getRepos();
  }
 
}
