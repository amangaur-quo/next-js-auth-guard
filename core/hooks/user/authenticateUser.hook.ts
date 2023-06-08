import { gql, useMutation } from '@apollo/client';

const QUERY = gql`
  mutation AUTHENTICATE_USER($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      user {
        id
        email
        name
        createdAt
        updatedAt
      }
      token
    }
  }
`;

export const useAthenticateUser = () => {
  return useMutation(QUERY);
};

