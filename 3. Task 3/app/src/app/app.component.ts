import { Component, OnInit } from '@angular/core';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const email = localStorage.getItem('email');

    if (email) {
      this.authService.user = email;
    }
  }
}
