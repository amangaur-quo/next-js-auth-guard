export interface AuthResponse {
    registerUser: {
          user: {
              email: string;
              password: string;
          },
          token: string
      }
  }
  