import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductsComponent } from './components/products/products.component';
import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/no-auth.guard';

const routes: Routes = [
	{ path: '', component: FormComponent },
	{ path: 'login', component: LoginComponent, canActivate: [ NoAuthGuard ] },
	{ path: 'register', component: RegisterComponent, canActivate: [ NoAuthGuard ] },
	{ path: 'products', component: ProductsComponent, canActivate: [ AuthGuard ] },
	{ path: '**', component: FormComponent },
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ],
})
export class AppRoutingModule {
}
