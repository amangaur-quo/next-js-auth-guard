import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { API_URL } from './urls.constant';
import { setContext } from '@apollo/client/link/context';

const httpLink = new HttpLink({
  uri: `${API_URL}`,
  credentials: "same-origin",
});

const logoutLink = onError(({ graphQLErrors }) => {
  if (
    graphQLErrors?.length &&
    (graphQLErrors[0].extensions?.response as any)?.statusCode === 401
  ) {
    console.log("asjdsahjkdsahjksadhjk")
		localStorage.clear();
  }
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token') || '{}') : '';
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? token : '',
    }
  }
});

export const CLIENT = new ApolloClient({
  link: authLink.concat(logoutLink).concat(httpLink),
  cache: new InMemoryCache(),
});
