export interface AuthResponse {
	data: Data;
	succeeded: boolean;
}

export interface Data {
	email: string;
	id: string;
}
