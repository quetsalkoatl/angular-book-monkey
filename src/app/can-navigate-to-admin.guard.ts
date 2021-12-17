import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanNavigateToAdminGuard implements CanActivate {

  private accessGranted = false;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.accessGranted) {
      this.accessGranted = window
        .confirm('Mot grosser Macht kommt grosse Verantwortung. Möchten Sie den Admin-Bereich betreten?');
    }
    return this.accessGranted;
  }

}
