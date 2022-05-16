import styles from '../styles/modules/layout.module.css'
import utilStyles from '../styles/modules/utils.module.css'
import Link from 'next/link'

const name = 'Michael'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </header>
      <main>{children}</main>
      <div className={styles.backToHome}>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
      
    </div>
  )
}