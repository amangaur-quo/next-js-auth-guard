import { useRouter } from 'next/router';
import styles from '../Auth.module.css';
import { useRegisterUser } from '@/core/hooks';
import { CLIENT } from '@/core/constants';

const Signup = () => {
  const [registerUser] = useRegisterUser();

  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const user = {
      email: event.target.email.value,
      password: event.target.password.value,
      name: event.target.name.value
    };

    const result = await registerUser({
      variables: { user },
    });

    localStorage.setItem('token', JSON.stringify(result.data?.registerUser.token))
    localStorage.setItem('user', JSON.stringify(result.data?.registerUser.user));

    CLIENT.refetchQueries({ include: 'active' });
    router.push('/');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" required />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" required />
      <label htmlFor="name">Name</label>
      <input type="string" name="name" id="name" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Signup;
