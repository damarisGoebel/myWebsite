import Link from 'next/link'
import styles from './TechList.module.css'



const TechList = () => (
    <div className={styles.container}>
        <img src="/javascript.png" alt="javascript"/>
        <img src="/typescript.png" alt="typescript"/>
        <img src="/react.png" alt="react"/>
        <img src="/nextjs.png" alt="nextjs"/>


    </div>
)

export default TechList