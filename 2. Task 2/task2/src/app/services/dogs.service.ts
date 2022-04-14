import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, pluck } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { BreedsResponse } from '../interfaces/breeds-response.interface';
import { ImagesResponse } from '../interfaces/images-response.interface';
import { BreedsData } from '../interfaces/breeds-data.interface';

@Injectable({
	providedIn: 'root',
})
export class DogsService {

	constructor(private httpClient: HttpClient) { }

	getBreeds(): Observable<BreedsData> {
		return this.httpClient.get<BreedsResponse>('https://dog.ceo/api/breeds/list/all')
			.pipe(
				pluck('message'),
				switchMap((resp: { [key: string]: string[] }) => {

					const newResp: BreedsData = {};

					for (const breed in resp) {
						this.getImages(breed).subscribe((url: string) => {
							Object.assign(newResp, { [breed]: { url, subbreeds: resp[breed] } });
						});
					}

					return of(newResp);
				}),
			);
	}

	getImages(breed: string): Observable<string> {
		return this.httpClient.get<ImagesResponse>(`https://dog.ceo/api/breed/${ breed }/images/random`)
			.pipe(
				pluck('message'),
			);
	}
}
