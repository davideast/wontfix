import {WontfixApp} from './wontfix';
import {LoginForm} from './login-form/login-form';
import {RepoList} from './repo-list/repo-list';

class Routes {
  static Login = 'Login';
  static RepoList = 'RepoList'; 
};

export const WFRouteConfig = [
  {path: '/login', name: Routes.Login, component: LoginForm},
  {path: '/repo-list/', name: Routes.RepoList, component: RepoList}
];