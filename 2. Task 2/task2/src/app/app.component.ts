import { Component, OnInit } from '@angular/core';

import { DogsService } from './services/dogs.service';
import { BreedsData } from './interfaces/breeds-data.interface';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ],
})
export class AppComponent implements OnInit {
	title = 'Dog List';

	dogsBreeds!: BreedsData;

	constructor(private dogsService: DogsService) {}

	ngOnInit() {
		this.dogsService.getBreeds()
			.subscribe(resp => {
				this.dogsBreeds = resp;
			});
	}
}
