import {Component} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {RepoService} from './repo-service';
import 'rxjs/Rx';

@Component({
  selector: 'repo-list',
  templateUrl: 'app/repo-list/repo-list.html',
  styleUrls: ['app/repo-list/repo-list.css'],
  providers: [RepoService, HTTP_PROVIDERS],
  directives: [],
  pipes: []
})
export class RepoList {

  constructor(public rs: RepoService) {
    rs.getRepos().subscribe(repos => console.log(repos));
  }
  
  // getRepos() {
  //   return this.http.get('')
  //            .map(res => <any[]> res.json().data)
  //            .catch(this.handleError);
  // }

  // private handleError (error: Response) {
  //   console.error(error);
  //   return Observable.throw(error.json().error || 'Server error');
  // }  

}
