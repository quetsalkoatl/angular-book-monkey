import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanNavigateToAdminGuard implements CanActivate {

  private accessGranted = false;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.accessGranted) {
      const question = $localize`:@@CanNavigateToAdminGuard\:question:Mit grosser Macht kommt grosse Verantwortung. Möchten Sie den Admin-Bereich betreten?`;
      this.accessGranted = window.confirm(question);
    }
    return this.accessGranted;
  }

}
