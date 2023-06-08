export class AuthService {
    getAccessToken(): string {
		try {
			return JSON.parse(localStorage.getItem('user') || '{}');
		} catch (err) {
			return localStorage.getItem('user') || '';
		}
	}
}