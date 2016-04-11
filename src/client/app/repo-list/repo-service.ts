import {Injectable, Inject}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {FirebaseRef} from 'angularfire2';
import {GithubService, Owner, Repo} from '../github-service';
import 'rxjs/Rx';

@Injectable()
export class RepoService extends GithubService {
  
  public ref: any;
  constructor (public http: Http, @Inject(FirebaseRef) ref:Firebase) {
    super(http, ref);
    this._apiUrl = 'https://api.github.com/user/repos';
  }
  
  getRepos() {
    return this.http.get(this.getUrlWithToken())
                    .do(res => {debugger;})
                    .map(res => <Repo[]> res.json())
                    .map(repos => repos.filter((repo: Repo) => !repo.fork))
                    .catch(this.handleError);
  }
  
}