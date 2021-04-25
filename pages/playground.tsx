import React from 'react'
import Layout from '../components/Layout/Layout'
import Confetti from 'react-confetti'
import styles from '../styles/Playground.module.css'


export async function getServerSideProps() {
  const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@damaris.goebel')
  const data = await res.json()

  return {
    props: {data}
  }
}



const PlaygroundPage = ({data}) => {

  let posts = data.items

  const [showConfetti, setShowConfetti] = React.useState(false)

  const buttonClick = () => {
    setShowConfetti(!showConfetti)
  }

  function toText(node) {
   let newNode = node.replace(/(<([^>]+)>)/gi, "");
   return newNode
 }

  function shortenText(text,startingPoint ,maxLength) {
  return text.length > maxLength?
     text.slice(startingPoint, maxLength):
     text
 }

  return (
  <Layout title="Playground - Blog">
    <h3>This will be my playground</h3>
    <p>I will post my learnings, my worth-to-write-down and useful-to-remember knowledge and it will be my personal library to look up things. </p>

    <p>But before we get started...press this button </p>
    <button className={styles.button} onClick={buttonClick}>
      Magic will happen :) 
      </button>

      {showConfetti && <Confetti
      colors={['#007CF0',
      '#00DFD8',
      '#7928CA',
      '#FF0080',
      '#FF4D4D',
      '#F9CB28'     ]}
      />}

<div className={styles.blogHeader}>
    <h3>My Medium posts</h3>
  </div>
  <section className={styles.blog}>

      {posts.map((post, index) => {
        return (
          <a target="_blank" href={post.link}>
            <ul key={index} className={styles.post}>
              <li className={styles.postItem}>
            <div className={styles.content}>
            <h1>{post.title}</h1>
            <img src={post.thumbnail} className={styles.postImg}/>
            <p>{'...'+ shortenText(toText(post.content), 100, 600)+ '...'}</p>
            </div>
            <button className={styles.button}>Read more</button>
            </li>
            </ul>
          </a>

        )
      })
      }
      </section>

  </Layout>
)
}

export default PlaygroundPage