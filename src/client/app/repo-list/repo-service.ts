import {Injectable, Inject}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {FirebaseRef} from 'angularfire2';
import 'rxjs/Rx';

@Injectable()
export class RepoService {
  ref: any;
  constructor (private http: Http, @Inject(FirebaseRef) ref:Firebase) {
    this.ref = ref;
    console.log(this.getUrlWithToken());
  }

  private _apiUrl = 'https://api.github.com/user/repos?access_token=';  // URL to web api

  getRepos() {
    return this.http.get(this.getUrlWithToken())
                    .map(res => <any[]> res.json())
                    .map(repos => repos.filter(repo => !repo.fork))
                    .catch(this.handleError);
  }
  
  getUrlWithToken(): string {
    return this._apiUrl + this.ref.getAuth().github.accessToken;
  }
  
  private handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}