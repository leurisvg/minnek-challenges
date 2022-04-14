import { Image } from './image.interface';

export interface Product {
	image: Image;
	name: string;
	price: number;
	description: string;
	id: string;
}
