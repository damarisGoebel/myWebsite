import Layout from '../components/Layout/Layout'
import styles from '../styles/Home.module.css'

const Home = () => {

    const current = new Date()
    const time = current.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})

    const mantras = ['Find your calm', 'You can do this', 'I am stronger than I think', 'Love the life you have', 'You got this', 'Everything happens right on schedule.', 'Remember who you are.', 'It will get done.', 'Nothing lasts forever. Not the good, and not the bad.', 'You are a smart, powerful human. You’ve got this.', 'Inhale, exhale.','Whatever you’re feeling is OK.']
    

    return(
  <Layout title="Quotes">
    <div className={styles.quotes}>
            <h1 className={styles.time}>{time}</h1>
            <h1 className={styles.mantra}>{mantras[Math.floor(Math.random() * mantras.length)]}, beautiful. </h1>

            <section className={styles.quote}>
              <p className={styles.theQuote}>“There is virtue in work and there is virtue in rest. Use both and overlook neither.”</p>
              <p className={styles.theAuthor}>Alan Cohen</p>
              </section>
    </div>
  </Layout>
)}

export default Home