import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ],
})
export class LoginComponent {

	form: FormGroup = this.formBuilder.group({
		email: [ '', [ Validators.required, Validators.email ] ],
		password: [ '', [ Validators.required, Validators.minLength(6) ] ],
	});

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private authService: AuthService,
	) { }

	invalidField(field: string) {
		return this.form.get(field)?.invalid && this.form.get(field)?.touched;
	}

	submit(): void {
		if (this.form.invalid) {
			this.form.markAllAsTouched();
			return;
		}

		const { email, password } = this.form.value;

		this.authService.login(email, password)
			.subscribe(_ => {
				if (this.authService.user) {
					localStorage.setItem('email', this.authService.user);
					this.router.navigate([ '/products' ]);
				}
			});
	}
}
