import { Component, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewChild } from '@angular/core';

import { ProductsService } from '../../services/products.service';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: [ './form.component.css' ],
})
export class FormComponent {

	@ViewChild('inputFile') inputFile!: ElementRef;

	imageUpload!: File;
	imageInputError: boolean = false;

	form: FormGroup = this.formBuilder.group({
		name: [ '', [ Validators.required ] ],
		price: [ '', [ Validators.required ] ],
		description: [ '', [ Validators.required ] ],
	});

	constructor(private formBuilder: FormBuilder, private productsService: ProductsService) { }

	invalidField(field: string) {
		return this.form.get(field)?.invalid && this.form.get(field)?.touched;
	}

	selectImage(event: Event): void {
		const element = event.currentTarget as HTMLInputElement;
		const fileList: FileList | null = element.files;

		if (fileList) {
			this.imageUpload = fileList[0];
			this.imageInputError = false;
		}
	}

	submit(): void {
		if (this.form.invalid || !this.imageUpload) {
			this.form.markAllAsTouched();
			if (!this.imageUpload) this.imageInputError = true;
			return;
		}

		this.form.disable();

		const { name, price, description } = this.form.value;

		this.productsService.addProduct(this.imageUpload, name, price, description)
			.subscribe(_ => {
				this.form.reset();
				this.inputFile.nativeElement.value = '';
				this.form.enable();
			});
	}

}
