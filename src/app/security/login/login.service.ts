import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { MEAT_API } from '../../app.api';
import { User } from 'app/security/login/user.model';

import 'rxjs/add/operator/do';

@Injectable()
export class LoginService {

  user: User;

  constructor(private http: HttpClient) {

  }

  isLoggedIn(): boolean {
    return this.user !== undefined;
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${MEAT_API}/login`, { email: email, password: password })
      .do(user => this.user = user);
  }
}
