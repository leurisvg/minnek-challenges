import { SafeUrl } from '@angular/platform-browser';

export interface SanitizedImage {
	data: SafeUrl;
	contentType: string;
}
