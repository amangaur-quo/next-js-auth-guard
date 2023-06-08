import { gql, useQuery } from '@apollo/client';

const QUERY = gql`
  query AUTH_USER_PROFILE {
    authUserProfile {
      id
      email
      name
      createdAt
      updatedAt
    }
  }
`;

export const useGetAuthUserProfile = () => {
  return useQuery(QUERY, { errorPolicy: "all" });
};

