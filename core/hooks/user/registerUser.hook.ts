import { AuthResponse, UserCreationRequest } from '@/core/interfaces';
import { gql, useMutation } from '@apollo/client';

const QUERY = gql`
  mutation REGISTER_USER($user: UserCreationRequest!) {
    registerUser(user: $user) {
      user {
        id
        email 
      }
      token
    }
  }
`;

export const useRegisterUser = () => {
  return useMutation<AuthResponse, UserCreationRequest>(QUERY);
};