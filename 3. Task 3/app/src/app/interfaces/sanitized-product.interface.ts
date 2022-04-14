import { SanitizedImage } from './sanitized-image.interface';

export interface SanitizedProduct {
	image: SanitizedImage;
	name: string;
	price: number;
	description: string;
	id: string;
}
