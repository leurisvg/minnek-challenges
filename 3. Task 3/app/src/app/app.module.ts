import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { IvyCarouselModule } from 'angular-responsive-carousel';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductsComponent } from './components/products/products.component';
import { AuthGuard } from './guards/auth.guard';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		FormComponent,
		LoginComponent,
		RegisterComponent,
		ProductsComponent,
  LoadingComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		HttpClientModule,
		IvyCarouselModule,
	],
	providers: [ AuthGuard ],
	bootstrap: [ AppComponent ],
})
export class AppModule {
}
