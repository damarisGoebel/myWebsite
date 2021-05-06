import Layout from '../components/Layout/Layout'
import styles from '../styles/Home.module.css'

const Home = () => {

    const current = new Date()
    const time = current.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})

    const mantras = ['Find your calm.', 'You can do this.', 'I am stronger than I think.', 'Love the life you have.', 'You got this.', 'Everything happens right on schedule.', 'Remember who you are.', 'It will get done.', 'Nothing lasts forever. Not the good, and not the bad.', 'You are a smart, powerful human. You’ve got this.', 'Inhale, exhale.','Whatever you’re feeling is OK.', 'Walk before running.']
    const images = ['/image1.jpeg', '/image2.jpeg', '/image3.jpeg', '/image4.jpeg', '/image5.jpeg', '/image6.jpeg', '/image7.jpeg', '/image8.jpeg', '/image9.jpeg', '/image10.jpeg', '/image11.jpeg', '/image12.jpeg', '/image13.jpeg', '/image14.jpeg', '/image15.jpeg']
    const quotes = ['There is virtue in work and there is virtue in rest. Use both and overlook neither.', 'Be the friend you wish you had.', 'Be yourself; everyone else is already taken.', 'Be the change that you wish to see in the world.', 'Live as if you were to die tomorrow. Learn as if you were to live forever.', 'The way to get started is to quit talking and begin doing.', 'The greatest glory in living lies not in never falling, but in rising every time we fall.', 'Keep your eyes on the stars and your feet on the ground.', 'Life is too important to be taken seriously.', 'Not how long, but how well you have lived is the main thing.', 'Everything has beauty, but not everyone sees it.', 'Do not take life too seriously. You will never get out of it alive.', 'The mind is everything. What you think you become.', 'Life isn’t about finding yourself. Life is about creating yourself.']
    return(
  <Layout title="Damaris Göbel - Web Development">
    <div className={styles.quotes} style={{backgroundImage: "url('" + images[Math.floor(Math.random() * images.length)] + "')",backgroundPosition: 'center',backgroundSize: "cover"}}>
            <h1 className={styles.time}>{time}</h1>
            <h1 className={styles.mantra}>{mantras[Math.floor(Math.random() * mantras.length)]} </h1>

            <section className={styles.quote}>
              <p className={styles.theQuote}>{quotes[Math.floor(Math.random() * quotes.length)]}</p>
              </section>
    </div>
  </Layout>
)}

export default Home