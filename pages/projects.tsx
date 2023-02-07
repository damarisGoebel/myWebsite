import Link from 'next/link'
import styles from '../styles/Projects.module.css'
import Layout from '../components/Layout/Layout'
import Cards from '../components/Cards/Cards'

export default function Projects() {
  return (
    <Layout title="Damaris Göbel - Web Development">
      <section className={styles.cardRow}>
        <Cards
          title={'Hello Cook'}
          subTitle={'- recipe collection, my digital cookbook.'}
          techStack={
            'Node.js, MongoDB, Express.js, Handlebars.js, Passport.js, Bootstrap'
          }
          imageSrc={'/helloCook.png'}
          imageAlt={'helloCookScreenshot'}
          deployment={'Render'}
          deploymentLink={'https://recipes-fxeh.onrender.com/'}
        />
        <Cards
          title={'JavaScript Quiz'}
          subTitle={
            '- responsive 25 questions with success valuation and user feedback.'
          }
          techStack={'vanilla JavaScript '}
          imageSrc={'/javascriptQuiz.png'}
          imageAlt={'javascriptQuizScreenshot'}
          deployment={'Netlify'}
          deploymentLink={'https://boring-shockley-2307f5.netlify.app/'}
        />
      </section>

      <section className={styles.cardRow}>
        <Cards
          title={'Give Joy Cards'}
          subTitle={'- handmade cards'}
          techStack={'React.js'}
          imageSrc={'/giveJoyCards.png'}
          imageAlt={'giveJoyCardsScreenshot'}
          deployment={'GitHub Pages'}
          deploymentLink={'https://damarisgoebel.github.io/give-joy-cards/'}
        />

        <Cards
          title={'My website'}
          subTitle={'- damarisgoebel.com'}
          techStack={'Next.js, TypeScript'}
          deployment={'Netlify'}
        />
      </section>
    </Layout>
  )
}
