import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../services/accounts.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private authCheck: AccountService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authCheck.isLoggedIn) {
        return true;
    }

    // navigate to login page
    this.router.navigate(['/login']);
    return false;
  }
}
