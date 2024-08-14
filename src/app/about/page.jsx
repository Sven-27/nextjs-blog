import React from 'react'
import Image from 'next/image'
import styles from './about.module.css'

const AboutPage = () => {
  return (
    <div>
      <div className={styles.imageContainer}>
        <Image
          src="/media/images/about.png"
          alt="About"
          fill
        />
      </div>
    </div>
  )
}

export default AboutPage