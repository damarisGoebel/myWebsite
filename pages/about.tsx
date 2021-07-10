import Link from 'next/link'
import Layout from '../components/Layout/Layout'
import styles from '../styles/About.module.css'
import TechList from '../components/TechnologyList/TechList'

const AboutPage = () => (
  <Layout title="About me">
    <section className={styles.about}>
      <div>
      <h3>Hello world 👋  </h3>
      <p>I am a web developer who loves to work with Node, Express, TypeScript and React.</p>

<p> After studying International Business I worked in online marketing since 2013 and became interested 
    in coding in late 2019.</p>
<p> In January 2020 I joined Ironhack's web development bootcamp in Berlin and since then I am doing crazy things with CSS and JavaScript.
</p>



<p>
    <strong>GitHub:</strong> <br/>
    https://github.com/damarisGoebel
</p>

<p>
    <strong>LinkedIn:</strong> <br/>
    https://www.linkedin.com/in/damaris-goebel/
</p>

<p>
    <strong>Codepen:</strong> <br/>
    https://codepen.io/damaris-hacker
</p>




      </div>
        <div className={styles.imageContainer}>
          <img className={styles.image} src="/me.jpg" alt="damarisGoebel"/>
        </div>
    </section>
    <p> Here is a list of technologies I work with and started to love: 
</p>
<TechList />
  </Layout>
)

export default AboutPage