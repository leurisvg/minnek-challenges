import { Product } from './product.interface';

export interface ProductResponse {
	data: Product[];
	succeeded: boolean;
}
