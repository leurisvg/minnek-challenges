import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { SanitizedProduct } from '../../interfaces/sanitized-product.interface';
import { ProductsService } from '../../services/products.service';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: [ './products.component.css' ],
})
export class ProductsComponent implements OnInit {
	products: SanitizedProduct[] = [];
	loading: boolean = false;

	constructor(
		private domSanitizer: DomSanitizer,
		private productsService: ProductsService,
	) { }

	ngOnInit(): void {
		this.loading = true;
		this.productsService.getProducts()
			.subscribe(resp => {
				this.products = resp;
				this.loading = false;
			});
	}
}
