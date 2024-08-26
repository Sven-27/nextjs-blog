import React from 'react'
import Image from 'next/image'
import styles from './about.module.css'

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>We create digital ideas that are bigger, bolder, braver and better</h1>
        <p className={styles.desc}>
          We create digital ideas that are bigger, bolder, braver and better. We believe ingood ideas flexibility
          and precision. We're world's Our Special Team best consulting & finance solution provider. 
          Wide range of software development services.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1 className={styles.boxTitle}>10 K+</h1>
            <p className={styles.boxDesc}>
             Years of Experience
            </p>
          </div>
          <div className={styles.box}>
           <h1 className={styles.boxTitle}>10 K+</h1>
            <p className={styles.boxDesc}>
             Years of Experience
            </p>
          </div>
          <div className={styles.box}>
            <h1 className={styles.boxTitle}>10 K+</h1>
            <p className={styles.boxDesc}>
             Years of Experience
            </p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="/media/images/about.png"
          alt="About us"
          fill
        />
      </div>
    </div>
  )
}

export default AboutPage 