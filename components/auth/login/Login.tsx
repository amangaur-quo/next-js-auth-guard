import { useRouter } from 'next/router';
import styles from '../Auth.module.css';
import { useAthenticateUser } from '@/core/hooks';
import { CLIENT } from '@/core/constants';

const Login = () => {
  const [authenticateUser] = useAthenticateUser();

  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const result = await authenticateUser({
      variables: { email, password },
    });

    localStorage.setItem('token', JSON.stringify(result.data?.authenticateUser.token))
    localStorage.setItem('user', JSON.stringify(result.data?.authenticateUser.user));

    CLIENT.refetchQueries({ include: 'active' });
    router.push('/');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" required />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
