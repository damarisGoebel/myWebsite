import Link from 'next/link'
import styles from './Logo.module.css'

const Logo = () => (
    <Link href="/" >
        <a className={styles.logo}>
            D 
        </a>
    </Link>
)

export default Logo