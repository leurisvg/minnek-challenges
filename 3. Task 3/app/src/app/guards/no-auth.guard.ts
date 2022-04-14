import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable({
	providedIn: 'root',
})
export class NoAuthGuard implements CanActivate {

	constructor(
		private authService: AuthService,
		private router: Router,
	) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

		if (this.authService.user) {
			this.router.navigate([ '/products' ]);
			return false;
		}

		return true;
	}
}
