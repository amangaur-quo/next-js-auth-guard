import Layout from '@/components/layout/Layout';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client';
import { CLIENT, UNPROTECTED_ROUTES } from '@/core/constants';
import AuthGuard from '@/components/auth/auth-guard/AuthGuard';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={CLIENT}>
      <AuthGuard excludedRoutes={UNPROTECTED_ROUTES}>
        <Layout>
          <Component {...pageProps} />;
        </Layout>
      </AuthGuard>
    </ApolloProvider>
  );
}
