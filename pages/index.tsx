import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout/Layout'
import Cards from '../components/Cards/Cards'

export default function Home() {
  return (
    <Layout title="Damaris Göbel - Web Development">
      <section className={styles.cardRow}>
      <Cards 
      title={"Hello Cook"}
      subTitle={"- Rezeptesammlung, mein digitales Kochbuch."}
      techStack={"Node.js, MongoDB, Express.js, Handlebars.js, Passport.js, Bootstrap"}
      imageSrc={"/helloCook.png"}
      imageAlt={"helloCookScreenshot"}
      deployment={"Heroku"}
      deploymentLink={"https://recipe-app-dg.herokuapp.com/"}
      />
             <Cards 
      title={"JavaScript Quiz"}
      subTitle={"- Responsive 25-Fragen mit Erfolgsmessung und Nutzerfeedback."}
      techStack={"vanilla JavaScript "}
      imageSrc={"/javascriptQuiz.png"}
      imageAlt={"javascriptQuizScreenshot"}
      deployment={"Netlify"}
      deploymentLink={"https://boring-shockley-2307f5.netlify.app/"}
      />
 
      </section>

      <section className={styles.cardRow}>
      <Cards 
      title={"Give Joy Cards"}
      subTitle={"- handgezeichnete Karten"}
      techStack={"React.js"}
      imageSrc={"/giveJoyCards.png"}
      imageAlt={"giveJoyCardsScreenshot"}
      deployment={"GitHub Pages"}
      deploymentLink={"https://damarisgoebel.github.io/give-joy-cards/"}
      />

    <Cards 
      title={"My website"}
      subTitle={"- damarisgoebel.com"}
      techStack={"Next.js, TypeScript"}
      deployment={"AWS"}
      />
 
 
      </section>
    </Layout>
  )
}
