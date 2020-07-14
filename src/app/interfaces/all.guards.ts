import { CanActivate, Router } from '@angular/router';
import { HttpService } from '../core/auth/http.auth.service'
import { Injectable } from '@angular/core';

@Injectable()
export class AboutGuard implements CanActivate {

  constructor(
    private postUser: HttpService,
    private router: Router) {}

  canActivate(): boolean {
    if (this.postUser.loggedIn()) {
      return true
    } else {
      this.router.navigate(['/api/auth/login']);
      return false
    }
  }
}