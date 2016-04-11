import {Injectable, Inject}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {FirebaseRef} from 'angularfire2';
import 'rxjs/Rx';

export interface Repo {
  id: number;
  fork: boolean;
  forks: number;
  has_issues: boolean;
  url: string;
  owner: Owner;
  open_issues: number;
}

export interface Owner {
  avatar_url: string;
  html_url: string;
  id: number;
  login: string;
  url: string;
}

@Injectable()
export abstract class GithubService {
  public ref: any;
  public _apiUrl = 'https://api.github.com/';
  constructor (public http: Http, @Inject(FirebaseRef) ref:Firebase) {
    this.ref = ref;
  }
  
  getUrlWithToken(): string {
    return `${this._apiUrl}?access_token=${this.ref.getAuth().github.accessToken}`;
  }
  
  handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}