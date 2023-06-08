import { CLIENT } from '@/core/constants';
import { useGetAuthUserProfile } from '@/core/hooks';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface GuardProps {
  children: JSX.Element;
  excludedRoutes?: string[];
}

const AuthGuard = ({ children, excludedRoutes }: GuardProps) => {
  const { data: user, refetch } = useGetAuthUserProfile();

  const router = useRouter();

  useEffect(() => {
    if (!excludedRoutes?.includes(router.pathname)) {
      refetch();
    }
  }, [router.pathname, refetch, excludedRoutes]);

  useEffect(() => {
    // const authUser = JSON.parse(localStorage.getItem('user') || '');
    const token = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token') || '{}') : '';
    const isAuthenticated = token || false;
    if (!isAuthenticated && !excludedRoutes?.includes(router.pathname)) {
      localStorage.clear();
      router.push('auth/login');
      CLIENT.resetStore();
    }
  }, [router, excludedRoutes]);

  return (
    <>
      {excludedRoutes?.includes(router.pathname) ? (
        children
      ) : (
        <>{user && children}</>
      )}
    </>
  );
};

export default AuthGuard;