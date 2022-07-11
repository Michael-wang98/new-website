import styles from '../styles/modules/layout.module.css';
import utilStyles from '../styles/modules/utils.module.css';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

const name = 'Michael'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children }) {
  const route = useRouter(); // Get the router object containing the current pathname, query and asPath

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>Hi</p>
      </footer>
      {route.pathname != '/' && // Do not display the back to home button on the home page
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      }
    </div>
  )
}