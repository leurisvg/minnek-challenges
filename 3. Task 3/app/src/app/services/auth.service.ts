import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthResponse } from '../interfaces/auth-response';

@Injectable({
	providedIn: 'root',
})
export class AuthService {

	user?: string;

	constructor(private httpClient: HttpClient) { }

	register(email: string, password: string): Observable<AuthResponse> {
		return this.httpClient.post<AuthResponse>('http://localhost:8080/api/users', { email, password })
			.pipe(
				tap(resp => {
					if (resp) {
						this.user = resp.data.email;
					}
				}),
			);
	}

	login(email: string, password: string): Observable<AuthResponse> {
		return this.httpClient.post<AuthResponse>('http://localhost:8080/api/auth', { email, password })
			.pipe(
				tap(resp => {
					if (resp) {
						this.user = resp.data.email;
					}
				}),
			);
	}
}
