import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styles: [`
		.pointer {
				cursor: pointer;
		}
	`],
})
export class NavbarComponent {

	constructor(
		private router: Router,
		private authService: AuthService,
	) {}

	get user(): string | undefined {
		return this.authService.user;
	}

	signOut(): void {
		localStorage.removeItem('email');
		this.authService.user = undefined;
		this.router.navigate(['/login']);
	}
}
