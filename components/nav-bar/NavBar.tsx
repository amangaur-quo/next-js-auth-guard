import Link from 'next/link';
import styles from './NavBar.module.css';

const MENU_LIST = [
  { title: 'Home', route: '/' },
  { title: 'Providers', route: '/providers' },
  { title: 'Patients For Provider', route: '/patients-for-provider' },
  { title: 'Prescriptions For Provider', route: '/prescriptions-for-provider' },
  { title: 'Prescriptions For Patient', route: '/prescriptions-for-patient' },
];

const NavBar = () => {
  return (
		<>
    <div className={styles.nav_layout}>
      <ul>
        {MENU_LIST.map((menu, index) => (
          <li key={index}>
            <Link href={menu.route}>{menu.title}</Link>
          </li>
        ))}
      </ul>
    </div>
		</>
	);
};

export default NavBar;
