import Link from 'next/link';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
    <nav>
        <Link href="/">KossMeetups</Link>
        <ul>
            <li>
                <Link href="/">All Meetups</Link>
            </li>
            <li>
            <Link href="/new-meetup">New Meetup</Link>
            </li>
        </ul>
    </nav>
    </header>
  )
}

export default Header