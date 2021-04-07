import Link from 'next/link'
import styles from './Logo.module.css'
import clsx from 'clsx'

const Logo = () => {

    return (
    <Link href="/" >
        <a className={styles.logo}>
        <span className={styles.mobile}>&lt;D /&gt;</span>
        <div className={clsx(styles.desktop, styles.gradient)}>
           <span className={styles.firstWord}>&lt;Damaris /&gt;</span>
           <span className={styles.secondWord}>&lt;loves /&gt;</span>
           <span className={styles.thirdWord}>&lt;coding /&gt;</span>
            </div>

        </a>
    </Link>
)
    }

export default Logo