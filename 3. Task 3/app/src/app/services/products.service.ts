import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

import { ProductResponse } from '../interfaces/product-response.interface';
import { SanitizedProduct } from '../interfaces/sanitized-product.interface';

@Injectable({
	providedIn: 'root',
})
export class ProductsService {

	constructor(
		private httpClient: HttpClient,
		private domSanitizer: DomSanitizer,
	) { }

	addProduct(file: File, name: string, price: number, description: string): Observable<ProductResponse> {

		const formData: FormData = new FormData();
		formData.append('image', file);
		formData.append('contentType', file.type);
		formData.append('name', name);
		formData.append('price', `${ price }`);
		formData.append('description', description);

		return this.httpClient.post<ProductResponse>('http://localhost:8080/api/products', formData);
	}

	getProducts(): Observable<SanitizedProduct[]> {
		return this.httpClient.get<ProductResponse>('http://localhost:8080/api/products')
			.pipe(
				pluck('data'),
				map(resp => {
					return resp.map(product => {
						return {
							image: {
								data: this.domSanitizer.bypassSecurityTrustUrl(`data:${ product.image.contentType };base64,${ product.image.data }`),
								contentType: product.image.contentType,
							},
							name: product.name,
							price: product.price,
							description: product.description,
							id: product.id,
						} as SanitizedProduct;
					});
				}),
			);
	}
}
