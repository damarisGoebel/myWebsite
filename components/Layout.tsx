import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from './Layout.module.css'
import Logo from './Logo'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap" rel="stylesheet"/>    
      <title>Damaris Göbel</title>
    </Head>
    <header className={styles.header}>
        <Logo/>
      <nav className={styles.navList}>
            <Link href="/playground"><a>Playground</a></Link>
            <Link href="/about"><a>About</a></Link>
      </nav>
    </header>
    {children}
    <footer>
        <hr></hr>
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout