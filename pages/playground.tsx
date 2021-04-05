import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout/Layout'
import Confetti from 'react-confetti'
import styles from '../styles/Playground.module.css'

const PlaygroundPage = () => {

  const [showConfetti, setShowConfetti] = React.useState(false)

  const buttonClick = () => {
    setShowConfetti(!showConfetti)
  }

  return (
  <Layout title="Playground - Blog">
    <h3>This will be my playground</h3>
    <p>I will post my learnings, my worth-to-write-down knowledge and a library for my brain to look up things. </p>

    <h4>But before we get started...press this button </h4>

    <button className={styles.button} onClick={buttonClick}>
      Magic happens soon
      </button>

      {showConfetti && <Confetti
      colors={['#FFE4e1',
      '#FFDAB9',
      '#98FB98',
      '#F0FFFF',
      '#b0E0E6',
      '#b0C4de',
      '#D8BFD8',
      '#FFb6C1'
      ]}
      />}

      <h3>Blog is coming</h3>
  </Layout>
)
}

export default PlaygroundPage